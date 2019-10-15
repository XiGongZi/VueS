let SB = function(json){
    this.name = json.name;
    this.blood = json.blood;
};
SB.prototype = {
    apValue:12,
    apValue2:12,
    apValue3:12,
};
// SB.prototype.apValue = 12;
// SB.prototype.app = 30;
// SB.prototype.apValue2 = 123;
// SB.prototype.apValue3 = 121;
let add = [];
console.time("new");
for(let i=0;i<1000;i++){
    let a = new SB({name:`pandy${i}`,blood:"47"});
    add.push(a)
}
console.timeEnd("new")
