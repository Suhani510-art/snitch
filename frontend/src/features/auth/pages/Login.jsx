import React, { useState } from 'react';
import { useAuth } from "../hook/useAuth"
import {useNavigate} from "react-router";

const Login = () => {

    const { handleLogin } = useAuth()
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLogin({
            email: formData.email,
            password: formData.password
        })
        navigate("/")   
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-background text-text-main">
            {/* Left Side: Brand Image (Hidden on Mobile) */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-surface items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img 
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" 
                    alt="Snitch Clothing Platform" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 text-center px-10">
                    <h1 className="text-6xl font-extrabold text-primary tracking-tighter mb-4 drop-shadow-lg">SNITCH</h1>
                    <p className="text-xl text-white font-medium tracking-wide">Define your style. Shop the latest trends.</p>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="w-full lg:w-1/2 min-h-screen lg:min-h-0 flex flex-col justify-center py-6 px-4 sm:px-8 lg:px-12 overflow-y-auto">
                <div className="w-full max-w-md mx-auto bg-surface p-6 sm:p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-surface-border mt-auto mb-auto">
                    <div className="mb-6 text-center lg:text-left">
                        {/* Mobile Brand Name */}
                        <h2 className="text-3xl font-black text-primary lg:hidden mb-6 tracking-tighter drop-shadow-md">SNITCH</h2>
                        
                        <h1 className="text-2xl sm:text-3xl font-semibold mb-1 tracking-tight">Welcome Back</h1>
                        <p className="text-text-muted text-sm sm:text-base">Sign in to your account to continue.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        <div className="space-y-3 sm:space-y-4">
                            {/* Email */}
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-text-muted mb-1.5 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full bg-background border-none rounded-lg px-4 py-2.5 sm:py-3 text-sm text-text-main placeholder-surface-border focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface-hover transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-text-muted mb-1.5 ml-1">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full bg-background border-none rounded-lg px-4 py-2.5 sm:py-3 text-sm text-text-main placeholder-surface-border focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface-hover transition-all duration-300"
                                    required
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-br from-primary to-[#ff8c00] text-background font-bold py-3 px-6 rounded-xl hover:from-primary-hover hover:to-[#e67e00] transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_5px_15px_rgba(255,184,0,0.2)]"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    
                    <div className="mt-6 text-center">
                        <p className="text-sm text-text-muted">
                            Don't have an account?{' '}
                            <a href="/register" className="text-primary font-medium hover:underline hover:text-primary-hover transition-colors">
                                Create Account
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;