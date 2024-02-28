const btnEl = document.getElementById("btn");
const animeConEl = document.querySelector(".anime-container");
const animeImg = document.querySelector(".anime-img");
const animeName = document.querySelector(".name");


btnEl.addEventListener("click",async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeName.innerText ="Updating...";
        animeImg.src = "Rolling-1s-200px.svg";

        const apiUrl = "https://api.catboys.com/img";
        const res =  await fetch(apiUrl);
        const data = await res.json();
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeConEl.style.display = "block";
        animeImg.src = data.url;
        animeName.innerText = data.artist;
        console.log(data);

        
    } catch (error) {
        console.log(error);
        btnEl.disabled = true;
        btnEl.innerText = "Get Anime";
        animeName.innerText ="an error happen. Try again...";
        
    }
})