(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62b8b45c"],{"0bcd":function(e,t,a){},"416f":function(e,t,a){},6146:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Order"},[a("div",{staticClass:"search"},[a("div",{staticClass:"demo-input-suffix"},[a("div",[a("el-input",{staticStyle:{width:"30.625rem"},attrs:{"suffix-icon":"el-icon-search",autofocus:"",placeholder:"搜索名称/规格/代号"},on:{input:e.searchChange},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchChange(t)}},model:{value:e.search_name,callback:function(t){e.search_name="string"===typeof t?t.trim():t},expression:"search_name"}},[a("el-button",{attrs:{slot:"append",type:"primary"},on:{click:e.searchChange},slot:"append"},[e._v("搜索")])],1),a("el-button",{staticStyle:{width:"80px","margin-left":"10px"},attrs:{type:"info",plain:""},on:{click:e.clearSearchChange}},[e._v("全部")])],1)])]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableData.loading,expression:"tableData.loading "}],attrs:{data:e.tableData.tableList,"header-cell-style":e.tableheader,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)"}},[a("el-table-column",{attrs:{label:"订单编号","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.order_id||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.product_name||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"工序名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.procedure_name||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"代号"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.item||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"型号规格"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.specs||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"工序"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.procedure_detail_number||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"批次"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.batch||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"进度"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-progress",{attrs:{percentage:e.row.progressStatus,"text-inside":!1,"show-text":!1,status:"success"}})]}}])}),a("el-table-column",{attrs:{label:"生产/总数"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.task_number+"/"+t.row.number||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"生产计划",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input-number",{attrs:{"controls-position":"right",size:"small",min:0,max:t.row.number-t.row.task_number,disabled:t.row.task_number>=t.row.number},model:{value:t.row.num,callback:function(a){e.$set(t.row,"num","string"===typeof a?a.trim():a)},expression:"scope.row.num"}}),a("el-button",{staticStyle:{height:"32px","margin-left":"10px"},attrs:{type:"text",size:"mini",disabled:t.row.task_number>=t.row.number},on:{click:function(a){return e.orderOkClick(t.row)}}},[e._v("生产")])]}}])})],1),a("div",{staticClass:"block"},[e.tableData.total>15?a("el-pagination",{attrs:{"page-sizes":[15,30,50,100],"page-size":e.tableData.pageSize,layout:"sizes, prev, pager, next",total:e.tableData.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}):e._e()],1),a("Secondstep",{ref:"child",attrs:{SecondstepDialogVisible:e.SecondstepDialogVisible},on:{change:e.SecondstepClose}})],1)},o=[],s=a("cebc"),r=a("2f62"),l=a("92c3"),i={name:"Order",components:{Secondstep:l["a"]},computed:Object(s["a"])({},Object(r["c"])({url:function(e){return e.url}}),Object(r["b"])({token:"getToken"})),data:function(){return{name:"",batchs_:"",search_name:"",tableData:{loading:!0,tableList:[],currentPage:1,pageSize:15,total:0},SecondstepDialogVisible:{dialog:!1},showbtnbtn:!1,batch:!0,batchas:"",batchclass:"el-icon-sort",item:!0,itemas:"",itemclass:"el-icon-sort",specs:!0,specsas:"",specsclass:"el-icon-sort"}},created:function(){this.batchs_=this.$route.query.batch,this.getOrder()},methods:{getOrder:function(){var e=this;e.axios({method:"GET",url:"api/api/v1/supplier/list",data:"",params:{page:e.tableData.currentPage,size:e.tableData.pageSize,name:e.search_name,batch:e.batchs_},headers:{"content-type":"application/json",token:e.token}}).then(function(t){if(t&&t.data&&t.data.data&&200==t.data.code){var a=t.data.data.list;e.tableData.total=t.data.data.count.total,a.map(function(e){return e.num=0,e.progressStatus=parseInt(e.complete_number/e.number*100),e}),e.tableData.tableList=a,e.tableData.loading=!1}}).catch(function(t){console.log(t),e.tableData.loading=!1})},searchChange:function(){this.tableData.currentPage=1,this.search_name||(this.search_name=""),this.getOrder()},orderOkClick:function(e){var t=this;t.showbtnbtn=!0,1!=e.procedure_detail_number?(t.SecondstepDialogVisible.dialog=!0,t.$refs.child.getSecondstep(e)):t.msgboxDialog(e)},suppliertaskadd:function(e){var t=this;t.axios({method:"POST",url:t.url+"/api/v1/supplier/task-add",data:"",params:e,headers:{"content-type":"application/json",token:t.token}}).then(function(e){200==e.data.code&&(t.$message({showClose:!0,message:"操作成功",type:"success"}),t.showbtnbtn=!1,t.getOrder())}).catch(function(e){console.log(e),t.$message({type:"error",message:"前一个工序未完成或者完成数量不足",offset:300})})},msgboxDialog:function(e){var t=this,a=this.$createElement;e.num>0?t.$msgbox({title:"提示",message:a("p",null,[a("span",null,"配件名称："),a("span",{style:"color: teal"},e.product_name),a("span",null,"，数量："),a("span",{style:"color: teal"},e.num)]),showClose:!1,showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:function(e,a,n){"confirm"===e?(a.confirmButtonLoading=!0,a.confirmButtonText="添加中...",setTimeout(function(){n(),setTimeout(function(){a.confirmButtonLoading=!1},300)},1e3)):(t.showbtnbtn=!1,n())}}).then(function(a){console.log(e);var n={order_detail_id:e.id,product_id:e.product_id,procedure_id:e.procedure_id,procedure_detail_number:e.procedure_detail_number,number:e.num,type:1,product_type:e.product_type,batch:e.batch,order_id:e.order_id,product_name:e.product_name,parts:"",number_type:1};t.suppliertaskadd(n)}):t.$message({message:"未添加计划数量",offset:200})},handleSizeChange:function(e){this.tableData.pageSize=e,this.getOrder()},handleCurrentChange:function(e){this.tableData.currentPage=e,this.getOrder()},clearSearchChange:function(){this.search_name="",this.tableData.currentPage=1,this.getOrder()},downAll:function(){var e=sessionStorage.getItem("Supplierid");e?location.href=this.url+"/api/v1/supplier/export-order?supplier_id="+e+"&batch="+this.batchs_+"&name="+this.search_name:this.$message({message:"未知供应商，请检查供应商信息",offset:200})},SecondstepClose:function(e){this.SecondstepDialogVisible.dialog=e,this.showbtnbtn=!1},tableheader:function(e){e.row,e.column;var t=e.rowIndex;e.columnIndex;if(0===t)return"height:50px;background:#e5e5e5"}}},c=i,u=(a("b0ac"),a("2877")),d=Object(u["a"])(c,n,o,!1,null,"cb50cf00",null);t["default"]=d.exports},"92c3":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"Orderdialog",attrs:{visible:e.SecondstepDialogVisible.dialog,top:"10vh","close-on-click-modal":!1,"before-close":e.close,width:"700px"},on:{"update:visible":function(t){return e.$set(e.SecondstepDialogVisible,"dialog",t)}}},[a("div",{staticClass:"Singledialog"},[a("el-table",{ref:"SecondstepTableData",staticStyle:{width:"100%"},attrs:{data:e.SecondstepTableData.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.selectionChange}},[a("el-table-column",{attrs:{type:"selection",selectable:e.selectable,width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"零件名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.product_name))]}}])}),a("el-table-column",{attrs:{label:"零件编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.parts_number))]}}])}),a("el-table-column",{attrs:{label:"批次"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.batch))]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(0==t.row.is_user?"未使用":"已使用"))]}}])})],1),e.SecondstepTableData.total>0?a("div",{staticClass:"btn"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{layout:"prev, pager, next, jumper",total:e.SecondstepTableData.total},on:{"current-change":e.handleCurrentChange}})],1),a("el-button",{attrs:{disabled:e.ifBtn},on:{click:e.taskadd}},[e._v("确认选择")])],1):e._e()],1)])],1)},o=[],s=(a("ac6a"),a("cebc")),r=a("2f62"),l={name:"Secondstepdialog",computed:Object(s["a"])({},Object(r["c"])({url:function(e){return e.url}}),Object(r["b"])({token:"getToken"})),props:{SecondstepDialogVisible:""},data:function(){return{SecondstepTableData:{tableData:[],multipleSelection:[],currentPage:1,pageSize:10,total:10},obj:{},ifBtn:!1}},methods:{getSecondstep:function(e){var t=this;t.obj=e,t.axios({method:"POST",url:t.url+"/api/v1/supplier/next",data:"",params:{order_id:e.order_id,product_id:e.product_id,procedure_detail_number:e.procedure_detail_number,batch:e.batch},headers:{"content-type":"application/json",token:t.token}}).then(function(e){if(e&&e.data&&e.data.data&&200==e.data.code){var a=e.data.data.list;t.SecondstepTableData.tableData=a}}).catch(function(e){console.log(e)})},selectionChange:function(e){this.SecondstepTableData.multipleSelection=e},selectable:function(e,t){return 0===e.is_user},taskadd:function(){var e=this.SecondstepTableData.multipleSelection;if(e.length){this.ifBtn=!0;var t=[];e.forEach(function(e){t.push(e.parts_number)}),this.suppliertaskadd(this.obj,t)}else this.ifBtn=!1,this.$message({type:"error",message:"请选择工序零件",offset:300})},suppliertaskadd:function(e,t){var a=this,n={order_detail_id:e.id,product_id:e.product_id,procedure_id:e.procedure_id,procedure_detail_number:e.procedure_detail_number,number:t.length,type:1,product_type:e.product_type,batch:e.batch,order_id:e.order_id,product_name:e.product_name,number_type:2};a.ifBtn=!0,a.axios({method:"POST",url:a.url+"/api/v1/supplier/task-add",data:{parts:t},params:n,headers:{"content-type":"application/json",token:a.token}}).then(function(e){200==e.data.code&&(a.$message({showClose:!0,message:"操作成功",type:"success"}),a.ifBtn=!1,a.close())}).catch(function(e){console.log(e),a.ifBtn=!1,a.$message({type:"error",message:"前一个工序未完成或者完成数量不足",offset:300})})},handleCurrentChange:function(e){this.SecondstepTableData.currentPage=e,this.getSecondstep(this.obj)},toggleSelection:function(){this.$refs.SecondstepTableData.clearSelection()},close:function(){this.$emit("change",!1)}}},i=l,c=(a("b360"),a("2877")),u=Object(c["a"])(i,n,o,!1,null,"2f988b12",null);t["a"]=u.exports},b0ac:function(e,t,a){"use strict";var n=a("416f"),o=a.n(n);o.a},b360:function(e,t,a){"use strict";var n=a("0bcd"),o=a.n(n);o.a}}]);