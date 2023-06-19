let menu = document.querySelector("#menu-bar");
let sidebar = document.querySelector(".sidebar-top2");

menu.onclick =() =>{
    menu.classList.toggle('fa-time');
    sidebar.classList.toggle('active');
}

// window.onscroll=()=>{
//     if (window.scrollY > 60) {
//         document.querySelector('#up').classList.add('active');
//     } else {
//         document.querySelector('#up').classList.remove('active');
//     }
// }