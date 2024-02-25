import { DateTagWrapper } from "../assets/styled-components/DateTagWrapper";
import { dueDateExceeded, formatedDate } from "../utils/calculate";

const DateTag = ({ date, status, share }) => {
  return (
    <DateTagWrapper
      className={`date ${
        status !== "Done"
          ? dueDateExceeded(date)
            ? "not-exceeded"
            : "exceeded"
          : "done"
      }`}
      $share={share}
    >
      {formatedDate(date, "MMM D")}
    </DateTagWrapper>
  );
};

export default DateTag;
