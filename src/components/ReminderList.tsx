import React from "react";
import { Reminder } from "../interfaces/Reminder";

interface ReminderListProps {
  reminders: Reminder[];
  onReminderDelete: (id: number) => void;
}

function ReminderList({
  reminders,
  onReminderDelete,
}: ReminderListProps): JSX.Element {
  return (
    <ul className="list-group my-3">
      {reminders.map(({ id, title }) => (
        <li className="list-group-item" key={id}>
          {title}
          <button
            className="btn btn-outline-danger mx-2 rounded-pill"
            onClick={() => onReminderDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
