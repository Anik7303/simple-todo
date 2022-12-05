import React, { useState } from "react";

interface NewReminderProps {
  onFormSubmit: (title: string) => void;
}

function NewReminder({ onFormSubmit }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (!title) return;
    onFormSubmit(title);
    setTitle("");
  };

  return (
    <form className="my-3" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
        <button className="btn btn-primary">Add Reminder</button>
      </div>
    </form>
  );
}

export default NewReminder;
