import React from "react";

//styling
import { EventWrapper, Count } from "../styles";

let i = 1;

const DataItem = (props) => {
  return (
    <div>
      <Count>{i++}.</Count>
      <EventWrapper>
        <p className="event-name">{props.event.caption}</p>
        <p className="event-description">
          {props.event.date} ({props.event.location})
        </p>
      </EventWrapper>
    </div>
  );
};
export default DataItem;
