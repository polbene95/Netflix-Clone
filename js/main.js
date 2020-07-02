const tabsItems = document.querySelectorAll(".tabs-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

tabsItems.forEach((item) => item.addEventListener("click", selectItem));

function selectItem(ev) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add("tabs-border");
  // Grab contenty item from DOM
  const tabContentItem = document.getElementById(`${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabsItems.forEach((item) => item.classList.remove("tabs-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
