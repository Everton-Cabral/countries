<template>
        <select id="filterregion"  class="c-filterregion" name="filterregion">
            <option  disabled selected hidden>Filter by Region</option>
            <option value="opcao1">Africa</option>
            <option value="opcao2">América</option>
            <option value="opcao3">Asia</option>
            <option value="opcao3">Europe</option>
            <option value="opcao3">Oceania</option>
        </select>
    
</template>

<script>
export default {
    name:'FilterRegion',
}
</script>

<style lang="scss" scoped>
 .c-filterregion{
    width: 175px;
    height: 45px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    padding: 0px 10px 0px 10px;
 }
</style>
