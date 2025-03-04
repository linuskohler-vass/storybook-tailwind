import Swiper from 'swiper/bundle'; // Import Swiper bundle for Storybook

// SwgEmbeddedMedia.js
class SwgEmbeddedMedia extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._mediaType = ''; // Internal property for mediaType
        this._class = '';    // Internal property for class
        this.swiper = null; // Swiper instance
    }

    connectedCallback() {
        this.render(); // Initial render

        // Initialize Swiper *after* the shadow DOM is created and populated
        this.initSwiper();
    }

    disconnectedCallback() {
        if (this.swiper) {
            this.swiper.destroy(true, true);
            this.swiper = null; // Ensure it's garbage collected
        }
    }

    get mediaType() {
        return this._mediaType;
    }

    set mediaType(value) {
        this._mediaType = value;
        // No need to re-render for mediaType, but you might want to do *something* here
    }

    get class() {
        return this._class;
    }

    set class(value) {
        this._class = value;
        this.setAttribute('class', value); // Update the attribute so external styles can apply
    }

    initSwiper() {
        const swiperOptions = {
            direction: 'horizontal',
            navigation: {
                nextEl: this.shadowRoot.querySelector('.swg-swiper-button-next'),
                prevEl: this.shadowRoot.querySelector('.swg-swiper-button-prev'),
            },
            slidesPerView: 1,
            spaceBetween: 0,
            threshold: 50,
            loop: false, // we have indicators for this
            // Removed the on.slideChange callback since it was just a console.log
        };

        this.swiper = new Swiper(this.shadowRoot.querySelector('.swg-embedded-media-swiper'), swiperOptions);
    }

    slideTo(index) {
        if (this.swiper) {
            this.swiper.slideTo(index, undefined, false);
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        ${this.getStyles()} 
      </style>
      <div class="swg-embedded-media-component">
        <div class="swg-embedded-media-swiper">
          <div class="swiper-wrapper">
            <slot></slot> 
          </div>
          <div class="swg-swiper-button-container">
            <div class="swg-swiper-button-next">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18">
                <defs>
                    <filter id="dropshadow-component" height="150%">
                      <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
                      <feColorMatrix result="matrixOut" in="offOut" type="matrix"
                                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                      <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="1"></feGaussianBlur>
                      <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
                    </filter>
                  </defs>
                <polygon fill="white" style="filter: drop-shadow(0px 0px 1px black)"
                         points="363.794 16.603 362.397 18.001 370.999 26.603 379.603 18.001 378.206 16.603 371 23.809"
                         transform="rotate(-90 181.5 198.103)"/>
              </svg>
            </div>
            <div class="swg-swiper-button-prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18">
                <defs>
                    <filter id="dropshadow-component" height="150%">
                      <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
                      <feColorMatrix result="matrixOut" in="offOut" type="matrix"
                                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                      <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="1"></feGaussianBlur>
                      <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
                    </filter>
                  </defs>
                <polygon fill="white" style="filter: drop-shadow(0px 0px 1px black)"
                         points="363.794 16.603 362.397 18.001 370.999 26.603 379.603 18.001 378.206 16.603 371 23.809"
                         transform="rotate(-90 181.5 198.103)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `;
    }

    getStyles() {
        return `
            :host {
              display: block; /* Important for custom elements */
              overflow: hidden;
              position: relative;
            }

            .swg-embedded-media-component {
              margin-bottom: 1em; /* Assuming $size-space-xs = 1em */
              position: relative;
            }
            
            .swg-swiper-button-next,
            .swg-swiper-button-prev {
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              border: 0;
              cursor: pointer;
              height: calc(100vw / 16 * 9);
              padding: 0 0.5em; /* Assuming $size-space-xxs = 0.5em */
              position: absolute;
              top: 0;
              width: 27px;
              z-index: 10;
              transition: all .35s;
              opacity: 1;
              visibility: visible;
              outline: none;
            }
            
            .swg-swiper-button-next.swiper-button-disabled,
            .swg-swiper-button-prev.swiper-button-disabled {
                visibility: hidden;
            }

            .swg-swiper-button-next svg,
            .swg-swiper-button-prev svg {
              height: 16px;
              overflow: visible;
              padding: 1px;
              position: absolute;
              top: 50%;
              width: 9px;
            }

            .swg-swiper-button-next polygon,
            .swg-swiper-button-prev polygon {
              fill: white !important;
            }
            
            .swg-swiper-button-next {
              right: 0;
            }

            .swg-swiper-button-next svg {
                right: 0.5em; /* Assuming $size-space-xxs = 0.5em */
            }

            .swg-swiper-button-prev {
              left: 0;
            }

            .swg-swiper-button-prev svg {
              left: 0.5em;  /* Assuming $size-space-xxs = 0.5em */
            }

            .swg-swiper-button-disabled {
              background: lightgray; /* Assuming $color-lightgray = lightgray */
            }

            .swg-swiper-button-prev svg {
              transform: rotate(180deg);
            }

            @media (min-width: 1024px) { /* Assuming 'large' = 1024px */
              .swg-embedded-media-component {
                margin-bottom: 1.5em; /* Assuming $size-space-m = 1.5em and $size-font-large is not relevant here */
              }
            
              .swg-swiper-button-next,
              .swg-swiper-button-prev {
                height: 0;
                padding-bottom: 56.25%;
              }
            
              .swg-swiper-button-next svg,
              .swg-swiper-button-prev svg {
                height: 1em; /* Assuming $size-space-s = 1em */
                width: 17px;
              }
            
              .swg-swiper-button-next {
                right: 0;
              }
            
              .swg-swiper-button-next svg {
                right: 1em; /* Assuming $size-space-xs = 1em */
              }
            
              .swg-swiper-button-prev {
                left: 0;
              }

              .swg-swiper-button-prev svg {
                left: 1em;  /* Assuming $size-space-xs = 1em */
              }
            }

            @media (min-width: 1280px) { /* Assuming 'extralarge' = 1280px */
              .swg-swiper-button-next,
              .swg-swiper-button-prev {
                height: 100%;
                margin-top: -25px; /* Assuming $size-embedded-media-icons-top-offset = 25px */
              }
            }

            @media print {
              .swg-swiper-button-next,
              .swg-swiper-button-prev {
                display: none;
              }
            }
            
            @media (min-width: 1024px) { /* Assuming 'large' = 1024px */
              :host(.swg-embedded-media--wide) .swg-swiper-button-next,
              :host(.swg-embedded-media--wide) .swg-swiper-button-prev {
                height: 660px; /* Assuming $size-embedded-media-height-large = 660px */
                padding-bottom: 0;
              }
            }

            @media screen and (max-width: 524px) { /* Assuming $swg-embedded-media-thumbnail-media-query = 524px */
              :host(.swg-embedded-media-with-thumbs) {
                margin-bottom: 0;
              }
            }
            
            @media (min-width: 1280px) {  /* Assuming 'extralarge' = 1280px */
:host(.swg-embedded-media--wide) .swg-swiper-button-next,
            :host(.swg-embedded-media--wide) .swg-swiper-button-prev {
                height: 100%;
              }
            }
        `;
    }
}

customElements.define('swg-embedded-media', SwgEmbeddedMedia);