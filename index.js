var itemName = [
  "peanut",
  "smiley",
  "tuna",
  "blueberry frosted",
  "dpcb",
  "hot vanilla latte",
  "beef pastrami",
  "ice cool",
  "thai tea",
  "strawberry marble pink",
  "peanut butter",
  "es teh"
];
var itemPrice = [
  10000, 12000, 45000, 30000, 20000, 12000, 15000, 13000, 22000, 35000, 40000, 10000
];
var itemPict = [
  "donut_peanut_frosted.jpg",
  "donuts_smiley.jpg",
  "CS_tuna.jpg",
  "donuts_blueberryfrosted.jpg",
  "donuts_DPCB.jpg",
  "hot_vanilla_latte.jpg",
  "BS_beefpastrami.jpg",
  "donut_icy_cool_blueberry.jpg",
  "thai_tea.jpg",
  "strawberry_marble_pink.jpg",
  "choc_peanut_butter.jpg",
  "esteh.png"
];

var listItem = document.getElementById("item-list");
function showListItem() {
  listItem.innerHTML = "";
  for (let i = 0; i < itemName.length; i++) {
    listItem.innerHTML +=
      '<div class="card float-left my-3 me-2" style="width: 7.8rem;" onclick="addListItem(' +
      i +
      ')">' +
      '<img src="img/' +
      itemPict[i] +
      '" width="75" height="75" class="mx-auto d-block">' +
      '<div class="card-body">' +
      '<h6 class="card-title">' +
      itemName[i] +
      "</h6>" +
      '<p class="card-text mt-1 text-primary"><b>Rp. ' +
      itemPrice[i] +
      "</b></p>" +
      "</div>" +
      "</div>";
  }
}
showListItem();

var itemNameCart = [];
var itemPriceCart = [];
function addListItem(id) {
  itemNameCart.push(itemName[id]);
  itemPriceCart.push(itemPrice[id]);
  showListCart();
}

var listCart = document.getElementById("list-cart");
var showDiscount = document.getElementById("discount");
var showTax = document.getElementById("tax");
var showQuantity = document.getElementById("quantity");
var showTotal = document.getElementById("total");

var diskon;
var tagihan;
var totalHarga;
var totalBayar;
var totalBelanja;

function showListCart() {
  var totalHarga = 0;
  var totalBayar = 0;

  listCart.innerHTML = "";

  for (let i = 0; i < itemNameCart.length; i++) {
    listCart.innerHTML +=
      '<div class="card mt-3 mb-3">' +
      '<div class="card-body">' +
      '<div class="row">' +
      '<div class="col-4 m-3">' +
      '<h5 class="card-title gold">' +
      itemNameCart[i] +
      "</h5>" +
      '<p class="card-text"><span>Rp. ' +
      itemPriceCart[i] +
      "</span></p>" +
      "</div>" +
      '<div class="col-4 pt-3">' +
      '<button class="btn float-right" onclick="deleteItem(' +
      i +
      ')">' +
      '<i class="bi bi-trash text-danger"></i>' +
      "</button>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";

    totalHarga = itemPriceCart[i] + totalHarga;
  }

  totalBayar = totalHarga;
  tagihan = totalBayar * 0.1;

  if (totalBayar > 20000) {
    diskon = totalBayar * 0.1;
  } else {
    diskon = 10;
  }

  showQuantity.innerHTML = itemNameCart.length;
  showDiscount.innerHTML = totalBayar;
  showTax.innerHTML = tagihan;
  showTotal.innerHTML = totalBayar + tagihan;
  totalBelanja = totalBayar + tagihan - diskon;
}

function searchItem() {
  var searchInput = document.getElementById("searchInput").value.toLowerCase();
  var items = document.querySelectorAll(".card[data-itemname]");

  items.forEach(function (item) {
    var itemName = item.getAttribute("data-itemname").toLowerCase();
    if (itemName.includes(searchInput)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function showListItem() {
  listItem.innerHTML = "";
  for (let i = 0; i < itemName.length; i++) {
    listItem.innerHTML +=
      '<div class="card float-left my-3 me-2" style="width: 7.8rem;" onclick="addListItem(' +
      i +
      ')" data-itemname="' +
      itemName[i] +
      '">' +
      '<img src="img/' +
      itemPict[i] +
      '" width="75" height="75" class="mx-auto d-block">' +
      '<div class="card-body">' +
      '<h6 class="card-title">' +
      itemName[i] +
      "</h6>" +
      '<p class="card-text mt-1 text-primary"><b>Rp. ' +
      itemPrice[i] +
      "</b></p>" +
      "</div>" +
      "</div>";
  }
}

var listTable = document.getElementById("table-list");

function deleteItem(id) {
  itemNameCart.splice(id, 1);
  itemPriceCart.splice(id, 1);

  showListCart();
}

var namaproduk = [];
var hargaproduk = [];
var disk = [];
var pajak = [];
var jmlh = [];

var listTable = document.getElementById("table-list");

function showData() {
  listTable.innerHTML = "";

  for (i = 0; i < namaproduk.length; i++) {
    listTable.innerHTML +=
      "<tr>" +
      "<td>" +
      namaproduk[i] +
      "</td>" +
      "<td>" +
      hargaproduk[i] +
      "</td>" +
      // "<td>" +
      // disk[i] +
      // "</td>" +
      "<td>" +
      pajak[i] +
      "</td>" +
      "<td>" +
      jmlh[i] +
      "</td>" +
      "</tr>";
  }
}
showData();

function add() {
  namaproduk.push(itemNameCart[i]);
  hargaproduk.push(itemPriceCart[i]);
  disk.push(diskon);
  pajak.push(tagihan);
  jmlh.push(totalBelanja);

  showData();
}
