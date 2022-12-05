import { useEffect, useState } from "react";
import NewReminder from "./components/NewReminder";

import ReminderList from "./components/ReminderList";
import { Reminder } from "./interfaces/Reminder";
import ReminderService from "./services/reminder";

function App(): JSX.Element {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const fetchReminders = async (): Promise<void> => {
    setReminders(await ReminderService.fetchReminders());
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  const handleReminderDelete = (id: number): void => {
    setReminders((state) => state.filter((item) => item.id !== id));
  };

  const addNewReminder = (title: string): void => {
    setReminders((state) => [{ id: state.length + 1, title }, ...state]);
  };

  return (
    <main className="container">
      <NewReminder onFormSubmit={addNewReminder} />
      <ReminderList
        reminders={reminders}
        onReminderDelete={handleReminderDelete}
      />
    </main>
  );
}

export default App;
