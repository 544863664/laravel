(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1972d12e"],{"0bcd":function(e,t,a){},"38c2":function(e,t,a){},"5c51":function(e,t,a){"use strict";var n=a("38c2"),s=a.n(n);s.a},"800a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Orderpage"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableData.loading,expression:"tableData.loading "}],attrs:{data:e.tableData.tableList,"header-cell-style":e.tableheader,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)"}},[a("el-table-column",{attrs:{label:"批次"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.batch||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.name||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"进度"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-progress",{attrs:{percentage:e.row.progressStatus,"text-inside":!1,"show-text":!1,status:"success"}})]}}])}),a("el-table-column",{attrs:{label:"生产/总数"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.task_number+"/"+t.row.number||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{height:"32px"},attrs:{type:"text",size:"mini"},on:{click:function(a){return e.orderPageDetil(t.row)}}},[e._v("详情")]),a("el-button",{staticStyle:{height:"32px"},attrs:{type:"text",size:"mini"},on:{click:function(a){return e.downAll(t.row)}}},[e._v("导出")]),a("el-button",{staticStyle:{height:"32px"},attrs:{type:"text",size:"mini"},on:{click:function(a){return e.downAllparts(t.row)}}},[e._v("条码")])]}}])})],1),a("div",{staticClass:"block"},[e.tableData.total>15?a("el-pagination",{attrs:{"page-sizes":[15,30,50,100],"page-size":e.tableData.pageSize,layout:"sizes, prev, pager, next",total:e.tableData.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}):e._e()],1)],1)},s=[],o=(a("7f7f"),a("cebc")),l=a("2f62"),r=a("92c3"),i={name:"Orderpage",components:{Secondstep:r["a"]},computed:Object(o["a"])({},Object(l["c"])({url:function(e){return e.url}}),Object(l["b"])({token:"getToken"})),data:function(){return{search_name:"",tableData:{loading:!0,tableList:[],currentPage:1,pageSize:15,total:0},showbtnbtn:!1,batch:!0,batchas:"",batchclass:"el-icon-sort",item:!0,itemas:"",itemclass:"el-icon-sort",specs:!0,specsas:"",specsclass:"el-icon-sort"}},created:function(){this.getOrder()},methods:{getOrder:function(){var e=this;e.axios({method:"GET",url:"api/api/v1/supplier/batch-list",data:"",params:{page:e.tableData.currentPage,size:e.tableData.pageSize},headers:{"content-type":"application/json",token:e.token}}).then(function(t){if(t&&t.data&&t.data.data&&200==t.data.code){var a=t.data.data.list;e.tableData.total=t.data.data.count.total,a.map(function(e){return e.progressStatus=parseInt(e.task_number/e.number*100),e}),e.tableData.tableList=a,e.tableData.loading=!1}}).catch(function(t){console.log(t),e.$message({message:e.errmessage(t.response.data)}),e.tableData.loading=!1})},searchChange:function(){this.getOrder()},suppliertaskadd:function(e){var t=this;t.axios({method:"POST",url:t.url+"/api/v1/supplier/task-add",data:"",params:e,headers:{"content-type":"application/json",token:t.token}}).then(function(e){200==e.data.code&&(t.$message({showClose:!0,message:"操作成功",type:"success"}),t.showbtnbtn=!1,t.getOrder())}).catch(function(e){console.log(e),t.$message({type:"error",message:"前一个工序未完成或者完成数量不足",offset:300})})},handleSizeChange:function(e){this.tableData.pageSize=e,this.getOrder()},handleCurrentChange:function(e){this.tableData.currentPage=e,this.getOrder()},orderPageDetil:function(e){console.log(e),e.batch&&e.name&&this.$router.push({path:"/order",query:{batch:e.batch,name:e.name}})},downAll:function(e){var t=sessionStorage.getItem("Supplierid");t?location.href=this.url+"/api/v1/supplier/export-order?supplier_id="+t+"&batch="+e.batch:this.$message({message:"未知供应商，请检查供应商信息",offset:200})},downAllparts:function(e){var t=sessionStorage.getItem("Supplierid");t?location.href=this.url+"/api/v1/supplier/code-export?supplier_id="+t+"&branch_id="+e.batch:this.$message({message:"未知供应商，请检查供应商信息",offset:200})},clearSearchChange:function(){this.search_name="",this.batch=!0,this.batchas="",this.batchclass="el-icon-sort",this.item=!0,this.itemas="",this.itemclass="el-icon-sort",this.specs=!0,this.specsas="",this.specsclass="el-icon-sort",this.getOrder()},tableheader:function(e){e.row,e.column;var t=e.rowIndex;e.columnIndex;if(0===t)return"height:50px;background:#e5e5e5"}}},c=i,u=(a("5c51"),a("2877")),d=Object(u["a"])(c,n,s,!1,null,"63f67879",null);t["default"]=d.exports},"92c3":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"Orderdialog",attrs:{visible:e.SecondstepDialogVisible.dialog,top:"10vh","close-on-click-modal":!1,"before-close":e.close,width:"700px"},on:{"update:visible":function(t){return e.$set(e.SecondstepDialogVisible,"dialog",t)}}},[a("div",{staticClass:"Singledialog"},[a("el-table",{ref:"SecondstepTableData",staticStyle:{width:"100%"},attrs:{data:e.SecondstepTableData.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.selectionChange}},[a("el-table-column",{attrs:{type:"selection",selectable:e.selectable,width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"零件名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.product_name))]}}])}),a("el-table-column",{attrs:{label:"零件编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.parts_number))]}}])}),a("el-table-column",{attrs:{label:"批次"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.batch))]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(0==t.row.is_user?"未使用":"已使用"))]}}])})],1),e.SecondstepTableData.total>0?a("div",{staticClass:"btn"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{layout:"prev, pager, next, jumper",total:e.SecondstepTableData.total},on:{"current-change":e.handleCurrentChange}})],1),a("el-button",{attrs:{disabled:e.ifBtn},on:{click:e.taskadd}},[e._v("确认选择")])],1):e._e()],1)])],1)},s=[],o=(a("ac6a"),a("cebc")),l=a("2f62"),r={name:"Secondstepdialog",computed:Object(o["a"])({},Object(l["c"])({url:function(e){return e.url}}),Object(l["b"])({token:"getToken"})),props:{SecondstepDialogVisible:""},data:function(){return{SecondstepTableData:{tableData:[],multipleSelection:[],currentPage:1,pageSize:10,total:10},obj:{},ifBtn:!1}},methods:{getSecondstep:function(e){var t=this;t.obj=e,t.axios({method:"POST",url:t.url+"/api/v1/supplier/next",data:"",params:{order_id:e.order_id,product_id:e.product_id,procedure_detail_number:e.procedure_detail_number,batch:e.batch},headers:{"content-type":"application/json",token:t.token}}).then(function(e){if(e&&e.data&&e.data.data&&200==e.data.code){var a=e.data.data.list;t.SecondstepTableData.tableData=a}}).catch(function(e){console.log(e)})},selectionChange:function(e){this.SecondstepTableData.multipleSelection=e},selectable:function(e,t){return 0===e.is_user},taskadd:function(){var e=this.SecondstepTableData.multipleSelection;if(e.length){this.ifBtn=!0;var t=[];e.forEach(function(e){t.push(e.parts_number)}),this.suppliertaskadd(this.obj,t)}else this.ifBtn=!1,this.$message({type:"error",message:"请选择工序零件",offset:300})},suppliertaskadd:function(e,t){var a=this,n={order_detail_id:e.id,product_id:e.product_id,procedure_id:e.procedure_id,procedure_detail_number:e.procedure_detail_number,number:t.length,type:1,product_type:e.product_type,batch:e.batch,order_id:e.order_id,product_name:e.product_name,number_type:2};a.ifBtn=!0,a.axios({method:"POST",url:a.url+"/api/v1/supplier/task-add",data:{parts:t},params:n,headers:{"content-type":"application/json",token:a.token}}).then(function(e){200==e.data.code&&(a.$message({showClose:!0,message:"操作成功",type:"success"}),a.ifBtn=!1,a.close())}).catch(function(e){console.log(e),a.ifBtn=!1,a.$message({type:"error",message:"前一个工序未完成或者完成数量不足",offset:300})})},handleCurrentChange:function(e){this.SecondstepTableData.currentPage=e,this.getSecondstep(this.obj)},toggleSelection:function(){this.$refs.SecondstepTableData.clearSelection()},close:function(){this.$emit("change",!1)}}},i=r,c=(a("b360"),a("2877")),u=Object(c["a"])(i,n,s,!1,null,"2f988b12",null);t["a"]=u.exports},b360:function(e,t,a){"use strict";var n=a("0bcd"),s=a.n(n);s.a}}]);