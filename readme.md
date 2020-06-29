# vue js 练习，vuejs 源码调试笔记01

### 2020年6月29日

1 增加vNodeAndComponent.html ，用于调试vuejs的父子组件时，vNode的创建方式

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

