new Vue({
    el:'#vue-app',
    data:{
        name: 'Bilal',
        job: 'Student Developer',
        website: 'https://www.google.com.pk',
        websiteTag : '<a href="https://www.google.com">The sample link </a>'
    },

    methods:{
        greet: function(){
            return 'Good Morning';
        }
    }
});