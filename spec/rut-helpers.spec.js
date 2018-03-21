import * as rutHelpers from '../dist/rut-helpers.js';

describe('rutHelper', () => {
  describe('rutHelper.rutValidate', () => {
    it('should return true if string is a valid rut', () => {
      expect(rutHelpers.rutValidate('7.618.285-K')).toBe(true);
    });

    it('should return true if string is a valid rut without punctuation', () => {
      expect(rutHelpers.rutValidate('7618212K')).toBe(false);
    });

    it('should return false if string is not a valid rut', () => {
      expect(rutHelpers.rutValidate('7.618.212-K')).toBe(false);
    });

    it('should return false if string is empty', () => {
      expect(rutHelpers.rutValidate('')).toBe(false);
    });

    it('should return false if string is not a string', () => {
      expect(rutHelpers.rutValidate(194453426)).toBe(false);
    });

    it('should return false if a valid rut with more than one K', () => {
      expect(rutHelpers.rutValidate('23100484KK')).toBe(false);
    });
  });

  describe('rutHelper.rutFormat', () => {
    it('should return formatted rut if string is a rut', () => {
      expect(rutHelpers.rutFormat('7618285K')).toBe('7.618.285-K');
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
  });
});
