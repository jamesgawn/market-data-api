import { describe, expect, it, beforeAll, afterAll } from 'vitest';
import { getFundPrice } from './utils';

describe('utils', () => {

  describe('getFundPrice', () => {
    it('should retrieve price', async () => {
      const test = await getFundPrice("GB00BJS8SJ34");
      expect(test).toBeTruthy()
    });
  })

});
