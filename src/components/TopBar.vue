<template>
    <div class="c-topbar"
        :class="darkmodeclass"
    >
        <h1 class="c-topbar__titulo">Where in the world?</h1>
    
        <span class="c-topbar__mode"
            @click="changemode"
        >
            <ion-icon name="moon-outline"></ion-icon>
            Dark Mode
        </span>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name:'TopBar',

    methods:{
        ...mapMutations([
            'changemodedark'
        ]),
        changemode(){
            this.changemodedark()
        }
    },
    computed:{
        ...mapState([
            'darkmode'
        ]),
        darkmodeclass(){
            return this.darkmode ? 'c-topbar--darkmode' : ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../css/style.scss';
.c-topbar{
 @extend .display-flex;
 @extend .justify-content-space-between;
 @extend .align-items-center;
 background-color: white;
 padding: 25px 3% 25px 3%;
 font-family: $font-main-source;
 font-size: 16px;
 box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);


    &__titulo{
        font-size: 1em;
        
    }
    &__mode{
        font-weight: 600;
    }
}
.c-topbar--darkmode{
    background-color: $background-color-dark-element;
    color: white;
}
@media screen and (min-width: 800px) {
    .c-topbar{

        &__titulo{
            font-size: 1.5em;
        }
        &__mode:hover{
            cursor: pointer;
        }
    }
}
</style>
