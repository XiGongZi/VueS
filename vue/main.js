let vm = new Vue({
    el:"#vm2",
    data:{
        add1:0,
        add2:0,
        result:0
    },
    methods:{
        calc(){
            this.result = Number(this.add1)+Number(this.add2)
        }
    },created(){
        // alert(111)
    }
})