import NotificationsHeader from "@/components/dashboard/notifications/NotificationsHeader";
import NotificationsSearch from "@/components/dashboard/notifications/NotificationsSearch";
import NotificationsFeed from "@/components/dashboard/notifications/NotificationsFeed";

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NotificationsSearch />
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        <NotificationsHeader />
        <NotificationsFeed />
      </div>
    </div>
  );
}