import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      setTimeout(() => setError(''), 3000); // clear error after 3s
      return;
    }
    setError('');
    alert(`Logged in with\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 relative px-4">
      {/* Form Container */}
      <div className="bg-green-900/60 text-white rounded-xl p-8 shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Farm Connect</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 py-3 rounded-md font-semibold hover:border hover:border-sky-400 transition-all"
          >
            Log In
          </button>

          <p className="text-center text-sm mt-4">
            Don't have an account?{' '}
            <span className="text-blue-300 hover:underline cursor-pointer">Sign up</span>
          </p>
        </form>
      </div>

      {/* Error Popup */}
      {error && (
        <div className="absolute bottom-6 bg-red-500 text-white py-2 px-6 rounded-full shadow-lg animate-bounce">
          {error}
        </div>
      )}
    </div>
  );
};

export default Login;
