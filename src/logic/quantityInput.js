function calculateQuantity(qty) {
  let quantity;

  qty.whole = parseFloat(qty.whole);
  qty.numerator = parseInt(qty.numerator, 10);
  qty.denominator = parseInt(qty.denominator, 10);

  if (qty.whole >= 0 && qty.numerator >= 0 && qty.denominator > 0) {
    if (!qty.isFraction) {
      quantity = qty.whole;
    } else {
      if (qty.denominator) {
        quantity = qty.whole + qty.numerator / qty.denominator;
      }
    }
  }

  return quantity;
}

export default calculateQuantity;
