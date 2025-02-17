//import './tag.scss';

export default class Tag {

  constructor(el) {
    // selectors
    this.domSelectors = {
      tag: '.b_tag',
    };

    // classes
    this.classes = {
      active: 'active',
    };

    this.element = el;

    // init
    this.init();
  }

  init() {
    console.log("Init for tag called!");
    console.log(this.element);

    this.element.node.onclick = (ev) => {
      console.log("Clicked on tag!");
    }
  }
}
