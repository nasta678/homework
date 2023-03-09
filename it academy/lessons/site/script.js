var cards = [
    {
        imgURL: "images/1item.png",
        brand: "Niche:&nbsp;",
        description: "Nightshade Snowboard - Women's - 2019/2020",
        cost: "$ 398.93",
        oldcost: "$ 499.00",
        hello: "helloooo",
        },
    {
        imgURL: "images/4item.png",
        brand: "Niche:&nbsp;",
        description: "Nightshade Snowboard - Women's - 2019/2020",
        cost: "$ 398.93",
        oldcost: "$ 499.00",
        },     
        
    {
        imgURL: "images/1item.png",
        brand: "Niche:&nbsp;",
        description: "Nightshade Snowboard - Women's - 2019/2020",
        cost: "$ 398.93",
        oldcost: "$ 499.00",
        }
]

var div = document.querySelector('.container2');
var htmlStr = '';

for (var i=0; i<cards.length; i++) {
    htmlStr += `
    <div class="snowboards">
        <div>
        <img class="itempicture" src="${cards[i].imgURL}">
        </div>
        <div class="brand">Niche:&nbsp;</div>
        <div class="description">Nightshade Snowboard - Women's - 2019/2020</div>
        <div class="cost">$ 398.93</div>
        <div class="oldcost"><s>$ 499.00</s></div>
        <div class="stars"><img src="images/stars.png"></div>
        <div>${cards[i].hello}</div>
        </div>
    `
}

div.innerHTML = htmlStr