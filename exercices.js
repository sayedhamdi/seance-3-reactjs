// exercice 1 : 

console.log("hello")

const persons = [

    { name : "MONCEF" , age: 13} ,
    { name : "BAHIJA" , age: 23} ,
    { name : "ALA" , age: 18} ,
    
];
// filter 

//afficher filtrer 





let personsWithStatus = persons.map(({name,age})=> 
({ name, age, status : age >= 18 ? 'majeur' :'mineur'  }))

// affichage 

console.log(personsWithStatus)



const es = [
    { name : "sarah" , note : undefined },
    { name : "monya" , note : 7 },
    { name : "carlos" , note : 13 },
    { name : "fadhel" , note : 18 },
    ]

console.log(
    es
    .filter(({note})=>note)
    .sort((a,b)=>b.note-a.note)
    .map(e=>({...e, mention : 
        (e.note >= es.reduce((acc,cur)=>acc+cur/es.length)) 
            ? 'bien'
            :
            'passable'}))
    )