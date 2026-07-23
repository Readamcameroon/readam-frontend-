"use client";

const sections = [
  {
    label: "Profile",
    id: "profile",
  },
  {
    label: "Billing",
    id: "billing",
  },
  {
    label: "Language",
    id: "language",
  },
  {
    label: "Preferences",
    id: "preferences",
  },
  {
    label: "Security",
    id: "security",
  },
];

export default function SettingsSidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-white">

      <div className="border-b p-6">
        <h2 className="text-3xl font-bold">
          Settings
        </h2>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="block rounded-xl px-4 py-3 text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}