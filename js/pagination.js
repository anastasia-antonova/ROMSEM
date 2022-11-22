const baseArr = [
    {name: "Aаломон сет 1", image:"img_1.png", price:1500, kg:120, peace: 8 },
    {name: "Bаломон сет 2", image:"img_2.png", price:1475, kg:120, peace: 47},
    {name: "Aаломон сет 3", image:"img_3.png", price:1473, kg:120, peace: 10},
    {name: "Dаломон сет 4", image:"img_4.png", price:1559, kg:200, peace: 37},
    {name: "Eаломон сет 5", image:"img_5.png", price:1519, kg:120, peace: 10},
    {name: "Iаломон сет 6", image:"img_6.png", price:1465, kg:458, peace: 43},
    {name: "Dаломон сет 7", image:"img_7.png", price:1539, kg:456, peace: 3},
    {name: "Саломон сет 8", image:"img_8.png", price:1443, kg:120, peace: 2},
    {name: "Саломон сет 9", image:"img_9.png", price:143, kg:120, peace: 5},
    {name: "Саломон сет 10", image:"img_10.png", price:1500, kg:120, peace: 40},
    {name: "Aаломон сет 11", image:"img_11.png", price:144, kg:547, peace: 60},
    {name: "Саломон сет 12", image:"img_12.png", price:1439, kg:290, peace: 430},
    {name: "Саломон сет 13", image:"img_13.png", price:1569, kg:120, peace: 70},
    {name: "Vаломон сет 14", image:"img_14.png", price:1519, kg:120, peace: 10},
    {name: "Sаломон сет 15", image:"img_15.png", price:1439, kg:456, peace: 40},
    {name: "Саломон сет 16", image:"img_16.png", price:1559, kg:120, peace: 10},
    {name: "Саломон сет 17", image:"img_17.png", price:1479, kg:120, peace: 20},
    {name: "Cаломон сет 18", image:"img_18.png", price:1449, kg:231, peace: 30},
    {name: "Саломон сет 19", image:"img_19.png", price:1543, kg:93, peace: 30},
    {name: "Саломон сет 20", image:"img_20.png", price:1429, kg:40, peace: 10},
    {name: "Саломон сет 21", image:"img_21.png", price:1489, kg:564, peace: 80},
    {name: "Dаломон сет 22", image:"img_22.png", price:1559, kg:120, peace: 10},
    {name: "Саломон сет 23", image:"img_23.png", price:1519, kg:120, peace: 10},
    {name: "Саломон сет 24", image:"img_24.png", price:1469, kg:120, peace: 60},
    {name: "Саломон сет 25", image:"img_25.png", price:1559, kg:120, peace: 10},
    {name: "Саломон сет 26", image:"img_26.png", price:1479, kg:120, peace: 50},
    {name: "Саломон сет 27", image:"img_27.png", price:1499, kg:120, peace: 10},
    {name: "Саломон сет 28", image:"img_28.png", price:1500, kg:120, peace: 77},
    {name: "Саломон сет 29", image:"img_29.png", price:1489, kg:769, peace: 10},
    {name: "Саломон сет 30", image:"img_30.png", price:1409, kg:120, peace: 65},
    {name: "Саломон сет 31", image:"img_31.png", price:1509, kg:120, peace: 10},
    {name: "Саломон сет 32", image:"img_32.png", price:15619, kg:120, peace: 10},
    {name: "Саломон сет 33", image:"img_33.png", price:14669, kg:423, peace: 84},
    {name: "Саломон сет 34", image:"img_34.png", price:15759, kg:120, peace: 70},
    {name: "Саломон сет 35", image:"img_35.png", price:1479, kg:120, peace: 54},
    {name: "Саломон сет 36", image:"img_36.png", price:1499, kg:120, peace: 10},
    {name: "Саломон сет 37", image:"img_37.png", price:1500, kg:494, peace: 94},
    {name: "Саломон сет 38", image:"img_38.png", price:1439, kg:120, peace: 20},
    {name: "Саломон сет 39", image:"img_39.png", price:1429, kg:120, peace: 40},
    {name: "Саломон сет 40", image:"img_40.png", price:1559, kg:120, peace: 310},
    {name: "Саломон сет 41", image:"img_41.png", price:1519, kg:365, peace: 32},
    {name: "Саломон сет 42", image:"img_42.png", price:1469, kg:120, peace: 90},
    {name: "Саломон сет 43", image:"img_43.png", price:1569, kg:324, peace: 43},
    {name: "Саломон сет 44", image:"img_44.png", price:1479, kg:120, peace: 70},
    {name: "Саломон сет 45", image:"img_45.png", price:1419, kg:120, peace: 90},
]

let workingArr = baseArr;
const perPage = 9;
let active = 1;
const pageCount = Math.ceil(baseArr.length / perPage);

