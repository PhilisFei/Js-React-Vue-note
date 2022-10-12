<template>
    <div 
        class="tab-nav"
        v-tab-current="{
            curIdx,
            className: 'nav-item',
            currentClassName: 'nav-current'
        }"
    >
        <item 
            v-for="(item, index) of navData"
            :key="index"
            :index="index"
            :item="item"
            @changeTabIndex="changeTabIndex"
        />
    </div>
</template>

<script>

    import Item from './Item';
    import tabCurrent from '../directives/tabCurrent';

    export default {
        name: 'TabNav',
        props: {
            navData: Array,
            curIdx: Number
        },
        // computed: {
        //     //...是es6的展开符，展开mapState(['tabIndex'])
        //     //...mapState(['city'])
        //     //相当于生成了
        //     //city: funtion() {return '上海'}
        //     ...mapState(['tabIndex'])
        // },
        components: {
            Item
        },
        directives: {
            tabCurrent
        },
        methods: {
            changeTabIndex(index){
                this.$emit('changeTabIndex', index);
            }
        }
    };
</script>

<style>
    .tab-nav {
        height: 50px;
        border-bottom: 1px solid #000;
    }
</style>