<template>
    <div class="c-containermain">
        <TopBar />
        <div class="c-containermain__searchcountry">
            <SearchCountry />
        </div>
 
    </div>
</template>

<script>
import TopBar from './TopBar.vue'
import SearchCountry from './SearchCountry.vue'
export default {
    name:'ContainerMain',
    components:{
    TopBar,
    SearchCountry,
    }
}
</script>

<style lang="scss" scoped>
@import '../css/style.scss';
.c-containermain{
    background-color: $background-color-white-container;
    height: 100vh;   

    &__searchcountry{
        margin-top: 30px;
        @extend .display-flex;
        @extend .justify-content-center;
    }
}

</style>
