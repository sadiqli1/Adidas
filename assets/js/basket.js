const container = document.querySelector(".basket-container");
const totalPriceContainer = document.querySelector(".price-container > span");

const itemParser = () =>
  localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

const decreaseItemCount = (id) => {
  let items = itemParser();

  items = items
    .map((item) => {
      if (item.item.id === id) {
        if (item.count > 1) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
      } else {
        return item;
      }
    })
    .filter(Boolean);

  localStorage.setItem("items", JSON.stringify(items));

  renderContent();
};

const increaseItemCount = (id) => {
  let items = itemParser();

  items = items.map((item) => {
    if (item.item.id === id) {
      if (item.count < 10) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
    }

    return item;
  });

  localStorage.setItem("items", JSON.stringify(items));

  renderContent();
};

const renderCounter = (parentElement, id, count) => {
  const counterContainer = document.createElement("div");
  const minus = document.createElement("button");
  const plus = document.createElement("button");
  const countSpan = document.createElement("span");

  counterContainer.classList.add("counter");

  minus.innerHTML = "-";
  plus.innerHTML = "+";

  minus.addEventListener("click", () => {
    decreaseItemCount(id);
  });

  plus.addEventListener("click", () => {
    increaseItemCount(id);
  });

  countSpan.innerHTML = count;

  counterContainer.appendChild(minus);
  counterContainer.appendChild(countSpan);
  counterContainer.appendChild(plus);

  parentElement.appendChild(counterContainer);
};

const renderContent = () => {
  const items = itemParser();

  if (items.length > 0) {
    let totalPrice = 0;
    container.innerHTML = "";

    items.forEach(({ count, item: { img, title, id, price } }) => {
      const divItem = document.createElement("div");
      const imgElement = document.createElement("img");
      const text = document.createElement("span");
      const priceText = document.createElement("span");

      imgElement.src = img;
      text.innerHTML = title;
      priceText.innerHTML = `${price} AZN`;

      totalPrice += price * count;

      divItem.classList.add("item");

      divItem.appendChild(imgElement);
      divItem.appendChild(text);
      divItem.appendChild(priceText);

      container.appendChild(divItem);

      renderCounter(divItem, id, count);
    });

    totalPriceContainer.innerHTML = `${totalPrice} AZN`;
  } else {
    container.innerHTML = "Your basket is empty";
    totalPriceContainer.innerHTML = ``;
  }
};

renderContent();

window.addEventListener("storage", renderContent);
