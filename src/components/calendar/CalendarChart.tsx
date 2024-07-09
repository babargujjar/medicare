import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import useCalendarChart from "@/hooks/useCalendarChart";

const localizer = momentLocalizer(moment);

const CalendarChart = () => {

  const {events,CustomEvent} = useCalendarChart();
 
  return (
    <div style={{ height: "750px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date()}
        toolbar={true}
        views={{
          day: true,
          week: true,
          month: true,
        }}
        components={{
          event: CustomEvent,
        }}
        style={{ fontSize: "13px" }}
      />
    </div>
  );
};

export default CalendarChart;

