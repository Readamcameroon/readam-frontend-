"use client";

import { useState } from "react";

export default function SettingsLanguageSection() {
  const [language, setLanguage] = useState("en");

  return (
    <section className="grid gap-10 lg:grid-cols-[260px_1fr]">
      <div>
        <h2 className="text-2xl font-bold">
          Language
        </h2>

        <p className="mt-3 text-gray-500">
          Select your preferred language for the ReadAm interface.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <p className="mb-5 text-sm font-semibold text-gray-600">
          Interface Language
        </p>

        <div className="grid grid-cols-2 gap-5">
          <button
            onClick={() => setLanguage("en")}
            className={`rounded-xl border py-4 font-medium transition ${
              language === "en"
                ? "border-blue-600 bg-blue-50 text-blue-600"
                : "border-gray-300"
            }`}
          >
            English
          </button>

          <button
            onClick={() => setLanguage("fr")}
            className={`rounded-xl border py-4 font-medium transition ${
              language === "fr"
                ? "border-blue-600 bg-blue-50 text-blue-600"
                : "border-gray-300"
            }`}
          >
            Français
          </button>
        </div>
      </div>
    </section>
  );
}