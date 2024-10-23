const menuItems = [
    { name: "Idli", price: 40, description: "Steamed rice cakes, South Indian",url : "https://i.pinimg.com/474x/f4/d5/35/f4d535a76f86f7c909f15cf0457ccbf2.jpg" },
    { name: "Dosa", price: 80, description: "Crispy rice crepe with filling" , url:"https://i.pinimg.com/474x/61/23/74/612374b37b28b6790d6fbcb2ab5e8f82.jpg" },
    { name: "Poha", price: 50, description: "Flattened rice with spices",url:"https://i.pinimg.com/474x/a8/e1/8c/a8e18cbd84eeb6c2f3bc4bdfa51860d7.jpg" },
    { name: "Upma", price: 60, description: "Semolina porridge with vegetables", url:"https://i.pinimg.com/474x/c4/cb/35/c4cb3512cc1550fd03986563d5666f41.jpg" },
    { name: "Paratha", price: 70, description: "Layered flatbread, often stuffed", url:"https://i.pinimg.com/474x/2d/41/1a/2d411adae281d8e22c70ade705a8f4bd.jpg" },
    { name: "Samosa", price: 30, description: "Deep-fried pastry with filling", url:"https://i.pinimg.com/control/474x/e7/ad/34/e7ad343c1060bad6359f1eab5ce42bb5.jpg" },
    { name: "Pakora", price: 50, description: "Crispy fritters made from chickpea",url:"https://i.pinimg.com/474x/d3/0b/99/d30b9985f2bb750c16d582850784696b.jpg" },
    { name: "Biryani", price: 200, description: "Aromatic rice with spices and meat", url:"https://i.pinimg.com/control/474x/2b/64/e1/2b64e15ac11687bb3074b9f7abc87edd.jpg" },
    { name: "Chole", price: 90, description: "Spicy chickpeas in rich gravy",url:"https://i.pinimg.com/474x/91/96/84/919684e0a11b5decbe28001d4dc03e5d.jpg" },
    { name: "Puri", price: 60, description: "Deep-fried puffed Indian bread" , url:"https://i.pinimg.com/474x/e3/f0/df/e3f0df9231653d85ba1e9cde35afb5ae.jpg"},
    { name: "Bhature", price: 100, description: "Fluffy fried bread with chole" ,url:"https://i.pinimg.com/control/474x/69/b1/d6/69b1d61a28a154338e2bccd5d03ae054.jpg" },
    { name: "Dhokla", price: 70, description: "Steamed savory fermented cake", url:"https://i.pinimg.com/474x/81/7e/7d/817e7dd5fe5c623f5e55621d0c9dbb38.jpg" },
    { name: "Vada", price: 40, description: "Savory fritters, typically with lentils", url:"https://i.pinimg.com/474x/b0/89/ad/b089ad220eafd51e100cf2f89e227be2.jpg" },
    { name: "Paneer", price: 150, description: "Fresh cottage cheese in curry",url:"https://i.pinimg.com/control/474x/09/e4/ac/09e4acfe3778136b196f0202b45f49d5.jpg" },
    { name: "RoganJosh", price: 250, description: "Spiced lamb curry, Kashmiri style",url:"https://i.pinimg.com/control/474x/09/e4/ac/09e4acfe3778136b196f0202b45f49d5.jpg" },
    { name: "Dal", price: 80, description: "Lentils cooked with mild spices", url:"https://i.pinimg.com/control/474x/5a/07/cb/5a07cb369504e3c6fc9a31ec2eebfe2b.jpg" },
    { name: "Aloo", price: 50, description: "Spicy potatoes with herbs", url:"https://i.pinimg.com/control/474x/2a/b1/c2/2ab1c206fa218658c354129f8a98cc4a.jpg" },
    { name: "Gobi", price: 60, description: "Cauliflower curry with Indian spices" , url:"https://i.pinimg.com/474x/25/41/9a/25419ac18a28b3c73530bfca4e24722f.jpg"},
    { name: "Jalebi", price: 30, description: "Sweet spirals soaked in syrup",url:"https://i.pinimg.com/control/474x/65/a5/46/65a546fc134637e04cd366f63c1ab2e1.jpg" },
    { name: "GulabJamun", price: 40, description: "Fried dough balls in syrup", url:"https://i.pinimg.com/474x/90/24/ad/9024ad9bf546c08a5affbbe94edd8580.jpg" }
];


const searchLists = document.querySelector(".searchLists");
const searchInput = document.querySelector("#searchInput");
let data = "";
for(let i=0; i< menuItems.length ; i++){
    data += `<div class="searchListItem">
        <div class="searchListItemTop">
        <div class="searchListItemName">
        <span>${menuItems[i].name}</span>
        <span>${menuItems[i].description}</span>
        <span>Rs ${menuItems[i].price}</span>
        </div>
        <div class="addtocartbtnTop">
        <img src="${menuItems[i].url}">
        <div class="addtocartbtn" onclick = "handletotalamount(${i})">
            <span>Add to cart</span>
        </div>
        </div>

        </div>
    </div>`
}
searchLists.innerHTML = data;
searchInput.addEventListener("keyup" , ()=>{
    let searchValue = searchInput.value.toLowerCase();
    if(searchValue && searchValue.trim() === ''){
        searchLists.innerHTML = data;
    }
    let newData = "";
    for(let i=0; i<menuItems.length ; i++){
        if(menuItems[i].name.toLowerCase().indexOf(searchValue) > -1){
            newData += `<div class="searchListItem">
        <div class="searchListItemTop">
        <div class="searchListItemName">
        <span>${menuItems[i].name}</span>
        <span>${menuItems[i].description}</span>
        <span>Rs ${menuItems[i].price}</span>
        </div>
        <div class="addtocartbtnTop">
        <img src="${menuItems[i].url}">
        <div class="addtocartbtn" onclick = "handletotalamount(${i})">
            <span>Add to cart</span>
        </div>
        </div>

        </div>
    </div>`
        }
    }
    searchLists.innerHTML = newData;
})


