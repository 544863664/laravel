(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8aaf7200"],{"08dd":function(t,e,a){},"1f42":function(t,e,a){"use strict";var i=a("08dd"),r=a.n(i);r.a},7786:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Supplierdetail"},[a("div",{staticClass:"box"},[a("div",{staticClass:"title"},[a("el-divider",[t._v("供应商")])],1),a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"110px"}},[a("el-form-item",{attrs:{label:"名称："}},[a("div",[t._v(t._s(t.form.supplier_name))])]),a("el-form-item",{attrs:{label:"负责人："}},[a("div",[t._v(t._s(t.form.supplier_person))])]),a("el-form-item",{attrs:{label:"电话："}},[a("div",[t._v(t._s(t.form.supplier_telphone))])]),a("el-form-item",{attrs:{label:"地址："}},[a("div",[t._v(t._s(t.form.supplier_address))])]),a("el-form-item",{attrs:{label:"描述："}},[a("div",[t._v(t._s(t.form.describe))])])],1)],1)])},r=[],l=a("cebc"),o=a("2f62"),s={name:"Supplierdetail",computed:Object(l["a"])({},Object(o["c"])({url:function(t){return t.url}}),Object(o["b"])({token:"getToken"})),data:function(){return{form:{}}},created:function(){this.getSupplierdetail()},methods:{getSupplierdetail:function(){var t=this;t.axios({method:"GET",url:"/api/api/v1/supplier/detail",headers:{"content-type":"application/json",token:t.token}}).then(function(e){e&&e.data&&e.data.data&&200==e.data.code&&(t.form=e.data.data,sessionStorage.setItem("Supplierid",e.data.data.id))}).catch(function(t){console.log(t)})}}},n=s,d=(a("1f42"),a("2877")),c=Object(d["a"])(n,i,r,!1,null,"6c71b334",null);e["default"]=c.exports}}]);