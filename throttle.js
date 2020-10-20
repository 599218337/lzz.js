let throttle = (fn, delay)=> {
    let last = 0;
    let timer = null;
    return function(...args) {

        let now = Date.now()

        if (now > last +delay){
            if (timer){
                clearTimeout(timer);
                timer = null;
            }
            last = now;
            fn.apply(this,args);
        }
        else if (!timer){
            last = now;
            timer = setTimeout(()=>  {
                last = Date.now();
                timer = null;
                fn.apply(this,args)
            },delay)
        }


    }
}

export default throttle;