



    import {navbar} from "../components/navbar.js"

    document.getElementById("navbar").innerHTML = navbar();

    
import {getData , append} from "../src/fetch.js"


let container = document.getElementById("container")

let search = (e)=>{
    if(e.key == "Enter"){

        let value = document.getElementById("query").value

        let url  = `https://api.unsplash.com//search/photos?query=${value}&per_page=20&client_id=sgV1xUviyOfuX9p81SmajVfB-yRhQlJD5gtR-h5Ahnw`

        let container = document.getElementById("container")

        let data =  getData(url).then((data)=>{
            append(data.data.results,container)

            console.log(data.data)
        });
    }
}

document.getElementById("query").addEventListener("keydown",search)



let categories = document.getElementById("categories").children;


for(let el of categories ){
    el.addEventListener("click",cSearch)

      
    }


   


function cSearch(){

    let id = this.id

    let url  = `https://api.unsplash.com//search/photos?query=${id}&per_page=20&client_id=sgV1xUviyOfuX9p81SmajVfB-yRhQlJD5gtR-h5Ahnw`

    let container = document.getElementById("container")

    let data =  getData(id).then((data)=>{
        append(data.data.results,container)

    });
}


