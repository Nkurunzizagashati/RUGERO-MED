import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { toast } from 'react-hot-toast';
import { PanelLeft, X, Bell, PackagePlus, Newspaper, List, Settings, LogOut, LogIn } from 'lucide-react';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  const navLinks = [
    { to: '/admin/products', label: 'Products', icon: <List size={18} /> },
    { to: '/admin/products/create', label: 'Add Product', icon: <PackagePlus size={18} /> },
    { to: '/admin/news', label: 'News', icon: <Newspaper size={18} /> },
    { to: '/admin/news/create', label: 'Post News', icon: <PackagePlus size={18} /> },
    { to: '/admin/settings', label: 'Settings', icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-lg z-20 transform transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Logo + toggle */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              {sidebarOpen && <span className="text-xl font-bold text-blue-600">Rugero Admin</span>}
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-md hover:bg-gray-100">
                {sidebarOpen ? <X size={20} /> : <PanelLeft size={20} />}
              </button>
            </div>

            {/* Nav links */}
            <nav className="mt-4 flex flex-col space-y-1 px-2">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className={`flex items-center px-3 py-2 rounded-md transition-colors ${location.pathname === link.to ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-100 text-gray-700'}`}>
                  <span>{link.icon}</span>
                  {sidebarOpen && <span className="ml-3">{link.label}</span>}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom login/logout link */}
          <div className="p-4 border-t border-gray-200">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="w-full flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition-colors hover:text-red-600">
                <LogOut size={18} />
                {sidebarOpen && <span>Logout</span>}
              </button>
            ) : (
              <Link to="/login" className={`flex items-center px-3 py-2 rounded-md transition-colors ${location.pathname === '/login' ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-100 text-gray-700'}`}>
                <LogIn size={18} className="mr-2" />
                {sidebarOpen && 'Login'}
              </Link>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Top Navbar */}
        <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow flex items-center justify-between px-4 md:px-6 z-30">
          {/* Left: search */}
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-md hover:bg-gray-100 md:hidden">
              <PanelLeft size={20} />
            </button>
            <input type="text" placeholder="Search..." className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          {/* Right: notifications + user */}
          <div className="flex items-center space-x-6">
            <button className="relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
              <span className="text-gray-700 font-medium">Admin</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 pt-20 p-6 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
