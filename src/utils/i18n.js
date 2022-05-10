// import Vue from 'vue'
// import VueI18n from 'vue-i18n'
// // 英文
// import enLocale from 'element-ui/lib/locale/lang/en'

// // 中文
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'


// import ElementLocale from 'element-ui/lib/locale'
// const messages = {
//     zh:{...zhLocale,...zh},
//     en:{...enLocale,...en}
//   }
//   const i18n = new VueI18n({
//     locale: localStorage.getItem('language') || 'zh',
//     messages,
//   })
//   console.log('messages',messages)
//   console.log('i18n',i18n)
//   Vue.use(VueI18n)
//   Vue.config.lang = 'en'
//   Vue.locale('zh-cn', zhLocale)
//   Vue.locale('en', enLocale)
//   ElementLocale.i18n((key, value) => i18n.t(key, value))
import Vue from 'vue'
// import DatePicker from 'element/lib/date-picker'
import VueI18n from 'vue-i18n'
import zh from '@/assets/languages/zh.js'
import en from '@/assets/languages/en.js'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)
// Vue.use(DatePicker)

const messages = {
  en: {
    message: 'handsome Mr Zhou',
    ...en,
    ...enLocale
  },
  zh: {
    message: '周全真帅',
    ...zh,
    ...zhLocale
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: localStorage.getItem("lang")||'zh', // set locale
  messages, // set locale messages
})
console.log(i18n)
ElementLocale.i18n((key, value) => i18n.t(key, value))
 export default i18n