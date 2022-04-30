function detectWord(str){
    str = str.split("");
    //str = [...str];
    let res = [];
    res = str.filter(char =>{
        if (char != char.toUpperCase()){
            res.push(char);
            return res;
        }       
    })
    res = res.join("");
    console.log(res);
}
detectWord("UcUNFYGaFYFYGtNUH");