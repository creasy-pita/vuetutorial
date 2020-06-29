Vue.component('testcomponent',{
    template : '<div><h1>This is coming from component</h1></div>'
 });
 Vue.component('componentwithmethod',{
    template : '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><h1>Custom Component created by <span id = "name">{{name}}</span></h1></div>',
    data: function() {
       return {
          name : "Ria"
       }
    },
    methods:{
       changename : function() {
          this.name = "Ben";
       },
       originalname: function() {
          this.name = "Ria";
       }
    }     
 });
 var vm = new Vue({
    el: '#component_test',
    components:{
        'innercomponent':{
        template : '<div><h1>This is coming from innercomponent</h1></div>'
        }}
 });
 var vm1 = new Vue({
    el: '#component_test1'
 });
 var vm2 = new Vue({
     el:"#componentwithmethod_test"
 });
 var vm3 = new Vue({
    el:"#dynamiccomponent_test",
    data:{
        view:"component1"
    },
    components: {
       'component1': {
          template: '<div><span style = "font-size:25;color:red;">Dynamic Component</span></div>'
       }
    }
});