const lastChristmas = new Date("2019-12-25:00:00:00+0900")
const now = new Date();

function testingFunc(){
    const n1 = Math.ceil(Math.random()*100);
    const n2 = Math.ceil(Math.random()*10);
    console.log(7%4);
    return n1-n2;
}

function elapsedTime(fTest){
    const xmasDay = new Date("2020-12-24:00:00:00+0900");
    const now = new Date();
    const timeArray = [];

    timeArray.push(xmasDay);
    timeArray.push(now);

    const timeDiff = timeArray[0] - timeArray[1];
    
    console.log(`Elapsed time: ` + String(now - lastChristmas) + ` ms`);

    return 
}

function init(){
    const testing = elapsedTime(testingFunc);
    console.log(testing);
}

init();

// 시간경과 > 0 이려면 (후 - 전)