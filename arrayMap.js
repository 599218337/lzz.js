Array.prototype.mymap = function (fn) {
    let myArray =[];
    for (let i = 0;i<this.length;i++){
        myArray.push(fn(this[i],i,this))
    }
    return myArray;
}

let a = [1,4,6,8,5];
a.mymap(function (value,index,arr) {
    console.log(value,index,arr)
})
