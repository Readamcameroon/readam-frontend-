"use client";

import { Lock, LogOut } from "lucide-react";

export default function SettingsSecuritySection() {
  return (
    <section className="grid gap-10 lg:grid-cols-[260px_1fr]">
      <div>
        <h2 className="text-2xl font-bold">
          Security
        </h2>

        <p className="mt-3 text-gray-500">
          Update your password and keep your account secure.
        </p>
      </div>

      <div className="space-y-6">
        {/* Password Card */}
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3">
              <Lock className="text-blue-600" />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Change Password
              </h3>

              <p className="text-gray-500">
                Ensure your account is protected with a strong password.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Current Password
              </label>

              <input
                type="password"
                className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                New Password
              </label>

              <input
                type="password"
                className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 outline-none"
              />
            </div>

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
              Update Password
            </button>
          </div>
        </div>

        {/* Session Management */}
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-red-600">
                Session Management
              </h3>

              <p className="mt-2 text-red-500">
                End your current session safely. Remember to save any changes
                before logging out.
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700">
              <LogOut size={18} />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}