import React from "react";
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5"

const hasNotes = (entry) => {
  if (entry.pooped === undefined && entry.meds === undefined && entry.notes === undefined) return false

  return true
}

const getNotes = (entry) => {
  let notes = []

  if (entry.pooped !== undefined) {
    notes.push({ Pooped: entry.pooped})
  }

  if (entry.meds !== undefined) {
    notes.push({Medication: entry.meds})
  }

  if (entry.notes !== undefined) {
    notes.push({Other: entry.notes})
  }

  return (notes.map(x => getNotesLine(x)))
  
}

const getNotesLine = (x) => {
  const data = Object.entries(x)[0]
  const key = data[0]
  let info = data[1]
  if (info === true) {
    info = <IoCheckmarkOutline />
  } else if (info === false) {
    info  = <IoCloseOutline />
  }

  return (
    <div className="note_line">{key}: {info}</div>
  )
}

export const log_utils = {
  hasNotes, getNotes
}