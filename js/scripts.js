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

pizzaParlor.prototype.addToppings = function (inputtedToppings) {
    for (i = 0; i < inputtedToppings.length; i++) {
        console.log(inputtedToppings[i]);
        return $(inputtedToppings[i]).val();
    }
}


function pizza(name, size, toppings, price) {
    this.name = name,
        this.size = size,
        this.toppings = toppings,
        this.price = price
}

var pizzaParlor = new pizzaParlor();

function displayAccountDetails(pizzaToDisplay) {
    var orderList = $("ul#output");
    var htmlForpizzaInfo = "";
    pizzaToDisplay.orders.forEach(function (pizza) {
        htmlForpizzaInfo += "<li id=" + pizza.id + ">" + pizza.name + " " + pizza.size + " size pizza" + " $" + pizza.price + "</li>";
    });
    orderList.html(htmlForpizzaInfo);
};


$(document).ready(function () {
    $("form#new-order").submit(function (event) {
        event.preventDefault();
        let inputtedName = $("input#new-name").val();
        let inputtedSize = $("input:radio[name=size]:checked").val();
        let inputtedToppings = $("input:checkbox[name=toppings]:checked").get();
        let toppingsPrice = inputtedToppings.length;
        let sizePrice;
        let inputtedToppings1 = pizzaParlor.addToppings(inputtedToppings);


        console.log(inputtedToppings1)
        if (inputtedSize === "L") {
            sizePrice = 20
        } if (inputtedSize === "M") {
            sizePrice = 15
        } if (inputtedSize === "S") {
            sizePrice = 8
        }
        var computedPrice = toppingsPrice + sizePrice;

        console.log(sizePrice);
        console.log(toppingsPrice)
        console.log(computedPrice)


        var newPizza = new pizza(inputtedName, inputtedSize, inputtedToppings, computedPrice);
        pizzaParlor.addOrder(newPizza);
        displayAccountDetails(pizzaParlor);
        $('input[type=checkbox]').prop('checked', false);
        document.getElementById('new-name').value = '';
        console.log(pizzaParlor.orders);



    });
});






