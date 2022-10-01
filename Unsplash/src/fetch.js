// let fetchUrl = async (value)=>{
//  let url = `https://api.unsplash.com//search/photos?query=${value}&per_page=20&client_id=sgV1xUviyOfuX9p81SmajVfB-yRhQlJD5gtR-h5Ahnw`
//     let res = await fetch(url);
//     let data = await res.json()
//     return data;
//     console.log(data);

// }



import axios from "axios"

async function getData(url){
    
let data = await axios.get( url);
return data;

}


let append = (data,container) =>{

    container.innerHTML = null

    data.forEach(({alt_description ,urls:{small}})=> {
        
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src= small

        let desc = document.createElement("h5")
        desc.innerText = alt_description

        div.append(image,desc)
        container.append(div)

    });      

}

export {getData,append};