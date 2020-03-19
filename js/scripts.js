function pizzaParlor() {
    this.orders = [],
        this.currentId = 0
}

pizzaParlor.prototype.addOrder = function (pizza) {
    pizza.id = this.assignId();
    this.orders.push(pizza);
}
pizzaParlor.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
}

// 


function pizza(name, size, toppings, price) {
    this.name = name,
        this.size = size,
        this.toppings = toppings,
        this.price = price
};

//
var sizeMath = function (inputtedSize) {
    if (inputtedSize === "L") {
        sizePrice = 20
    } if (inputtedSize === "M") {
        sizePrice = 15
    } if (inputtedSize === "S") {
        sizePrice = 8
    }
}
var pizzaParlor = new pizzaParlor();

function displayAccountDetails(pizzaToDisplay) {
    var orderList = $("ul#output");
    var htmlForpizzaInfo = "";
    pizzaToDisplay.orders.forEach(function (pizza) {
        htmlForpizzaInfo += "<li id=" + pizza.id + ">" + pizza.name + " " + pizza.size + " size pizza" + " $" + pizza.price + " Toppings: " + pizza.toppings + " ";
    });
    orderList.html(htmlForpizzaInfo);
};


$(document).ready(function () {
    $("form#new-order").submit(function (event) {
        event.preventDefault();
        let inputtedName = $("input#new-name").val();
        let inputtedSize = $("input:radio[name=size]:checked").val()
        let inputtedToppings = [];
        $("input:checkbox[name=toppings]:checked").each(function () {
            inputtedToppings.push($(this).val());
        });
        sizeMath(inputtedSize);
        var computedPrice = inputtedToppings.length + sizePrice;
        var newPizza = new pizza(inputtedName, inputtedSize, inputtedToppings, computedPrice);
        pizzaParlor.addOrder(newPizza);
        displayAccountDetails(pizzaParlor);
        $('input[type=checkbox]').prop('checked', false);
        document.getElementById('new-name').value = '';
    });
});