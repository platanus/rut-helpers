export function rutClean(value: string) {
  if (typeof value === 'string') {
    return value
      .replace(/[^0-9kK]+/g, '')
      .replace(/^0+/, '')
      .toUpperCase();
  }
  return '';
}

export function rutValidate(value: string) {
  if (typeof value !== 'string') {
    return false;
  }

  const rut: string = rutClean(value);
  let rutDigits: number = parseInt(rut.slice(0, -1), 10);
  let m: number = 0;
  let s: number = 1;

  while (rutDigits > 0) {
    s = (s + rutDigits % 10 * (9 - m++ % 6)) % 11;
    rutDigits = Math.floor(rutDigits / 10);
  }
  const checkDigit: string = (s > 0) ? String((s - 1)) : 'K';

  return (checkDigit === rut.slice(-1));
}

export function rutFormat(value: string) {
  const rut: string = rutClean(value);

  if (rut.length <= 1) {
    return rut;
  }

  let result: string = `${rut.slice(-4, -1)}-${rut.substr(rut.length - 1)}`;
  for (let i: number = 4; i < rut.length; i += 3) {
    result = `${rut.slice(-3 - i, -i)}.${result}`;
  }

  return result;
}
