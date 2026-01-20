'use client';

import { useState } from 'react';
import Image from 'next/image';
import BottomNav from '../components/BottomNav';
import TimelineItem from '../components/TimelineItem';

const ActivityFeed = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'GPS', 'Detections', 'AI Queries', 'Alerts'];
  const icons: { [key: string]: string } = {
    All: 'check',
    GPS: 'location_on',
    Detections: 'visibility',
    'AI Queries': 'auto_awesome',
    'Alerts': 'notifications',
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 mx-auto max-w-md bg-background-light dark:bg-background-dark border-x border-slate-200 dark:border-slate-800 shadow-2xl">
      {/* Sticky Header */}
      <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="text-xl font-bold tracking-tight">Activity Feed</h2>
          <div className="flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full border border-primary/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <p className="text-primary text-xs font-bold uppercase tracking-wider">Live</p>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-5 pt-4 pb-2">
        <label className="flex flex-col w-full group">
          <div className="relative flex items-center w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="form-input flex-1 w-full bg-white dark:bg-card-dark text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-full py-3.5 pl-11 pr-4 border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm transition-all" placeholder="Search events or select date..." />
            <button className="absolute inset-y-0 right-2 pr-2 flex items-center text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
            </button>
          </div>
        </label>
      </div>

      {/* Filter Chips */}
      <div className="w-full overflow-x-auto no-scrollbar px-5 py-3">
        <div className="flex gap-3 min-w-max">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex h-9 items-center gap-2 rounded-full px-4 shadow-md transition-transform active:scale-95 ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-primary/20'
                  : 'bg-white dark:bg-subtle-dark border border-slate-200 dark:border-transparent hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              <span className={`material-symbols-outlined text-[18px] ${
                activeFilter === filter ? 'text-white' : 'text-slate-600 dark:text-slate-300'
              }`}>{icons[filter]}</span>
              <span className={`text-sm font-semibold ${
                activeFilter === filter ? 'text-white' : 'text-slate-700 dark:text-slate-200'
              }`}>{filter}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Feed */}
      <main className="flex-1 px-5 pt-2">
        <TimelineItem icon="auto_awesome" iconBgClass="bg-gradient-to-br from-purple-500 to-primary shadow-lg shadow-primary/20" title="AI Query" time="2m ago">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            User asked: <span className="italic text-slate-800 dark:text-slate-200">&quot;What is the expiration date on this milk carton?&quot;</span>
          </p>
          <div className="bg-background-light dark:bg-background-dark p-3 rounded-xl border border-slate-100 dark:border-slate-700/50 flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">smart_toy</span>
            <div>
              <p className="text-xs font-bold text-primary mb-0.5">Cortex Response</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">&quot;The date stamped on the carton is October 24th, 2023.&quot;</p>
            </div>
          </div>
        </TimelineItem>

        <TimelineItem icon="visibility" iconBgClass="bg-amber-500 shadow-lg shadow-amber-500/20" title="Hazard Detected" time="15m ago">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            Construction cone identified on the sidewalk path.
          </p>
          <div className="relative h-32 w-full rounded-xl overflow-hidden bg-slate-800">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <Image width={500} height={500} alt="Construction scene representing obstacle detection" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRaBCSwlarXQIGgUht4wsJboaaU6ervf54X4WSwGC1THpzB8Wa2Z8zgbYctRJxL6xyh0jhpMlWE704qV5fuahPM6b4PtXuK8OjiR-xm4eT4iy97PlDZNhJg7YqQQYfE3x6f6YqDkEGC_5Um-SgoVqCgEZeRrIHv7BrM20KmBib6iLkasymEu53RS2MCGif8olmPm8qUVKc2IIyHoi4oweh48tizvNyfUBqptrS--K23uQYHIdwX-hLsnBeFgSi4v8ex6cKK22-JBRd" />
            <div className="absolute bottom-2 left-2 z-20 flex items-center gap-1">
              <span className="bg-amber-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">OBSTACLE</span>
            </div>
          </div>
        </TimelineItem>

        <TimelineItem icon="location_on" iconBgClass="bg-emerald-500 shadow-lg shadow-emerald-500/20" title="Arrived at Home" time="1h ago">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            Location update: 123 Main St.
          </p>
          <div className="relative h-24 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <Image width={500} height={500} alt="Map view of a residential neighborhood" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdYuPBESvlibYx3QKQ4PrF8uq3d5PiIN_Ky7SeOUj3UM_oaw3GWP6vt3YW-QAKhN1F8ZDZsQn7O1j26kJX16isFn9KtcxW4K2qVqmQlZlpQaI7uzHr8XmlgijfZVXJ4EdWrY_zAYiNpjBpgP-3KynGtdl-EaC5k63sqxFn4RP2p8NMEJAfNKJGrJNL8y9cZd-0OKrSlSh_qdhByaT67acjp8YPpGuzIpc6p_FTKtOIS_IcqbOmhfUKHOb-ctsM05tHBxBJwxwyIyjb" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-primary rounded-full border-2 border-white dark:border-slate-900"></div>
              </div>
            </div>
          </div>
        </TimelineItem>

        <TimelineItem icon="battery_alert" iconBgClass="bg-rose-500 shadow-lg shadow-rose-500/20" title="Battery Low" time="3h ago">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Device battery is at 15%. Please charge soon.
          </p>
          <div className="mt-3 w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-rose-500 h-full w-[15%]"></div>
          </div>
        </TimelineItem>

        <TimelineItem icon="wb_sunny" iconBgClass="bg-slate-500" title="Morning Routine" time="6h ago" isLast>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Device activated. System diagnostics passed successfully.
          </p>
        </TimelineItem>

        {/* "That&apos;s all" Message */}
        <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="w-12 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mb-4"></div>
            <p className="text-slate-400 dark:text-slate-500 text-sm">You&apos;re all caught up</p>
        </div>
      </main>

      {/* FAB: Scroll Top / Refresh */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-40 bg-primary text-white w-12 h-12 rounded-full shadow-xl shadow-primary/30 flex items-center justify-center hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all"
      >
        <span className="material-symbols-outlined text-[24px]">arrow_upward</span>
      </button>

      <BottomNav />
    </div>
  );
};

export default ActivityFeed;
