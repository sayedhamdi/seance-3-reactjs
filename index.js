console.log(users[0])

function peopleLessThanFiftyKG({weight,firstname}){
    if(weight > 100){
        return true
    }
    return false
}

let filtredUsers = users.filter(({weight,firstname})=>{
    return weight > 100 ? true : false
  })
function appendUser({firstName,lastName,image,email}){
    let root = document.querySelector("#root");

    let userComponent = 
    `
      <div class="card d-flex flex-col"> 
         <img src='${image}' alt='icon'/>
         <h1>${firstName}</h1>
         <h2>${lastName}</h2>
         <p>${email}</p>
      </div>
    `
    root.innerHTML +=userComponent
}
function showUsers(){
    filtredUsers.forEach(appendUser)
}
showUsers()