import { CircularSliderProps } from "../types";
import { calcLeft, calcTop } from "../utils";

const CircularSlider = ({
  slides,
  currentRotation,
  activeButtonIndex,
  setCurrentRotation,
  setActiveButtonIndex,
  degrees
}: CircularSliderProps) => {
  return (
    <div
      className="events-section__circular-slider"
      style={{ transform: `rotate(-${currentRotation}deg)` }}
    >
      {slides.map((slide) => (
        <div
          className={`events-section__circular-slider-option ${
            activeButtonIndex === slide.id &&
            "events-section__circular-slider-option_active"
          }`}
          data-name={slide.name}
          key={slide.id}
          style={{ transform: `rotate(${(activeButtonIndex - 1) * degrees}deg)`, top: `${calcTop(degrees, slide.id)}px`, left: `${calcLeft(degrees, slide.id)}px`}}
          onClick={() => {
            setCurrentRotation(degrees * (slide.id - 1));
            setActiveButtonIndex(slide.id);
          }}
        >
          <span className="events-section__option-text">{slide.name}</span>
          <span className="events-section__option-index">{slide.id}</span>
        </div>
      ))}
    </div>
  );
};

export default CircularSlider;