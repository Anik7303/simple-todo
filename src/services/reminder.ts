import axios from "axios";

import { Reminder } from "../interfaces/Reminder";

class ReminderService {
  static http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  static async fetchReminders(): Promise<Reminder[]> {
    const response = await this.http.get("/todos");
    return response.data;
  }

  static async deleteReminder(id: number): Promise<Reminder> {
    const response = await this.http.delete(`/todos/${id}`);
    return response.data;
  }
}

export default ReminderService;
