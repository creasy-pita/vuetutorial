component in depth

component 中的自定义属性
    相当于一个可以 再component html 标签中作为属性使用的属性名  
    通过 v-bind:"变量名"  与数据进行绑定， 当数据变化时会刷新属性的值
component_dynamic_multi_props.html



v-model 这块需要再理解
    v-model 初步理解为 数据驱动 DOM 外， DOM 的变化反过来影响数据 的双向绑定关系

    不同 dom elements  ,v-model 内部使用的 properties 和 抛出的时间不同
        v-model internally uses different properties and emits different events for different input elements:

        text and textarea elements use value property and input event;
        checkboxes and radiobuttons use checked property and change event;
        select fields use value as a prop and change as an event.
    

问题：
    component 中的template 中 使用 {{prop}}} ,其中prop 需要是 component 的prop属性， 不能使用或访问到 vue 实例中的 data 属性
    原因： component 单独的与  vue 实例 没有实际关系， 需要访问则需要有某种属性的传递的方式