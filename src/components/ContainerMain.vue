<template>
    <div class="c-containermain" :class="darkmodeclass">
        <TopBar />
        <div class="c-containermain__searchbar">
            <div class="c-containermain__searchbar__searchcountry">
                <SearchCountry />
            </div>

            <div class="c-containermain__searchbar__filterregion">
                <FilterRegion />
            </div>
        </div>
        <div class="c-containermain__containercountries">
            <div class="c-containermain__containercountries__countries"
                v-for="country in countries" :key="country.name.common"
            >
                <CountriesResult
                    :title="country.name.common"
                    :flag="country.flags.png"
                    :population="country.population"
                    :region="country.region"
                    :capital="country.capital"
                />
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from './TopBar.vue'
import SearchCountry from './SearchCountry.vue'
import FilterRegion from './FilterRegion.vue'
import CountriesResult from './CountriesResult.vue'
import { mapState } from 'vuex'
export default {
    name:'ContainerMain',

    components:{
    TopBar,
    SearchCountry,
    FilterRegion,
    CountriesResult,
    },

    computed:{
        ...mapState([
            'darkmode',
            'countries'
        ]),
        darkmodeclass(){
            return this.darkmode ? 'c-containermain--darkmode' : ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../css/style.scss';
.c-containermain{
    background-color: $background-color-white-container;
    height: 100vh;   

    &__searchbar{
       padding: 0px 5% 0 5%;
        @extend .display-flex;
        @extend .justify-content-center;
        flex-wrap: wrap;
        align-items: baseline;

        

        &__searchcountry{
            padding-top: 30px;
            width: 390px;      
        }
        &__filterregion{
            margin-right: auto;
            padding-top: 30px;
        }
    }
    &__containercountries{
        @extend .display-flex;
        flex-wrap: wrap;
        @extend .justify-content-center;
        width: 100%;
        
        &__countries{
            padding: 30px;
        }
    }
    @media screen and (min-width: 584px) {
       
        .c-containermain{

            &__searchbar{
                justify-content: space-between;
          
                &__filterregion{
                    margin-right: unset;
                }
            }
        }
     }

}
.c-containermain--darkmode{
    background-color: $background-color-dark;
}

</style>
