document.querySelector(".submit").addEventListener("click",func);

let ui = new UI();
let bit = new Bit();

function func(e){
    e.preventDefault();
    const currency = document.querySelector("#currency").value;
    const cryptocurrency = document.querySelector("#cryptocurrency").value;
    
    if(currency !== "" && cryptocurrency !==""){
        ui.removeMSG();
        bit.addURL(currency,cryptocurrency).then((result)=>{
            // console.log(result[0]);
            ui.addresult(result[0],currency)
        })
    }else{
        ui.removeMSG();
        ui.printMSG("you shoud Selected all of them");
    }
}