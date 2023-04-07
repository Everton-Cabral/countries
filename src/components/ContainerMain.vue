<template>
    <div class="c-containermain">
        <TopBar />
 
    </div>
</template>

<script>
import TopBar from './TopBar.vue'
export default {
    name:'ContainerMain',
    components:{
    TopBar,
    }
}
</script>

<style lang="scss" scoped>
@import '../css/style.scss';
.c-containermain{
    background-color: $background-color-white-container;
    height: 100vh;
    
}

</style>
