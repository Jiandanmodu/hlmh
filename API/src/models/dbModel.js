
//职责：定义user表结构和实例化model对象

'use strict'

const mongoose = require('mongoose');

//1.0 首页轮播图表定义
//数据来源于网址：https://hltm-api.tomoya.cn/carousel
let schema = new mongoose.Schema({
	img:String,  //轮播图的地址
	url:String, //点击轮播图要跳转的地址
	title:String //标题
});


//2.0 首页tab标签数据
//数据来源于：https://hltm-api.tomoya.cn/addRecommend
let tabSchema = new mongoose.Schema({
	type:Number,  //类型 1：新增连载 2：新增完结 3：推荐连载 4：推荐完结
	update:String, //标题
	name:String, //名称
	url:String, //地址
	img:String //图片地址
});

//3.0 连载动漫页面数据
let lzSchema = new mongoose.Schema({
	url:String, //点击跳转的地址
	img:String, //图片地址
	name:String, //名称
	updateTime:String,  //更新时间
	downloadCount:Number, //下载次数
	episode:String //连载多少集
	
});

//4.0 专题列表页面数据
let topicsSchema = new mongoose.Schema({
	url:String, //点击跳转的地址
	img:String, //图片地址
	title:String //标题	
});
 

//实例化model对象
//这里不需要将model export出去因为创建好以后，自动已经加载在内存中
let m = mongoose.model('carousel',schema);
// m.create({"type":1,"update":"连载至4集","name":"Regalia 三圣星","url":"http://www.hltm.tv/view/12463.html","img":"http://pic.hltm.tv/uploads/editor/2016/06/20160622095707318.jpg"},
// 	function(err,data){
// 		console.log(data);
// 		console.log('_id='+data._id);
// 	})


let m1 = mongoose.model('hometab',tabSchema);
let m2 = mongoose.model('lianzai',lzSchema);
let m3 = mongoose.model('topics',topicsSchema);
 
