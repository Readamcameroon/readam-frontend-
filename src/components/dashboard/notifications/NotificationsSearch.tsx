"use client";

import { Search, Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { getStoredUser } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NotificationsSearch() {
  const [initials, setInitials] = useState("S");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      setInitials(
        user.full_name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()
      );
      setAvatar(user.avatar ?? "");
    }
  }, []);

  return (
    <div className="sticky top-0 z-10 border-b border-gray-100 bg-white px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl items-center gap-3">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Search notifications or courses..."
            className="h-10 w-full rounded-full border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm outline-none transition-colors focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <button
          aria-label="Notifications"
          className="flex size-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm"
        >
          <Bell className="size-4" />
        </button>

        <Avatar className="size-10 shadow-sm">
          <AvatarImage src={avatar} />
          <AvatarFallback className="bg-gray-200 text-sm font-semibold text-gray-700">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}