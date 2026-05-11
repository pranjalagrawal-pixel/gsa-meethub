
import { useState } from "react";

export default function App() {
  const [meetings, setMeetings] = useState([
    {
      title: "Core Team Discussion",
      host: "Rahul Sharma",
      gid: "GSA1021",
      date: "2026-05-12",
      time: "7:00 PM"
    }
  ]);

  const [form, setForm] = useState({
    title: "",
    host: "",
    gid: "",
    date: "",
    time: ""
  });

  const createMeeting = () => {
    const alreadyExists = meetings.find(
      (meeting) =>
        meeting.date === form.date &&
        meeting.time === form.time
    );

    if (alreadyExists) {
      alert("Same date and time slot already booked.");
      return;
    }

    setMeetings([...meetings, form]);

    setForm({
      title: "",
      host: "",
      gid: "",
      date: "",
      time: ""
    });
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black mb-3">
          GSA MeetHub
        </h1>

        <p className="text-zinc-400 mb-10">
          Smart meeting management portal
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              Schedule Meeting
            </h2>

            <div className="space-y-4">
              <input
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                placeholder="Meeting title"
                className="w-full bg-black border border-zinc-700 rounded-2xl p-4"
              />

              <input
                value={form.host}
                onChange={(e) =>
                  setForm({ ...form, host: e.target.value })
                }
                placeholder="Host name"
                className="w-full bg-black border border-zinc-700 rounded-2xl p-4"
              />

              <input
                value={form.gid}
                onChange={(e) =>
                  setForm({ ...form, gid: e.target.value })
                }
                placeholder="Host GID"
                className="w-full bg-black border border-zinc-700 rounded-2xl p-4"
              />

              <input
                type="date"
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
                className="w-full bg-black border border-zinc-700 rounded-2xl p-4"
              />

              <input
                type="time"
                value={form.time}
                onChange={(e) =>
                  setForm({ ...form, time: e.target.value })
                }
                className="w-full bg-black border border-zinc-700 rounded-2xl p-4"
              />

              <button
                onClick={createMeeting}
                className="w-full bg-blue-600 py-4 rounded-2xl font-bold"
              >
                Create Meeting
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              Upcoming Meetings
            </h2>

            <div className="space-y-5">
              {meetings.map((meeting, index) => (
                <div
                  key={index}
                  className="bg-black border border-zinc-700 rounded-2xl p-5"
                >
                  <h3 className="text-2xl font-bold">
                    {meeting.title}
                  </h3>

                  <div className="mt-3 space-y-1 text-zinc-400">
                    <p>Host: {meeting.host}</p>
                    <p>GID: {meeting.gid}</p>
                    <p>Date: {meeting.date}</p>
                    <p>Time: {meeting.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
