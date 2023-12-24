// block scope

function example(){
  if(true){
    let a = "Hello woorld";
    console.log(a);
  }
  // console.log(a); --> get reference error a is not defined
}

example();