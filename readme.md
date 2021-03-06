# vue js 练习，vuejs 源码调试笔记01



## 2020年7月5日

### 父组件向子组件传递方法的方式

子组件的属性可以接收的方法

父组件在methods或者data中定义方法

父组件向子组件中的属性传递定义的方法

### 父子组件关系的构成要素，（父组件）引入，注册，使用（子组件）

```html
<template>
  <div id="app">
    <p>这里是app组件</p>
    <!-- stpe3:使用 -->
    <home></home>
  </div>
</template>

<script>
// step1: 引入
import Home from './components/Home'
export default {
  name: 'App',
  // step2: 注册
  components: { Home }   
}
</script>
```



何时调用 new watcher(vm ,keypath,fn)

fn 是 updatecomponent()

vue  initstate 之前已经对template解析成了render,即知道了哪些dom或component标签接触了，在initState 方法中去完成数据变化侦测的依赖收集

render函数中的_c()函数，传入的是component标签时，会调用

_c("parent-component") --> creatElm('parent-component') -->createComponent('parent-component') -->init()--> vue.$mount --> mountComponent() --> new Watcher

## vue 培训

### 什么是组件化

组件化简单概括就是把一个功能完整的应用或模块拆分成多个子模块, 每个子模块可以独立编译和运行, 也可以任意组合成另一个新的应用或模块。

比如 从前端的角度，element-ui 所做的对一个表单做的拆分，按钮，单选框，单选框，开关等。都是从一个大的应用中拆分的结果子模块。从代码上实现这个子模块，编译后上传到npm官网，开发人员通过npm install过程来引入和使用。

任意组合的场景，就比如说一个动态查询栏的模块。



### 为什么组件化

**企业组件化的目的是解决 “企业能力的复用”**

用户是善变的，响应需要快速。

同一用户的需求会随时变化，很难稳定；不同用户需求也全然不同，但是我们又需要做到快速响应。这个时候就需要做到组件化，做到组件的复用，减少推到重来的成本。

比如 BI平台的一张图的功能，

**<u>此处上两张图</u>**

拆分是第一步，共享是第二步。假如没有拆分，就不能实现很好的共享；没有共享，拆分的成功大家就享受不到。

拆分成一个小的组件，然后让这些组件可以共享，完成不同场景的一张图，对用户的变化做到快速响应。

### 怎么组件化

#### 如何拆分

#### 如何共享：组件如何打包上传私服及使用

##### 组件的技术选型

vue,模板视图直接用html编写，上手快，学习曲线平滑。

##### webpack大致介绍

![img](https://user-gold-cdn.xitu.io/2019/6/30/16ba78866fc440b7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



##### 项目进行组件打包和项目进行构建运行的不同

前者 编译组块到浏览器引擎可以解析的`js,css,image`的资源。

后者 会进一步把这些资源放到出口文件(通常是index.html)，浏览器可以访问解析。



### 有哪些组件化的场景





上次也大致的给一小部分讲过这部分的内容，但效果不太好。借鉴上次的不成功的培训，这次做了一下调整。

中台快速开发方面的介绍

技术选型：为什么使用vue

臻善资源共享平台要做什么：组件的可复用和其他一些资源的共享，比如ui设计素材等。主要是vue这块

组件的复用的方式：上传npm包仓库，开发人员在项目中通过npm install packagename来使用

​	直接发布的专案：创建项目，编写项目，构建，发布
​	复用的组件：创建项目，编写项目，构建，发布到私仓
​	可视化管理用于复用的组件
​		提供界面上次编写
复用的组件和直接发布区别在哪	
​	复用组件webpack后的样子，直接发布组件发布后的样子（上简单的chunk后的图）

	这个是webpack的功劳，介绍什么是webpack,为什么使用webpack（因为 js,css，html才能浏览器引擎执行）
webpack怎么用，他跟vuecli的关系
	什么是入口文件

	自加载函数
	
	什么是vuecli,会用到哪些内容

组件化的一些思考

​	组件的扩展

缺点或一些限制（不能做的事情）
以后可能的改进
	部门的组件风格不同的解决
		提供不同部门的vue脚手架模板 带一些部门特有的样式等
			这块需要具体部门的同事协助完成

讲的时候先串一遍目录。



### 问题

组件的两种形式中， 服务形式的组件有共享中心来管理的含义。

### 2020年7月1日

#### **Dep.target**的作用是什么

在初始数据变化侦测后，某个对象A接触数据（的一部分）时

1.  先对象A创建一个 watcher,
2.  Dep.target=watcher
3. 调用Object.defineProperty方法中的 get function中的 dep.depend()
4. dep.depend() 中回把 Dep.target（也就是watcher）放入 dep.subs 数组中。
5. 这样 数据，dep，watcher 就有了联系，当数据变化时 会通知到watcher,执行更新函数
6. 更新函数在vue^2.0中就是 updatecomponent

### 2020年6月29日

1 增加vNodeAndComponent.html ，用于调试vuejs的父子组件时，vNode的创建方式

比如代码

```html
<html>
   <head>
      <title>VueJs component basic</title>
      <script type = "text/javascript" src = "js/vue.js"></script>
   </head>
   <div id="components-demo">
       <parent-component></parent-component>
   </div>
  <script type = "text/javascript">
var componenta = {
        data:function () {
            return {
                title:"I'm parent component"
            }
        },
        template:'<div><div>{{title}}</div></div>'
    };
var app = new Vue(
    {
        el:"#components-demo",
        components:{
            "parent-component":componenta
        }
  }
);
console.log(app);
</script>
</html>
```

产生的代码字符串

```javascript
function anonymous( ) { with(this){return _c('div',{attrs:{"id":"components-demo"}},[_c('parent-component')],1)} }
```

其中`_c('parent-component')`会在调用时会把template:`'<div><div>{{title}}</div></div>'`部分转化为vnode 然后作为子树赋值到当前vnode树中。

VNode类型 有children 和 child 属性。 如果是预留的tag 比如 htmltag 或者 svgtag会在children中。如果遇到组件标签，比如这里的`parent-component`，会在child。

如下图 _vnode 是 `parent-component`标签这部分对应的vnode，它是在`_c('parent-component')`产生了_vnode.children[0].child这部分属性值

![](imgs/2020-06-29_184646.png)





2019年12月16日
1 html 访问方式 
    E:/work/myproject/vue2/vuecharpter01/html/component_counter.html


2019年9月30日
Listening to Child Components Events
    查看 component_posts-events.html
    blog-post's v-on:enlarge-text="postFontSize += 0.1" is a custom event listener
    child component :button can emit event  to blog-post's v-on:enlarge-text listener  by v-on:click="$emit('enlarge-text')

    blog-post 是一个component ，但也可以又 像 html dom 元素 一样注册 v-on 等属性

用custom-input 替代 input 的 v-model  
    参考component_custom-input.html
        用 custom-input 自定义的event 通过  template 中的 v-on:input="$emit('input', $event.target.value)" 注册event 和 抛出 event
        <custom-input
            v-bind:value="searchText"
            v-on:input="searchText = $event"
          ></custom-input>
        template: `
            <input
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
            >
        `          


###component 
1 basic component
2 component with method
3 dynamic component   :bind a data parameter as the component name

