<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Apidemo extends Controller
{
    //
    /*
    查询表
    $ressql = DB::select("select * from goods");
    
    查询语句
    DB::select('select * from users where active = ?', [1]);
    除了使用 ? 占位符来代表参数绑定外，还可以使用命名绑定来执行查询
    DB::select('select * from users where id = :id', ['id' => 1]);
    
    更新语句
    更新使用的是DB类的静态方法update()，第一个参数是sql语句，第二个参数是一个数组，数组里的元素分别对应sql语句里的问号
    DB::update('update goods set name = ?, email =?, phone = ?, type = ? where id= ? ', [$request->name, $request->email, $request->phone, $request->type, $request->id]);
    
    插入语句
    使用 DB 门面的 insert 方法执行插入语句。和 select 一样，该方法将原生 SQL 语句作为第一个参数，将参数绑定作为第二个参数
    DB::insert('insert into users (id, name) values (?, ?)', [1, '学院君']);
    
    删除语句
    delete 方法用于删除数据库中已存在的记录，和 update 一样，该语句返回被删除的行数
    DB::delete('delete from goods where id = ?', [10]);
    */
    public function Goodslist(Request $request) {
        // $method = $request->method();  // GET/POST
        $response = array("code" => 200, "msg" => "success", "data" => "");
        $data = array();
        
        $name = $request->name ? $request->name : "";
        
        // 查询全部表
        $ressql = DB::select("select * from goods");
        
        // 指定查询
        if ($name) $ressql = DB::select( 'select * from goods where name = ?', [$name] );
        
        foreach($ressql as $row) {
            array_push($data, array(
                "id" => $row->id,
                "name" => $row->name,
                "mess" => $row->mess,
                "passPrice" => $row->passPrice,
                "nowPrice" => $row->nowPrice,
                "type" => $row->type,
                "intor" => $row->intor,
                "gift" => $row->gift,
                "labels" => $row->labels,
                "evaluate" => $row->evaluate,
            ));
        }
        $response["data"] = $data;
        return response($response);
    }
    public function Good(Request $request) {
        $response = array("code" => 0, "msg" => "success");
        
        if ($request->name || $request->id) {
            $id = $request->id ? $request->id : "";
            $name = $request->name ? $request->name : "";
            $mess = $request->mess ? $request->mess : "";
            $passPrice = $request->passPrice ? $request->passPrice : "";
            $nowPrice = $request->nowPrice ? $request->nowPrice : "";
            $type = $request->type ? $request->type : "";
            $intor = $request->intor ? $request->intor : "";
            $gift = $request->gift ? $request->gift : "";
            $labels = $request->labels ? $request->labels : "";
            $evaluate = $request->evaluate ? $request->evaluate : "";
            $img = $request->img ? $request->img : "";
            $capacity = $request->capacity ? $request->capacity : "";
            $color = $request->color ? $request->color : "";
            $littleImg = $request->littleImg ? $request->littleImg : "";
            $colorImg = $request->colorImg ? $request->colorImg : "";
            
            // 更新
            if ($id && $passPrice && $nowPrice) {
                $affected = DB::update(
                    'update goods set name = ?, mess =?, passPrice = ?, nowPrice = ?, type = ?, intor =?, gift = ?, labels = ?, evaluate = ? where id= ? ',
                    [$name, $mess, $passPrice, $nowPrice, $type, $intor, $gift, $labels, $evaluate, $id]
                );
            } else {
                $response["msg"] = "缺少参数";
                return response($response);
            }
            
            // 插入
            /* if ($name && $passPrice && $nowPrice) {
                $affected = DB::insert(
                    'insert into goods (id, name, mess, passPrice, nowPrice, type, intor, gift, labels, evaluate, img,capacity,color,littleImg,colorImg) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    [null, $name, $mess, $passPrice, $nowPrice, $type, $intor, $gift, $labels, $evaluate, $img, $capacity, $color, $littleImg, $colorImg]
                );
            } else {
                $response["msg"] = "缺少参数";
                return response($response);
            } */
            
            
            // 删除
            /* $affected = DB::delete('delete from goods where id = ?', [$id]); */
            
            // 更新语句影响的行数
            if ($affected > 0) {
                $response["code"] = 200;
                $response["msg"] = "success";
                return response($response);
            } else {
                $response["msg"] = "未更新";
                return response($response);
            }
        } else {
            $response["msg"] = "必填项名称不能为空";
            return response($response);
        }
    }
}
