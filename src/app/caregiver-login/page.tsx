'use client';

import React, { useState } from 'react';

const CaregiverLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        // Sentinel: Removed console.log that was exposing credentials
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-white">
            <div className="relative flex min-h-screen w-full flex-col overflow-hidden group/design-root">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #3c83f6 0%, transparent 40%), radial-gradient(circle at 100% 100%, #3c83f6 0%, transparent 30%)' }}></div>

                <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-5 py-8 w-full max-w-md mx-auto">
                    <div className="mb-8 flex flex-col items-center">
                        <div
                            className="w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full shadow-lg shadow-primary/20 mb-6"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOtIQRB1HJUHSuQyA8sTLG1LlMwtiGSeSFcYAr3liYdL_NtC-gGgbKc-EcjASGb8LFUTatKYJ87YWYThfhtXtvxTlNQQSDv-KRrNb0FcF_UPS4ABpcN4PibnxM6uiv00R3_kz9jDXpE-qoQr8utGah08CiS9wSynpPzTvnYRZCFIR_FDrSWFgt-6JE4C_JNMGpD_LU-W0x9iKwHz7-FcbvWQIk8zP-YwCA6rrCsu5p6ItLuLz4uMExi2yyO1zRqicpZ674VdQZ8Lyp")' }}
                            aria-label="Project Cortex Logo"
                        ></div>
                        <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight text-center">
                            Welcome Back
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal pt-2 text-center">
                            Log in to the Caregiver Portal
                        </p>
                    </div>

                    <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-slate-900 dark:text-white text-sm font-medium leading-normal ml-1">Email</label>
                            <div className="relative">
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-none bg-white dark:bg-[#1e293b] h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-6 text-base font-normal leading-normal shadow-sm"
                                    placeholder="caregiver@example.com"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-slate-900 dark:text-white text-sm font-medium leading-normal ml-1">Password</label>
                            <div className="flex w-full flex-1 items-stretch rounded-full bg-white dark:bg-[#1e293b] shadow-sm focus-within:ring-2 focus-within:ring-primary overflow-hidden h-14">
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none border-none bg-transparent focus:outline-none focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 px-6 text-base font-normal leading-normal"
                                    placeholder="••••••••••••"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    className="flex items-center justify-center px-4 text-slate-400 hover:text-primary transition-colors cursor-pointer border-none bg-transparent"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-symbols-outlined text-[24px]">
                                        {showPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end px-1">
                            <a className="text-primary text-sm font-medium hover:text-blue-400 transition-colors" href="#">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 flex w-full items-center justify-center rounded-full bg-primary h-14 px-4 text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="mt-auto pt-10 pb-4 text-center">
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            Don&apos;t have an account?
                            <a className="text-primary font-semibold hover:text-blue-400 transition-colors ml-1" href="#">Request Access</a>
                        </p>
                        <div className="mt-6 flex justify-center gap-4 text-xs text-slate-400 dark:text-slate-600">
                            <a className="hover:text-slate-300" href="#">Privacy Policy</a>
                            <span>•</span>
                            <a className="hover:text-slate-300" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaregiverLogin;
