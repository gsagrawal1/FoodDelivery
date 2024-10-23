
//navbar for shortscreens
const navMenuBar = document.querySelector('.navMenuBar');
const  onclickMenubar = document.querySelector(".onclickMenubar");
navMenuBar.addEventListener("click", () => {

    onclickMenubar.classList.toggle("active");
})

//searchbar 
const searchInput = document.querySelector("#searchInput");
const searchList = [
    "Idli",  
"Dosa",  
"Poha",  
"Upma",  
'Paratha',  
'Samosa' , 
'Pakora'  ,
'Biryani'  ,
'Chole'  ,
'Puri'  ,
'Bhature',  
'Dhokla'  ,
'Vada'  ,
'Paneer' , 
'RoganJosh',  
'Dal'  ,
'Aloo'  ,
'Gobi'  ,
'Jalebi' , 
'GulabJamun'
]
const searchListMenuUl = document.querySelector(".searchListMenuUl");
const searchListMenu = document.querySelector(".searchListMenu");
const inputBar = document.querySelector(".inputBar");
searchInput.addEventListener("keyup", () => {
    const searchValue = searchInput.value.toLowerCase();
    let data = "";
    if((searchInput.value.trim() === '')){
        searchListMenu.style.display = "none";
        inputBar.classList.remove("styleBorder");
    }
    for(let i =0; i<searchList.length ; i++){
        if(searchList[i].toLowerCase().indexOf(searchValue) > -1 && searchInput.value && searchValue.trim() != ' '){
            searchListMenu.style.display = "block";
            inputBar.classList.add("styleBorder");
            data += `<li> ${searchList[i]} </li>`;
        }
    }
    searchListMenuUl.innerHTML = data;
})