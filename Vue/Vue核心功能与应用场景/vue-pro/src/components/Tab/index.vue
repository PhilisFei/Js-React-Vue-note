<template>
    <div class="tab">
        <nav-bar 
            :navData="navData"
            :curIdx="tabIndex"
            @changeTabIndex="changeTabIndex"
        />
        <tab-content 
            :contentData="contentData"
        />
    </div>
</template>

<script>
    import TabContent from './Content';

    import navData from '@/data/nav';
    import contentData from '@/data/content';

    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'Tab',
        components: {
            TabContent
        },
        data(){
            return {
                navData,
                contentData
            };
        },
        computed: {
            ...mapState(['tabIndex'])
        },
        methods: {
            ...mapMutations(['changeTabIndex'])
        }
    };
</script>

<style>
    .tab {
        width: 500px;
        height: 500px;
        margin: 50px auto;
        border: 1px solid #000;
    }
</style>