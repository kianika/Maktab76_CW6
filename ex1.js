//first approach
function invetObj(obj) {
    let result = [];
    result = Object.entries(obj);
    console.log(result);
}

invetObj({ a: 1, b: 2 }); 


//second approach
/* 
function invetObj(obj) {
    let arr = [];
    arr = Object.keys(obj).map(x => [x, obj[x]]);
            
        return arr;
}
        
console.log(invetObj({ a: 1, b: 2 })); */
       
//approach3

/* 
function invetObj(obj) {
    let arr = [];
    arr = Object.keys(obj).map(function(keys){
    return [keys, obj[keys]]; 
})
    return arr;  
}
        
console.log(invetObj({ a: 1, b: 2 })); */
