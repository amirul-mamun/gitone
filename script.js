console.log('its working!');

let btn = document.querySelector("#btn")

let remove = () => {
    
    btn.classList.add("rm")
    console.log("element removed!");
    
    
}

btn.addEventListener("click", remove)

let obj = {
    name: "mamun",
    age: 15,
    status: "Active",

    walk(d){
        console.log(`Wallked for ${d}`); 
    },

    speak(s){
        console.log(`speaked for ${s}`); 
    }
}
