class Bit{
    async addURL(currency,cryptocurrency){
        const apiKey = "4f495e18c786bcdfe6cce5bb61a861c7";
        let url = `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${cryptocurrency}&interval=1h,1d,7d,30d&convert=${currency}`;
        
        const api = await fetch(url);
        const json = await api.json();
        return json;
    }
}