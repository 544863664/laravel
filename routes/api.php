<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::any('/bar', function () {
    return 'This is a request from any HTTP verb';
});

Route::get('/goodslist', 'App\Http\Controllers\Api\Apidemo@Goodslist');
Route::post('/good', 'App\Http\Controllers\Api\Apidemo@Good');

