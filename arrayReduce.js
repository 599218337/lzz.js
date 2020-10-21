Array.prototype.myreduce = function (fn) {
    let acc=this[0];
    let cur
    let src = this
    for (let i =1;i<this.length;i++){
        cur = this[i]
        acc = fn(acc,cur,i,src)
    }
    return acc;
}


let a = [1,4,6,8,5];
let newa = a.reduce(function (acc,cur,idx,src) {
    return acc+cur
})
console.log(newa)

let newa1 = a.myreduce(function (acc,cur,idx,src) {
    return acc+cur
})
console.log(newa1)