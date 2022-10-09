import React, { useEffect, useRef, useState } from "react";
import "toolcool-range-slider";

function Slider({ prices, index, color, sliderRef, isVisible }) {
  return (
    <div
      className="slider-container"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      <tc-range-slider
        class="slider"
        css-link="./slider.css"
        id={`slider-${index}`}
        min={prices.at(0)}
        max={prices.at(-1)}
        pointers-overlap="true"
        value1={prices.at(0)}
        value2={prices.at(0)}
        value3={prices.at(1)}
        value4={prices.at(2)}
        pointer1-disabled="false"
        pointer2-disabled="true"
        pointer3-disabled="true"
        pointer4-disabled="true"
        step={(prices.at(-1) - prices.at(0)) / (prices.length - 1)}
        ref={sliderRef}
        animate-onclick="1s"
        slider-height="1.1rem"
        pointer1-width="1.6rem"
        pointer1-height="1.6rem"
        pointer2-width="2rem"
        pointer2-height="2rem"
        pointer3-width="2rem"
        pointer3-height="2rem"
        pointer4-width="2rem"
        pointer4-height="2rem"
        slider-bg-fill="white"
        slider-bg={color}
        slider-bg-hover={color}
        pointer1-border="none"
        pointer1-bg={color}
        pointer1-border-hover="none"
        pointer1-bg-hover={color}
        pointer1-border-focus="none"
        pointer1-bg-focus={color}
        pointer2-border="3px solid white"
        pointer2-bg="white"
        pointer2-border-hover="3px solid white"
        pointer2-bg-hover="white"
        pointer2-border-focus="3px solid white"
        pointer2-bg-focus="white"
        pointer3-border="3px solid white"
        pointer3-bg="white"
        pointer3-border-hover="3px solid white"
        pointer3-bg-hover="white"
        pointer3-border-focus="3px solid white"
        pointer3-bg-focus="white"
        pointer4-border="3px solid white"
        pointer4-bg="white"
        pointer4-border-hover="3px solid white"
        pointer4-bg-hover="white"
        pointer4-border-focus="3px solid white"
        pointer4-bg-focus="white"
      ></tc-range-slider>
    </div>
  );
}

function useSlider(prices) {
  const [level, setLevel] = useState(1);
  const [price, setPrice] = useState(prices.at(0));

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const onChange = (e) => {
      setPrice(e.detail.value);
      setLevel(prices.indexOf(String(e.detail.value)) + 1);
    };

    slider?.addEventListener("change", onChange);

    const sliders = document.querySelectorAll("tc-range-slider");
    const pointers = document.querySelectorAll("tc-range-slider .row");
    console.log(pointers[0]);

    sliders.forEach((slider) =>
      slider.addCSS(`

            .range-slider {
               margin: auto;
            }

            .pointer-0{
                z-index:100;
            }

            .panel {
              border: 2.5px solid white;
            }

            .panel-fill {
                cursor:default;
            }

            .pointer.disabled {
              -webkit-filter: brightness(1) !important;
              filter: brightness(1)  !important;
              cursor: pointer;

            }

            .pointer-shape, .pointer-shape:hover {
              box-shadow: none !important;
            }
          `)
    );

    return () => {
      slider?.removeEventListener("change", onChange);
    };
  }, []);

  return { level, setLevel, price, setPrice, sliderRef };
}

export { Slider, useSlider };
