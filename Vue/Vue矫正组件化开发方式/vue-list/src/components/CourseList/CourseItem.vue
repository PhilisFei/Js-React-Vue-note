<template>
    <div class="course-item">
        <div class="cover">
            <a 
                :href="'https://ke.qq.com/' + item.id"
                target="_blank"
                class="course-lk"
            >
                <img 
                    :src="item.img" 
                    :alt="item.course_name" 
                />
            </a>
        </div>
        <h1 class="course-tt">
            {{item.course_name}}
        </h1>
        <div 
            :class="['price', { 'free': item.price === '0' }]"
        >
            {{item.price === '0' ? '免费' : `￥${item.price}.00`}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CourseItem',
        props: {
            item: Object
        }
    };
</script>

<style lang="scss" scoped>
    .course-item {
        float: left;
        width: 236px;
        height: 221px;
        margin-left: 9px;
        padding: 7px 7px 10px;
        box-sizing: border-box;
        border: 1px solid transparent;

        &:hover {
            border-color: #ddd;
            box-shadow: 1px 1px 2px 1px #ececec;
        }

        .course-tt {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            height: 40px;
            font-size: 14px;
            margin-bottom: 8px;
        }

        .price {
            height: 24px;
            line-height: 24px;
            color: #e85308;

            &.free {
                color: #5fb41b;
                font-size: 14px;
            }
        }
    }
</style>