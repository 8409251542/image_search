let srcBtn = document.getElementById("btn");
let hdnBtn =document.getElementById("hide");


hdnBtn.style.display="block";
srcBtn.addEventListener('click',getImage);

async function getImage(){
    hdnBtn.style.visibility="visible";
    let vlue = document.getElementById("default-search").value;
    console.log("ravi");
    let data=await fetch("https://pixabay.com/api/?key=42944467-fc9b19e36a7665abf678eec82&q="+encodeURIComponent(vlue)).then(res=>res.json());
    console.log(data);
}