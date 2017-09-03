'use strict'

const mongoose = require('mongoose');
let m_lunbo = mongoose.model('carousel');

//1.0 获取轮播
exports.getlunbo = (req,res)=>{
	m_lunbo.find({},(err,data)=>{
		if(err)
		{
			res.end(err.message);
		}

		res.end(JSON.stringify(data));
	});
}

//2.0 获取首页标签页图片数据
let m_hometab = mongoose.model('hometab');
exports.gethometab = (req,res)=>{
	//获取参数id值
	let type = req.params.type;
	m_hometab.find({type:type},(err,data)=>{
		if(err)
		{
			res.end(err.message);
		}

		res.end(JSON.stringify(data));
	});
}

//3.0 获取连载动漫页面的列表数据
let m_lianzai = mongoose.model('lianzai');
exports.getlianzai = (req,res)=>{
	m_lianzai.find({},(err,data)=>{
		if(err)
		{
			res.end(err.message);
		}

		res.end(JSON.stringify(data));
	});
}

//4.0 获取专题页面数据
let m_topics = mongoose.model('topics');
exports.gettopics = (req,res)=>{
	m_topics.find({},(err,data)=>{
		if(err)
		{
			res.end(err.message);
		}

		res.end(JSON.stringify(data));
	});
}
