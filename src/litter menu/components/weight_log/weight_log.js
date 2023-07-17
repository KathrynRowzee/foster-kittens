import React from "react";
import { DateFormatters } from "../../sections/utils/utils";
import { CiViewList } from "react-icons/ci"
import { log_utils } from "./utils";

import "./weight_log.scss";

const getNotesTooltip = (entry) => {
  if (!log_utils.hasNotes) return (<></>)

  return (
    <div className="notes">
      <CiViewList />
      <div className="tooltip_text">{log_utils.getNotes(entry)}</div>
    </div>)
  }

const getEntryRow = (entry) => {
  let diff = '-'
  if (entry.difference >= 0) {
    diff = `+ ${entry.difference}`
  } else if (entry.difference < 0) {
    diff = `- ${entry.difference}`
  }

  return (
    <tr>
      <td>{DateFormatters.getDateTime(entry.timestamp)}</td>
      <td>{entry.preWeight} lbs</td>
      <td>{entry.postWeight} lbs</td>
      <td>{diff}</td>
      <td>{getNotesTooltip(entry)}</td>
    </tr>
)
}

const WeightLog = (log) => {

  return (
    <div className='weight_log'>
      <div className="title">Weight Log</div>
      <table>
        <tr>
          <th>Time</th>
          <th>Before</th>
          <th>After</th>
          <th>Weight Diff</th>
          <th>Notes</th>
        </tr>
        <tbody>
          {log.log.map((entry) => (getEntryRow(entry)))}
        </tbody>
      </table>
    </div>
  )
}

export default WeightLog;