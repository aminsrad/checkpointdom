var total = Number(document.getElementById("total").innerHTML);
var addbtn = document.querySelectorAll(".do_add");
// plus btn
for (let btn of addbtn) {
  btn.addEventListener("click", function () {
    let price = Number(btn.parentNode.children[1].children[0].innerHTML);
    console.log(price)
    let qty = Number(btn.previousElementSibling.innerHTML);
    qty++;
    btn.previousElementSibling.innerHTML = qty;
    total += price;
    document.getElementById("total").innerHTML = total;
  });
}
var unaddbtn = document.querySelectorAll(".undo_add");
// minus btn
for (let btn of unaddbtn) {
  btn.addEventListener("click", function () {
    let price = Number(btn.parentNode.children[1].children[0].innerHTML);
    let qty = Number(btn.nextElementSibling.innerHTML);
    if (qty > 0) {
      qty--;
      btn.nextElementSibling.innerHTML = qty;
      total -= price;
      document.getElementById("total").innerHTML = total;
    }
  });
}
// delete btn
var deleteBtns = document.querySelectorAll(".delete-btn");
console.log(deleteBtns);
for (let btn of deleteBtns) {
  btn.addEventListener("click", function () {
    let price = Number(btn.parentNode.children[1].children[0].innerHTML);
    let qty = Number(
      btn.previousElementSibling.previousElementSibling.innerHTML
    );
    total -= price * qty;
    document.getElementById("total").innerHTML = total;
    console.log(total);

    btn.parentNode.remove();
  });
}
// like btns
var likeBtns = document.querySelectorAll(".like-btn");
console.log(likeBtns);
for (let btn of likeBtns) {
  btn.addEventListener("click", function () {
    if (btn.style.color == "gainsboro") {
      btn.style.color = "red";
    } else {
      btn.style.color = "gainsboro";
    }
  });
}
