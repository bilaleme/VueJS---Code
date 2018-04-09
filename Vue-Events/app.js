new Vue({
    el:'#vue-app',
    data:{
        age: 25,
        x:1,
        y:0
    },

    methods:{
        updateXY:function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});