First Step(本身的三大件):
    安装webpack三大件:
        webpack,
        webpack-cli(webpack脚手架),
        webpack-dev-server(开发者服务器插件)

Second Step(处理js):
    处理js(六件套) -> ES6 ES7 ES8 装饰器
        转换es6的三大件:
            babel-loader@7(8与babel-core不兼容)
            babel-core
            babel-preset-env
        转换es7,es8:
            babel-plugin-transform-runtime
        转换装饰器模式:
            babel-plugin-transform-decorators
            babel-plugin-transform-decorators-legacy

Third Step(处理样式四大件 sass -> css -> style):
    sass-loader
    node-sass
    css-loader

    [有时候需要自动加css3前缀]
    [postcss-loader autoprefixer]

    style-loader

Forth Step(处理模板ejs,tpl):
    ejs-loader

Fifth Step(处理html):
    html-webpack-plugin(插件) (压缩，处理引用)

--------------------------------
--save-dev: 安装在开发环境下 简写:-D
--save: 安装在生产环境下 简写:-S

--registry=http://registry.npm.taobao.org

npm i -D --registry=http://registry.npm.taobao.org
