<template>
    <div class="tab-content">
        {{contentData[tabIndex] | replaceNumToChs}}
    </div>
</template>

<script>

    import { mapState } from 'vuex';
    import { replaceNumToChs } from '@/filters';

    export default {
        name: 'TabContent',
        props: {
            contentData: Array
        },
        filters: {
            replaceNumToChs
        },
        computed: {
            ...mapState(['tabIndex'])
        }
    };
</script>

<style>
    .tab-content {
        height: 450px;
        text-align: center;
        line-height: 450px;
        font-size: 100px;
    }
</style>