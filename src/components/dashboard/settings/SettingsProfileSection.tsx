"use client";

import { Camera } from "lucide-react";
import Image from "next/image";

export default function SettingsProfileSection() {
  return (
    <section className="grid gap-10 lg:grid-cols-[260px_1fr]">
      {/* Left */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Profile Details
        </h2>

        <p className="mt-3 text-gray-500">
          Manage your public information and how other students see your
          profile.
        </p>
      </div>

      {/* Right Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        {/* Avatar */}
        <div className="mb-8 flex flex-wrap items-center gap-5">
          <div className="relative h-24 w-24">
            <Image
              src="/images/avatar.jpg" // Replace with your image
              alt="Profile"
              fill
              className="rounded-full object-cover"
            />

            <button className="absolute bottom-0 right-0 rounded-full bg-blue-600 p-2 text-white shadow-lg">
              <Camera size={14} />
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">
              Jean Emmanuel
            </h3>

            <p className="mt-1 text-gray-500">
              Yaoundé, Cameroon
            </p>

            <div className="mt-4 flex gap-3">
              <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Upload New
              </button>

              <button className="rounded-lg border border-blue-600 px-5 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              defaultValue="Jean Emmanuel"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input
              defaultValue="jean.emmanuel@readam.cm"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Phone Number
          </label>

          <div className="flex overflow-hidden rounded-xl border border-gray-300">
            <div className="flex items-center border-r bg-gray-50 px-4 text-gray-700">
              +237
            </div>

            <input
              defaultValue="678443322"
              className="flex-1 px-4 py-3 outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}