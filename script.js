// function to increase the quantity
const increaseQuantity = (incdec, itemprice) => {
  let itemVal = document.getElementById(incdec);
  let itemPrice = document.getElementById(itemprice);
  let productAmount = document.getElementById("product_total_amt");
  let shippingCharge = document.getElementById("shipping_charge").innerHTML;
  let totalPrice = document.getElementById("total_cart_amt");

  if (itemVal.value >= 0 && itemVal.value < 5) {
    //   if count is greater than 0 and smaller than 5
    itemVal.value++;
    itemVal.style.background = "white";
    itemVal.style.color = "black";

    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) + 15;

    productAmount.innerHTML = parseInt(productAmount.innerHTML) + 15;

    totalPrice.innerHTML =
      parseInt(shippingCharge) + parseInt(productAmount.innerHTML);
  } else if (itemVal.value >= 5) {
    //if count is equal to greater than 5
    itemVal.value = 5;
    alert("Quantity cannot be more than 5");
    itemVal.style.background = "red";
    itemVal.style.color = "white";
  }
};

// function to increase the quantity
const decreaseQuantity = (incdec, itemprice) => {
  let itemVal = document.getElementById(incdec);
  let itemPrice = document.getElementById(itemprice);
  let productAmount = document.getElementById("product_total_amt");
  let shippingCharge = document.getElementById("shipping_charge").innerHTML;
  let totalPrice = document.getElementById("total_cart_amt");

  if (itemVal.value <= 0) {
    // if count is equal to or smaller than 0
    itemVal.value = 0;
    alert("Quantity cannot be less than 0");
    itemVal.style.background = "red";
    itemVal.style.color = "white";
  } else if (itemVal.value >= 0 && itemVal.value <= 5) {
    // if count is greater or equal to 0 and smaller than or equal to 5
    itemVal.value--;
    itemVal.style.background = "white";
    itemVal.style.color = "black";

    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 15;

    productAmount.innerHTML = parseInt(productAmount.innerHTML) - 15;

    totalPrice.innerHTML =
      parseInt(shippingCharge) + parseInt(productAmount.innerHTML);
  }
};

// flag for discount applied
let discountApplied = false;

//handle function for applying discount
const discountCode = () => {
  let discountCodeInput = document.getElementById("discount_code");
  let discountCode = discountCodeInput.value;
  let error = document.getElementById("error_trw");

  let totalPrice = document.getElementById("total_cart_amt");

  // if user input correct code for first time
  if (discountCode === "aniket" && !discountApplied) {
    totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - 15;
    discountApplied = true;
    error.innerHTML = "Hurray! you save $15";
    error.style.color = "green";
  } else if (discountCode !== "aniket" && !discountApplied) {
    //if user input invalid code
    error.innerHTML = "Try again! Invalid code";
    error.style.color = "red";
  } else if (discountApplied) {
    //if user wants to apply the discount more than once
    error.innerHTML = "Discount code already applied";
    error.style.color = "red";
  }
};


// remove item from cart
const removeItem = (itemId) => {
  const item = document.getElementById(itemId);
  item.remove();
};
