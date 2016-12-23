
function cleanRut(value) {
  return typeof value === 'string' ? value.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
}

export function rutValidate(value) {
  if (typeof value !== 'string') return false;

  const rut = cleanRut(value);
  let rutDigits = parseInt(rut.slice(0, -1), 10);
  let m = 0;
  let s = 1;

  while (rutDigits > 0) {
    s = (s + rutDigits % 10 * (9 - m++ % 6)) % 11;
    rutDigits = Math.floor(rutDigits / 10);
  }
  const checkDigit = (s > 0) ? String((s - 1)) : 'K';

  return (checkDigit === rut.slice(-1));
}

export function rutFormat() {

}
