// 数据源
const state = {
    userinfo:{
        name:"",
        address:"",
        school:"",
        userid:''
    },
    customer:"",
    isIp:false
};
// actions
const actions = {
    setUserInfo(context,value){
        // 此处或许需要异步调取接口获取用户信息
        context.commit('setUserInfo',value)
    },
    setCustomer(context,value){
        // 此处或许需要异步调取接口获取用户信息
        context.commit('setCustomer',value)
    },
    setIsIp(context,value){
        // 此处或许需要异步调取接口获取用户信息
        context.commit('setIsIp',value)
    },

};
// mutations
const mutations = {
    setUserInfo(state,value){
        state.userinfo=value
    },
    setCustomer(state,value){
        state.customer=value
    },
    setIsIp(state,value){
        state.isIp=value
    },
};

// 模块化
export default {
    namespaced: true,
    state:state,
    actions:actions,
    mutations:mutations
}