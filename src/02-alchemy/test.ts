import uniquePotionIngredients from './index';

describe('uniquePotionIngredients', () => {
  it('should return an array with unique ingredients', () => {
    expect(uniquePotionIngredients(['newt eye', 'toadstool', 'newt eye', 'phoenix feather', 'toadstool'])).toEqual(['newt eye', 'toadstool', 'phoenix feather']);
  });

  it('should return an empty array if no ingredients are provided', () => {
    expect(uniquePotionIngredients([])).toEqual([]);
  });

  it('should handle a single ingredient', () => {
    expect(uniquePotionIngredients(['dragon scale'])).toEqual(['dragon scale']);
  });

  it('should not alter the order of the original ingredients', () => {
    expect(uniquePotionIngredients(['mandrake root', 'phoenix feather', 'mandrake root'])).toEqual(['mandrake root', 'phoenix feather']);
  });
});
