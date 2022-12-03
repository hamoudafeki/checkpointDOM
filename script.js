plusbtns = document.getElementsByClassName("plus");
//console.log(plusbtns);

//plus button event
for (let i = 0; i < plusbtns.length; i++) {
  plusbtns[i].addEventListener("click", (eo) => {
    var btn = eo.target;
    //console.log(btn);
    var div = btn.parentElement;
    //console.log(div);
    var p = div.querySelector("p");
    //console.log(p);
    var quantity = Number(p.innerHTML);
    quantity++;
    //console.log(quantity);
    p.innerHTML = quantity;
    //console.log(quantity);
    var tr = div.parentElement.parentElement;
    //console.log(tr);
    var unitPrice = tr.querySelector(".unitPrice");
    //console.log(unitPrice);
    var unitPrice = Number(unitPrice.innerHTML);
    //console.log(unitPrice);
    var sum = unitPrice * quantity;
    //console.log(sum);
    var price = tr.querySelector(".price");
    price.innerHTML = sum;
    calculTotal();
  });
}

minusbtns = document.getElementsByClassName("minus");
//console.log(minusbtns);

//minus button event
for (let i = 0; i < minusbtns.length; i++) {
  minusbtns[i].addEventListener("click", (eo) => {
    var btn = eo.target;
    var div = btn.parentElement;
    var p = div.querySelector("p");
    var quantity = Number(p.innerHTML);
    if (quantity > 0) {
      quantity--;
    }
    //console.log(quantity);
    p.innerHTML = quantity;
    var tr = div.parentElement.parentElement;
    var unitPrice = tr.querySelector(".unitPrice");
    var unitPrice = Number(unitPrice.innerHTML);
    var sum = unitPrice * quantity;
    var price = tr.querySelector(".price");
    price.innerHTML = sum;
    calculTotal();
  });
}

var prices = document.querySelectorAll(".price");
var total = document.getElementById("total");

//somme prices event
function calculTotal() {
  var somme = 0;
  for (let i = 0; i < prices.length; i++) {
    somme += Number(prices[i].innerHTML);
  }
  total.innerHTML = somme;
}

//change like bttuon
var likebtns = document.querySelectorAll(".like");
console.log(likebtns);
for (let i = 0; i < likebtns.length; i++) {
  likebtns[i].addEventListener("click", (eo) => {
    var btn = eo.target;
    //console.log(btn);
    if (btn.style.color != "red") {
      btn.style.color = "red";
    } else btn.style.color = "black";
  });
}

//delete row
var deleteRow = document.querySelectorAll(".delete");
console.log(deleteRow);
for (let i = 0; i < deleteRow.length; i++) {
  deleteRow[i].addEventListener("click", (eo) => {
    var btn = eo.target;
    var tr = btn.parentElement.parentElement.parentElement.parentElement;
    //console.log(tr);
    var price = tr.querySelector(".price");
    price.innerHTML = 0;
    tr.remove();
    calculTotal();
  });
}
