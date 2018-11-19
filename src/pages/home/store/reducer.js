import { fromJS } from 'immutable'
const defaultState = fromJS({ 
  articlePage:1,
  showScroll: false,
  topicList: [{
    id:1,
    title:"社会热点",
    imgUrl:"https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  },{
    id: 2,
    title: "手绘",
    imgUrl:"https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }],
  articleList: [{
    id: 1,
    title: '中医感想(一)',
    desc: '从有智能手机开始，我们就开始往手机中下载安装各种APP，资讯类、生活类、社交类、拍照的，下载完成后总会因为手机内存不够卸载的，也会因为比较鸡肋删...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/11286831-c11053eff305ad14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
    id: 2,
    title: '中医感想(一)',
    desc: '从有智能手机开始，我们就开始往手机中下载安装各种APP，资讯类、生活类、社交类、拍照的，下载完成后总会因为手机内存不够卸载的，也会因为比较鸡肋删...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/11286831-c11053eff305ad14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
    id: 3,
    title: '中医感想(一)',
    desc: '从有智能手机开始，我们就开始往手机中下载安装各种APP，资讯类、生活类、社交类、拍照的，下载完成后总会因为手机内存不够卸载的，也会因为比较鸡肋删...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/11286831-c11053eff305ad14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
    id: 4,
    title: '中医感想(一)',
    desc: '从有智能手机开始，我们就开始往手机中下载安装各种APP，资讯类、生活类、社交类、拍照的，下载完成后总会因为手机内存不够卸载的，也会因为比较鸡肋删...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/11286831-c11053eff305ad14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }]
})
export default (state = defaultState, action) => {
  return state
}