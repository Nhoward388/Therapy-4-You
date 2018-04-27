var payment = {
    legend: '<legend id="">Details of Donation</legend>',
    cardName: "<label class='details' for='name'>Name</label><input class='details' type='text' name='name' id='name'>",
    cardColumn: "<div class='col-3'></div>",
    cardContainer: "<fieldset id='cards'></label>",
    card1: '<label class="cardLabel"><input name="credit" value="amex" type="radio" required/><img src="card_amex.png" alt="American Express" /></label>',
    card2: '<label class="cardLabel"><input name="credit" value="discover" type="radio"/><img src="card_discover.png" alt="Discover" /></label>',
    card3: '<label class="cardLabel"><input name="credit" value="master" type="radio"/><img src="card_master.png" alt="MasterCard" /></label>',
    card4: '<label class="cardLabel"><input name="credit" value="visa" type="radio"/><img src="card_visa.png" alt="Visa" /></label>',
    cardNumber: '<label for="cardNumber">Credit Card Number*</label><input name="cardNumber" id="cardNumber" required type="text"pattern="^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$"/>'
    
    backButton: '<input type="button" name="submitButton" id="submitButton" value="Next">'
}

$("#submitButton").click(function() {
    $(".details").replaceAll
})