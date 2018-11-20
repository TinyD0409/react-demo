## React UI仿简书 功能仿Wiki 的 Demo
<div style="text-align:center;width:150px;">![logo](./public/static/react.svg)</div>
<br>

[![npm](https://img.shields.io/badge/npm-v10.10.0-green.svg)](https://www.npmjs.com/package/npm)
[![react](https://img.shields.io/badge/React-v16.6.0-blue.svg)](https://www.npmjs.com/package/react)
[![axios](https://img.shields.io/badge/axios-v0.18.0-purple.svg)](https://www.npmjs.com/package/axios)
[![immutable](https://img.shields.io/badge/immutable-v3.8.2-green.svg)](https://www.npmjs.com/package/immutable)
[![styled-components](https://img.shields.io/badge/styledComponents-v4.0.3-pink.svg)](https://www.npmjs.com/package/styled-components)
[![redux](https://img.shields.io/badge/redux-v5.1.0-blue.svg)](https://www.npmjs.com/package/redux)
[![redux-thunk](https://img.shields.io/badge/reduxThunk-v2.3.0-aqour.svg)](https://www.npmjs.com/package/redux-thunk)
[![react-router-dom](https://img.shields.io/badge/reactRouterDom-v4.3.1-red.svg)](https://www.npmjs.com/package/react-router-dom)


### 使用的技术

* styled-components
* axios
* immutable
* redux
* redux-thunk
* antd
* react-router-dom

基本样式如下
<div style="width:500px">![eg1](./public/static/indexpage.png)</div>

<br>
<div style="width:500px">![eg2](./public/static/searchresultpage.png)</div>

<br>  
这个demo适用于多数网站的开发模式，运用react-router，分别进行了声明式路由/编程式路由
调用Wiki的api返回Wiki百科内容，可以进行中文词条的搜索
通过这个小demo很好的巩固了react的知识，也收获了很多新的知识

//TODO

* 首页右边栏的美化
* 搜索内容不存在时返回一个错误页面而不是报错
* 首页列表可以返回随机数据
* 搜索下拉的内容也可以进行路由
* 搜索历史记录
