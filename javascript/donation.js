var onPayment = false;

var payment = {
    fieldSet: '<fieldset id="payment"></fieldset>',
    legend: '<legend id="">Payment Details</legend>',
    cardName: "<label class='details' for='name'>Name</label><input class='details' type='text' name='name' id='name'>",
    cardContainer: "<fieldset id='cards'></label>",    
    cardRow: '<div class="row" id="cardRow"></div>',
    cardColumn: "<div class='col-3 cardCols'></div>",
    card1: "<label class='cardLabel'><input name='credit' value='amex' type='radio' required/><img src='card_amex.png' alt='American Express' /></label>",
    card2: '<label class="cardLabel"><input name="credit" value="discover" type="radio"/><img src="card_discover.png" alt="Discover" /></label>',
    card3: '<label class="cardLabel"><input name="credit" value="master" type="radio"/><img src="card_master.png" alt="MasterCard" /></label>',
    card4: '<label class="cardLabel"><input name="credit" value="visa" type="radio"/><img src="card_visa.png" alt="Visa" /></label>',
    cardNumber: '<label for="cardNumber">Credit Card Number*</label><input name="cardNumber" id="cardNumber" required type="text"pattern="^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$"/>',
    expirationDate: '<label for="expMonth">Expiration Date*</label><select id="expMonth" name="expMonth"><option value="mm">mm</option><option value="01">01</option><option value="01">02</option><option value="01">03</option><option value="01">04</option><option value="01">05</option><option value="01">06</option><option value="01">07</option><option value="01">08</option><option value="01">09</option><option value="01">10</option><option value="01">11</option><option value="01">12</option></select><span> / </span><select id="expYear" name="expYear"><option value="yy">yy</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option></select>',
    cvc: '<label for="cvc">CVC*</label><input name="cvc" id="cvc" required pattern="^\d{3,4}$" type="text"/>',
    backButton: '<input type="button" name="backButton" id="backButton" value="Back">',
    createPayment: function() {
        onPayment = true;
        $("#details").remove();
        document.getElementById("inputs").innerHTML = payment.fieldset;
        document.getElementById("payment").innerHTML = payment.legend + payment.cardName + payment.cardContainer + payment.cardNumber + payment.expirationDate + payment.cvc;
        document.getElementById("cards").innerHTML = payment.cardRow;
        document.getElementById("cardRow").innerHTML = payment.cardColumn + payment.cardColumn + payment.cardColumn + payment.cardColumn;
        for (var i = 0; i < document.getElementsByClassName("cardCols").length; i++) {
            document.getElementsByClassName("cardCols")[i].innerHTML = payment.card + [i]; 
        };
        document.getElementById("backSpace").innerHTML = payment.backButton;
        document.getElementById("")
        // $("#inputs").append(payment.fieldSet).append(payment.legend, payment.cardName, payment.cardContainer, payment.cardNumber, payment.expirationDate, payment.cvc);
        // $("#cards").append(payment.cardRow)
        // $("#cardRow").append(payment.cardColumn, payment.cardColumn, payment.cardColumn, payment.cardColumn);
        // $(".cardCols")[0].append(payment.card1);
        // $(".cardCols")[1].append(payment.card2);
        // $(".cardCols")[2].append(payment.card3);
        // $(".cardCols")[3].append(payment.card4);
        // $("#backSpace").append(payment.backButton);
        // $("#submitButton").value = "Submit";
    }
};

var details = {
    fieldset: '<fieldset id="details"></fieldset>',
    legend: '<legend>Donation Details</legend>',
    donation: '<label class="details" for="donationAmount">Donation Amount</label><input class="details" type="number" name="donationAmount" id="donationAmount">',
    name: '<label class="details" for="name">Name</label><input class="details" type="text" name="name" id="name">',
    date: '<input class="details" type="text" name="date" id="date">',
    createDetails: function() {
        onPayment = false;
        $("#payment").remove();
        $("#inputs").append(details.fieldset).append(details.legend, details.donation, details.name, details.date);
        $("#backButton").remove();
        $("#submitButton").value = "Next";
    }
};

$("#submitButton").click(function() {
    if (onPayment === false) {
        payment.createPayment();   
    }
});

$("#backButton").click(function() {
    details.createDetails();
});