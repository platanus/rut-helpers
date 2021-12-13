import * as rutHelpers from '../dist/rut-helpers.js';

describe('rutHelper', () => {
  describe('rutHelper.rutValidate', () => {
    it('should return true if string is a valid rut', () => {
      expect(rutHelpers.rutValidate('7.618.285-K')).toBe(true);
    });

    it('should return true if string is a valid rut without punctuation', () => {
      expect(rutHelpers.rutValidate('7618285K')).toBe(true);
    });

    it('should return false if string contains alphabetic characters and also a valid rut', () => {
      expect(rutHelpers.rutValidate('ABCD7618285K')).toBe(false);
      expect(rutHelpers.rutValidate('7.618.285-KKabc')).toBe(false);
    });

    it('should return false if string is not a valid rut', () => {
      expect(rutHelpers.rutValidate('7.618.212-K')).toBe(false);
      expect(rutHelpers.rutValidate('7618212K')).toBe(false);
    });

    it('should return false if string is empty', () => {
      expect(rutHelpers.rutValidate('')).toBe(false);
    });

    it('should return false if string is not a string', () => {
      expect(rutHelpers.rutValidate(194453426)).toBe(false);
    });
  });

  describe('rutHelper.rutFormat', () => {
    it('should return formatted rut if string is a rut', () => {
      expect(rutHelpers.rutFormat('7618285K')).toBe('7.618.285-K');
    });

    it('should return formatted rut removing any leading zeros', () => {
      expect(rutHelpers.rutFormat('0007618285K')).toBe('7.618.285-K');
    });

    it('should return formatted rut if string is an already formatted rut', () => {
      expect(rutHelpers.rutFormat('7.618.285-K')).toBe('7.618.285-K');
    });

    it('should return a formatted a string that looks a like a rut if string is not a rut', () => {
      expect(rutHelpers.rutFormat('15435234523462346')).toBe('1.543.523.452.346.234-6');
    });
  });

  describe('rutHelper.rutClean', () => {
    it('should return clean string', () => {
      expect(rutHelpers.rutClean('7.618.285-K')).toBe('7618285K');
    });

    it('should strip leading zeros', () => {
      expect(rutHelpers.rutClean('007.618.285-K')).toBe('7618285K');
      expect(rutHelpers.rutClean('0.007.618.285-K')).toBe('7618285K');
    });
  });
});
