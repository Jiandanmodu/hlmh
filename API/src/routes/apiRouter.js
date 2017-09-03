'use strict'

const express = require('express');
const router = express.Router();

const apiCtrl = require('../controllers/apiController.js');

//获取首页轮播数据 http://127.0.0.1:9090/api/getlunbo
router.get('/api/getlunbo',apiCtrl.getlunbo); 

//获取首页标签页图片数据 :http://127.0.0.1:9090/api/gethometab/4
router.get('/api/gethometab/:type',apiCtrl.gethometab); 

//获取连载动漫页面的列表数据 :http://127.0.0.1:9090/api/getlianzai
router.get('/api/getlianzai/',apiCtrl.getlianzai); 

//获取专题页面的列表数据 :http://127.0.0.1:9090/api/gettopics
router.get('/api/gettopics/',apiCtrl.gettopics); 

//将路由对象导出
module.exports = router; 

//czdm.ittun.com/api/getlunbo
