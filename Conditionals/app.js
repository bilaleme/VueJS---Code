new Vue({
    el:'#vue-app',
    data:{
        name : true,
        colors:['green','blue','red','orange','yellow']
    },

    methods:{
        toggleName:function(){
            this.name = !this.name;
        }
    },

    computed:{
        addToA:function(){
            return this.name + this.age;
        }
    }
});