<template>
  <div>
    <h1>配置页</h1>
    <el-button type="primary" plain @click="$router.push('/')"
      >回到首页</el-button
    >
    <p>
        <h2>系统语言选择</h2>
      <el-select v-model="language" @change="changeLang" class="changeLangstyle">
           <el-option
             v-for="item in languageList"
             :key="item"
             :label="item"
             :value="item">
           </el-option>
         </el-select>
    </p>
    <p>
        <h2>主题颜色选择</h2>
        <ThemePicker>
        </ThemePicker>
    </p>
    <p> 
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1" v-for="item,index in routes">{{$t(item.meta.title)}}</el-menu-item>
        </el-menu>
    </p>
    <p>
      <el-button @click="$router.push('/test')" type="success">测试页</el-button>
    </p>
  </div>
</template>

<script>
import ThemePicker from '@/components/ThemePicker.vue'
export default {
  name: "detail",
  components:{ThemePicker},
  data() {
    return {
        routes:[],
        activeIndex2:'2',
        options: [
            {
            value: "zh",
            label: "中文",
            },
            {
            value: "en",
            label: "英文",
            },
        ],
        value: "",
        color: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
            '#ff4500',
            '#ff8c00',
            '#ffd700',
            '#90ee90',
            '#00ced1',
            '#1e90ff',
            '#c71585',
            'rgba(255, 69, 0, 0.68)',
            'rgb(255, 120, 0)',
            'hsv(51, 100, 98)',
            'hsva(120, 40, 94, 0.5)',
            'hsl(181, 100%, 37%)',
            'hsla(209, 100%, 56%, 0.73)',
            '#c7158577'
        ]

    };
  },
  
  methods:{
      change(val){
          localStorage.setItem("lang",val)
          window.location.reload()
      },
      changeLang( val ){
     let locale = this.$i18n.locale;
     if(val==this.$t('lang.description.ToEnglish')){
       locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh';
       localStorage.lang=this.$i18n.locale;
       this.language= this.$t('lang.description.ToEnglish');
     }else if(val==this.$t('lang.description.ToChinese')){
       locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh';
       localStorage.lang=this.$i18n.locale;
       this.language= this.$t('lang.description.ToChinese');
     }
   }
  },
  computed: {
   languageList: function () {
     return [this.$t('lang.description.ToChinese'),this.$t('lang.description.ToEnglish')]  }
 },
  created() {
    //   console.log('this.$route',this.$router.options.routes)
      this.routes = this.$router.options.routes
   if (this.$i18n.locale == 'en') {
     this.language= this.$t('lang.description.ToEnglish')
   }else{
     this.language= this.$t('lang.description.ToChinese'); }
 },
};
</script>

<style>
</style>