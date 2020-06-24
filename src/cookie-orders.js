// SPECS (they are here just for clarity)
// A user should be able to construct a cookie of size and type | input: size/type | output: cookie.size != null, cookie.type != null
// A user should be able to add a cookie to their order. | input: cookie | output: order [ cookie ]
// A user should be able to select various types of cookies | input: cookie.type[i] | output: order[cookie.type[i]]
// Each cookie should have a variable price depending on the cookie type. | input: cookie.type[i] | output: cookie.price != cookie.price of cookie.type[y]
// An order should calculate the total price of the order of cookies | input: order[cookies] | output: order.totalPrice = x


// Logic for my order!
export function CookieOrder() {
  this.cookies = [];
  this.totalPrice = 0;
}

CookieOrder.prototype.addCookie = function (cookie) {
  this.cookies.push(cookie)
}

CookieOrder.prototype.findTotalPrice = function () {

}


// Logic for my cookie!
export function Cookie(size, type) {
  this.size = size;
  this.type = type;
  this.price = 1; // This will change
}

Cookie.prototype.updatePrice = function () {
  // If size is 2, maybe price should be 2.00
  // If type is Chocolate Chip, add one dollar

  switch (this.size) {
    case 1:
      this.price = 1.0;
      break;
    case 2:
      this.price = 2.0;
      break;
    case 3:
      this.price = 3.0;

    default:
      this.price = 1.0
      break;
  }

  switch (this.type) {
    case "Chocolate Chip":
      this.price += 1;
      break;
    default:
      this.price += 0;
      break;
  }



}
// A function we might need is to find the price of the cookie. They aren't all the same, after all!

