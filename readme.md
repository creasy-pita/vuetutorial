# vue js 练习，vuejs 源码调试笔记01

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

