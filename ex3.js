//approach1
function equal(obj1 , obj2){
    let test = true;
    for( let item in obj1){
        if(obj1[item] !== obj2[item]){
            test = false;
        }
    }
    return test;
}
console.log(equal(a,b));


//approach2

/* function equal(obj1 , obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log( equal(a,b)); */
