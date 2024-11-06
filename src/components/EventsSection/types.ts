export type EventObj = {
    year: number;
    description: string;
  };

export type Slide = {
    id: number;
      name: string;
      yearStart: number;
      yearEnd: number;
      content: SlideContent[];
}

export type SlideContent = {
    year: number;
    description: string;
}

export type EventSectionProps = {
  slides: Slide[];
};

export type CircularSliderProps = EventSectionProps & Omit<SliderNavigationProps, 'slidesLength'> & {
  currentRotation: number;
  degrees: number;
};

export type SliderNavigationProps = {
  activeButtonIndex: number;
  setCurrentRotation: Function;
  setActiveButtonIndex: Function;
  slidesLength: number;
  degrees: number;
};

export type EventSliderProps = {
  content: EventObj[];
};

export type YearsIntervalProps = {
  yearStart: number;
  yearEnd: number;
};