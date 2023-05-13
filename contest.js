let button=document.getElementById("button")
button.addEventListener("click", getandDisplayData)
let tableContainer=document.getElementById("table-container")



// the promise functions for geeting and displaying data
// the setTimeout is set different for all the promises because of better viewing purpose






function promiseAP1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            async function fecthAPI1(){
           let response=  await fetch("https://dummyjson.com/posts")
           let data=await response.json()
           displayData(data.posts)
           resolve("true")
            }
            fecthAPI1()
           
        },2000)
    })
}

function promiseAP2(){
    let promise=new Promise((resolve)=>{
        setTimeout(()=>{
            async function fecthAPI2(){
                let response=  await fetch("https://dummyjson.com/products")
                let data=await response.json()
                console.log("hii")
                displayData(data.products)
                resolve("true")

                 }
                 fecthAPI2()
        },5000)
    })
    return promise
}



function promiseAP3(){
    let promise=new Promise((resolve)=>{
        setTimeout(()=>{
            async function fecthAPI3(){
                let response=  await fetch("https://dummyjson.com/todos")
                let data=await response.json()
                displayData(data.todos)
                resolve("true")
                 }
                 fecthAPI3()
        },10000)
    })
    return promise
}


async function getandDisplayData(){
    if(await promiseAP1()){
      if (await promiseAP2()){
        promiseAP3()
      }
    }
}


function displayData(data){
    // creating a table of every api data
    let table=document.createElement("table")
    table.className="table"


    // creating the heading tags of each column
    let headings=data[0]
    console.log(headings)
    let thead=document.createElement("thead")
    let trOfHead=document.createElement("tr")
    for(let i in headings){
        let th=document.createElement("th")
        th.innerText=i
      trOfHead.appendChild(th)

    }
    thead.appendChild(trOfHead)
    table.appendChild(thead)
  
    //creating the body of each table 
    let tbody=document.createElement("tbody")
    data.forEach((element)=>{
        let tr=document.createElement("tr")
        for(let i in element){
            if(i==="thumbnail"){
                let td=document.createElement("td")
                let thumbnailimg=document.createElement("img")
                thumbnailimg.src=element[i] 
                thumbnailimg.alt="Thumbnail Image"
                td.appendChild(thumbnailimg)
                tr.appendChild(td)
            }





            else if(i==="images"){
                let td=document.createElement("td")
                let ul=document.createElement("ul")
                element[i].forEach((img)=>{
                  let li=document.createElement("li")
                  let productImage=document.createElement("img")
                  productImage.src=img
                  productImage.alt="Product Image"
                  li.appendChild(productImage)
                  ul.appendChild(li)
                })
                td.appendChild(ul)
                tr.appendChild(td)
            }
            

            else if(i==="tags"){
                let td=document.createElement("td")
                let ul=document.createElement("ul")
                element[i].forEach((tag)=>{
                  let li=document.createElement("li")
                  let tagDetail=document.createElement("p")
                 tagDetail.innerText=tag
                  li.appendChild(tagDetail)
                  ul.appendChild(li)
                })
                td.appendChild(ul)
                tr.appendChild(td)

            }





            else{
            let td=document.createElement("td")
            td.innerText=element[i]
            tr.appendChild(td)
            }
        }
        tbody.appendChild(tr)
    })

    table.appendChild(tbody)
    tableContainer.appendChild(table)
    
}





    




























