import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RethinkDB from '@/components/RethinkDB'
//import Router from './apiRoutes.js'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'RethinkDB',
      component: RethinkDB
    }
  ],
	mode: 'history'
})