function paginationInit() {
    const pageCount = Math.ceil(workingArr.length / perPage);

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
    workingArr.slice(from, to).forEach((value, index) => {
        html += `
        
        <div class="item">
            <img src="image/${value.image}" alt="hjh">
          <div class="content-item">
            <h3>${value.name}</h3>
            <p>${value.kg} грамм, ${value.peace} кусочков</p>
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

    if(active === 1) {
        buttonLeft.style.visibility = 'hidden';
    } else {
        buttonLeft.style.visibility = 'visible';
    }
    if(active === pageCount) {
        buttonRight.style.visibility = 'hidden';
    } else {
        buttonRight.style.visibility = 'visible';
    }

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

let input = document.querySelector('input');
function search() {
    const inputSearch = document.getElementById("textSearch").value;
    console.log(inputSearch)
    workingArr = baseArr.filter(value => value.name.includes(inputSearch))
    showSlice(1);

}

function inputBlur() {
    search()
}

function resetValue () {
    input.value = "";
    workingArr = baseArr;
    showSlice(1);
    const buttonClose = document.getElementById("closeV")
    buttonClose.classList.remove('show-btn');

    input.addEventListener('keydown', logKey);
    function logKey() {
        buttonClose.classList.remove('show-btn');
    }
}

function inputFocus() {
    if (input.value.length) {
        const buttonClose = document.getElementById("closeV")
        buttonClose.classList.add('show-btn');
    }

}

function selectPrice() {
    console.log((document.getElementById("sort").value))
    switch (document.getElementById("sort").value) {
        case "0":
            console.log('0', baseArr)
            workingArr = baseArr;
            break;
        case "1":
            workingArr = [...workingArr].sort((a, b) => {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            });
            break;
        case "2":
            workingArr = [...workingArr].sort((a, b) => {
                if (a.price > b.price) {return 1;}
                if (a.price < b.price) {return -1;}
                return 0;
            });
            break;
        case "3":
            workingArr = [...workingArr].sort((a, b) => {
                if (a.price > b.price) {return -1;}
                if (a.price < b.price) {return 1;}
                return 0;
            });
            break;
        case "4":
            workingArr = [...workingArr].sort((a, b) => {
                if(a.peace < b.peace) { return -1; }
                if(a.peace > b.peace) { return 1; }
                return 0;
            });
            break;
        case "5":
            workingArr = [...workingArr].sort((a, b) => {
                if(a.kg < b.kg) { return -1; }
                if(a.kg > b.kg) { return 1; }
                return 0;
            });
            break;
        default:
            workingArr = baseArr;
            break;
    }

    showSlice(1);
    // if(sortType) {
    //
    //     baseArr.sort((a, b) => {
    //         if (a.price > b.price) {
    //             if (sortType === 'lower') {
    //                 return 1;
    //             } else if (sortType === 'higher') {
    //                 return -1;
    //             }
    //         }
    //         if (a.price < b.price) {
    //             if (sortType === 'lower') {
    //                 return -1;
    //             } else if (sortType === 'higher') {
    //                 return 1;
    //             }
    //         }
    //         return 0;
    //     });
    // }
}

let body = document.querySelector('body');

    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for (i = 0; i<arrow.length; i++){
        let thisLink= arrow[i].previousElementSibling;
        let thisArrow= arrow[i];
        let subMenu = arrow[i].nextElementSibling;

        thisLink.classList.add('parent')
       arrow[i].addEventListener('click', function(){
           subMenu.classList.toggle('open');
           thisArrow.classList.toggle('active');
       })
    }

function selectcha(n) {
    console.log(document.querySelectorAll(".sub-menu__link"));
    let fu = document.getElementById("fu");
    fu.classList.remove('open');
    switch (n) {
        case 0:
            console.log('0', baseArr);
            workingArr = baseArr;

            break;
        case 1:
            workingArr = [...workingArr].sort((a, b) => {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            });
            break;
        case 2:
            workingArr = [...workingArr].sort((a, b) => {
                if (a.price > b.price) {return 1;}
                if (a.price < b.price) {return -1;}
                return 0;
            });
            break;
        case 3:
            workingArr = [...workingArr].sort((a, b) => {
                if (a.price > b.price) {return -1;}
                if (a.price < b.price) {return 1;}
                return 0;
            });
            break;
        case 4:
            workingArr = [...workingArr].sort((a, b) => {
                if(a.peace < b.peace) { return -1; }
                if(a.peace > b.peace) { return 1; }
                return 0;
            });
            break;
        case 5:
            workingArr = [...workingArr].sort((a, b) => {
                if(a.kg < b.kg) { return -1; }
                if(a.kg > b.kg) { return 1; }
                return 0;
            });
            break;
        default:
            workingArr = baseArr;
            break;

    }

    showSlice(1);
    // if(sortType) {
    //
    //     baseArr.sort((a, b) => {
    //         if (a.price > b.price) {
    //             if (sortType === 'lower') {
    //                 return 1;
    //             } else if (sortType === 'higher') {
    //                 return -1;
    //             }
    //         }
    //         if (a.price < b.price) {
    //             if (sortType === 'lower') {
    //                 return -1;
    //             } else if (sortType === 'higher') {
    //                 return 1;
    //             }
    //         }
    //         return 0;
    //     });
    // }
}

let select = function () {
        let selectItem = document.querySelectorAll(".sub-menu__link");

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        })
    function selectChoose() {
            let text = this.innerText;
            currentText = this.closest('.custom-menu').querySelector('.select_current');
            currentText.innerText = text;
    }
}

select();

 function close() {
     fu.classList.remove('open');
 }

 function openSide() {
     const siteBar = document.getElementById('aside');
     const button = document.getElementById("buttonSide");
     siteBar.classList.toggle('closeSide')
 }

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });


}
function showBannerImage(index) {
    const arrBanner = [
        {img:"image/banner.png"},
        {img:"image/banner1.png"},
        {img:"image/banner2.png"},
        {img:"image/banner3.png"},
        {img:"image/banner4.png"},
    ]
    const content = document.querySelector(".banner");
    let html = "";
    arrBanner.slice(1).forEach((value, index) => {
        html += `
        
        <div class="item">
            <img src="image/${value.image}" alt="hjh">
     
        </div>`
    });
    content.innerHTML = html;
}
