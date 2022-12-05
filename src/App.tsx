import { useState } from "react";

import ReminderList from "./components/ReminderList";
import { Reminder } from "./interfaces/Reminder";

interface AppProps {}

function App(props: AppProps): JSX.Element {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, content: "Reminder 1" },
    { id: 2, content: "Reminder 2" },
  ]);

  const handleReminderDelete = (id: number): void => {
    setReminders((state) => state.filter((item) => item.id !== id));
  };

  return (
    <main className="container">
      <ReminderList
        reminders={reminders}
        onReminderDelete={handleReminderDelete}
      />
    </main>
  );
}

export default App;
