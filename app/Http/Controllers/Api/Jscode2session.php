<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Jscode2session extends Controller
{
    //
	public function getJscode2session(Request $request) {
		$response = array("code" => 200, "msg" => "success", "data" => "");
		
		$code = $request->code;
		$appid = 'wx0ac5669cb2a4a6b8';
		$secret = '803bf67e6eed2786824e4db88772f87a';
		
		$url = 'https://api.weixin.qq.com/sns/jscode2session?grant_type=authorization_code&appid='.$appid.'&secret='.$secret.'&js_code='.$code;
		
		$jscode2session = file_get_contents($url);
		// $session_key = '';
		// $openid = '';
		$response['data'] = $jscode2session;
		return $response;
	}
}
