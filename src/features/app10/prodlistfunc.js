
export function Tempsum(props) {
  let tempsum = props.pays;
  return tempsum.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.sum/100;
  }, 0);
}
export function Tovari(props) {
  let temppos = props.names;
  return temppos
    .map(function (item) {
      return item.name;
    })
    .join(", ");
}
export function Quantity(props) {
  let temppos = props.position;
  return temppos.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.quantity;
  }, 0);
}
export function Payornot(props) {
  let pays = props.pays;
  let sum = props.sum;
  let status = '';
  let x = pays.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.sum;
  }, 0);

  if (x === sum) {
    status = "Оплачено";
  } else if (sum === 0) {
    status = "Нет оплаты";
  } else {
    status = "Недоплата";
  }
  return status;
}
