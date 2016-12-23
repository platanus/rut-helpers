/* eslint-disable no-magic-numbers */
import * as rutHelpers from '../src/rut-helpers.js';


describe('rutHelper', () => {
  describe('rutHelper.rutValidate', () => {
    it('should return true if string is a valid rut', () => {
      expect(rutHelpers.rutValidate('7.618.285-K')).toBe(true);
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
  });
});