//handle add cart
const addtocartbtn = document.querySelectorAll(".addtocartbtn");
const addedItems = document.querySelector(".addedItems");
let addItemtoCart = "";
addtocartbtn.forEach((item, index) => {
    item.addEventListener("click", ()=>{
        addItemtoCart += ` <div class="addedItemsInner">
                    <div class="itemAdd">
                        <div class="itemAddName">
                            <span>${menuItems[index].name}</span>
                        </div>
                        <div class="IncDecBtn">
                            <span class="material-symbols-outlined minusBtn" onclick="subbtnclick(event),handleclick()">
                                remove
                                </span>
                            <span class="orderAddCount">1</span>    
                            <span class="material-symbols-outlined addBtn" onclick="addbtnclick(event), handleclick()">
                                add
                            </span>
                        </div>
                    </div>
                    <div class="itemCount">
                        <span>&#8377; <span class="orderValue" >${menuItems[index].price}</span> * <span class="orderAddCountMul">1</span></span>
                        <span class="individualTotal"> ${menuItems[index].price * 1}</span>
                    </div>
                </div>`
    addedItems.innerHTML = addItemtoCart;   
    })
})

const orderAddCount = document.querySelectorAll(".orderAddCount");
const orderAddCountMul = document.querySelectorAll(".orderAddCountMul");
const totalAmount = document.querySelector(".totalAmount");
let orderPlaced = [];
function addbtnclick(event){
    orderPlaced = []
    const IncDecBtn = event.target.parentNode;
    const orderAddCount = IncDecBtn.children[1];
    const parentOfIncDecBtn = IncDecBtn.parentNode;
    const itemCount = parentOfIncDecBtn.nextElementSibling;
    const itemCountChild0 = itemCount.children[0];
    const orderValue = itemCountChild0.children[0];
    const itemCountChild1 = itemCountChild0.children[1];
    const individualTotal =itemCount.children[1];
    let val = parseInt(orderAddCount.innerText);
        val++;
        orderAddCount.innerText = val;
        orderAddCount.innerText = val;
        itemCountChild1.innerText = val;
        let totalIndValue = val * parseInt(orderValue.innerText);
         individualTotal.innerText = totalIndValue;  
}
function subbtnclick(event){
    orderPlaced = []
    const IncDecBtn = event.target.parentNode;
    const orderAddCount = IncDecBtn.children[1];
    const parentOfIncDecBtn = IncDecBtn.parentNode;
    const itemCount = parentOfIncDecBtn.nextElementSibling;
    const itemCountChild0 = itemCount.children[0];
    const orderValue = itemCountChild0.children[0];
    const itemCountChild1 = itemCountChild0.children[1];
    const individualTotal =itemCount.children[1];
    let val = parseInt(orderAddCount.innerText);
        val--;
        orderAddCount.innerText = val;
        orderAddCount.innerText = val;
        itemCountChild1.innerText = val;
        let totalIndValue = val * parseInt(orderValue.innerText);
        individualTotal.innerText = totalIndValue; 

    if(val === 0){
      const mainParent = IncDecBtn.parentNode.parentNode;
      mainParent.remove()
      addItemtoCart = "";
      addItemtoCart += String(addedItems.innerHTML);
    }    
}

function handleclick() {
    const IndItemTotVal = document.querySelectorAll(".individualTotal");
    let total = 0;
    IndItemTotVal.forEach(item => {
        total += parseInt(item.innerHTML);
    })
    totalAmount.innerHTML = total + ".00";
}

function handletotalamount(index){
    totalAmount.innerHTML = parseInt(totalAmount.innerHTML) + menuItems[index].price + ".00";
}

const clearBtn = document.querySelector(".clearBtn");
const orderBtn = document.querySelector(".orderBtn");
clearBtn.addEventListener("click", () =>{
    addedItems.innerHTML = '';
    addItemtoCart = "";
    totalAmount.innerHTML = "0.00";
})
const successfulmsg = document.querySelector(".successfulmsg");

orderBtn.addEventListener("click", ()=>{
    if(totalAmount.innerHTML > 0){
        successfulmsg.classList.add("active");
        setInterval(()=>{
            successfulmsg.classList.remove("active");  
        },4000)
    }
    const addedItemsInner = document.querySelectorAll(".addedItemsInner");
    const itemAddName = document.querySelectorAll(".itemAddName");
    const orderAddCount = document.querySelectorAll(".orderAddCount");
    const individualTotal = document.querySelectorAll(".individualTotal");
    addedItemsInner.forEach((item, index) => {
        let obj = {
            name : itemAddName[index].innerText,
            quantity : orderAddCount[index].innerText,
            price : individualTotal[index].innerText,
        }
        orderPlaced.push(obj)
    })
    console.log(orderPlaced)

    localStorage.order = JSON.stringify(orderPlaced);
})





