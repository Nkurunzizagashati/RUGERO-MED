import { useState } from 'react';
import { RiUserLine, RiNotificationLine, RiLockLine, RiGlobalLine } from 'react-icons/ri';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    department: 'Engineering',
    position: 'Senior Developer',
    phone: '+1 234 567 8900',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    leaveApprovals: true,
    leaveRequests: true,
    teamUpdates: false,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <RiUserLine size={20} /> },
    { id: 'notifications', label: 'Notifications', icon: <RiNotificationLine size={20} /> },
    { id: 'security', label: 'Security', icon: <RiLockLine size={20} /> },
    { id: 'preferences', label: 'Preferences', icon: <RiGlobalLine size={20} /> },
  ];

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profileData);
  };

  const handleNotificationChange = (setting) => {
    setNotificationSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log('Password change requested:', passwordData);
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

        <div className="bg-white rounded-lg shadow">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <form onSubmit={handleProfileSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: 'Full Name', value: 'name', type: 'text' },
                    { label: 'Email', value: 'email', type: 'email' },
                    { label: 'Department', value: 'department', type: 'text' },
                    { label: 'Position', value: 'position', type: 'text' },
                    { label: 'Phone', value: 'phone', type: 'tel' },
                  ].map((field) => (
                    <div key={field.value}>
                      <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                      <input
                        type={field.type}
                        value={profileData[field.value]}
                        onChange={(e) =>
                          setProfileData({ ...profileData, [field.value]: e.target.value })
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                {[
                  { id: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
                  { id: 'leaveApprovals', label: 'Leave Approvals', description: 'Get notified when your leave is approved' },
                  { id: 'leaveRequests', label: 'Leave Requests', description: 'Get notified about new leave requests' },
                  { id: 'teamUpdates', label: 'Team Updates', description: 'Get notified about team member leaves' },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{item.label}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationSettings[item.id]}
                        onChange={() => handleNotificationChange(item.id)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                {[
                  { label: 'Current Password', value: 'currentPassword' },
                  { label: 'New Password', value: 'newPassword' },
                  { label: 'Confirm New Password', value: 'confirmPassword' },
                ].map((field) => (
                  <div key={field.value}>
                    <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                    <input
                      type="password"
                      value={passwordData[field.value]}
                      onChange={(e) => setPasswordData({ ...passwordData, [field.value]: e.target.value })}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                ))}
                <div className="flex justify-end">
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Update Password
                  </button>
                </div>
              </form>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Language</h3>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Time Zone</h3>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option value="utc">UTC</option>
                    <option value="est">Eastern Time</option>
                    <option value="pst">Pacific Time</option>
                  </select>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Date Format</h3>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                    <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                    <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
