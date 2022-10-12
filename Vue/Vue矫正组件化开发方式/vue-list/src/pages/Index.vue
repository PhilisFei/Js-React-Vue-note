<template>
    <div class="container">
        <nav-bar
            :fieldData="fieldData"
            :curIdx="curIdx"
            :selectNav="selectNav"
        ></nav-bar>
        <course-list
            :courseData="curCourseData"
        ></course-list>
    </div>
</template>

<script>
    import IndexModel from '@/models/Index';
    import { DEFAULT_NAV_ITEM, DEFAULT_NAV_FIELD } from '@/configs/config';
    import { filterData } from '@/utils/tools';

    import NavBar from '@/components/NavBar';
    import CourseList from '@/components/CourseList';

    const indexModel = new IndexModel();

    export default {
        name: 'IndexPage',
        components: {
            NavBar,
            CourseList
        },
        data(){
            return {
                fieldData: [],
                courseData: [],
                curCourseData: [],
                curIdx: 0
            };
        },
        mounted(){
            this.getDatas();
        },
        methods: {
            async getDatas(){
                const fieldData = await indexModel.getFieldData(),
                      courseData = await indexModel.getCourseData();

                this.fieldData = DEFAULT_NAV_ITEM.concat(fieldData);
                this.courseData = courseData;
                this.curCourseData = filterData(this.courseData, DEFAULT_NAV_FIELD);
            },

            selectNav(index, field){
                this.curIdx = index;
                this.curCourseData = filterData(this.courseData, field);
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>