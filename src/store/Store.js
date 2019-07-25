import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
const  store = new Vuex.Store({
    state:{
        head:{
          toggle:false,
          title:'',
          style:{'background': 'rgba(43,162,251,0)'}
        },
        navtab:'head-nav1'
    },
  getters:{
    head:state => state.head,
    navtab:state => state.navtab,
  },
  mutations:{
    showHead(state,flag){
      state.head.toggle = flag;
    },
    setHeadTitle(state,title){
      state.head.title = title;
    },
    setNavtab(state,nav){
      state.navtab = nav;
    },
    setHeadStyle(state,obj){
      state.head.style = obj;
    }
  },
  actions:{

  }



});
export default store;
