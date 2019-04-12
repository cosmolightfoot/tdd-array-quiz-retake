const isBig = require('../lib/index');

describe('quiz tests', () => {
  it('removes numbers less than 5, adds `Wow!`', () => {
    expect(isBig([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([
      'Wow, 6 is Big!',
      'Wow, 7 is Big!', 
      'Wow, 8 is Big!'
    ]);
  });
});
