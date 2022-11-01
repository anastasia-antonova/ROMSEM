const baseArr = [
    {name: "Саломон сет", image:"img_1.png", price:1500},
    {name: "Саломон сет", image:"img_2.png", price:1499},
    {name: "Саломон сет", image:"img_3.png", price:1499},
    {name: "Саломон сет", image:"img_4.png", price:1559},
    {name: "Саломон сет", image:"img_5.png", price:1519},
    {name: "Саломон сет", image:"img_6.png", price:1469},
    {name: "Саломон сет", image:"img_7.png", price:1559},
    {name: "Саломон сет", image:"img_8.png", price:1479},
    {name: "Саломон сет", image:"img_9.png", price:1499},
    {name: "Саломон сет", image:"img_10.png", price:1500},
    {name: "Саломон сет", image:"img_11.png", price:1499},
    {name: "Саломон сет", image:"img_12.png", price:1499},
    {name: "Саломон сет", image:"img_13.png", price:1559},
    {name: "Саломон сет", image:"img_14.png", price:1519},
    {name: "Саломон сет", image:"img_15.png", price:1469},
    {name: "Саломон сет", image:"img_16.png", price:1559},
    {name: "Саломон сет", image:"img_17.png", price:1479},
    {name: "Саломон сет", image:"img_18.png", price:1499},
    {name: "Саломон сет", image:"img_19.png", price:1500},
    {name: "Саломон сет", image:"img_20.png", price:1499},
    {name: "Саломон сет", image:"img_21.png", price:1499},
    {name: "Саломон сет", image:"img_22.png", price:1559},
    {name: "Саломон сет", image:"img_23.png", price:1519},
    {name: "Саломон сет", image:"img_24.png", price:1469},
    {name: "Саломон сет", image:"img_25.png", price:1559},
    {name: "Саломон сет", image:"img_26.png", price:1479},
    {name: "Саломон сет", image:"img_27.png", price:1499},
    {name: "Саломон сет", image:"img_28.png", price:1500},
    {name: "Саломон сет", image:"img_29.png", price:1499},
    {name: "Саломон сет", image:"img_30.png", price:1499},
    {name: "Саломон сет", image:"img_31.png", price:1559},
    {name: "Саломон сет", image:"img_32.png", price:1519},
    {name: "Саломон сет", image:"img_33.png", price:1469},
    {name: "Саломон сет", image:"img_34.png", price:1559},
    {name: "Саломон сет", image:"img_35.png", price:1479},
    {name: "Саломон сет", image:"img_36.png", price:1499},
    {name: "Саломон сет", image:"img_37.png", price:1500},
    {name: "Саломон сет", image:"img_38.png", price:1499},
    {name: "Саломон сет", image:"img_39.png", price:1499},
    {name: "Саломон сет", image:"img_40.png", price:1559},
    {name: "Саломон сет", image:"img_41.png", price:1519},
    {name: "Саломон сет", image:"img_42.png", price:1469},
    {name: "Саломон сет", image:"img_43.png", price:1559},
    {name: "Саломон сет", image:"img_44.png", price:1479},
    {name: "Саломон сет", image:"img_45.png", price:1499},
]
const perPage = 9;
let active = 1;
const pageCount = Math.ceil(baseArr.length / perPage);

function paginationInit() {
    const returnArr = [];
    for (let j = 1; j <= pageCount; j++) {
        returnArr.push(j);
    }
    return returnArr;
}

function showSlice(page) {
    active = page ;
    const to = active * perPage;
    const from = to - perPage;

    const content = document.querySelector(".boxes");
    let html = "";
    baseArr.slice(from, to).forEach((value, index) => {
        html += `
        
        <div class="item">
            <img src="image/${value.image}" alt="hjh">
          <div class="content-item">
            <h3>${value.name}</h3>
            <p>1050 грамм, 30 кусочков</p>
            <div class="buy">
                <p class="price">${value.price} СОМ</p>
                <button>Хочу!</button>
            </div>
          </div> 
           
        </div>`
    });
    content.innerHTML = html;

    showPaginationButtons();
    const buttonLeft = document.querySelector('.left');
    const buttonRight = document.querySelector('.right');

}
function showPaginationButtons() {
    // const paginator = document.querySelector(".pagination-content");
    // let page = "";
    // paginationInit().forEach(value => {
    //     page += `<button onclick="showSlice(${value})">${value}</button>`;
    // })
    // paginator.innerHTML = page;
    const paginator = document.querySelector(".pagination-content");
    let page = "";

    paginationInit()

        .forEach(value => {
            if (value) {
                page += `<button onclick="showSlice(${value})">${value}</button>`;
            }
        });

    // [1, 2, false, 8]


    //     .forEach((value, index, array) => {
    //     console.log("index");
    //     console.log(index);
    //     console.log(active);
    //
    //     if(index === 0) {
    //         page += `<button onclick="showSlice(${value})">${value}</button>`;
    //     } else if(index === (array.length - 1)) {
    //         page += `<button onclick="showSlice(${value})">${value}</button>`;
    //     } else if ((index + 1) === active) {
    //         page += `<button onclick="showSlice(${value})">${value}</button>`;
    //     } else if ((index + 1) === (active + 1)) {
    //         page += `<button onclick="showSlice(${value})">${value}</button>`;
    //     } else if ((index + 1) === (active - 1)) {
    //         page += `<button onclick="showSlice(${value})">${value}</button>`;
    //     } else {
    //         page += `<button>...</button>`;
    //     }
    // });
    paginator.innerHTML = page;
    checkActive();
}
showSlice(1);
showPaginationButtons();

function checkActive() {
    const paginator = document.querySelector(".pagination-content");
    for (let i = 0; i < paginator.children.length; i++) {
        console.log(active, paginator.children[i].innerHTML);
        if(active === +paginator.children[i].innerHTML) {
            paginator.children[i].classList.add("active");
        } else {
            paginator.children[i].classList.remove("active");
        }
    }
}

function leftButton() {
    active--;
    showSlice(active);
    showPaginationButtons();
}
function rightButton() {
    active++;
    showSlice(active);
    showPaginationButtons();
}


