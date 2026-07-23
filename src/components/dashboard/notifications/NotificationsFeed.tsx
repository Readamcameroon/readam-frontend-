"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Sparkles,
  AlertTriangle,
  Users,
  Info,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type NotifVariant = "grade" | "ai" | "payment" | "discussion" | "system" | "course";

interface Notification {
  id: string;
  variant: NotifVariant;
  title: string;
  body: string;
  time: string;
  unread?: boolean;
  actions?: { label: string; href: string; primary?: boolean }[];
  compact?: boolean;
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const TODAY: Notification[] = [
  {
    id: "1",
    variant: "grade",
    title: "Assignment Graded",
    body: 'Your submission for "Advanced UI Architecture" has been reviewed. You scored an A+. Great job on the layout structure!',
    time: "2h ago",
    unread: true,
    actions: [{ label: "View Feedback", href: "#", primary: false }],
  },
  {
    id: "2",
    variant: "ai",
    title: "AI Tutor Reminder",
    body: 'Based on your last quiz, I\'ve prepared a new set of practice questions for "System Design Patterns". Shall we begin?',
    time: "5h ago",
    unread: true,
    actions: [
      { label: "Start Now", href: "/dashboard/ai-tutor/ai-chat", primary: true },
      { label: "Maybe Later", href: "#", primary: false },
    ],
  },
];

const YESTERDAY: Notification[] = [
  {
    id: "3",
    variant: "payment",
    title: "Payment Failed",
    body: "We couldn't process your monthly subscription. Please update your payment method to keep access to premium courses.",
    time: "Yesterday, 4:30 PM",
    unread: false,
  },
  {
    id: "4",
    variant: "discussion",
    title: "New Discussion Reply",
    body: 'Sarah Miller replied to your post: "What\'s the best way to handle global state in 2024?"',
    time: "Yesterday, 11:15 AM",
    unread: false,
  },
];

const OLDER: Notification[] = [
  {
    id: "5",
    variant: "system",
    title: "System Maintenance",
    body: "Completed on Oct 12, 2023",
    time: "",
    unread: false,
    compact: true,
  },
  {
    id: "6",
    variant: "course",
    title: "New Course: Design Pro",
    body: "Released on Jun 10, 2026",
    time: "",
    unread: false,
    compact: true,
  },
];

// ─── Icon map ─────────────────────────────────────────────────────────────────

const ICONS: Record<NotifVariant, { icon: React.ElementType; bg: string; color: string }> = {
  grade:      { icon: CheckCircle2,   bg: "bg-blue-100",   color: "text-blue-600" },
  ai:         { icon: Sparkles,       bg: "bg-orange-100", color: "text-orange-500" },
  payment:    { icon: AlertTriangle,  bg: "bg-red-100",    color: "text-red-500" },
  discussion: { icon: Users,          bg: "bg-gray-100",   color: "text-gray-500" },
  system:     { icon: Info,           bg: "bg-blue-50",    color: "text-blue-500" },
  course:     { icon: GraduationCap,  bg: "bg-blue-50",    color: "text-blue-500" },
};

// ─── Single notification card ─────────────────────────────────────────────────

function NotifCard({ n }: { n: Notification }) {
  const { icon: Icon, bg, color } = ICONS[n.variant];

  if (n.compact) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3.5 shadow-sm">
        <div className={cn("flex size-9 shrink-0 items-center justify-center rounded-full", bg)}>
          <Icon className={cn("size-4", color)} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{n.title}</p>
          <p className="text-xs text-gray-400">{n.body}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-2xl border bg-white shadow-sm",
        n.unread ? "border-l-4 border-l-blue-500 border-t-gray-100 border-r-gray-100 border-b-gray-100" : "border-gray-100"
      )}
    >
      <div className="flex gap-3 p-4">
        <div className={cn("mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full", bg)}>
          <Icon className={cn("size-4", color)} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-semibold text-gray-900">{n.title}</p>
            <span className="shrink-0 text-xs text-gray-400">{n.time}</span>
          </div>

          <p className="mt-1 text-sm leading-relaxed text-gray-600">{n.body}</p>

          {n.actions && n.actions.length > 0 && (
            <div className="mt-3 flex items-center gap-3">
              {n.actions.map((action) =>
                action.primary ? (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    {action.label}
                  </Link>
                ) : (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    {action.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Section group ────────────────────────────────────────────────────────────

function NotifSection({
  title,
  badge,
  items,
  grid,
}: {
  title: string;
  badge?: string;
  items: Notification[];
  grid?: boolean;
}) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-base font-bold text-gray-900">{title}</h2>
        <div className="flex-1 border-t border-gray-200" />
        {badge && (
          <span className="rounded-md border border-blue-200 bg-white px-2 py-0.5 text-xs font-bold text-blue-600">
            {badge}
          </span>
        )}
      </div>

      <div className={cn("space-y-3", grid && "grid grid-cols-1 gap-3 space-y-0 sm:grid-cols-2")}>
        {items.map((n) => (
          <NotifCard key={n.id} n={n} />
        ))}
      </div>
    </div>
  );
}

// ─── Main feed ────────────────────────────────────────────────────────────────

export default function NotificationsFeed() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <NotifSection title="Today" badge="2 NEW" items={TODAY} />
      <NotifSection title="Yesterday" items={YESTERDAY} />
      <NotifSection title="Older" items={OLDER} grid />

      <div className="mt-2 text-center">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline"
        >
          {expanded ? "Show less" : "Load more history"}
          <ChevronDown
            className={cn("size-4 transition-transform", expanded && "rotate-180")}
          />
        </button>
      </div>
    </div>
  );
}