let Rlogin = {
    template:"#trlogin"
};
let Rregister = {
    template:"#trregister",
    created(){
        console.log(this.$route.query.id)
    }
};
let routerObj = new VueRouter({
    routes:[
        {path:"/" , redirect : "/login"},
        {path:"/login" , component : Rlogin},
        {path:"/register" , component : Rregister},
    ]
})
Vue.component("com001",Rregister)
let vm = new Vue({
    el:"#tem1",
    data:{
        kk:"/register?id=这是外边的id值"
    },
    methods:{

    },
    router:routerObj,
})
