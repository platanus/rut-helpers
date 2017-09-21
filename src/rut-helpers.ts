export function rutClean(value: string): string {
  return typeof value === 'string' ? value.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
}

export function rutValidate(value: string): boolean {
  if (typeof value !== 'string') {
    return false;
  }

  const rut = rutClean(value);
  let rutDigits = parseInt(rut.slice(0, -1), 10);
  let m = 0;
  let s = 1;

  while (rutDigits > 0) {
    s = (s + rutDigits % 10 * (9 - m++ % 6)) % 11;
    rutDigits = Math.floor(rutDigits / 10);
  }
  const checkDigit: string = (s > 0) ? String((s - 1)) : 'K';

  return (checkDigit === rut.slice(-1));
}

export function rutFormat(value: string): string {
  const rut = rutClean(value);

  if (rut.length <= 1) {
    return rut;
  }

  let result = `${rut.slice(-4, -1)}-${rut.substr(rut.length - 1)}`;
  for (let i = 4; i < rut.length; i += 3) {
    result = `${rut.slice(-3 - i, -i)}.${result}`;
  }

  return result;
}
