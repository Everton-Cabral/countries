import { createStore } from 'vuex'
export const store = createStore({
    state(){
        return{
            darkmode:false,
        }
    },
    mutations:{
        changemodedark(state){
            state.darkmode = !state.darkmode
        }
    },
    actions:{

    }
})
