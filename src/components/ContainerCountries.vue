<template>
    <div class="c-containercountries">
        <div class="c-containercountries__searchbar">
            <div class="c-containercountries__searchbar__searchcountry">
                <SearchCountry />
            </div>
    
            <div class="c-containercountries__searchbar__filterregion">
                <FilterRegion />
            </div>
        </div>

        <div class="c-containercountries__result">
            <div class="c-containercountries__result__countries"
                v-for="country in countries" :key="country.name.common"
                v-show="showcountry || regionfilter === country.region"
            >
                <CountriesResult
                    :title="country.name.common"
                    :flag="country.flags.png"
                    :population="country.population"
                    :region="country.region"
                    :capital="country.capital"
                    @click="details(country.name.common)"
                />
            </div>
        </div>


    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CountriesResult from './CountriesResult.vue'
import SearchCountry from './SearchCountry.vue'
import FilterRegion from './FilterRegion.vue'
export default {
    name:'ContainerCountries',
    components:{
        CountriesResult,
        SearchCountry,
        FilterRegion,
    },
    methods:{
        ...mapActions([
            'getCountry'
        ]),
        details(params){
            console.log(params)
            this.getCountry(params)
            this.$router.push('/details')
           
        }
    },
    computed:{
        ...mapState([
            'countries',
            'regionfilter'
        ]),
        showcountry(){
            return this.regionfilter === 'allregions' ? true : false  
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../css/style.scss';
.c-containercountries{
   
  
    &__searchbar{
       padding: 0px 5% 0 5%;
        @extend .display-flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: baseline;
      

        &__searchcountry{
            padding-top: 30px;
            width: 390px;      
        }
        &__filterregion{
            padding-top: 30px;
        }
    }

    &__result{
        @extend .display-flex;
        flex-wrap: wrap;
        @extend .justify-content-center;
        width: 100%;

        &__countries{
            padding: 30px;
        }
    }     
   
   
}

</style>
