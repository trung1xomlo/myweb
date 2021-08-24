//all
const selectAll = document.querySelector.bind(document);
const selectAlls = document.querySelectorAll.bind(document); 

//form-registion

const open_registration = selectAll('.js-log-in');
const form_registration = selectAll('.form_registration');
const close_registration = selectAll('.form-close');
const registration_bubbleSort = selectAll('.form');

open_registration.addEventListener('click',() => {
    form_registration.classList.add('form_registration2');
});

close_registration.addEventListener('click', () => {
    form_registration.classList.remove('form_registration2');
});

form_registration.addEventListener('click', () => {
    form_registration.classList.remove('form_registration2');
});
registration_bubbleSort.addEventListener('click', (event) => {
    event.stopPropagation();
})

const form = document.getElementById('form1');
const fullName = document.getElementById('fullname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_confirmation = document.getElementById('password_confirmation');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    checkInputs();
});

function checkInputs(){
    const fullNameValue = fullName.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password_confirmationValue = password_confirmation.value.trim();

    if(fullNameValue === ''){
        setErrorFor(fullName, 'Tên người dùng không được để trống!');
    }
    else{
        setSuccessFor(fullName);
    }

    if(phoneValue === ''){
        setErrorFor(phone, 'Số điện Thoại không được để trống!');
    }
    else{
        setSuccessFor(phone);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email không được để trống!');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email không hợp lệ (@gmail.com)!');
    }
    else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password,'Mật khẩu không chính xác, vui lòng nhập lại!');
    }
    else{
        setSuccessFor(password);
    }

    if(password_confirmationValue === ''){
        setErrorFor(password_confirmation, 'Vui lòng nhập lại mật khẩu!')
    }
    else if(password_confirmationValue !== passwordValue){
        setErrorFor(password_confirmation, 'Nhập lại mật khẩu không đúng!')
    }
    else{
        setSuccessFor(password_confirmation);
    }
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const p = formControl.querySelector('p');

    p.innerText = message;

    formControl.className = 'form-dki error';

}
function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = 'form-dki success';

}
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// form-login

const open_login = selectAll('.js-login');
const form_login = selectAll('.login');
const close_login = selectAll('.login-close');
const login_bubbleSort = selectAll('.form2');   

open_login.addEventListener('click',() => {
    form_login.classList.add('login2');
});

close_login.addEventListener('click', () =>{
    form_login.classList.remove('login2');
});

form_login.addEventListener('click',() => {
    form_login.classList.remove('login2');
});
login_bubbleSort.addEventListener('click', (event) => {
    event.stopPropagation();
})

const form2 = document.getElementById('form2');
const text = document.getElementById('text');
const password1 = document.getElementById('password1');

form2.addEventListener('submit', (event) => {
    event.preventDefault();

    checkInputLogin();
})
function checkInputLogin(){
    const textValue = text.value.trim();
    const password1Value = password1.value.trim();

    if(textValue === ''){
        setErrorLogin(text);
    }
    else{
        setSuccesslogin(text);
    }

    if(password1Value === ''){
        setErrorLogin(password1);
    }
    else{
        setSuccesslogin(password1);
    }

}

function setErrorLogin(input){
    const form2Control = input.parentElement; 
    
    form2Control.className = ('secson-login error');
    
} 

function setSuccesslogin(input){
    const form2Control = input.parentElement;   

    form2Control.className = ('secson-login success');
}

//time

function time() {
    let today = new Date();
    let weekday=new Array(7);
    weekday[0]='Sunday';
    weekday[1]='Monday';
    weekday[2]='Tuesday';
    weekday[3]='Wednesday';
    weekday[4]='Thursday';
    weekday[5]='Friday';
    weekday[6]='Saturday';
    let day = weekday[today.getDay()];
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    nowTime = h+':'+m+':'+s;
    if(dd<10){dd='0'+dd}
    if(mm<10){mm='0'+mm}
    today = day+', '+ yyyy+'/'+mm+'/'+dd;
    tmp='<span class="date">'+today+' | '+nowTime+'</span>';

    selectAll('.clock').innerHTML=tmp;

    clocktime=setTimeout('time()','1000','JavaScript');
    function checkTime(i)
    {
    if(i<10){
    i='0' + i;  
    }
    return i;
    }
}

