<template>
    <div class="nav-bar">
        <nav-item
            v-for="(item, index) of fieldData"
            :key="index"
            :index="index"
            :item="item"
            :curIdx="curIdx"
            :selectNav="selectNav"
        ></nav-item>
    </div>
</template>

<script>
    import NavItem from './NavItem';

    export default {
        name: 'NavBar',
        props: {
            fieldData: Array,
            curIdx: Number,
            selectNav: Function
        },
        components: {
            NavItem
        }
    };
</script>

<style lang="scss" scoped>
    .nav-bar {
        height: 44px;
        background-color: #efefef;
    }
</style>