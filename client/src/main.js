import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App.vue'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// temp
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwibmFtZSI6IkrDo28iLCJlbWFpbCI6ImpvYW9AZ21haWwuY29tIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2MTIxMDM3MDYsImV4cCI6MTYxMjM2MjkwNn0.EiN9UsSDQw4L5VbcAp1OagwRGePA68uN9Lv9pTfAeiE'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
