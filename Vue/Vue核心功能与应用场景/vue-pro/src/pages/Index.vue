<template>
    <div class="container">
        <tab />
    </div>
</template>

<script>
    import Tab from '@/components/Tab';

    export default {
        name: 'IndexPage',
        components: {
            Tab
        }
    };
</script>
<!-- 
    页面组件: 承载多个组件的容器 
    页面组件尽量不要放任何的数据,任何方法
-->