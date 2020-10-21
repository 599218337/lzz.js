Array.prototype.myforEach = function (fn,thisArg) {
    for (let i =0;i<this.length;i++){
        fn.call(thisArg,this[i],i,this)
    }
}

let a = [1,4,6,8,5];
let newa = a.forEach(function (currentValue,index ,array) {
    console.log(currentValue,index,array,this)
},a)

let newa1 = a.myforEach(function (currentValue,index ,array) {
    console.log(currentValue,index,array,this)
},a)