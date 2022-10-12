<template>
    <div class="course-list-wrapper">
        <div class="course-list clearfix">
            <course-item
                v-for="(item, index) of courseData"
                :key="index"
                :item="item"
            ></course-item>
        </div>
    </div>
</template>

<script>

    import CourseItem from './CourseItem';

    export default {
        name: 'CourseList',
        props: {
            courseData: Array
        },
        components: {
            CourseItem
        }
    };

</script>

<style lang="scss" scoped>
    .course-list-wrapper {
        margin-top: 20px;

        .course-list {
            width: 1225px;
            margin-left: -17px;
        }
    }
</style>