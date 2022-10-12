<template>
    <div 
        class="nav-item"
        @click="changeTabIndex(index)"
    >
        {{ item | replaceNumToChs }}
    </div>
</template>

<script>

    import { replaceNumToChs } from '@/filters';

    export default {
        name: 'NavItem',
        props: {
            item: String,
            index: Number
        },
        filters: {
            replaceNumToChs
        },
        methods: {
            changeTabIndex(index){
                this.$emit('changeTabIndex', index);
            }
        }
    };
</script>

<style>
    .nav-item {
        float: left;
        width: 25%;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }

    .nav-item.nav-current {
        background-color: #000;
        color: #fff;
    }
</style>