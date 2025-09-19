// src/admin/pages/LoginPage.jsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        toast.success('Login successful!', {
          duration: 3000,
          position: 'top-right',
          style: {
            background: '#8BC34A',
            color: '#fff',
            padding: '16px 24px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
        });
        navigate(from, { replace: true });
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rugero-primary/10 via-white to-rugero-primary/5 p-4">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-md">
        <div className="bg-rugero-primary text-white p-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Welcome Back</h1>
          <p className="text-rugero-lightGray mt-1">Sign in to your admin account</p>
        </div>

        <div className="p-8">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded" role="alert">
              <p className="font-medium">Login Failed</p>
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rugero-primary/50 focus:border-rugero-primary transition duration-200"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Link to="#" className="text-sm text-rugero-primary hover:underline">Forgot password?</Link>
              </div>
              <input
                id="password"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rugero-primary/50 focus:border-rugero-primary transition duration-200"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-rugero-primary focus:ring-rugero-primary border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
            </div>

            <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-rugero-primary hover:bg-rugero-darkGreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rugero-primary transition duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                'Sign in to your account'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
