Array.prototype.myfilter=function(fn,thisArg){
    let newArr = [];
    for (let i =0;i<this.length;i++){
        if (fn.call(thisArg,this[i],i,this)){
            newArr.push(this[i])
        }
    }
    return newArr;
}




let a = [1,4,6,8,5];
let newa = a.filter(function (element,index,array) {
    return element<5
})

console.log(newa)

let newa1 = a.myfilter(function (element,index,array) {
    return element<5
})

console.log(newa1)