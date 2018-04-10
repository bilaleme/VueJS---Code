var one = new Vue({

    el:'#vue-app-one',
    data:{
        
        title:'Vue app one'
    },

    methods:{
        
    },

    computed:{
        greet:function(){
            return 'Yo dudes, this is app 1 speaking to ya:)';
        }
    }
    

});

var two = new Vue({

    el:'#vue-app-two',
    data:{
        
        title:'Vue app two'
    },

    methods:{
        changeTitle:function(){
            one.title = 'Title changed';
        }
    },

    computed:{
        greet:function(){
            return 'Yo dudes, this is app 2 speaking to ya:)';
        }
    }

});