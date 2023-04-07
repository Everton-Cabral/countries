<template>
    <div class="c-topbar">
        <h1 class="c-topbar__titulo">Where in the world?</h1>
        <span>
            <ion-icon name="moon-outline"></ion-icon>
            Dark Mode
        </span>

    </div>
</template>

<script>
export default {
    name:'TopBar',

}
</script>

<style lang="scss" scoped>
@import '../css/style.scss';
.c-topbar{
 @extend .display-flex;
 @extend .justify-content-space-between;
 @extend .align-items-center;
 padding: 0 3% 0 3%;
 font-family: $font-main-source;
 font-size: 16px;

    &__titulo{
        font-size: 1em;
        
    }
    
}
</style>
