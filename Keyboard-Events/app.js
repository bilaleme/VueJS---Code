new Vue({
    el:'#vue-app',
    data:{
        age: 25,
        x:1,
        y:0
    },

    methods:{
        NameEnter:function(){
            console.log('Name entered');
        },
        AgeEnter:function(){
            console.log('Age entered');
        }
    }
});