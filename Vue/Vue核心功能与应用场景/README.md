自定义指令 directive 视图 -> 选项卡导航部分的视图变化

    v-if 
    v-show 
    v-for

混入 mixin -> UI库

    公共组件 -> 组件化

filter 视图 数据绑定 再加工 -> 文字再加工

    {{ 1234 | numToChs }}

plugin
    轮播图的封装

vuex -> 兄弟组件直接的数据通信问题

    组件化
    细分

    父子组件 分层

    选项卡

    导航 选项1 选项2 选项3
         0     1     2

         页面
         页面1
         页面2
         页面3

    导航
        导航项组件
    页面

vuex -> store -> state -> index

header 
tab 
    nav
        index
        item -> store -> mutations -> state -> index
    content
        index -> data['页面1', '页面2', '页面3']
                 data[store -> state -> index]
footer

vuex:
    store
    state 中央管理的数据
    mutations 更改中央管理的数据