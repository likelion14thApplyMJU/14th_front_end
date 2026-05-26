function makeCounter() {
    let count=0;

    return {
        increase: () => {
            count++;
            console.log(`현재 카운트:${count}`);
        },
        decrease:() => {
            count--;
            console.log(`현재 카운트:${count}`);
        },
        multiple:() => {
            count = count*2;
            console.log(count);
        },
        reset: () => {
            count = 0;
            console.log(`현재 카운트:${count}`)
        }
    }
}

const counter = makeCounter();
counter.increase(); 
counter.increase(); 
counter.decrease(); 
counter.reset();    