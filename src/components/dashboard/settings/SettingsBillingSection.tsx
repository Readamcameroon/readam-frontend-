"use client";

import { BadgeCheck, Download, FileText } from "lucide-react";

const invoices = [
  {
    id: "EDF-2023-09",
    date: "Sept 12, 2023",
    amount: "5,500 XAF",
    status: "PAID",
  },
  {
    id: "EDF-2023-08",
    date: "Aug 12, 2023",
    amount: "5,500 XAF",
    status: "PAID",
  },
];

export default function SettingsBillingSection() {
  return (
    <section className="grid gap-10 lg:grid-cols-[260px_1fr]">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Subscription & Billing
        </h2>

        <p className="mt-3 text-gray-500">
          Manage your subscription plan, payment methods and invoices.
        </p>
      </div>

      <div className="space-y-6">
        {/* Subscription Card */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <BadgeCheck className="text-blue-600" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Pro Student Monthly
                </h3>

                <p className="text-gray-500">
                  Next renewal on Oct 12, 2023 for 5,500 XAF
                </p>
              </div>
            </div>

            <button className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
              Upgrade Plan
            </button>
          </div>
        </div>

        {/* Payment History */}
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h3 className="text-lg font-semibold">
              Payment History
            </h3>

            <button className="text-sm font-medium text-blue-600">
              Download All
            </button>
          </div>

          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center justify-between border-b px-6 py-5 last:border-none"
            >
              <div className="flex items-center gap-4">
                <FileText className="text-gray-400" />

                <div>
                  <h4 className="font-medium">
                    Invoice #{invoice.id}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {invoice.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  {invoice.status}
                </span>

                <span className="font-medium">
                  {invoice.amount}
                </span>

                <Download
                  size={18}
                  className="cursor-pointer text-gray-500 hover:text-blue-600"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}