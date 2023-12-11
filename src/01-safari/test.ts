import safariTally from './index';

describe('safariTally', () => {
  it('should count the frequency of each animal correctly', () => {
    expect(safariTally(['elephant', 'zebra', 'elephant', 'lion', 'zebra', 'elephant'])).toEqual({
      elephant: 3,
      zebra: 2,
      lion: 1,
    });
  });

  it('should return an empty object for an empty array', () => {
    expect(safariTally([])).toEqual({});
  });

  it('should handle a single-element array', () => {
    expect(safariTally(['giraffe'])).toEqual({ giraffe: 1 });
  });

  it('should be case-insensitive', () => {
    expect(safariTally(['Elephant', 'elephant', 'ELEPHANT'])).toEqual({ elephant: 3 });
  });

  it('should return a sorted tally', () => {
    const sortedTally = safariTally(['zebra', 'elephant', 'elephant', 'lion']);
    const sortedKeys = Object.keys(sortedTally).sort();
    expect(Object.keys(sortedTally)).toEqual(sortedKeys);
  });
});
