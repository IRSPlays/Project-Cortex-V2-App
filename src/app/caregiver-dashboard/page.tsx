'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CaregiverDashboard: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display">
            <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden">
                <header className="flex items-center justify-between p-4 pb-2 bg-background-light dark:bg-background-dark sticky top-0 z-10">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Image
                                width={500}
                                height={500}
                                className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-[#282e39]"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcQCDDnJ-MWXQ-ZmDaZpRyW__pophXFnwzBNQgrBte2OmRpNZ5xxolFTkD4iIcyn25nb61uQ40prQYklq9reuPCLrTIvjer3rqvUsQeUxOcd-c13Tx8zQYxe-Tnj071d-FkrxfsOFByaOv47DaGs_TT87VFaKjvghWpeSiQePGpL_DwfGPfiyXMAAQJ1i2ddyFzLmtkPP8--Ri46aHHP9KCrx5UMo6dVy27SQwAsMA-HNyHC1UdWui0X6nszzdTEXAUIo-ID_YeMfK"
                                alt="Monitored person's profile picture"
                            />
                            <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-[#101722] rounded-full"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 leading-none">Monitoring</span>
                            <span className="text-sm font-bold text-[#111418] dark:text-white leading-tight">Dad&apos;s Cortex</span>
                        </div>
                    </div>
                    <button className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-[#282e39] shadow-sm text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-[#363d4a] transition-colors relative">
                        <span className="material-symbols-outlined text-[24px]">notifications</span>
                        <span className="absolute top-2 right-2.5 size-2 bg-primary rounded-full"></span>
                    </button>
                </header>

                <section className="px-4 pt-4 pb-2">
                    <h1 className="text-[#111418] dark:text-white text-[28px] font-bold leading-tight tracking-tight">
                        Good Morning,
                        <br />
                        Sarah
                    </h1>
                </section>

                <section className="flex flex-wrap gap-3 p-4">
                    <div className="flex min-w-[158px] flex-1 flex-col justify-between gap-4 rounded-xl p-5 bg-white dark:bg-[#1e293b] shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="flex items-start justify-between">
                            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[24px]">battery_5_bar</span>
                            </div>
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Battery</span>
                        </div>
                        <div>
                            <p className="text-[#111418] dark:text-white tracking-tight text-3xl font-bold leading-tight mb-1">84%</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">~12h remaining</p>
                        </div>
                    </div>
                    <div className="flex min-w-[158px] flex-1 flex-col justify-between gap-4 rounded-xl p-5 bg-white dark:bg-[#1e293b] shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="flex items-start justify-between">
                            <div className="bg-primary/20 p-2 rounded-full text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-[24px]">wifi</span>
                            </div>
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Signal</span>
                        </div>
                        <div>
                            <p className="text-[#111418] dark:text-white tracking-tight text-3xl font-bold leading-tight mb-1">Good</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">5G • GPS Active</p>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-2">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-[#111418] dark:text-white text-[18px] font-bold leading-tight">Current Location</h2>
                        <span className="flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Live
                        </span>
                    </div>
                    <Link href="/location-map">
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-sm aspect-[16/9] group cursor-pointer">
                            <Image
                                width={500}
                                height={500}
                                className="absolute inset-0 bg-center bg-no-repeat bg-cover transform transition-transform duration-700 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCEhUCeDeahn5504wcUbLr0XztBbOmgo9ECDsVXVdOc4m7pf2mUsRO-grFeoFgdwfqqKSQaYi4tY3XIc3It6xv4BBh-IV0qNJbGTRu73BOlEMVp8I5q91JVHP_DNsuB9_8fZ78yPpj4R_ctKKF6mBqRjxA_f85WtqW1RpHSd_aszKzQoUW_11kMwzImI3m_zJ4Xn9zlsezQq7WtHeo8akM-O3DJY88slT1vkepc1vYe8u3H1W7F4pmgAnVPi6NF8J80dOPVyz9BPD0"
                                alt="Map view of current location"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 w-full p-4 flex items-end justify-between">
                                <div>
                                    <p className="text-white text-base font-bold mb-0.5">124 Main St, Downtown</p>
                                    <p className="text-white/80 text-xs font-medium">Updated 2 min ago</p>
                                </div>
                                <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full p-2.5 transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">near_me</span>
                                </button>
                            </div>
                        </div>
                    </Link>
                </section>

                <section className="flex-1 px-4 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-[#111418] dark:text-white text-[18px] font-bold leading-tight">Recent Activity</h2>
                        <Link href="/activity-feed" className="text-primary text-sm font-semibold">
                            View All
                        </Link>
                    </div>
                    <div className="flex flex-col gap-0 relative">
                        <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                        <div className="flex gap-4 relative mb-6">
                            <div className="flex-none z-10">
                                <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary border-4 border-background-light dark:border-background-dark flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[20px]">storefront</span>
                                </div>
                            </div>
                            <div className="flex-1 pt-1">
                                <p className="text-[#111418] dark:text-white font-semibold text-sm">Arrived at Coffee Shop</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">10:30 AM • Location verified</p>
                            </div>
                        </div>
                        <div className="flex gap-4 relative mb-6">
                            <div className="flex-none z-10">
                                <div className="size-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-500 border-4 border-background-light dark:border-background-dark flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[20px]">warning</span>
                                </div>
                            </div>
                            <div className="flex-1 pt-1">
                                <p className="text-[#111418] dark:text-white font-semibold text-sm">Brief disconnection</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">09:15 AM • 2 mins duration</p>
                            </div>
                        </div>
                        <div className="flex gap-4 relative">
                            <div className="flex-none z-10">
                                <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-4 border-background-light dark:border-background-dark flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[20px]">sunny</span>
                                </div>
                            </div>
                            <div className="flex-1 pt-1">
                                <p className="text-[#111418] dark:text-white font-semibold text-sm">Morning Routine Started</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">08:00 AM • Device Active</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="h-20"></div>

                <div className="fixed bottom-6 left-4 right-4 z-20">
                    <div className="bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-xl rounded-full p-2 pl-6 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Quick Action</span>
                        </div>
                        <div className="flex gap-2">
                            <button className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-[20px]">mic</span>
                            </button>
                            <button className="h-10 px-5 flex items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30">
                                <span className="material-symbols-outlined text-[20px] mr-2">call</span>
                                Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaregiverDashboard;
