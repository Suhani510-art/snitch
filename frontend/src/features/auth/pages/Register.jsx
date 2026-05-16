import React, { useState } from 'react';
import { useAuth } from "../hook/useAuth"
import {useNavigate} from "react-router";

const Register = () => {

    const { handleRegister }= useAuth()
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        password: '',
        isSeller: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleRegister ({
            email: formData.email,
            contact: formData.contactNumber,
            password: formData.password,
            isSeller: formData.isSeller,
            fullname: formData.fullName
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

            {/* Right Side: Registration Form */}
            <div className="w-full lg:w-1/2 min-h-screen lg:min-h-0 flex flex-col justify-center py-6 px-4 sm:px-8 lg:px-12 overflow-y-auto">
                <div className="w-full max-w-md mx-auto bg-surface p-6 sm:p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-surface-border mt-auto mb-auto">
                    <div className="mb-6 text-center lg:text-left">
                        {/* Mobile Brand Name */}
                        <h2 className="text-3xl font-black text-primary lg:hidden mb-6 tracking-tighter drop-shadow-md">SNITCH</h2>
                        
                        <h1 className="text-2xl sm:text-3xl font-semibold mb-1 tracking-tight">Create Account</h1>
                        <p className="text-text-muted text-sm sm:text-base">Join us and start your journey.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        <div className="space-y-3 sm:space-y-4">
                            {/* Full Name */}
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-text-muted mb-1.5 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full bg-background border-none rounded-lg px-4 py-2.5 sm:py-3 text-sm text-text-main placeholder-surface-border focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface-hover transition-all duration-300"
                                    required
                                />
                            </div>

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

                            {/* Contact Number */}
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-text-muted mb-1.5 ml-1">Contact Number</label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    placeholder="+1 234 567 890"
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

                        {/* isSeller Checkbox */}
                        <div className="flex items-start mt-4 p-3 rounded-lg bg-background/50 border border-surface-border">
                            <div className="flex items-center h-4 mt-0.5">
                                <input
                                    id="isSeller"
                                    name="isSeller"
                                    type="checkbox"
                                    checked={formData.isSeller}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-primary bg-background border-surface-border rounded focus:ring-primary focus:ring-2 accent-primary cursor-pointer"
                                />
                            </div>
                            <div className="ml-3">
                                <label htmlFor="isSeller" className="text-sm font-medium text-text-main cursor-pointer block">
                                    Register as a Seller
                                </label>
                                <p className="text-xs text-text-muted mt-0.5 leading-relaxed">Check this if you want to sell your own products on Snitch.</p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-br from-primary to-[#ff8c00] text-background font-bold py-3 px-6 rounded-xl hover:from-primary-hover hover:to-[#e67e00] transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_5px_15px_rgba(255,184,0,0.2)]"
                            >
                                Create Account
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-3 my-2">
                            <div className="flex-1 h-px bg-surface-border"></div>
                            <span className="text-xs text-text-muted uppercase tracking-wider">or</span>
                            <div className="flex-1 h-px bg-surface-border"></div>
                        </div>

                        {/* Continue with Google */}
                        <a
                           href="http://localhost:8000/api/auth/google"
                            className="w-full flex items-center justify-center gap-3 bg-background border border-surface-border rounded-xl py-3 px-6 text-sm font-medium text-text-main hover:bg-surface-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11.96 11.96 0 0 0 0 12c0 1.94.46 3.77 1.28 5.4l3.56-2.77.01-.54z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Continue with Google
                        </a>
                    </form>
                    
                    <div className="mt-6 text-center">
                        <p className="text-sm text-text-muted">
                            Already have an account?{' '}
                            <a href="/login" className="text-primary font-medium hover:underline hover:text-primary-hover transition-colors">
                                Sign In
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;