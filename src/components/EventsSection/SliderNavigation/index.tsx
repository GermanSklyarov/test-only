import { SliderNavigationProps } from "../types";

const SliderNavigation = ({activeButtonIndex, slidesLength, setCurrentRotation, setActiveButtonIndex, degrees}: SliderNavigationProps) => {
    return (
        <div className="events-section__navigation">
        <span className="events-section__slide-number">{`0${activeButtonIndex}/0${slidesLength}`}</span>
        <div className="events-section__buttons">
          <div
            className={`events-section__button events-section__button_prev ${
              activeButtonIndex === 1 && "events-section__button_disabled"
            }`}
            onClick={() => {
              setCurrentRotation(degrees * (activeButtonIndex - 2));
              setActiveButtonIndex(activeButtonIndex - 1);
            }}
          >
            ᐸ
          </div>
          <div
            className={`events-section__button events-section__button_next ${
              activeButtonIndex >= slidesLength &&
              "events-section__button_disabled"
            }`}
            onClick={() => {
              setCurrentRotation(degrees * (activeButtonIndex));
              setActiveButtonIndex(activeButtonIndex + 1);
            }}
          >
            ᐳ
          </div>
        </div>
      </div>
    )
}

export default SliderNavigation;