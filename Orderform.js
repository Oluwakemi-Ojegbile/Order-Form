Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
});

new Vue({
    el: '#main-body',
    data: {
       
        services: [
            {
                name: 'Web Development',
                price: 300,
                active:true
            },{
                name: 'Design',
                price: 400,
                active:false
            },{
                name: 'Integration',
                price: 250,
                active:false
            },{
                name: 'Training',
                price: 220,
                active:false
            }
        ]
    },
    
    methods: {
        toggleActive: function(s){
            s.active = !s.active;
        },
        sum: function(){

            var sum = 0;

            this.services.forEach(function(s){
                if (s.active){
                    sum+= s.price;
                }
            });

           return sum;
        }
    }
});