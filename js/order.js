var orderleft_height = $("#order-left").outerHeight();
var orderright_height = $("#order-right").outerHeight();
var maxscroll = orderleft_height - orderright_height;

supportSticky = function () {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  var order_bill = document.getElementById("order-right");

  if (st > 60 && st <= maxscroll) {
    order_bill.classList.add("fixed");
    order_bill.classList.remove("bottomfixed");
  } else if (st > maxscroll) {
    order_bill.classList.add("bottomfixed");
    order_bill.classList.remove("fixed");
  } else {
    order_bill.classList.remove("fixed");
    order_bill.classList.remove("bottomfixed");
  }
};

$(document).ready(function () {
  supportSticky();
});

$(window).scroll(function () {
  supportSticky();
});
