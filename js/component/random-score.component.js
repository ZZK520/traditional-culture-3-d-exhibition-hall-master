/**
 * Set random color on material.
 */
AFRAME.registerComponent('random-score', {
  schema: {
    score: { type: 'number', default: 2 },
    minScoreController: { type: 'number', default: 1 },
    maxScoreController: { type: 'number', default: 4 },
  },

  init: function () {
    this.el.setAttribute('score', this.getRandomScore(this.data.minScoreController, this.data.maxScoreController))
  },
  getRandomScore: function (minScore = 1, maxScore = 4) {
    const randomScore = Math.floor(getRandomArbitrary(minScore, maxScore));
    return randomScore;
  }
});
