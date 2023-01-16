var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var searchInput = document.getElementById("searchInput");

var productContainer;
if (localStorage.getItem("productsList") != null) {
    productContainer = JSON.parse(localStorage.getItem("productsList"));
    displayProduct();
} else {
    productContainer = [];
}

function addProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        categroy: productCategory.value,
        desc: productDesc.value,
    };
    productContainer.push(product);
    localStorage.setItem("productsList", JSON.stringify(productContainer))
    displayProduct();
    clearProduct();
    console.log(productContainer);
}

function clearProduct() {
    productName.value = '';
    productPrice.value = '';
    productCategory.value = '';
    productDesc.value = '';
}

function displayProduct() {
    var cartoona = "";
    for (var i = 0; i < productContainer.length; i++) {
        cartoona += `<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].categroy}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick="updateProduct(${i})"  class="btn btn-outline-warning">تعديل</button></td>
        <td><button onclick="deletProduct(${i})" class="btn btn-outline-danger">حذف</button></td>

    </tr>`

    }
    document.getElementById("tBody").innerHTML = cartoona;
}

function deletProduct(index) {
    productContainer.splice(index, 1);
    localStorage.setItem("productsList", JSON.stringify(productContainer))

    displayProduct();

}

function serechProduct() {
    var term = searchInput.value;
    var cartoona = "";
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {

            cartoona += `<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].categroy}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick="updateProduct(${i})"  class="btn btn-outline-warning">تعديل</button></td>
        <td><button onclick="deletProduct(${i})" class="btn btn-outline-danger">حذف</button></td>

    </tr>`
        }
    }
    document.getElementById("tBody").innerHTML = cartoona;
}

function updateProduct(term) {
    productName.value = productContainer[term].name;
    productPrice.value = productContainer[term].price;
    productCategory.value = productContainer[term].categroy;
    productDesc.value = productContainer[term].desc;
    deletProduct();
}

function visitUrl() {}