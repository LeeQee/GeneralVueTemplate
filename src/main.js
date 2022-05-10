import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/element-variables.scss'
import axios from 'axios'
import request from '@/utils/request'
import router from './router'
import store from '@/store'
import Cookies from 'js-cookie'
import i18n from '@/utils/i18n'
import Meta from "vue-meta";
Vue.use(Meta);
Vue.use(ElementUI)

Vue.config.productionTip = false;
Vue.prototype.$http = request;
Vue.prototype.$cookie = Cookies;
new Vue({
  render: h => h(App),
  router,
  store,
  axios,i18n,
  data:{
    title: 'zq',
    keywords:'vue,vue-router,vue-meta',
    description:'this is a des info.'
  },
  metaInfo(){
    return {
      title: this.title,
      meta:[
        {
            name:'keywords',
            content:this.keywords
        },{
            name:"description",
            content:this.description
        }
    ]
    }
  },
}).$mount('#app')