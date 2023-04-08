<template>
    <div class="c-searchcountry">
        <ion-icon class="c-searchcountry__icon" name="search"></ion-icon>
        <input type="text" class="c-searchcountry__input" placeholder="Seach for a country...">
    </div>
   
</template>

<script>
export default {
    name:'SearchCountry',
}
</script>

<style lang="scss" scoped>
 .c-searchcountry{


    &__icon{
        position: absolute;
        margin-left: 20px;
    }
    &__input{
        border: none;
        height: 45px;
        width: 100%;
        max-width: 370px;
        font-size: 16px;
        border-radius: 5px;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        padding-left: 40px;
        box-sizing: border-box;
        color: hsl(0, 0%, 52%);
    }
    &__input::placeholder{
        color: hsl(0, 0%, 52%);
    }
    &__icon{
        font-size: 25px;
        margin-top: 10px;
        margin-left: 10px;
        color: hsl(0, 0%, 52%);
    }
 }
</style>
