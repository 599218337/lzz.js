Array.prototype.myreduce = function (fn,initialValue=0) {
    let i =1
    let acc
    if (initialValue){
        i = i-1
        acc=initialValue;
    }else acc = this[0]
    for (;i<this.length;i++){
        acc = fn(acc,this[i],i,this)
    }
    return acc;
}


let a = [1,4,6,8,5];
let newa = a.reduce(function (acc,cur,idx,src) {
    return acc+cur
},100)
console.log(newa)

let newa1 = a.myreduce(function (acc,cur,idx,src) {
    return acc+cur
},100)
console.log(newa1)