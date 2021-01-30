class UI{

    printMSG(message){
        const tagp = document.querySelector(".p");
        const msg = document.querySelector(".msg");
        tagp.innerHTML =
        `
            <li>${message}</li>
        `;
        msg.style.display = "flex";
        msg.appendChild(tagp);
    }
    removeMSG(){
        const msg = document.querySelector(".msg");
        document.querySelector(".p").innerHTML = "";
        msg.style.display = "none";
    }
    addresult(result,currency){
        let money;
        if(currency === "USD"){
            money = "Dollor";
        }else if(currency === "GBP"){
            money = "Pound";
        }else if(currency === "EUR"){
            money = "Euro";
        }
        let content = document.querySelector(".result")
        content.innerHTML = `
            <h3 class="title">${result.name} (${result.symbol})</h3>
            <img src="${result.logo_url}" alt="" class="icon">
            <div class="result-content">
                <p>Prise is : ${result.price} ${money}</p>
                <p>change in last hour : ${result["1h"].price_change}</p>
                <p>change in last Day : ${result["1d"].price_change}</p>
                <p>change in last Week : ${result["7d"].price_change}</p>
                <p>change in last Month : ${result["30d"].price_change}</p>
            </div>
        `
    }
}