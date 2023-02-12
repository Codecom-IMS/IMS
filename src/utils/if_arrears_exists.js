function ifArrearsExists(PrevArrears, details) {
  if (PrevArrears) {
    const fee = parseInt(details.basic_fee);
    const others = parseInt(details.others);
    const lastarrears = parseInt(PrevArrears.arrears);
    let totalAmountToPay = fee + others + lastarrears;
    details.arrears = totalAmountToPay - details.current_paid_fee;
  } else {
    const fee = parseInt(details.basic_fee);
    const others = parseInt(details.others);
    let totalAmountToPay = fee + others;
    details.arrears = totalAmountToPay - details.current_paid_fee;
  }
  return details;
}
module.exports = ifArrearsExists;
