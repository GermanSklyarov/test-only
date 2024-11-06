export function calcTop(degrees: number, index: number) {
  const angle = degrees * (index - 1) * (Math.PI / 180) + 2.1; // перевод в радианы
  return 530 / 2 - Math.sin(angle) * (530 / 2) - 3; // тригонометрия и определение синуса
}

export function calcLeft(degrees: number, index: number) {
  const angle = degrees * (index - 1) * (Math.PI / 180) + 2.1;
  return 530 / 2 - Math.cos(angle) * (530 / 2) - 3;
}

export function animateCounter(
  numberFrom: number,
  numberTo: number,
  callback: Function
) {
  setTimeout(() => {
    if (numberFrom === numberTo) return;
    const nextNumber = numberFrom > numberTo ? numberFrom - 1 : numberFrom + 1;
    callback(nextNumber);
  }, 20);
}
