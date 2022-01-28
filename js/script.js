const hamburgerBtn = document.querySelector('.hamburger_btn');
const sidebar = document.querySelector('.sidebar_area');
hamburgerBtn.addEventListener('click', ()=>{
    sidebar.classList.toggle("show");
})