$("#hoodieSubmit").click(function() {
    var amount = $("#hoodieAmount option:selected");
    var cost = amount * 50;
    window.open("order.html", "order.html", "width=600,height=400");    
    document.getElementById("value").innerHTML = "$" + cost;
});

$("#bottleSubmit").click(function() {
    var order = window.open("order.html", "order.html", "width=600,height=400");
    order.document.getElementById("value").innerText = function() {
        var amount = $("#bottleAmount option:selected").val();
        var cost = amount * 10;
    };
    order.document.getElementById("value").innerHTML = "$" + cost;
});

$("#sleeveSubmit").click(function() {
    var order = window.open("order.html", "order.html", "width=600,height=400");
    order.document.getElementById("value").innerText = function() {
        var amount = $("#sleeveAmount option:selected").val();
        var cost = amount * 40;
    };
    order.document.getElementById("value").innerHTML = "$" + cost;
});

$("#mugSubmit").click(function() {
    order.document.getElementById("value").innerText = function() {
        var amount = $("#mugAmount option:selected").val();
        var cost = amount * 5;
    };
    order.document.getElementById("value").innerHTML = "$" + cost;
});