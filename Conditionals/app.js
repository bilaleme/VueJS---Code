new Vue({
    el:'#vue-app',
    data:{
        name : true
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