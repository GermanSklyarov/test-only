import { useState } from "react";
import CircularSlider from "./CircularSlider";
import EventSlider from "./EventSlider";
import SliderNavigation from "./SliderNavigation";
import "./style.scss";
import { EventSectionProps } from "./types";
import YearsInterval from "./YearsInterval";

const EventsSection = ({ slides }: EventSectionProps) => {
  const [degrees, setDegrees] = useState(360 / slides.length);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);

  return (
    <section className="events-section">
      <h2 className="events-section__title">Исторические даты</h2>
      <CircularSlider
        slides={slides}
        currentRotation={currentRotation}
        activeButtonIndex={activeButtonIndex}
        setCurrentRotation={setCurrentRotation}
        setActiveButtonIndex={setActiveButtonIndex}
        degrees={degrees}
      />
      <YearsInterval
        yearStart={slides[activeButtonIndex - 1].yearStart}
        yearEnd={slides[activeButtonIndex - 1].yearEnd}
      />
      <SliderNavigation
        activeButtonIndex={activeButtonIndex}
        slidesLength={slides.length}
        setActiveButtonIndex={setActiveButtonIndex}
        setCurrentRotation={setCurrentRotation}
        degrees={degrees}
      />
      <EventSlider content={slides[activeButtonIndex - 1].content} />
      <div className="events-section__pagination">
        {slides.map((slide) => (
          <div
            className={`events-section__pagination-dot ${
              activeButtonIndex === slide.id &&
              "events-section__pagination-dot_active"
            }`}
            key={slide.id}
            onClick={() => setActiveButtonIndex(slide.id)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
