let user_input=prompt("please enter the number");

let array=[];



for(let i=0 ; i<=user_input ; i++){
    if(i%2 != 0 && i%3 !=0){
        array.push(i);
    }
}

console.log(array);


