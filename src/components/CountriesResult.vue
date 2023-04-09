<template>
    <div class="c-countriesresult" :class="darkmodeclass">
        <div class="c-countriesresult__image">
            <img :src="flag" alt="flag">
        </div>
        <div class="c-countriesresult__info">
            <h2>{{ title }}</h2>
            <span><strong>Population:</strong>  {{ population }}</span>
            <span><strong>Region:</strong> {{ region }}</span>
            <span><strong>Capital:</strong> {{ Capital }}</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'CountriesResult',

    props:{
        title:{
            typeof: String,
            required: true
        },
        flag:{
            typeof: String,
            required: true
        },
        population:{
            typeof: String,
            required: true
        },
        region:{
            typeof: String,
            required: true
        },
        capital:{
            typeof: Object,
            required: true
        },
    },
    computed:{
        ...mapState([
            'darkmode',
        ]),
        darkmodeclass(){
            return this.darkmode ? 'c-countriesresult--darkmode' : ''
        },
        Capital(){
           return this.capital ? this.capital[0] : 'Desconhecido'
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../css/style.scss';

.c-countriesresult{
    background-color: white;
    width: 280px;
    @extend .display-flex;
    flex-direction: column;
    border-radius: 5px;
    height: 380px;
    margin-top: 30px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    font-family: $font-main-source;

    &__image{
         img{
            width: 100%;
            height: 190px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
         }
    }
    &__info{
        @extend .display-flex;
        flex-direction: column;
        padding: 20px;

        h2{
            margin-bottom: 10px;
        }
    }

}
.c-countriesresult--darkmode{
    background-color: $background-color-dark-element;
    color: white;
}


</style>
