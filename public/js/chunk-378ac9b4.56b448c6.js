(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-378ac9b4"],{"3fbc":function(t,e,a){},4127:function(t,e,a){"use strict";var n=a("d233"),r=a("b313"),o={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(t){return i.call(t)},skipNulls:!1,strictNullHandling:!1},c=function t(e,a,r,o,i,c,s,u,d,p,f,b){var h=e;if("function"===typeof s)h=s(a,h);else if(h instanceof Date)h=p(h);else if(null===h){if(o)return c&&!b?c(a,l.encoder):a;h=""}if("string"===typeof h||"number"===typeof h||"boolean"===typeof h||n.isBuffer(h)){if(c){var m=b?a:c(a,l.encoder);return[f(m)+"="+f(c(h,l.encoder))]}return[f(a)+"="+f(String(h))]}var g,y=[];if("undefined"===typeof h)return y;if(Array.isArray(s))g=s;else{var v=Object.keys(h);g=u?v.sort(u):v}for(var _=0;_<g.length;++_){var w=g[_];i&&null===h[w]||(y=Array.isArray(h)?y.concat(t(h[w],r(a,w),r,o,i,c,s,u,d,p,f,b)):y.concat(t(h[w],a+(d?"."+w:"["+w+"]"),r,o,i,c,s,u,d,p,f,b)))}return y};t.exports=function(t,e){var a=t,i=e?n.assign({},e):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!==typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s="undefined"===typeof i.delimiter?l.delimiter:i.delimiter,u="boolean"===typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,d="boolean"===typeof i.skipNulls?i.skipNulls:l.skipNulls,p="boolean"===typeof i.encode?i.encode:l.encode,f="function"===typeof i.encoder?i.encoder:l.encoder,b="function"===typeof i.sort?i.sort:null,h="undefined"!==typeof i.allowDots&&i.allowDots,m="function"===typeof i.serializeDate?i.serializeDate:l.serializeDate,g="boolean"===typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if("undefined"===typeof i.format)i.format=r["default"];else if(!Object.prototype.hasOwnProperty.call(r.formatters,i.format))throw new TypeError("Unknown format option provided.");var y,v,_=r.formatters[i.format];"function"===typeof i.filter?(v=i.filter,a=v("",a)):Array.isArray(i.filter)&&(v=i.filter,y=v);var w,D=[];if("object"!==typeof a||null===a)return"";w=i.arrayFormat in o?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var k=o[w];y||(y=Object.keys(a)),b&&y.sort(b);for(var x=0;x<y.length;++x){var j=y[x];d&&null===a[j]||(D=D.concat(c(a[j],j,k,u,d,p?f:null,v,b,h,m,_,g)))}var O=D.join(s),S=!0===i.addQueryPrefix?"?":"";return O.length>0?S+O:""}},4328:function(t,e,a){"use strict";var n=a("4127"),r=a("9e6a"),o=a("b313");t.exports={formats:o,parse:r,stringify:n}},"83d8":function(t,e,a){"use strict";var n=a("c129"),r=a.n(n);r.a},"9a1d":function(t,e,a){"use strict";var n=a("3fbc"),r=a.n(n);r.a},"9e6a":function(t,e,a){"use strict";var n=a("d233"),r=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(t,e){for(var a={},n=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,i=e.parameterLimit===1/0?void 0:e.parameterLimit,l=n.split(e.delimiter,i),c=0;c<l.length;++c){var s,u,d=l[c],p=d.indexOf("]="),f=-1===p?d.indexOf("="):p+1;-1===f?(s=e.decoder(d,o.decoder),u=e.strictNullHandling?null:""):(s=e.decoder(d.slice(0,f),o.decoder),u=e.decoder(d.slice(f+1),o.decoder)),r.call(a,s)?a[s]=[].concat(a[s]).concat(u):a[s]=u}return a},l=function(t,e,a){for(var n=e,r=t.length-1;r>=0;--r){var o,i=t[r];if("[]"===i)o=[],o=o.concat(n);else{o=a.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,c=parseInt(l,10);!isNaN(c)&&i!==l&&String(c)===l&&c>=0&&a.parseArrays&&c<=a.arrayLimit?(o=[],o[c]=n):o[l]=n}n=o}return n},c=function(t,e,a){if(t){var n=a.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,c=o.exec(n),s=c?n.slice(0,c.index):n,u=[];if(s){if(!a.plainObjects&&r.call(Object.prototype,s)&&!a.allowPrototypes)return;u.push(s)}var d=0;while(null!==(c=i.exec(n))&&d<a.depth){if(d+=1,!a.plainObjects&&r.call(Object.prototype,c[1].slice(1,-1))&&!a.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+n.slice(c.index)+"]"),l(u,e,a)}};t.exports=function(t,e){var a=e?n.assign({},e):{};if(null!==a.decoder&&void 0!==a.decoder&&"function"!==typeof a.decoder)throw new TypeError("Decoder has to be a function.");if(a.ignoreQueryPrefix=!0===a.ignoreQueryPrefix,a.delimiter="string"===typeof a.delimiter||n.isRegExp(a.delimiter)?a.delimiter:o.delimiter,a.depth="number"===typeof a.depth?a.depth:o.depth,a.arrayLimit="number"===typeof a.arrayLimit?a.arrayLimit:o.arrayLimit,a.parseArrays=!1!==a.parseArrays,a.decoder="function"===typeof a.decoder?a.decoder:o.decoder,a.allowDots="boolean"===typeof a.allowDots?a.allowDots:o.allowDots,a.plainObjects="boolean"===typeof a.plainObjects?a.plainObjects:o.plainObjects,a.allowPrototypes="boolean"===typeof a.allowPrototypes?a.allowPrototypes:o.allowPrototypes,a.parameterLimit="number"===typeof a.parameterLimit?a.parameterLimit:o.parameterLimit,a.strictNullHandling="boolean"===typeof a.strictNullHandling?a.strictNullHandling:o.strictNullHandling,""===t||null===t||"undefined"===typeof t)return a.plainObjects?Object.create(null):{};for(var r="string"===typeof t?i(t,a):t,l=a.plainObjects?Object.create(null):{},s=Object.keys(r),u=0;u<s.length;++u){var d=s[u],p=c(d,r[d],a);l=n.merge(l,p,a)}return n.compact(l)}},ada6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Submit",attrs:{id:"printTest"}},[a("div",{staticClass:"ListChild1"},[a("div",{staticClass:"input_flex"},[a("div",{staticClass:"search"},[a("div",{staticClass:"demo-input-suffix"},[a("el-input",{staticStyle:{width:"30.625rem"},attrs:{"suffix-icon":"el-icon-search",autofocus:"",placeholder:"搜索"},on:{input:t.searchChange},model:{value:t.search_name,callback:function(e){t.search_name="string"===typeof e?e.trim():e},expression:"search_name"}},[a("el-button",{attrs:{slot:"append",type:"success"},on:{click:t.searchChange},slot:"append"},[t._v("搜索")])],1),a("el-button",{attrs:{type:"info",plain:""},on:{click:t.all_out}},[t._v("全部")])],1)])]),a("el-table",{staticStyle:{width:"100%","margin-top":"1rem","margin-bottom":"1rem"},attrs:{data:t.tableData,"highlight-current-row":"","cell-click":t.tableClick,"row-class-name":t.tableRowClassName,"header-cell-style":t.tableheader}},[a("el-table-column",{attrs:{label:"序号",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{},[t._v(t._s(e.row.id))])]}}])}),a("el-table-column",{attrs:{label:"图片",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"right",title:"",trigger:"click"}},[a("img",{staticStyle:{height:"400px"},attrs:{src:t.row.img}}),a("img",{staticStyle:{height:"50px",width:"50px","min-height":"50px","min-width":"50px",position:"relative",top:"3.3px"},attrs:{slot:"reference",src:t.row.img},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{},[t._v(t._s(e.row.name_))])]}}])}),a("el-table-column",{attrs:{label:"代号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{},[t._v(t._s(e.row.items))])]}}])}),a("el-table-column",{attrs:{label:"型号规格"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{},[t._v(t._s(e.row.specs_))])]}}])}),a("el-table-column",{attrs:{label:"材料"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{},[t._v(t._s(e.row.material_))])]}}])}),a("el-table-column",{attrs:{label:"类别码"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{},[t._v(t._s(e.row.category_))])]}}])}),a("el-table-column",{attrs:{label:"类型",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.type?a("el-link",{attrs:{underline:!1}},[t._v("零件")]):t._e(),2==e.row.type?a("el-link",{attrs:{underline:!1}},[t._v("成品")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"总数",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.stock>0?a("span",{},[t._v(t._s(e.row.stock))]):t._e()]}}])}),a("el-table-column",{attrs:{label:"装盘数量",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.type&&e.row.tray_number>0?a("span",[t._v(t._s(e.row.tray_number))]):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作",width:"165"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-dropdown",{attrs:{trigger:"click",placement:"bottom-start"},on:{command:t.handleCommand}},[a("el-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"text"},on:{click:function(a){t.PrintDV.obj=e.row}}},[t._v("打印")]),a("el-dropdown-menu",{staticStyle:{"margin-top":"0"},attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.printlist,function(e){return a("el-dropdown-item",{key:e.id,attrs:{icon:"el-icon-printer",command:e.sn}},[t._v(t._s(e.name))])}),1)],1),"2"==e.row.product_type?a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.invendetail(e.row)}}},[t._v("详情")]):t._e(),"2"==e.row.product_type?a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.exportcode(e.row)}}},[t._v("导出")]):t._e()]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[15,30,50,100],"page-size":t.pagesize,layout:"sizes, prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("Inven",{ref:"child",attrs:{invendetailDV:t.invendetailDV},on:{change:t.invenClose}})],1)])},r=[],o=(a("7f7f"),a("cebc")),i=a("2f62"),l=a("4328"),c=a.n(l),s=a("d35d"),u={name:"Submit",components:{Inven:s["a"]},data:function(){return{barcode_val:"",search_name:"",type:1,search_material:"",search_item:"",search_specs:"",inputb:"",inputc:"",breakage:"",pagesize:15,currpage:1,total:0,go_numArr:[],tableData:[],img:"",invendetailDV:{dialog:!1,obj:""},printlist:[],PrintDV:{dialog:!1,obj:""}}},computed:Object(o["a"])({},Object(i["b"])({url:"geturl",token:"getToken"})),created:function(){this.axiosData(),this.getPrinterlist()},methods:{axiosData:function(){var t=this;t.axios.get(t.url+"/api/v1/pattern/list",{headers:{"content-type":"application/x-www-form-urlencoded",token:t.token},params:{page:t.currpage,size:t.pagesize,type:t.type,name:t.search_name}}).then(function(e){t.total=e.data.data.count.total,t.tableData=e.data.data.list;for(var a=0;a<t.tableData.length;a++){t.go_numArr.push({go_num:0});var n=t.tableData[a].image;t.tableData[a].img=""==n||void 0==n?"http://zrui.e7vr.com/image/arm/default.gif":t.tableData[a].image;var r=t.tableData[a].item;t.tableData[a].items=""==r||void 0==r||null==r?"-- --":t.tableData[a].item;var o=t.tableData[a].note;t.tableData[a].note_=""==o||void 0==o||null==o?"-- --":t.tableData[a].note;var i=t.tableData[a].specs;t.tableData[a].specs_=null==i||void 0==i||""==i?"-- --":t.tableData[a].specs;var l=t.tableData[a].material;t.tableData[a].material_=null==l||void 0==l||""==l?"-- --":t.tableData[a].material;var c=t.tableData[a].category;t.tableData[a].category_=null==c||void 0==c||""==c?"-- --":t.tableData[a].category;var s=t.tableData[a].name;t.tableData[a].name_=null==s||void 0==s||""==s?"-- --":t.tableData[a].name}}).catch(function(t){console.log(t)})},getPrinterlist:function(){var t=this;t.axios({method:"GET",url:t.url+"/api/v1/printer/list",headers:{"content-type":"application/json",token:t.token}}).then(function(e){if(e&&e.data&&e.data.data&&200==e.data.code){var a=e.data.data;t.printlist=a}}).catch(function(t){console.log(t)})},searchChange:function(){this.currpage=1,this.search_name||(this.search_name=""),this.axiosData()},invendetail:function(t){this.invendetailDV.obj=t,this.invendetailDV.dialog=!0,this.$refs.child.getSingle()},invenClose:function(t){this.invendetailDV.dialog=t},exportcode:function(t){location.href=this.url+"/api/v1/pattern/product-detail-export?product_id="+t.product_id+"&type="+t.type},parstPrint:function(t){this.PrintDV.dialog=!0,this.PrintDV.obj=t,this.$refs.Printchild.getPrinterlist()},handleCommand:function(t){var e=this,a={product_id:e.PrintDV.obj.product_id,type:e.PrintDV.obj.type,sn:t,product_type:e.PrintDV.obj.product_type};e.axios({method:"POST",url:e.url+"/api/v1/printer/product-detail",params:a,headers:{"content-type":"application/json",token:e.token}}).then(function(t){t&&200==t.status&&"ok"==t.data.msg&&e.$message({message:"正在打印中...",type:"success"})}).catch(function(t){console.log(t)})},PrintClose:function(t){this.PrintDV.dialog=t},all_out:function(){this.search_name="",this.currpage=1,this.axiosData()},handleEdit:function(){},handleChange:function(t){},tableClick:function(t,e,a){},batch:function(t,e){var a=this,n=a.go_numArr[t].go_num,r=e.id,o=e.name;if(0!=n){a.openFullScreen2();var i=c.a.stringify({number:n,product_id:r,product_name:o,type:1,source:1});a.axios.post(a.url+"/api/v1/loss/save",i,{headers:{"content-type":"application/x-www-form-urlencoded",token:a.token}}).then(function(e){a.axiosData(),a.go_numArr[t].go_num=0}).catch(function(t){console.log(t)})}else this.$alert("请输入入库数量","提示",{confirmButtonText:"确定"})},scan_enter:function(){var t=this;t.dialogFormVisible=!0},handleSizeChange:function(t){this.pagesize=t,this.axiosData()},handleCurrentChange:function(t){this.currpage=t,this.axiosData()},tableheader:function(t){t.row,t.column;var e=t.rowIndex;t.columnIndex;if(0===e)return"height:40px;background:#e5e5e5"},tableRowClassName:function(t){t.row;var e=t.rowIndex;return 1===e?"warning-row":3===e?"success-row":""},openFullScreen2:function(){var t=this.$loading({lock:!0,text:"加载中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(function(){t.close()},2e3)},barcode_Data:function(){var t=this;t.axios.get(t.url+"/api/v1/assemble/obtain",{params:{type:2,parts_number:t.barcode_val},headers:{"content-type":"application/x-www-form-urlencoded",token:t.token}}).then(function(e){t.barcode_val=""}).catch(function(t){console.log(t)})}}},d=u,p=(a("9a1d"),a("2877")),f=Object(p["a"])(d,n,r,!1,null,"551054e5",null);e["default"]=f.exports},b313:function(t,e,a){"use strict";var n=String.prototype.replace,r=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,r,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},c129:function(t,e,a){},d233:function(t,e,a){"use strict";var n=Object.prototype.hasOwnProperty,r=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),o=function(t){var e;while(t.length){var a=t.pop();if(e=a.obj[a.prop],Array.isArray(e)){for(var n=[],r=0;r<e.length;++r)"undefined"!==typeof e[r]&&n.push(e[r]);a.obj[a.prop]=n}}return e},i=function(t,e){for(var a=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)"undefined"!==typeof t[n]&&(a[n]=t[n]);return a},l=function t(e,a,r){if(!a)return e;if("object"!==typeof a){if(Array.isArray(e))e.push(a);else{if("object"!==typeof e)return[e,a];(r.plainObjects||r.allowPrototypes||!n.call(Object.prototype,a))&&(e[a]=!0)}return e}if("object"!==typeof e)return[e].concat(a);var o=e;return Array.isArray(e)&&!Array.isArray(a)&&(o=i(e,r)),Array.isArray(e)&&Array.isArray(a)?(a.forEach(function(a,o){n.call(e,o)?e[o]&&"object"===typeof e[o]?e[o]=t(e[o],a,r):e.push(a):e[o]=a}),e):Object.keys(a).reduce(function(e,o){var i=a[o];return n.call(e,o)?e[o]=t(e[o],i,r):e[o]=i,e},o)},c=function(t,e){return Object.keys(e).reduce(function(t,a){return t[a]=e[a],t},t)},s=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},u=function(t){if(0===t.length)return t;for(var e="string"===typeof t?t:String(t),a="",n=0;n<e.length;++n){var o=e.charCodeAt(n);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?a+=e.charAt(n):o<128?a+=r[o]:o<2048?a+=r[192|o>>6]+r[128|63&o]:o<55296||o>=57344?a+=r[224|o>>12]+r[128|o>>6&63]+r[128|63&o]:(n+=1,o=65536+((1023&o)<<10|1023&e.charCodeAt(n)),a+=r[240|o>>18]+r[128|o>>12&63]+r[128|o>>6&63]+r[128|63&o])}return a},d=function(t){for(var e=[{obj:{o:t},prop:"o"}],a=[],n=0;n<e.length;++n)for(var r=e[n],i=r.obj[r.prop],l=Object.keys(i),c=0;c<l.length;++c){var s=l[c],u=i[s];"object"===typeof u&&null!==u&&-1===a.indexOf(u)&&(e.push({obj:i,prop:s}),a.push(u))}return o(e)},p=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},f=function(t){return null!==t&&"undefined"!==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))};t.exports={arrayToObject:i,assign:c,compact:d,decode:s,encode:u,isBuffer:f,isRegExp:p,merge:l}},d35d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{staticClass:"invendetail_dialog",attrs:{visible:t.invendetailDV.dialog,top:"10vh","close-on-click-modal":!1,width:"1000px"},on:{"update:visible":function(e){return t.$set(t.invendetailDV,"dialog",e)},close:t.close}},[a("div",{staticClass:"invendetail"},[a("el-table",{ref:"invendetailTableData",attrs:{data:t.invendetailTableData.tableData,height:"633"}},[a("el-table-column",{attrs:{label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{},[t._v(t._s(e.row.name||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"代号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{},[t._v(t._s(e.row.item||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"型号规格"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{},[t._v(t._s(e.row.specs||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"材料"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{},[t._v(t._s(e.row.material||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"条码",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{},[t._v(t._s(e.row.parts_number||"-- --"))])]}}])}),a("el-table-column",{attrs:{label:"批次",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"!=e.row.batch?a("span",[t._v(t._s(e.row.batch))]):a("span",[t._v("-- --")])]}}])}),a("el-table-column",{attrs:{label:"类型",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.type?a("el-link",{attrs:{underline:!1}},[t._v("零件")]):t._e(),2==e.row.type?a("el-link",{attrs:{underline:!1}},[t._v("模型")]):t._e()]}}])}),t.invendetailDV.show?a("el-table-column",{attrs:{label:"操作",width:"90",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.burn(e.row)}}},[t._v("刻录")])]}}],null,!1,2295293268)}):t._e()],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{layout:"prev, pager, next","page-size":t.invendetailTableData.pageSize,total:t.invendetailTableData.total},on:{"current-change":t.handleCurrentChange}})],1)],1)])],1)},r=[],o=(a("7f7f"),a("cebc")),i=a("2f62"),l={name:"invendetail",components:{},computed:Object(o["a"])({},Object(i["c"])({url:function(t){return t.url}}),Object(i["b"])({token:"getToken"})),props:{invendetailDV:""},data:function(){return{search_name:"",invendetailTableData:{tableData:[],currentPage:1,pageSize:15,total:0}}},methods:{getSingle:function(){var t=this,e=t.invendetailDV.obj;t.axios({method:"GET",url:t.url+"/api/v1/pattern/product-detail",params:{page:t.invendetailTableData.currentPage,size:t.invendetailTableData.pageSize,product_id:e.product_id,type:e.type},headers:{"content-type":"application/json",token:t.token}}).then(function(a){if(a&&a.data&&a.data.data&&200==a.data.code){var n=a.data.data;t.invendetailTableData.total=n.count.total,n.list.map(function(t){return t.name=e.name,t.item=e.item,t.specs=e.specs,t.material=e.material,t}),t.invendetailTableData.tableData=n.list}}).catch(function(t){console.log(t)})},clearSearchChange:function(){this.search_name=""},handleCurrentChange:function(t){this.invendetailTableData.currentPage=t,this.getSingle()},burn:function(t){this.$message({message:"正在刻录中...",type:"success",offset:300}),location.href="https://sfapi.ueware.com/api/v1/data/cd?parts_number="+t.parts_number},close:function(){this.search_name="",this.invendetailTableData={tableData:[],currentPage:1,pageSize:15,total:0},this.$emit("change",!1)}}},c=l,s=(a("83d8"),a("2877")),u=Object(s["a"])(c,n,r,!1,null,"2ae876c0",null);e["a"]=u.exports}}]);