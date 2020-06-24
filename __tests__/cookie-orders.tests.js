import { CookieOrder, Cookie } from '../src/cookie-orders.js';

describe('CookieOrder', () => {
  let reusableOrder;
  let reusableCookie;
  beforeEach(() => {
    reusableOrder = new CookieOrder();
    reusableCookie = new Cookie(2, "Chocolate Chip");
  });


  test('should show how beforeEach() works', () => {
    console.log(reusableOrder, reusableCookie)
  });

  test('should correctly create a cookie with a size and type', () => {
    expect(reusableCookie.size).toBe(2);
    expect(reusableCookie.type).toBe("Chocolate Chip");
  });

  test('should correctly update cookie price depending on size and type', () => {
    // We will do our planning phase here, which is out "red" phase. 
    // If size is 2, maybe price should be 2.00
    // If type is Chocolate Chip, add one dollar
    reusableCookie.updatePrice();
    expect(reusableCookie.price).toBe(3.00)
  });

  test('should correctly add a cookie to the order', () => {
    // RED planning phase



    reusableOrder.addCookie(reusableCookie)
    expect(reusableOrder.cookies).toContain(reusableCookie);

  })

});