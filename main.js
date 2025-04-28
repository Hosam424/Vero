
const nav = document.querySelector("nav")
const menu_icon = document.querySelector(".menu-icon")
const links = document.querySelector(".links")
menu_icon.addEventListener("click",()=>{
    links.classList.toggle("active")
    if(links.classList.contains("active")){
      menu_icon.classList.add("active")
    }else{
      menu_icon.classList.remove("active")
    }
})
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed:1000,
    loop:true,
    autoplay:{
      delay:1000,
      dynamicBullests: true,
    }
  });

  // validation
  const form = document.getElementById("form");
  const firstname = document.getElementById("firstname")
  const email = document.getElementById("email")
  const phone = document.getElementById("phone")
  const date = document.getElementById("date")
  function showError(input , message){
    const form_control = input.parentElement;
    form_control.className = "form-control error";
    const span = form_control.querySelector(".form-control span")
    span.innerText = message;
  }
  function showSuccess(input){
    const form_control = input.parentElement;
    form_control.className = "form-control";

  }
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(firstname.value.trim() === "")
    {
      showError(firstname,"Enter Your Name")
    }else{
      showSuccess(firstname)
    }
    if(email.value.trim() === "")
    {
      showError(email,"Enter Your Email")
    }else{
      showSuccess(email)
    }
    if(phone.value.trim() === "")
    {
      showError(phone,"Enter Your Phone Number")
    }
    else if(phone.value.trim().length < 11)
    {
      showError(phone,"Enter a Valid Phone Number")
    }
    else{
      showSuccess(phone)
    }
    if(date.value.trim() === "")
    {
      showError(date,"Enter a Valid Date")
    }else{
      showSuccess(date)
    }
  })
  