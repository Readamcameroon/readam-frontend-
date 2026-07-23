"use client";

import { Search } from "lucide-react";

export default function SettingsSearch() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-900">
        Settings
      </h1>

      <div className="relative w-full max-w-sm">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search settings..."
          className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>
    </div>
  );
}