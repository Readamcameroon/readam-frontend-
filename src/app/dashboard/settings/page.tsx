import SettingsSearch from "@/components/dashboard/settings/SettingsSearch";
import SettingsProfileSection from "@/components/dashboard/settings/SettingsProfileSection";
import SettingsBillingSection from "@/components/dashboard/settings/SettingsBillingSection";
import SettingsLanguageSection from "@/components/dashboard/settings/SettingsLanguageSection";
import SettingsPreferencesSection from "@/components/dashboard/settings/SettingsPreferencesSection";
import SettingsSecuritySection from "@/components/dashboard/settings/SettingsSecuritySection";


export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Left settings content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold text-gray-900">Settings</h1>
            <SettingsSearch />
          </div>

          <div className="mx-auto max-w-3xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
            <SettingsProfileSection />
            <SettingsBillingSection />
            <SettingsLanguageSection />
            <SettingsPreferencesSection />
            <SettingsSecuritySection />
          </div>
        </div>

        {/* Bottom sidebar links (support + logout) rendered as fixed bottom on desktop */}
        
      </div>
    </div>
  );
}