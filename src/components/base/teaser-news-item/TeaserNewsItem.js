var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

export default class TeaserNewsItem {
  element;

  constructor(el) {
    this.element = el;
    this.ul = this.element.querySelector('.teaser-news-items');
    this.images = [...this.element.querySelectorAll('.images > img')];
    this.elements = [...this.ul.querySelectorAll('.teaser-news-items--item')];
    this.init();
  }

  init() {

    this.element.style.setProperty('--items', this.elements.length);
    this.images[0].classList.remove('opacity-0');
    this.elements.forEach((element, index) => {
      element.addEventListener('mouseover', () => {
        this.hideAllImages(index);
        this.removeCurrent(index);
        this.element.style.setProperty('--index', index + 1);
        // this.image.setAttribute('src', element.getElementsByTagName('img')[0].src);
      })
    })
  }

  hideAllImages(skipIndex) {
    this.images.forEach((image, index) => {
      if (index === skipIndex) {
        image.classList.remove('opacity-0');
      } else {
        image.classList.add('opacity-0');
      }
    })
  }

  removeCurrent(skipIndex) {
    this.elements.forEach((element, index) => {
      if (index === skipIndex) {
        element.classList.add('current');
      } else {
        element.classList.remove('current');
      }
    })
  }
}
