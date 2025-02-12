export default class Tag {

  constructor() {
    // selectors
    this.domSelectors = {
      tag: '.b_tag',
    };

    // classes
    this.classes = {
      active: 'active',
    };

    this.count = 2;
    this.element = document.querySelector(this.domSelectors.tag);

    // init
    this.init();
  }

  init() {
    console.log("Init for tag called!");
    console.log(this.count);
  }
}
