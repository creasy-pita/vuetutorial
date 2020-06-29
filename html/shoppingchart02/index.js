Vue.component('shoppingcart',{
    data:function(){
        return {list:[
            {
                id:1,
                name:'iphone',
                price: 6188,
                count:1
            },
            {
                id:2,
                name:'pro ',
                price: 3188,
                count:1
            },
            {
                id:3,
                name:'iwatch',
                price: 4188,
                count:1
            }                        
        ]}
    },
    computed:{
        totalPrice: function(){
            var total=0;
            return '10';
        }
    },
    methods:{
        handleReduce:function(index){
            this.list[index].count--;
        },
        handleAdd:function(index){
            this.list[index].count++;
        },        
        handleRemove:function(index){
            this.list.splice(index,1)
        }   
    },
    create(){alert('list.length')},
    template:'<table> <thead> <tr> <th>id</th> <th>商品名称</th> <th>商品单价</th> <th>商品数量</th> <th>操作</th> </tr> </thead> <tbody> <tr v-for="(item,index) in list"> <td>{{item.id}}</td> <td>{{item.name}}</td> <td>{{item.price}}</td> <td>{{item.count}}</td> <td> <button @click="handleReduce(index)" :disabled="item.count===0">-</button> <button @click="handleAdd(index)" >+</button> <button @click="handleRemove(index)" >移除</button></td></tr></tbody></table>'
})
var app = new Vue({
    el:'#app'
});