import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['../views/Index'], resolve);

const Map = resolve => require(['../views/Map'], resolve);

const Signin = resolve => require(['../views/Signin'], resolve);

const Date = resolve => require(['../views/Date'], resolve);

const pDate = resolve => require(['../views/pDate'], resolve);

const Dh = resolve => require(['../views/Dh'], resolve);

const dhDetil = resolve => require(['../views/dhDetil'], resolve);

const IndividualCenter = resolve => require(['../views/IndividualCenter'], resolve);

const Msg = resolve => require(['../views/Msg'], resolve);

const Living = resolve => require(['../views/Living'], resolve);

const LivingDetail = resolve => require(['../views/LivingDetail'], resolve);

const TradeMeet = resolve => require(['../views/TradeMeet'], resolve);

const CardCase = resolve => require(['../views/cardCase'], resolve);

const History = resolve => require(['../views/History'], resolve);

const ArticleList = resolve => require(['../views/ArticleList'], resolve);

const ArticleDetial = resolve => require(['../views/ArticleDetial'], resolve);

const Image = resolve => require(['../views/Image'], resolve);

const Image4 = resolve => require(['../views/Image4'], resolve);

const MeiTuan = resolve => require(['../views/MeiTuan'], resolve);



Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/date',
      name: 'Date',
      component: Date
    },
    {
      path: '/pdate',
      name: 'pDate',
      component: pDate
    },
    {
      path: '/dh',
      name: 'Dh',
      component: Dh
    },
    {
      path: '/dhDetil',
      name: 'dhDetil',
      component: dhDetil
    },
    {
      path: '/individualcenter',
      name: 'IndividualCenter',
      component: IndividualCenter
    },
    {
      path: '/msg',
      name: 'Msg',
      component: Msg
    },
    {
      path: '/living',
      name: 'Living',
      component: Living
    },
    {
      path:'/trademeet',
      name: 'TradeMeet',
      component: TradeMeet
    },
    {
      path:'/cardcase',
      name: 'CardCase',
      component: CardCase
    },
    {
      path: '/livingdetail',
      name: 'LivingDetail',
      component: LivingDetail
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/image/:module',
      name: 'Image',
      component: Image
    },
    {
      path: '/image4',
      name: 'Image4',
      component: Image4
    },
    {
      path: '/articleList/:module',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/articleDetial/:module/:id',
      name: 'articleDetial',
      component: ArticleDetial
    },
    {
      path: '/meituan',
      name: 'meituan',
      component: MeiTuan
    }

  ]
})
