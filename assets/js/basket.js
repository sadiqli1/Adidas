(() => {
  const items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

  if (items.length > 0) {
    items.forEach((item) => {
      const icon = document.querySelector(`#${item.id} > i`);

      icon.classList.add("fa-solid");
      icon.classList.remove("fa-regular");
    });
  }
})();

function toggleItemBasket(id) {
  const icon = document.querySelector(`#${id} > i`);

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
  }

  localStorage.setItem("items", JSON.stringify(items));
}
