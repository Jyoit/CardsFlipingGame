const cardArray = [
    {
        name: 'Capsicum',
        img: 'https://cdn.shopaccino.com/rootz/products/picture7-982509_m.jpg?v=503'
    },
    {
        name: 'PineApple',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCb4R-qeiriwsmIEh3YCrpdWPfcYCffWEB3Q&usqp=CAU'
    },
    {
        name: 'Flower',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCeAM9B0MNswt_gyDm22vCZ3PD0GhjJ9Bliw&usqp=CAU'
    },
    {
        name: 'Oranges',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLuGTZcBPYvgrIIcrX1ChnQacD7C7qTPPnzg&usqp=CAU'
    },
    {
        name: 'Peacock',
        img: 'https://lifencolors.in/cdn/shop/products/d4050a_65144dceec714a87b7e9dd88abb477e7_mv2_b753fbfd-f51f-4e5c-8c77-53683964ba04.jpg?v=1693806813'
    },
    {
        name: 'Strawberry',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XCw_hBFFHKdrlDfI_5aQyQj3CbHZgFlBEw&usqp=CAU'
    },
    {
        name: 'Tiger',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl19U8qMAxoIsbVV4LQNwUUAC0D56IvcpsAw&usqp=CAU'
    },
    {
        name: 'Dragon_Fruit',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9I5k1Toor2C_xAvTakuhRQBYehcrrCWv-w&usqp=CAU'
    },
    {
        name: 'Grapes',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbpf_N3YrQcclYEcL6TI5vzqac9hbNEQAnw&usqp=CAU'
    },
    {
        name: 'Juice',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9neCCDnxT5fuWGocNLy1upPIg_TNAf-X-A&usqp=CAU'
    },
    {
        name: 'Kiwi',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWC7LgOSFMz-lD0HFrLf3P3xr_GROGxe9Krh20btlsWLqH1PjzKg59WjV5NrabuEPFOo&usqp=CAU'
    },
    {
        name: 'Pear',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgP29CaPSpy337VjTMepZpYpmAXKIyCALZiw&usqp=CAU'
    },
    {
        name: 'Watermelon',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGfAiOHc6b7yEVlS49xjRdjnfqzwbaE4xRQ&usqp=CAU'
    },
    {
        name: 'Capsicum',
        img: 'https://cdn.shopaccino.com/rootz/products/picture7-982509_m.jpg?v=503'
    },
    {
        name: 'PineApple',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCb4R-qeiriwsmIEh3YCrpdWPfcYCffWEB3Q&usqp=CAU'
    },
    {
        name: 'Flower',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCeAM9B0MNswt_gyDm22vCZ3PD0GhjJ9Bliw&usqp=CAU'
    },
    {
        name: 'Oranges',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLuGTZcBPYvgrIIcrX1ChnQacD7C7qTPPnzg&usqp=CAU'
    },
    {
        name: 'Peacock',
        img: 'https://lifencolors.in/cdn/shop/products/d4050a_65144dceec714a87b7e9dd88abb477e7_mv2_b753fbfd-f51f-4e5c-8c77-53683964ba04.jpg?v=1693806813'
    },
    {
        name: 'Strawberry',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XCw_hBFFHKdrlDfI_5aQyQj3CbHZgFlBEw&usqp=CAU'
    },
    {
        name: 'Tiger',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl19U8qMAxoIsbVV4LQNwUUAC0D56IvcpsAw&usqp=CAU'
    },
    {
        name: 'Dragon_Fruit',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9I5k1Toor2C_xAvTakuhRQBYehcrrCWv-w&usqp=CAU'
    },
    {
        name: 'Grapes',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbpf_N3YrQcclYEcL6TI5vzqac9hbNEQAnw&usqp=CAU'
    },
    {
        name: 'Juice',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9neCCDnxT5fuWGocNLy1upPIg_TNAf-X-A&usqp=CAU'
    },
    {
        name: 'Kiwi',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWC7LgOSFMz-lD0HFrLf3P3xr_GROGxe9Krh20btlsWLqH1PjzKg59WjV5NrabuEPFOo&usqp=CAU'
    },
    {
        name: 'Pear',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgP29CaPSpy337VjTMepZpYpmAXKIyCALZiw&usqp=CAU'
    },
    {
        name: 'Watermelon',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGfAiOHc6b7yEVlS49xjRdjnfqzwbaE4xRQ&usqp=CAU'
    }
    
];
let tileID=[];
let tilename=[];
const totalCardsWon=[];
cardArray.sort(() => 0.5 - Math.random());
const grid = document.getElementById('grid');
const resultDisplay = document.querySelector('#result');

function gameBoard() {
    for (let i = 0; i < cardArray.length; i++) {
       const tile = document.createElement('img');
        console.log(tile);
        tile.setAttribute('data-id', i);
        tile.setAttribute('src', 'tile.png');
        tile.addEventListener("click",fliptile);
        grid.appendChild(tile);
    }
}

function checkForResult(){
    let tileFirstID=tileID[0];
    let tileSecondID=tileID[1];
    let tileFirstName=tilename[0]; 
    let tileSecondName=tilename[1];
    const tiles=document.querySelectorAll('#grid img');
    if(tileFirstID===tileSecondID){//if you click on the same image tha it will alert the message that you had choosen the same image
        alert("!!You clicked on the same tile");
        tiles[tileID[0]].setAttribute('src', 'tile.png')
        tiles[tileID[1]].setAttribute('src', 'tile.png')
    }
    else if(tileFirstName===tileSecondName){
        
        tiles[tileFirstID].setAttribute('src','wall.png');
        tiles[tileSecondID].setAttribute('src','wall.png');
        tiles[tileFirstID].removeEventListener("click",fliptile);
        tiles[tileSecondID].removeEventListener("click",fliptile);
        totalCardsWon.push(tilename);
    }
    else{//if you click on the wrong image 
        
        tiles[tileID[0]].setAttribute('src', 'tile.png')
        tiles[tileID[1]].setAttribute('src', 'tile.png')
        
    }
    tilename=[];
    tileID=[];
    resultDisplay.textContent=totalCardsWon.length;
    if(totalCardsWon.length===cardArray.length/2){
        resultDisplay.innerHTML="Congratulations You Turn All Cards";
    }
}
function fliptile(){
    
    const tiledataID=this.getAttribute("data-id");
    console.log("clicked at ID",tileID);
     tilename.push(cardArray[tiledataID].name);
     tileID.push(tiledataID);
     console.log(tilename);
    this.setAttribute('src',cardArray[tiledataID].img);

    if(tilename.length===2){

        setTimeout(checkForResult,500);//in this function will execute after 0.5 seconds

    }
}
gameBoard();

