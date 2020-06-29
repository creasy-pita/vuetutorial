var app = new Vue({
    el:'#app',
    data:{
        list:[
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
        ]
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
    }

});