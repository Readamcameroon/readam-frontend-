"use client";

import { CheckCheck, Settings } from "lucide-react";

export default function NotificationsHeader() {
  return (
    <div className="mb-6 flex items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900">Notifications</h1>
        <p className="mt-0.5 text-sm text-gray-500">
          Stay updated with your learning progress and community activity.
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
        >
          <CheckCheck className="size-4" />
          Mark all as read
        </button>

        <button
          type="button"
          aria-label="Notification settings"
          className="flex size-9 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-50"
        >
          <Settings className="size-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
}