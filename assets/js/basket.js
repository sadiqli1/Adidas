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
      const icon = document.querySelector(`#${item.id} > i`);

      icon.classList.add("fa-solid");
      icon.classList.remove("fa-regular");
    });
  }
})();

function toggleItemBasket(id) {
  const icon = document.querySelector(`#${id} > i`);
  const span =
    document.querySelector("#itemscount > span") ??
    document.createElement("span");

  console.log(span);

  let items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

  if (items.length > 0) {
    if (items.some((item) => item.id === id)) {
      items = items.filter((item) => item.id !== id);

      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
    } else {
      items.push({
        id,
        count: 1,
      });

      icon.classList.add("fa-solid");
      icon.classList.remove("fa-regular");
    }
  } else {
    items.push({
      id,
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
