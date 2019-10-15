function cat(){}
cat.prototype={
    food:"fish",
    say: function(){           
        console.log("I love "+this.food);
    }}
var blackCat = new cat;
// blackCat.say();

// console.dir(blackCat.prototype)

// let whiteDog = {food:"bone"};
// blackCat.say.call(whiteDog)
let add = {
    food:"s",
    pdd:"kda",
    fu1:function(){
        console.log(this.food + this.pdd)
    }
}
let cpp = {
    food:"b",
    pdd:"ok"
};
// add.fu1.call(cpp)
//class 构造函数



class Act {
    constructor(){
        this.bb = "hello"
    }
   func(){
       console.log(this.bb)
   }
}
let Act1 = new Act();
// Act1.func();
// console.dir(Act1)




// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// console.log(source);




const obj = Object.create(
    {
        foo: 1
    }, { // foo 是个继承属性。
        bar: {
            value: 2  // bar 是个不可枚举属性。
        },
        baz: {
            value: 3,
            enumerable: true  // baz 是个自身可枚举属性。
        }
    }
);

console.log(obj)

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }




var pp = Object.create({app:"aaaa"})
console.log(pp)//{}
console.log(pp.app)//aaaa