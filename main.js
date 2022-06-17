
// const myArray = [ {
//     firstName:"abay",
//     lastName: "asaye",
//     age: 20
// } ,  {
//     firstName:"abay",
//     lastName: "asaye",
//     age: 2
// } , 
//  {
//     firstName:"abay",
//     lastName: "asaye",
//     age: 28
// }] 
// function forEaecheFunc(objectArray) {
//     objectArray.forEach((objIArray)=>{
//         if(objIArray.age > 18){
//             h1_id.innerHTML += objIArray.firstName + " "; 
//             return;
//         }
//             h1_id.innerHTML += objIArray.lastName + " " ;        
//     })
// }
// forEaecheFunc(myArray)
// let calssName = document.getElementsByClassName("h1_class")
// for (let itration of calssName){
//     console.log(itration)
// }

// function someFunc() {
// let changeColor = document.getElementsByClassName("h1_text")

//     for (let colorChange of changeColor){
//         colorChange.style.color = "blue";
//     }
// }

// function changeText() {
//     let textElem = document.getElementsByClassName("h1_text")
//     for (let textChange of textElem) {
//         textChange.innerText = "hello";
//     }
// }

// const myObject  = {
//     firstName : "abay",
//     lastName : "asaye",
//     company : "lenovo",
//     origin : "haifa"
// }

// for ( let conOb in myObject) {
//     let myPid = document.getElementById("p_idd")
//      console.log(`${conOb}`)
//      myPid.innerHTML += `${myObject[conOb]} <br>`
// }


function objectFunc() {
    const objectSn = {
        firstName : "",
        lastName : "",
        age : "",
    
    }
    for (let someKey in objectSn) {
        objectSn[someKey] =document.getElementById(`${someKey}_input`).value;
        let printH1 = document.createElement('h1');
        printH1.innerText=`${someKey}:${objectSn[someKey]}`
        document.body.appendChild(printH1)
       


    }
}

const objectsArray =  [
    objecT1 = {
        firstName:"",
        lastName: "",
        birthDath: "",
        email : ""
    },
    objecT2 = {
        firstName:"",
        lastName: "",
        birthDath: "",
        email : ""
    },
    objecT3 = {
        firstName:"",
        lastName: "",
        birthDath: "",
        email : ""
    },
    objecT4  = {
        firstName:"",
        lastName: "",
        birthDath: "",
        email : ""
    },
]
let myEach = objectsArray.forEach(arrayItem => {
        for (let objItem in arrayItem ){
            let myTable = document.getElementById("tr_Idd")
            myTable.innerHTML +=` <rd> ${objItem}: ${arrayItem[objItem]}</td> <br>`;
            

        }
});