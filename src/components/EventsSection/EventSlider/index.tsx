import { useEffect, useRef, useState } from "react";
import { EventSliderProps } from "../types";

const EventSlider = ({ content }: EventSliderProps) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const slider = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (slider.current) {
      slider.current.scrollLeft = 0;
      setScrollLeft(0);
      setWidth(Math.ceil(slider.current.getBoundingClientRect().width));
    }
  }, [content]);

  return (
    <div className="events-section__events-slider-wrapper">
      <div
        className="events-section__events-slider"
        ref={slider}
        onScroll={() => {
          if (slider.current) setScrollLeft(slider.current.scrollLeft);
        }}
      >
        {content.map((obj, i) => (
          <div className="events-section__event-card" key={i}>
            <h3 className="events-section__event-year">{obj.year}</h3>
            <p className="events-section__event-description">
              {obj.description}
            </p>
          </div>
        ))}
      </div>
      {slider.current &&
        scrollLeft > 0 &&
        slider.current.scrollWidth > width && (
          <div
            className="events-section__event-nav-button events-section__event-nav-button_prev"
            onClick={() => {
              if (slider.current) {
                slider.current.scrollLeft -= 400;
              }
            }}
          >
            ᐸ
          </div>
        )}
      {slider.current &&
        scrollLeft < slider.current.scrollWidth - width &&
        slider.current.scrollWidth > width && (
          <div
            className="events-section__event-nav-button events-section__event-nav-button_next"
            onClick={() => {
              if (slider.current) {
                slider.current.scrollLeft += 400;
              }
            }}
          >
            ᐳ
          </div>
        )}
    </div>
  );
};

export default EventSlider;
