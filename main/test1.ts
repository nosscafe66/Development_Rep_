function test1(a:number,b:number){
    const d:number = 10;
    const e:number = 20;
    let c:number;
    let i:number;
    let random:number = Math.floor(Math.random() * 11);
    for(i = 0;i < 10;i++){
        if(i == random){
            return "LoopCount: " + i + " Total: " + d * e * i * a * b;
        };
    };
}

function main(){
    let result;
    result = test1(10,50);
    if(typeof result==="undefined"){
        console.log("undefined");
        return 1
    }else{
        console.log(result);
    }
}main()