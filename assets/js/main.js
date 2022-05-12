window.onload = () => {
  const links = document.querySelectorAll(
    "#third #custom-container .nav-links ul li a"
  );
  const products = document.querySelector("header #fourth");
  links.forEach((link) => {
    link.addEventListener("mouseover", (e) => {
      products.style.height = "100%";
    });
    link.addEventListener("mouseout", (e) => {
      products.style.height = "0";
    });
  });
  products.addEventListener("mouseover", () => {
    products.style.height = "100%";
  });
  products.addEventListener("mouseout", () => {
    products.style.height = "0";
  });
  const hamburger = document.querySelector(
    "header #third #custom-container .hamburger-menu button"
  );
  const nav = document.querySelector("#fifth");
  const x = document.querySelector(
    "#fifth .custom-container .icons .cus-btn button"
  );
  const sectio1 = document.querySelector("header #first");
  const sectio3 = document.querySelector("header #third");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  hamburger.addEventListener("click", () => {
    nav.style.height = "100vh";
    nav.style.width = "100vw";
    sectio1.style.display = "none";
    sectio3.style.display = "none";
    main.style.display = "none";
    footer.style.display = "none";
  });
  x.addEventListener("click", () => {
    nav.style.height = "0";
    nav.style.width = "0";
    sectio1.style.display = "block";
    sectio3.style.display = "block";
    main.style.display = "block";
    footer.style.display = "block";
  });
};
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// basket
const itemcount = document.querySelector("#itemscount");

(() => {
  const items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

  if (items.length > 0) {
    const countspan = document.createElement("span");
    countspan.innerHTML = items.length;

    itemcount.appendChild(countspan);

    items.forEach((item) => {
      const icon = document.querySelector(`#${item.item.id} > i`);

      icon.classList.add("fa-solid");
      icon.classList.remove("fa-regular");
    });
  }
})();

function toggleItemBasket(id, img, title, price) {
  const icon = document.querySelector(`#${id} > i`);
  const span =
    document.querySelector("#itemscount > span") ??
    document.createElement("span");

  let items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

  if (items.length > 0) {
    if (items.some((item) => item.item.id === id)) {
      items = items.filter((item) => item.item.id !== id);

      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
    } else {
      items.push({
        item: {
          id,
          img: `https://assets.adidas.com/images/${img}`,
          title,
          price,
        },
        count: 1,
      });

      icon.classList.add("fa-solid");
      icon.classList.remove("fa-regular");
    }
  } else {
    items.push({
      item: {
        id,
        img: `https://assets.adidas.com/images/${img}`,
        title,
        price,
      },
      count: 1,
    });

    icon.classList.add("fa-solid");
    icon.classList.remove("fa-regular");
    itemcount.appendChild(span);
  }

  if (items.length === 0) {
    itemcount.removeChild(span);
  } else {
    span.innerHTML = items.length;
  }

  localStorage.setItem("items", JSON.stringify(items));
}

// basket end
