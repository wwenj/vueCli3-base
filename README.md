# vueCli3-base基础构建版

基于vue-cli3.0基础脚手架做部分修改，分为pc，移动两版，主要区别是移动版添加了分辨率适配，**本项目为空白版，拿来即用，省却每次手动构建项目工程！！**

### PC

- pc版安装了elementUI做统一UI展示
- 安装scss写样式

### 移动

- 移动端适配：本项目使用`vw`单位统一对分辨率做适配，在vuecli工程里，根据大漠的[《如何在Vue项目中使用vw实现移动端适配》](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)用webpack中做配置。

### 基础配置

- **svg组件：**

  文件在`src/icons/`中，组件在`component公共组件中`封装用于svg展示组件，用做小icon的展示，svg保存在icons/下，使用时组件中调用`<svg-icon icon-class="iconName"/>`即可

- **css样式**：

  在`src/style/`中，全局公共样式，初始化样式。

- **路由与vuex**

  对vue router和vuex做了相同的模块化处理，在`router/`和`store/`中统一写路由和vuex相关信息，可按功能分模块引入

- **请求拦截与封装**

  1. 使用axios做请求，在`src/request/http.js`中做了封装，用axios拦截器对请求和响应做统一拦截，处理每次请求的token信息或者响应状态码
  2. 对axios请求进行简单封装get，post请求，统一传参，响应后传回一个promise对象，在`src/request/api.js`中将每个接口封装，对外暴露请求改接口的方法名，返回一个promise，组件中直接调用api.js中的方法名即可

- **工具类**

  在`src/utils/`中，对常用枚举值、全局组件注册、常用类功能模块做模块化封装

- **vue.config.js**

  vuecli3隐藏所有配置，添加新配置项目中新建`vue.config.js`文件，本项目在其中加了一些常用配置，文件夹的别名，代理，打包路径等

- **Eslint**

  eslint使用默认规则，在vscode编辑器中配合eslint插件的保存自动修复功能，每次保存后会按照eslit规则自动修复

- **目录结构**

  `src/views`文件下写业务模块，`src/components`写公共基础组件


  
作者 [[王文健\]](http://blog.wwenj.com/)   
2019 年 8月 4日