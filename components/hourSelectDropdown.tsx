import React from "react"

function HoursSelectDropdown() {
  return (
    <select className="px-2">
      <option value="Closed">Closed</option>
      <option value={1}>1 AM</option>
      <option value={2}>2 AM</option>
      <option value={3}>3 AM</option>
      <option value={4}>4 AM</option>
      <option value={5}>5 AM</option>
      <option value={6}>6 AM</option>
      <option value={7}>7 AM</option>
      <option value={8}>8 AM</option>
      <option value={9}>9 AM</option>
      <option value={10}>10 AM</option>
      <option value={11}>11 AM</option>
      <option value={12}>12 PM</option>
      <option value={13}>1 PM</option>
      <option value={14}>2 PM</option>
      <option value={15}>3 PM</option>
      <option value={16}>4 PM</option>
      <option value={17}>5 PM</option>
      <option value={18}>6 PM</option>
      <option value={19}>7 PM</option>
      <option value={20}>8 PM</option>
      <option value={21}>9 PM</option>
      <option value={22}>10 PM</option>
      <option value={23}>11 PM</option>
      <option value={0}>12 AM</option>
    </select>
  )
}

export default HoursSelectDropdown
