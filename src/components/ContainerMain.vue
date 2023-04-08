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
 
    </div>
</template>

<script>
import TopBar from './TopBar.vue'
import SearchCountry from './SearchCountry.vue'
import FilterRegion from './FilterRegion.vue'
import { mapState } from 'vuex'
export default {
    name:'ContainerMain',

components:{
    TopBar,
    SearchCountry,
    FilterRegion,
},

computed:{
    ...mapState([
        'darkmode'
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
