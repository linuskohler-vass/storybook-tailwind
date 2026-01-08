export default class Tag {

  constructor(el) {
    // selectors
    this.domSelectors = {
      tag: '.simple-tag',
    };

    // classes
    this.classes = {
      active: 'simple-tag--active',
    };

    this.element = el;

    // init
    this.init();
  }

  init() {
    // eslint-disable-next-line
    console.log('Init for tag called!');

    this.element.addEventListener('click', () => {
      // eslint-disable-next-line
      console.log('Clicked on tag!');

      this.element.classList.toggle(this.classes.active);
    });
  }
}