//slider-menu

const slider = selectAll('.slider');
const next = selectAll('.click-right');
const back = selectAll('.click-left');
const slides = selectAlls('.slide');
const slideIcons = selectAlls('.slide-icon')
const numberOfSlides = slides.length;
var slideNumber = 0;

next.addEventListener('click', () =>  {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideIcons.forEach((slideIcons) => {
        slideIcons.classList.remove('active');
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active')
});

back.addEventListener('click', () =>  {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideIcons.forEach((slideIcons) => {
        slideIcons.classList.remove('active');
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active')
});

var autoSlider = () => {
    playSlider = setInterval (() => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove('active');
        });
    
        slideNumber++;
    
        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add('active');
        slideIcons[slideNumber].classList.add('active')
    }, 4000)
}
autoSlider();

slider.addEventListener('mouseover', () => {
    clearInterval(playSlider);
});

slider.addEventListener('mouseout', () => {
    autoSlider();
});

//menu_question

const open_menu_phone = selectAll('.header-menu-left');
const add_menu_phone = selectAll('.main-menu-left');
const close_menu_phone = selectAll('.stop_meu_phone')

open_menu_phone.addEventListener('click', () => {
    add_menu_phone.classList.add('open-menu-left')
});
close_menu_phone.addEventListener('click', () => {
    add_menu_phone.classList.remove('open-menu-left')
});

var open_menu_question = selectAll('.open-menu-question');
var main_menu_question = selectAll('.write-question');
var close_menu_question = selectAll('.close-menu-question');
var open_menu_question2 = selectAll('.open-menu-question2');

open_menu_question.addEventListener('click', () => {
    main_menu_question.classList.add('write-question2');
})
close_menu_question.addEventListener('click', () => {
    main_menu_question.classList.remove('write-question2');
}) 
open_menu_question2.addEventListener('click', () => {
    main_menu_question.classList.add('write-question2')
})

//buy-products

var open_products = selectAlls('.open-product');
var main_product = selectAll('.add-product');
var close_product = selectAll('.close-product');
var bubbleSort_product = selectAll('.main-form-product')

open_products.forEach((open_product) => {
    open_product.onclick = () => {
        main_product.classList.add('form-product2')
    }
})
close_product.addEventListener('click', () => {
    main_product.classList.remove('form-product2')
    
})
main_product.addEventListener('click', () => {
    main_product.classList.remove('form-product2')
})
bubbleSort_product.addEventListener('click', (event) => {
    event.stopPropagation();
})

// change-infomation-product

const open_changes = selectAlls('.change-parameter');
const change_parameters = selectAlls('.change-infomation');

open_changes.forEach((open_change, index) => {

    const change_parameter = change_parameters[index];

    open_change.onclick = () => {
        selectAll('.animation-parameter').classList.remove('animation-parameter');
        selectAll('.parameter').classList.remove('parameter');

        open_change.classList.add('animation-parameter');
        change_parameter.classList.add('parameter');
    }
})

//change-img

const change_icons = selectAlls('.change-icon');
const change_imgs = selectAlls('.change-img');

change_icons.forEach((change_icon,index) => {


    const change_img = change_imgs[index];

    change_icon.onclick = () => {
        selectAll('.img-active').classList.remove('img-active');
        change_img.classList.add('img-active');
    }
});

// change-3product

const change_categorys = selectAlls('.change-category');
const change_products = selectAlls('.change-products');

change_categorys.forEach((change_category,index) => {


    const change_product = change_products[index];

    change_category.onclick = () => {
        selectAll('.change-ss-ip').classList.remove('change-ss-ip');
        change_product.classList.add('change-ss-ip');
    }
}); 

//new-tap-product

const new_tap_product = selectAll('.last-main-product');

new_tap_product.onclick = () => {
    location.href='./buy-product.html';
}

//
