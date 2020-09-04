import React, { Component } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {
  Calendar,
  DateLocalizer,
  momentLocalizer,
  globalizeLocalizer,
  move,
  Views,
  Navigate,
  components,
} from 'react-big-calendar'
import moment from 'moment'

// Calendar.momentLocalizer(moment)

class SCalendar extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div>
        <Calendar
          culture='en-GB'
          events={this.props.tasks}
          views={['month', 'week']}
        />
      </div>
    )
  }
}

export default SCalendar
