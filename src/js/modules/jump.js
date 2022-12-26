import offset from 'document-offset';

let stepPositions = [];

export default {
  init: function () {
    this.getPositionsForSteps();
    this.bindings();
  },

  bindings: function () {
    document.querySelectorAll('.is-step').forEach(function (step) {
      step.addEventListener('click', function (e) {
        this.jumpToNextProject(e.target);
      }.bind(this));
    }.bind(this));

    window.addEventListener('resize', function () {
      this.getPositionsForSteps();
    }.bind(this));
  },

  getPositionsForSteps: function () {
    document.querySelectorAll('.is-step').forEach((step) => {
      stepPositions.push(Math.floor(offset(step).top));
    });
  },

  jumpToNextProject: function (el) {
    if (el.classList.contains('is-step')) {
      window.scrollTo({
        top: this.getPointToJumpTo(offset(el).top),
        behavior: 'smooth'
      });
    }
  },

  getPointToJumpTo: function (currentStepOffset) {
    const scrollTop = window.pageYOffset;
    let nextPoint = stepPositions.findIndex(function (position) {
      return position === currentStepOffset
    });

    return stepPositions[nextPoint + 1] || 0;
  }
}
