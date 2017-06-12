# gulp工作流

jquery + seajs + bootstrap + gulp

> 规范化task，完成静态demo，js合并、css合并、sass编译、sprite多张生成、iconfont生成等。


### gulp指令

指令 | 用途
---------|----------
`gulp` | 开发服务器
`gulp build` | 打包
`gulp` | js
`gulp` | sass
`gulp image` | 压缩图片
`gulp tinypng` | 压缩图片tinypng模式
`gulp iconfont` | iconfont
`gulp sprite` | sprite


### 项目细节

##### gulp
  - 开发服务器 `gulp` 默认使用dist目录内容，所有首次需要`gulp build`
  - gulp task 都独立存放在 `gulp/task` 里面
  - 目前开发服务器只监控html、js、css、images的变动，若有sprite、iconfont的更改，需执行对应gulp, 或者直接在gulpfile.js中配置监控

##### iconfont

  - 目录`src/assets/fonts/*` 里面存放所有需要打包成iconfont的svg文件，文件名字则为字体图片后续使用的名字
  - iconfont 生成在 `dist/assets/fonts/`，里面存在 `iconfont.css` 文件，在项目中直接引用
  - 其中iconfont.html，可以查看全部iconfont

##### sprite

  - 目录 `src/assets/sprite/`，目录里面，以文件夹为单位，把所有 `*.png`合并为 [文件夹].png
  - 在 `dist/assets/sprite/` 里面，存在对应的css文件，在项目中直接引用

##### vendor.js

  - 目录 `src/assets/js/vendor/vendor.js` 把全局公共js合并为一个vendor.js，目前包括jquery、seajs

##### vendor.css

  - 目录 `src/assets/sass/vendor/vendor.scss` 把全局公共css合并为一个vendor.css，目前包括bootstrap、公共css、公共结构css

##### bootstrap 个性化更改

  - `src/assets/sass/vendor/_variables.scss`
