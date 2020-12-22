<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Jscode2session extends Controller
{
    //
	public function getJscode2session(Request $request) {
		$response = array("code" => 200, "msg" => "success", "data" => "");
		
		$appid = 'wx0ac5669cb2a4a6b8';
		$secret = '803bf67e6eed2786824e4db88772f87a';
		
		$code = $request->code;
		# 获取header传来的token var_dump($request->header('token'));
		
		if ($code) {
			# 获取用户openid
			$jscode2sessionurl = 'https://api.weixin.qq.com/sns/jscode2session?grant_type=authorization_code&appid='.$appid.'&secret='.$secret.'&js_code='.$code;
			
			$jscode2session = file_get_contents($jscode2sessionurl);
			
			# 获取用户token
			$access_tokenurl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$appid.'&secret='.$secret;
			
			$access_token = file_get_contents($access_tokenurl);
			
			$response['data'] = json_decode($access_token, true);
			
			$openid = json_decode($jscode2session, true)['openid'];
			$session_key = json_decode($jscode2session, true)['session_key'];
			
			$setOpenid = DB::select( 'select * from wechatuser where openid = ?', [$openid] );
			
			if (!$setOpenid) {
				# 新用户创建数据
				$time = date('Y-m-d Y:i:s', time() + 28800);
				$openidInsert = DB::insert(
					'insert into wechatuser (id, openid, session_key, nickName, gender, language, country, city, province, avatarUrl, status, time) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
					[NULL, $openid, $session_key, '', '', '', '', '', '', '', '1', $time]
				);
				return $response;
			} 
			// else {
			// 	# 老用户读取、修改数据
			// 	$id_ = '';
			// 	foreach($setOpenid as $row) { $id_ = $row->id; }
				
			// 	$openidUpdate = DB::update(
			// 		'update wechatuser set nickName=?, gender=?, language=?, country=?, city=?, province=?, avatarUrl=?, status=? where id= ?',
			// 		['fdfaeasdfa', '1', '', '', '', '', '', '', $id_]
			// 	);
			// 	if ($openidUpdate > 0) {
			// 		return $response;
			// 	}
			// }
			
			
		} else {
			$response['code'] = 0;
			$response['msg'] = 'The parameter code cannot be null.';
			return $response;
		}
		
	}
}
