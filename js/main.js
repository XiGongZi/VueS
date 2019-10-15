
// 路由

Vue.component('tempLogin', Vue.extend({
    template:"#temp-login",
    props:{
        "propValue1":{
            type:[String,Number],
            default:"这是默认字符串"
        }
        },
    data:function(){
        return {
            dat:"hello world 组件！",
            tb:{
                tittle:"下拉菜单",
                body:[
                {
                    value:"第一项"
                },{
                    value:"第二项"
                },{
                    value:"第三项"
                },{
                    value:"第四项"
                },
            ]
            },
            tt:"子组件原来的字符串",
        }
    },
    methods:{
        changeTb(value){
            this.tb.tittle = value;
        },
        consoleTittle(){
            console.log(this.propValue1)
        },
       cl2(){
           this.$emit("fun11");
       },
       c13(){
         this.$emit( `fun12`,this.tt );
       },
       cSdt(){
           console.log(this.propValue1)
       }
       // 数据绑定可以把父组件值传给子组件，子组件通过props数组定义取值；事件绑定可以把父组件的方法传递给子组件，子组件通过 this.$emit("funName")调用。同时可以用this.$emit("funName",参数)的形式向父组件的方法传参（将子组件值传递给父组件）
    }
}));
let vm2 = new Vue({
    el:"#app2",
    data:{
        table:[],
        sdt:1,
    },
    methods:{
        delThis(val){
            this.table.some((item,i) => {
                if(item.id === val){
                    this.table.splice(i,1);
                    return true;
                }
            });
        },
        con2(data){
            console.log("子组件带参数传给父组件了！")
            console.log(data);
        },
        consoleFun(){
            console.log(`这里是父组件的方法`)
        }
    },
    created(){
        this.$http.get("json/table.json").then(result => {
            this.table = result.body.data;
        });
    }
});
let vm = new Vue({
    el:"#app",
    data:{
        name:'hello world',
        add1:0,
        add2:0,
        result:0,
        calcSel:"+",
        date:"",
        range:"0",
        time:"",
        cl:""
    },
    methods:{
        calc(){
            let val1 = Number(this.add1);
            let val2 = Number(this.add2);
            switch (this.calcSel) {
                case "+":
                    this.result = val1 + val2;
                    break;
                case "-":
                    this.result = val1 - val2;
                    break;
                case "x":
                    this.result = val1 * val2;
                    break;
                case "/":
                    this.result = val1 / val2;
                    break;
                default:
                    break;
            }
        },
        start(){
            this.cl = setInterval(value => {
                if(Number(this.range) >= 100){
                    clearInterval(this.cl)
                }else{
                    this.range = Number(this.range) + 1;
                }
            },100)
        },
        stop(){
            clearInterval(this.cl)
        }
    },
    created(){
        
    }
});

Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
// console.log("webpack-ser11111000");
// $("#app").click(function(){
//     // alert(`这里是inport22`)
//     console.log(112222222)
// });
// console.log("ok!!")

