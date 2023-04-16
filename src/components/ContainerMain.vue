<template>
    <div class="c-containermain" :class="darkmodeclass">
        <TopBar />
        <router-view></router-view>
        
    </div>
</template>

<script>
import TopBar from './TopBar.vue'
import { mapState } from 'vuex'
export default {
    name:'ContainerMain',

    components:{
    TopBar,
    },

    computed:{
        ...mapState([
            'darkmode',
        ]),
        darkmodeclass(){
            return this.darkmode ? 'c-containermain--darkmode' : ''
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../css/style.scss';
.c-containermain{
    background-color: $background-color-white-container;
    min-height: 100vh;
    height: auto;  

   
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
