<template>
    <div class="c-searchcountry">
        <ion-icon class="c-searchcountry__icon" 
            :class="darkmodeicon"
            name="search"
            @click="searchcountry"
        >
        </ion-icon>

        <input type="text" 
            class="c-searchcountry__input" 
            :class="darkmodeinput" 
            placeholder="Seach for a country..."
            @keyup.enter="searchcountry"
            v-model="text"
        >
    </div>
   
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    name:'SearchCountry',

    data(){
        return{
            text:''
        }
    },
    methods:{
        ...mapMutations([
            'sendtext'
        ]),
        ...mapActions([
            'getCountries'
        ]),
        searchcountry(){
            this.sendtext(this.text)
            this.getCountries()
        }
    },
    computed:{
        ...mapState([
            'darkmode'
        ]),
        darkmodeinput(){
            return this.darkmode ? 'c-searchcountry__input--darkmode' : ''
        },
        darkmodeicon(){
            return this.darkmode ? 'c-searchcountry__icon--darkmode' : '' 
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../css/style.scss';

 .c-searchcountry{
   

    &__icon{
        position: absolute;
        font-size: 25px;
        margin-top: 10px;
        margin-left: 10px;
        color: hsl(0, 0%, 52%);
        visibility: visible;
    }
    &__icon--darkmode{
        color: white;
        visibility: visible;
    }
    &__icon:hover{
        cursor: pointer;
    }
    &__input{
        border: none;
        height: 45px;
        width: 100%;
        max-width: 390px;
        font-size: 16px;
        border-radius: 5px;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        padding-left: 50px;
        box-sizing: border-box;
        color: hsl(0, 0%, 52%);
    }
    &__input::placeholder{
        color: hsl(0, 0%, 52%);
    }
    &__input--darkmode{
        background-color: $background-color-dark-element;
        color: white;
    }
    &__input--darkmode::placeholder{
        color: white;
    }
   
    
 }
</style>
