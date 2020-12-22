<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Jscode2session extends Controller
{
    //
	public function getJscode2session(Request $request) {
		$response = array("code" => 200, "msg" => "success", "data" => "");
		
		$appid = 'wx0ac5669cb2a4a6b8';
		$secret = '803bf67e6eed2786824e4db88772f87a';
		
		$code = $request->code;
		
		if ($code) {
			// $jscode2sessionurl = 'https://api.weixin.qq.com/sns/jscode2session?grant_type=authorization_code&appid='.$appid.'&secret='.$secret.'&js_code='.$code;
			
			// $jscode2session = file_get_contents($jscode2sessionurl);
			
			// $response['data'] = json_decode($jscode2session, true);
			
			$access_tokenurl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$appid.'&secret='.$secret;
			
			$access_token = file_get_contents($access_tokenurl);
			
			$response['data'] = json_decode($access_token, true);
			// var_dump($request->header('token'));
			return $response;
		}
		$response['code'] = 0;
		$response['msg'] = 'The parameter code cannot be null.';
		return $response;
	}
}
