new Vue({
    el:'#vue-app',
    data:{
        name : 'bilal',
        age : 20
    },

    computed:{
        addToA:function(){
            return this.name + this.age;
        }
    }
});