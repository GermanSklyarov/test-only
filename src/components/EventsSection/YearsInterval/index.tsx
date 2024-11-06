import { useEffect, useState } from "react";
import { YearsIntervalProps } from "../types";
import { animateCounter } from "../utils";

const YearsInterval = ({ yearStart, yearEnd }: YearsIntervalProps) => {
  const [currentYearStart, setCurrentYearStart] = useState(2000);
  const [currentYearEnd, setCurrentYearEnd] = useState(2000);

  useEffect(() => {
    animateCounter(currentYearStart, yearStart, setCurrentYearStart);
    animateCounter(currentYearEnd, yearEnd, setCurrentYearEnd);
  }, [yearStart, yearEnd, currentYearStart, currentYearEnd]);

  return (
    <div className="events-section__dates">
      <div className="events-section__start-year">{currentYearStart}</div>
      <div className="events-section__end-year">{currentYearEnd}</div>
    </div>
  );
};

export default YearsInterval;
