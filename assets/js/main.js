window.onload = () =>{
    const links = document.querySelectorAll("#third #custom-container .nav-links ul li a");
    const products = document.querySelector("header #fourth");
    links.forEach((link) =>{
        link.addEventListener("mouseover",(e) =>{
            products.style.height = "100%";
        });
        link.addEventListener("mouseout",(e) =>{
            products.style.height = "0";
        });
    });
    products.addEventListener("mouseover", () =>{
        products.style.height = "100%";
    });
    products.addEventListener("mouseout", () =>{
        products.style.height = "0";
    });
    const hamburger = document.querySelector("header #third #custom-container .hamburger-menu button");
    const nav = document.querySelector("#fifth");
    const x = document.querySelector("#fifth .custom-container .icons .cus-btn button");
    const sectio1 = document.querySelector("header #first");
    const sectio3 = document.querySelector("header #third");
    const main  = document.querySelector("main");
    const footer = document.querySelector("footer");
    hamburger.addEventListener("click", () =>{
        nav.style.height = "100vh";
        nav.style.width = "100vw";
        sectio1.style.display = "none";
        sectio3.style.display = "none";
        main.style.display = "none";
        footer.style.display = "none";
    });
    x.addEventListener("click", () =>{
        nav.style.height = "0";
        nav.style.width = "0";
        sectio1.style.display = "block";
        sectio3.style.display = "block";
        main.style.display = "block";
        footer.style.display = "block";
    });
};
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})