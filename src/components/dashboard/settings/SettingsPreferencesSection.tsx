"use client";

import { useState } from "react";

export default function SettingsPreferencesSection() {
  const [updates, setUpdates] = useState(true);
  const [reminders, setReminders] = useState(true);

  return (
    <section className="grid gap-10 lg:grid-cols-[260px_1fr]">
      <div>
        <h2 className="text-2xl font-bold">
          Preferences
        </h2>

        <p className="mt-3 text-gray-500">
          Tailor your learning experience with language and notification
          preferences.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-8 shadow-sm space-y-8">
        <Preference
          title="Course Updates"
          description="Get notified when new content is added to your courses."
          checked={updates}
          onChange={() => setUpdates(!updates)}
        />

        <Preference
          title="Learning Reminders"
          description="Daily reminders to help maintain your learning streak."
          checked={reminders}
          onChange={() => setReminders(!reminders)}
        />
      </div>
    </section>
  );
}

function Preference({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-semibold">
          {title}
        </h4>

        <p className="mt-1 text-sm text-gray-500">
          {description}
        </p>
      </div>

      <button
        onClick={onChange}
        className={`relative h-7 w-14 rounded-full transition ${
          checked ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            checked ? "left-8" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}