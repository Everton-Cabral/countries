<template>
        <select id="filterregion" 
            class="c-filterregion" 
            :class="darkmodeclass"
            name="filterregion"
            v-model="selectedregion"
        >
            <option  disabled selected hidden>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="allregions">All Regions</option>
        </select>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name:'FilterRegion',

    methods:{
        ...mapMutations([
            'sendregionfilter',
        ]),
    },
    computed:{
        ...mapState([
            'darkmode',
            'regionfilter'
        ]),
        darkmodeclass(){
            return this.darkmode ? 'c-filterregion--darkmode' : ''
        },
        selectedregion:{
            get(){
                return this.regionfilter === 'allregions' ?'Filter by Region' : this.regionfilter  
            },
            set(value){
                this.sendregionfilter(value)
            }
        }

    }
}
</script>

<style lang="scss" scoped>
@import '../css/style.scss';
 .c-filterregion{
    width: 175px;
    height: 45px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    padding: 0px 10px 0px 10px;
 }
 .c-filterregion--darkmode{
    background-color: $background-color-dark-element;
    color: white;
 }
</style>
