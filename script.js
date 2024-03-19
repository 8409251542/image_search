let srcBtn = document.getElementById("btn");
let hdnBtn =document.getElementById("hide");

let page =1;
srcBtn.addEventListener('click',getImage);
let imgContain = document.getElementById("imagecontainer")

async function getImage(){
    let vlue = document.getElementById("default-search").value;
    let data=await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${vlue}&client_id=mxC1VKPkeltpuIjANSzP9MuNl-KE4BRYe-sAfjZOHUI`).then(res=>res.json());
    console.log(data);
    for (let i = 0; i <10; i++){
        let div = document.createElement("div");
        let url =data.results[i].urls.raw;
        let image = document.createElement("img");
        image.className="h-auto max-w-full rounded-lg";
        image.src=url;
        div.appendChild(image);
        imgContain.appendChild(div);
    }
    // data.results.forEach(element => {
    //     let div = document.createElement("div");
    //     div.innerHTML=`123`
    //     imgContain.appendChild(div);
    // });
    page++;
}
