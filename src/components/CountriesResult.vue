<template>
    <div class="c-countriesresult">
        <div class="c-countriesresult__image">
            <img :src="flag" alt="flag">
        </div>
        <div class="c-countriesresult__info">
            <h2>{{ title }}</h2>
            <span>Population:{{ population }}</span>
            <span>Region:{{ region }}</span>
            <span>Capital:{{ capital }}</span>
        </div>

    </div>
</template>

<script>
export default {
    name:'CountriesResult',

    props:{
        title:{
            typeof: String,
            required: true
        },
        flag:{
            typeof: String,
            required: true
        },
        population:{
            typeof: String,
            required: true
        },
        region:{
            typeof: String,
            required: true
        },
        capital:{
            typeof: String,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
