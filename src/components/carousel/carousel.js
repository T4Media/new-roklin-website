import React, { useEffect } from "react";
import "./carousel.scss";
import $ from "jquery";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import roman from "../../images/carousel/roman.jpg";
import blackout from "../../images/carousel/blackout.JPG";
import curtains from "../../images/carousel/curtains1.jpg";

const Carousel = () => {
  const [slide, setSlide] = React.useState("");

  useEffect(() => {
    var _createClass = (function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    })();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var $window = $(window);
    var $body = $("body");

    var Slideshow = (function () {
      function Slideshow() {
        var _this = this;

        var userOptions =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};

        _classCallCheck(this, Slideshow);

        var defaultOptions = {
          $el: $(".slideshow"),
          showArrows: true,
          showPagination: true,
          duration: 10000,
          autoplay: false,
        };

        var options = Object.assign({}, defaultOptions, userOptions);

        this.$el = options.$el;
        this.maxSlide = this.$el.find($(".js-slider-home-slide")).length;
        this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
        this.showPagination = options.showPagination;
        this.currentSlide = 1;
        this.isAnimating = false;
        this.animationDuration = 1200;
        this.autoplaySpeed = options.duration;

        this.$controls = this.$el.find(".js-slider-home-button");
        this.autoplay = this.maxSlide > 1 ? options.autoplay : false;

        this.$el.on("click", ".js-slider-home-next", function (event) {
          return _this.nextSlide();
        });
        this.$el.on("click", ".js-slider-home-prev", function (event) {
          return _this.prevSlide();
        });
        this.$el.on("click", ".js-pagination-item", function (event) {
          if (!_this.isAnimating) {
            _this.preventClick();
            _this.goToSlide(event.target.dataset.slide);
          }
        });

        this.init();
      }

      _createClass(Slideshow, [
        {
          key: "init",
          value: function init() {
            this.goToSlide(1);

            /* if (this.showArrows) {
               this.$el.append(`<div class="c-header-home_footer">
            <div class="o-container">
            <div class="c-header-home_controls -nomobile o-button-group">
                  <div class="js-parallax is-inview" data-speed="1" data-position="top" data-target="#js-header">
                      <button class="o-button -white -square -left js-slider-home-button js-slider-home-prev" type="button">
                          <span class="o-button_label">
                              <svg class="o-button_icon" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-prev"></use></svg>
                          </span>
                      </button>
                      <button class="o-button -white -square js-slider-home-button js-slider-home-next" type="button">
                          <span class="o-button_label">
                              <svg class="o-button_icon" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-next"></use></svg>
                          </span>
                      </button>
                  </div>
            </div>
            </div>
            </div>`);
             }
             */
            if (this.autoplay) {
              this.startAutoplay();
            }

            if (this.showPagination) {
              var paginationNumber = this.maxSlide;
              var pagination =
                '<div class="pagination"><div class="container">';

              for (var i = 0; i < this.maxSlide; i++) {
                var item =
                  '<span class="pagination__item js-pagination-item' +
                  (i === 0 ? "is-current" : "") +
                  '"  style="margin-top: 150px !important;" data-slide=' +
                  (i + 1) +
                  ">" +
                  (i === 0
                    ? "100% Blackout Fabric"
                    : i === 1
                    ? "Curtain Fabric"
                    : i === 2
                    ? "Roman Shade Fabric"
                    : "") +
                  "</span>";

                pagination = pagination + item;
              }

              pagination = pagination + "</div ></div>";

              this.$el.append(pagination);
            }
          },
        },
        {
          key: "preventClick",
          value: function preventClick() {
            var _this2 = this;

            this.isAnimating = true;
            this.$controls.prop("disabled", true);
            clearInterval(this.interval);

            setTimeout(function () {
              _this2.isAnimating = false;
              _this2.$controls.prop("disabled", false);
              if (_this2.autoplay) {
                _this2.startAutoplay();
              }
            }, this.animationDuration);
          },
        },
        {
          key: "goToSlide",
          value: function goToSlide(index) {
            setSlide(parseInt(index));
            this.currentSlide = parseInt(index);

            if (this.currentSlide > this.maxSlide) {
              this.currentSlide = 1;
            }

            if (this.currentSlide === 0) {
              this.currentSlide = this.maxSlide;
            }

            var newCurrent = this.$el.find(
              '.js-slider-home-slide[data-slide="' + this.currentSlide + '"]'
            );
            var newPrev =
              this.currentSlide === 1
                ? this.$el.find(".js-slider-home-slide").last()
                : newCurrent.prev(".js-slider-home-slide");
            var newNext =
              this.currentSlide === this.maxSlide
                ? this.$el.find(".js-slider-home-slide").first()
                : newCurrent.next(".js-slider-home-slide");

            this.$el
              .find(".js-slider-home-slide")
              .removeClass("is-prev is-next is-current");
            this.$el.find(".js-pagination-item").removeClass("is-current");

            if (this.maxSlide > 1) {
              newPrev.addClass("is-prev");
              newNext.addClass("is-next");
            }

            newCurrent.addClass("is-current");
            this.$el
              .find(
                '.js-pagination-item[data-slide="' + this.currentSlide + '"]'
              )
              .addClass("is-current");
          },
        },
        {
          key: "nextSlide",
          value: function nextSlide() {
            this.preventClick();
            this.goToSlide(this.currentSlide + 1);
          },
        },
        {
          key: "prevSlide",
          value: function prevSlide() {
            this.preventClick();
            this.goToSlide(this.currentSlide - 1);
          },
        },
        {
          key: "startAutoplay",
          value: function startAutoplay() {
            var _this3 = this;

            this.interval = setInterval(function () {
              if (!_this3.isAnimating) {
                _this3.nextSlide();
              }
            }, this.autoplaySpeed);
          },
        },
        {
          key: "destroy",
          value: function destroy() {
            this.$el.off();
          },
        },
      ]);

      return Slideshow;
    })();

    (function () {
      var loaded = false;
      var maxLoad = 3000;

      function load() {
        var options = {
          showPagination: true,
        };

        var slideShow = new Slideshow(options);
      }

      function addLoadClass() {
        $body.addClass("is-loaded");

        setTimeout(function () {
          $body.addClass("is-animated");
        }, 600);
      }

      $window.on("load", function () {
        if (!loaded) {
          loaded = true;
          load();
        }
      });

      setTimeout(function () {
        if (!loaded) {
          loaded = true;
          load();
        }
      }, maxLoad);

      addLoadClass();
    })();
  }, []);

  return (
    <>
      <body>
        <section className="slideshow" id="js-header">
          <div className="container " style={{ zIndex: 100 }}>
            <h1 className="product-line-heading">Our Products</h1>
          </div>
          <div
            className="slideshow__slide js-slider-home-slide is-current"
            data-slide="1"
          >
            <div
              className="slideshow__slide-background-parallax background-absolute js-parallax"
              data-speed="-1"
              data-position="top"
              data-target="#js-header"
            >
              <div className="slideshow__slide-background-load-wrap background-absolute">
                <div className="slideshow__slide-background-load background-absolute">
                  <div className="slideshow__slide-background-wrap background-absolute">
                    <div className="slideshow__slide-background background-absolute">
                      <div className="slideshow__slide-image-wrap background-absolute">
                        <div
                          className="slideshow__slide-image background-absolute"
                          style={{
                            backgroundImage: `url(
                               ${blackout}
                            )`,

                            backgroundPositionY: 0,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="side-nav vh-for-mobile" data-view="cover"></div>
            <div className="slideshow__slide-caption">
              <div className="slideshow__slide-caption-text">
                <div
                  className="container js-parallax carousel-container"
                  data-speed="2"
                  data-position="top"
                  data-target="#js-header"
                >
                  <h1 className="slideshow__slide-caption-title">
                    100% Blackout Fabric
                  </h1>
                  <p className="slideshow__slide-caption-content">
                    "Create night in your room outside for calmness and peaceful
                    rejuvenation of your energy after an exhausting activity."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slideshow__slide js-slider-home-slide is-next"
            data-slide="2"
          >
            <div
              className="slideshow__slide-background-parallax background-absolute js-parallax"
              data-speed="-1"
              data-position="top"
              data-target="#js-header"
            >
              <div className="slideshow__slide-background-load-wrap background-absolute">
                <div className="slideshow__slide-background-load background-absolute">
                  <div className="slideshow__slide-background-wrap background-absolute">
                    <div className="slideshow__slide-background background-absolute">
                      <div className="slideshow__slide-image-wrap background-absolute">
                        <div
                          className="slideshow__slide-image background-absolute"
                          style={{
                            backgroundImage: `url(${curtains})`,
                            backgroundPositionY: 0,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="side-nav vh-for-mobile" data-view="cover"></div>
            <div className="slideshow__slide-caption">
              <div className="slideshow__slide-caption-text">
                <div
                  className="container js-parallax"
                  data-speed="2"
                  data-position="top"
                  data-target="#js-header"
                >
                  <h1 className="slideshow__slide-caption-title">
                    Curtain Fabric
                  </h1>
                  <p className="slideshow__slide-caption-content">
                    “ …Indulge in the vastness of our collection from solid
                    colors to printed to sheers with vibrating themes of
                    contemporary, classic and traditional blends to showcase
                    your taste”
                  </p>
                  {/* <a
                    className="slideshow__slide-caption-subtitle -load o-hsub -link"
                    href="#"
                  >
                    <span className="slideshow__slide-caption-subtitle-label">
                      Learn more about
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="slideshow__slide js-slider-home-slide is-prev"
            data-slide="3"
          >
            <div
              className="slideshow__slide-background-parallax background-absolute js-parallax"
              data-speed="-1"
              data-position="top"
              data-target="#js-header"
            >
              <div className="slideshow__slide-background-load-wrap background-absolute">
                <div className="slideshow__slide-background-load background-absolute">
                  <div className="slideshow__slide-background-wrap background-absolute">
                    <div className="slideshow__slide-background background-absolute">
                      <div className="slideshow__slide-image-wrap background-absolute">
                        <div
                          className="slideshow__slide-image background-absolute"
                          style={{
                            backgroundImage: `url(${roman})`,

                            backgroundPositionY: 0,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="side-nav vh-for-mobile" data-view="cover"></div>
            <div className="slideshow__slide-caption">
              <div className="slideshow__slide-caption-text">
                <div
                  className="container js-parallax"
                  data-speed="2"
                  data-position="top"
                  data-target="#js-header"
                  style={{ position: "relative" }}
                >
                  <h1 className="slideshow__slide-caption-title">
                    Roman Shade Fabric
                  </h1>
                  <p className="slideshow__slide-caption-content">
                    “Simplistic yet chic …roman shades enhances the beauty of
                    any room with its minimalistic appearance and sleek appeal”
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="c-header-home_footer" style={{ display: "grid" }}>
            {/* <div className="o-container">
              <div className="c-header-home_controls -nomobile o-button-group">
                <div
                  className="js-parallax is-inview"
                  data-speed="1"
                  data-position="top"
                  data-target="#js-header"
                  style={{
                    display: "flex",
                  }}
                >
                  <button
                    className=" js-slider-home-prev floating-btn ripple"
                    type="button"
                  >
                    <HiArrowNarrowLeft color="black" />
                  </button>
                  <button
                    className="js-slider-home-next floating-btn ripple"
                    type="button"
                  >
                    <HiArrowNarrowRight color="black" />
                  </button>
                </div>
              </div>
            </div> */}
            {slide === 1 ? (
              ""
            ) : slide === 2 ? (
              <button
                className="mt-5"
                onClick={() => {
                  window.open("https://www.sierratextiles.com.pk", "_blank");
                }}
                className="sierra-redirect"
              >
                Fabric Collection
              </button>
            ) : (
              <button
                className="mt-5"
                onClick={() => {
                  window.open("https://www.sierratextiles.com.pk", "_blank");
                }}
                className="sierra-redirect"
              >
                Roman Shade Collection
              </button>
            )}
          </div>
        </section>
      </body>

      <div className="check"></div>
    </>
  );
};

export default Carousel;
