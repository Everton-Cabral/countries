<template>
    <div class="c-containercountries">
        <div class="c-containercountries__countries"
                v-for="country in countries" :key="country.name.common"
                v-show="showcountry || regionfilter === country.region"
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
</template>

<script>
import { mapState } from 'vuex'
import CountriesResult from './CountriesResult.vue'
export default {
    name:'ContainerCountries',
    components:{
        CountriesResult,
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
    @extend .display-flex;
        flex-wrap: wrap;
        @extend .justify-content-center;
        width: 100%;
        
    
    &__countries{
        padding: 30px;
    }
}
</style>
