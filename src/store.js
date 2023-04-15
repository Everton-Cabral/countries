import { createStore } from 'vuex'
export const store = createStore({
    state(){
        return{
            darkmode:false,
            searchtext: '',
            countries:[],
            regionfilter:'allregions'
        }
    },
    mutations:{
        changemodedark(state){
            state.darkmode = !state.darkmode
        },
        sendtext(state, params){
            state.searchtext = params
        },
        sendcountries(state, params){
            state.countries = params
        },
        sendregionfilter(state, params){
            state.regionfilter = params
        }
    },
    actions:{
        getCountries({ commit, state}){
            return fetch(`https://restcountries.com/v3.1/name/${state.searchtext}?fields=name,population,flags,capital,region`)
                .then(response => response.json())
                .then( data => {commit('sendcountries', data), console.log(data)})       
        }
    }
})
