'use client';

import React from 'react';
import Image from 'next/image';

const LocationMap: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display antialiased overflow-hidden h-screen w-full select-none">
            <div className="relative w-full h-full flex flex-col">
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                    <Image
                        width={500}
                        height={500}
                        className="w-full h-full bg-cover bg-center opacity-80 mix-blend-overlay absolute inset-0 z-0"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2jLtv8MkHeNyu62fGVMaXAItkTJKRNvDxEAc3JpZ81bCNhgwN-9ipzCxnDGvX7vgKEqQFIdLn2C6AqHVooGlg6EEbnfSg2oMEiD1wXTQIouvL9d3plzdIkKqMpPwUNhn-iVzUR1Z0UKYhOf0inRFXd_z_P1fNu1eu6q4dvoQHaGX3m8PeO_a0g9prOcORWPqz5fYH3mzshhxlJsyq8NBcmhmNonJH7qj2mQO6UuOmNwajR1c_FFkFxreXk6Qk5ZrLsIRCKNxQVGPa"
                        alt="Map background"
                        style={{
                            filter: 'grayscale(100%) invert(85%) contrast(120%)',
                        }}
                    />
                    <div className="absolute inset-0 bg-[#0f151f]/90 mix-blend-multiply z-0"></div>
                    <div className="absolute top-[30%] left-[20%] w-72 h-72 bg-emerald-500/10 border-2 border-emerald-500/20 rounded-full blur-[1px] transform rotate-12 scale-110 pointer-events-none z-0"></div>
                    <div className="absolute top-[28%] left-[25%] px-3 py-1 bg-emerald-900/40 text-emerald-300 text-xs font-bold rounded-full border border-emerald-500/20 backdrop-blur-sm z-0">
                        Safe Zone: Home
                    </div>

                    <div className="relative w-full h-full z-10">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                            <defs>
                                <linearGradient id="pathGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(60, 131, 246, 0)"></stop>
                                    <stop offset="100%" stopColor="#3c83f6"></stop>
                                </linearGradient>
                            </defs>
                            <path
                                className="opacity-80 drop-shadow-[0_0_8px_rgba(60,131,246,0.6)]"
                                d="M 120 200 Q 180 350 210 420 T 320 500"
                                fill="none"
                                stroke="url(#pathGradient)"
                                strokeDasharray="8 6"
                                strokeLinecap="round"
                                strokeWidth="4"
                            ></path>
                        </svg>

                        <div className="absolute top-[55%] left-[65%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group">
                            <div className="relative flex items-center justify-center size-20">
                                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/30 opacity-75"></div>
                                <div className="absolute inline-flex h-12 w-12 rounded-full bg-primary/20 animate-pulse"></div>
                                <div className="relative size-12 rounded-full border-[3px] border-white dark:border-[#101722] shadow-[0_4px_12px_rgba(0,0,0,0.5)] bg-primary overflow-hidden z-20">
                                    <Image
                                        width={500}
                                        height={500}
                                        className="w-full h-full bg-cover bg-center"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUleVCtqWdGVwcAmYEXKCdC16awzvjRVFYl-u2YPuAtdiQT9yrTYN7_SHhXo4o0pmJmn9MyHpudN2goa0qEmMJzm7nbHQZlP7Ix-I-qVJjtkgVWXgGr3_EBIAkpuay5b1dqdqNgstewdjPgD0pDajEUtpD59FvLcLbA6a4VZKANoAtXJ_e6-KSAfl7XGfnH7wqqhiAaQiVlhZ691hB8FbdFo6rgdc3VD1WCN8DRA2T4e0sY1dWDiDbX9jvQV7HW9q26oQeVg84xT--"
                                        alt="User avatar"
                                    />
                                </div>
                            </div>
                            <div className="mt-1 bg-background-dark/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg text-white text-xs font-bold shadow-lg transform transition-transform group-hover:scale-110">
                                Dad
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 left-0 right-0 p-4 pt-14 z-30 pointer-events-none">
                    <div className="mx-auto max-w-md w-full pointer-events-auto">
                        <div className="bg-[#101722]/85 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                                            <span className="material-symbols-outlined text-[20px]">person_pin_circle</span>
                                        </div>
                                        <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 border-2 border-[#101722] rounded-full"></div>
                                    </div>
                                    <div>
                                        <h2 className="text-white text-base font-bold leading-tight">Dad - Active</h2>
                                        <p className="text-gray-400 text-xs font-medium">Monitoring active • 2m ago</p>
                                    </div>
                                </div>
                                <button className="relative flex items-center justify-center size-10 rounded-full bg-white/5 hover:bg-white/10 transition text-white border border-white/5">
                                    <span className="material-symbols-outlined text-[20px]">notifications</span>
                                    <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-[#101722]"></span>
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex h-9 items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/5 px-3">
                                    <span className="material-symbols-outlined text-green-400 text-[18px]">battery_5_bar</span>
                                    <span className="text-white text-sm font-medium">84% Battery</span>
                                </div>
                                <div className="flex h-9 items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/5 px-3">
                                    <span className="material-symbols-outlined text-blue-400 text-[18px]">satellite_alt</span>
                                    <span className="text-white text-sm font-medium">GPS: &lt;5m</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute right-4 bottom-72 flex flex-col gap-3 z-30">
                    <button className="size-12 rounded-full bg-[#101722]/90 backdrop-blur-lg border border-white/10 text-white shadow-lg flex items-center justify-center hover:bg-white/10 active:scale-95 transition">
                        <span className="material-symbols-outlined">layers</span>
                    </button>
                    <div className="flex flex-col bg-[#101722]/90 backdrop-blur-lg border border-white/10 rounded-full shadow-lg overflow-hidden">
                        <button className="size-12 flex items-center justify-center text-white hover:bg-white/10 active:bg-white/20 transition">
                            <span className="material-symbols-outlined">add</span>
                        </button>
                        <div className="h-px w-8 bg-white/10 mx-auto"></div>
                        <button className="size-12 flex items-center justify-center text-white hover:bg-white/10 active:bg-white/20 transition">
                            <span className="material-symbols-outlined">remove</span>
                        </button>
                    </div>
                    <button className="size-12 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-blue-600 active:scale-95 transition mt-2">
                        <span className="material-symbols-outlined">my_location</span>
                    </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-40">
                    <div className="bg-background-dark border-t border-white/10 rounded-t-[2rem] shadow-[0_-8px_30px_rgba(0,0,0,0.5)] pt-2 pb-8 px-5 flex flex-col gap-5">
                        <div className="w-full flex justify-center pt-2 pb-1 cursor-grab active:cursor-grabbing">
                            <div className="h-1.5 w-12 rounded-full bg-white/20"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-start">
                                <h3 className="text-white text-xl font-bold leading-snug max-w-[75%]">124 Pine St, Seattle, WA</h3>
                                <div className="flex flex-col items-end">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-primary/20 text-blue-300 border border-primary/20 uppercase tracking-wide">
                                        Live
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <span className="material-symbols-outlined text-[16px]">schedule</span>
                                <span>Updated just now</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                            <button className="col-span-2 bg-primary hover:bg-blue-600 active:bg-blue-700 text-white rounded-xl h-14 flex items-center justify-center gap-2 font-bold text-base transition-all shadow-lg shadow-primary/20 group">
                                <span className="material-symbols-outlined group-hover:-translate-y-0.5 transition-transform">navigation</span>
                                Navigate
                            </button>
                            <button className="col-span-1 bg-[#1f2937] hover:bg-[#2d3748] active:bg-[#1a202c] border border-white/5 text-white rounded-xl h-14 flex items-center justify-center transition-colors">
                                <span className="material-symbols-outlined text-green-400">call</span>
                            </button>
                            <button className="col-span-1 bg-[#1f2937] hover:bg-[#2d3748] active:bg-[#1a202c] border border-white/5 text-white rounded-xl h-14 flex items-center justify-center transition-colors">
                                <span className="material-symbols-outlined text-blue-300">sms</span>
                            </button>
                        </div>
                        <div className="bg-[#1f2937] border border-white/5 rounded-xl p-3 flex items-center gap-3">
                            <button className="text-white/60 hover:text-white transition p-1">
                                <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                            </button>
                            <div className="flex-1 h-8 relative flex items-center">
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-gradient-to-r from-primary/40 to-primary"></div>
                                </div>
                                <div className="absolute inset-0 flex justify-between px-1 pointer-events-none opacity-30">
                                    <div className="w-px h-2 bg-white mt-3"></div>
                                    <div className="w-px h-2 bg-white mt-3"></div>
                                    <div className="w-px h-2 bg-white mt-3"></div>
                                    <div className="w-px h-2 bg-white mt-3"></div>
                                    <div className="w-px h-2 bg-white mt-3"></div>
                                </div>
                                <div className="absolute left-[85%] size-4 bg-white rounded-full shadow-md border-2 border-primary cursor-pointer hover:scale-110 transition-transform"></div>
                            </div>
                            <span className="text-xs font-mono text-white/60 whitespace-nowrap">-5m</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationMap;
