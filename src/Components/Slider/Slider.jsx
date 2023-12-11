import React from "react";
import { isEqual } from "lodash";
import Image from "next/image";

const ACTIVE_CLASS = "slider-single active";
const PREACTIVE_CLASS = "slider-single preactive";
const PROACTIVE_CLASS = "slider-single proactive";
const PREACTIVE_DE_CLASS = "slider-single preactivede";
const PROACTIVE_DE_CLASS = "slider-single proactivede";

export class Slider extends React.Component {
  static defaultProps = {
    autoplay: false,
    interval: 3000,
  };

  constructor(props) {
    super(props);
    this.state = {
      slideTotal: 0,
      slideCurrent: -1,
      slides: [],
      height: "0px",
    };
    this.interval = null;
    this.handleClickLeft = this.slide.bind(this, -1);
    this.handleClickRight = this.slide.bind(this, 1);
  }

  componentDidMount() {
    this.setState((prevState, props) => {
      return {
        slides: this.getSlides(),
        slideTotal: this.props.slides.length - 1,
      };
    });
    if (this.state.slideCurrent === -1)
      setTimeout(() => {
        this.slide(1);
        if (this.props.autoplay) this.setInterval();
      }, 500);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.slides &&
      prevProps.slides[0] &&
      this.props.slides[0] &&
      !isEqual(
        prevProps.slides.map((slide) => slide.key),
        this.props.slides.map((slide) => slide.key)
      )
    ) {
      this.setState((prevState, props) => {
        return {
          slides: this.getSlides(),
          slideTotal: this.props.slides.length - 1,
          slideCurrent: -1,
        };
      });
      this.setState((prevState, props) => {
        return { ...prevState };
      });
      setTimeout(() => {
        this.slide(1);
        if (this.props.autoplay) {
          this.clearInterval();
          this.setInterval();
        }
      }, 500);
    }
    if (this.props.autoplay !== prevProps.autoplay) {
      this.clearInterval();
      if (this.props.autoplay) {
        this.setInterval();
      }
    }
  }

  getSlides() {
    const slides = [];
    this.props.slides.forEach((slide) => {
      const slideobject = {
        class: PROACTIVE_DE_CLASS,
        element: slide,
      };
      slides.push(slideobject);
    });
    return slides;
  }

  setCurrentSlide(index, total, direction) {
    index += direction;
    if (index > total) {
      index = 0;
    }
    if (index < 0) {
      index = total;
    }
    return index;
  }

  setClass(slide, classes) {
    classes.forEach((cl) => {
      const [currentClass, newClass] = cl;
      if (slide.class.includes(currentClass)) {
        slide.class = newClass;
      }
    });
  }

  setSlideClasses(slides, direction) {
    const classes =
      direction === -1
        ? [
            ["proactivede", PREACTIVE_DE_CLASS],
            ["proactive", PROACTIVE_DE_CLASS],
          ]
        : [
            ["preactivede", PROACTIVE_DE_CLASS],
            ["preactive", PREACTIVE_DE_CLASS],
          ];
    slides.forEach((slide) => this.setClass(slide, classes));
  }

  setSlideHeight() {
    setTimeout(() => {
      if (document.getElementsByClassName(ACTIVE_CLASS).length > 0) {
        const height =
          document.getElementsByClassName(ACTIVE_CLASS)[0].clientHeight;
        this.setState((prevState, props) => {
          return { height: height + "px" };
        });
      }
    }, 500);
  }

  setSingleSlide(slides) {
    if (slides[0] && slides[0].class !== ACTIVE_CLASS) {
      slides[0].class = ACTIVE_CLASS;
      this.setState((prevState, props) => {
        return { slides, slideCurrent: 0 };
      });
    }
  }

  setInterval() {
    this.interval = setTimeout(() => {
      this.slide(1);
    }, this.props.interval);
  }

  clearInterval() {
    if (this.interval) {
      clearTimeout(this.interval);
    }
  }

  slide(direction) {
    const slideTotal = this.state.slideTotal;
    const newSlides = this.state.slides;
    if (slideTotal > 1) {
      let slideCurrent = this.state.slideCurrent;
      slideCurrent = this.setCurrentSlide(slideCurrent, slideTotal, direction);
      this.setSlideClasses(newSlides, direction);

      const preactiveSlide =
        slideCurrent > 0 ? newSlides[slideCurrent - 1] : newSlides[slideTotal];
      preactiveSlide.class = PREACTIVE_CLASS;
      const proactiveSlide =
        slideCurrent < slideTotal ? newSlides[slideCurrent + 1] : newSlides[0];
      proactiveSlide.class = PROACTIVE_CLASS;
      const activeSlide = newSlides[slideCurrent];
      activeSlide.class = ACTIVE_CLASS;
      this.setState((prevState, props) => {
        return { slides: newSlides, slideCurrent };
      });
      this.setSlideHeight();
      if (this.props.autoplay) {
        this.clearInterval();
        this.setInterval();
      }
    } else {
      this.setSingleSlide(newSlides);
    }
  }

  render() {
    return (
      <div className="react-3d-carousel" style={{ height: this.state.height }}>
        {this.state.slides && this.state.slides.length > 0 && (
          <div className="slider-container">
            <div className="slider-content">
              {this.state.slides.map((slider, index) => {
                return (
                  <div className={slider.class} key={index}>
                    <div
                      className="slider-left"
                      role="button"
                      onClick={this.handleClickLeft}
                    >
                      <div>
                        <Image
                          src="/images/left.png"
                          alt=""
                          width={103}
                          height={130}
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <div
                      className="slider-right"
                      role="button"
                      onClick={this.handleClickRight}
                    >
                      <div>
                        <Image
                          src="/images/right.png"
                          alt=""
                          width={130}
                          height={130}
                          objectFit="contain"
                        />
                        {/* <i className="fa fa-arrow-right" /> */}
                        {/* HELLO */}
                      </div>
                    </div>

                    <div className="slider-single-content">
                      {slider.element}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
