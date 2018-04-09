new Vue({
    el:'#vue-app',
    data:{
        name : 'bilal',
        age : 20,
        available:false
    },

    methods:{
        assignAvailable:function(event){
            this.available = !this.available;
            console.log('class changed');
        }
    }
});