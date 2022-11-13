
//declare a list

let t = [1,2,3,4 ]

// access to the first element 
t[0]


// add  an element 
t.push(5)

// .map 
function double (x){
    return x*2;
}
t.map(double)

// using .map 
tDoubles = t.map(double)

// arrays can have multiple values
let t1 = [{name:'hsan'},function sayHello(){ console.log('helleo')},1,'Slim',[1,2,3]]

// 
t1.map(function (el){ console.log(el)})

let persons = [{ name:'slim',age:15} , { name:'kamel',age:20}]


for (let i=0;i<=persons.length-1;i++){
    console.log(persons[i].name)

}


let personsWithKamelOrNOt = [] 
for (let i=0;i<=persons.length-1;i++){
  if(persons[i].name =='kamel'){
     personsWithKamelOrNOt.push({name:persons[i].name, age:persons[i].age,isItKamel:true})
  }else{
     personsWithKamelOrNOt.push({name:persons[i].name, age:persons[i].age,isItKamel:false})

  }
}


//version optimale 
for (let i=0;i<=persons.length-1;i++){
    let { name,age } = persons[i] 
  if(name =='kamel'){
     personsWithKamelOrNOt.push({ name, age,isItKamel:true})
  }else{
     personsWithKamelOrNOt.push({name, age,isItKamel:false})
  }
}




person = { name:'slim',email: 'slim@gmail.com' } 


// object destructuring 
let { name,email } = person



