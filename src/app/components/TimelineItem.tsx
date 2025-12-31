import React from 'react';

interface TimelineItemProps {
  icon: string;
  iconBgClass: string;
  title: string;
  time: string;
  children: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, iconBgClass, title, time, children, isLast }) => {
  return (
    <div className="grid grid-cols-[32px_1fr] gap-x-4 pb-0 group">
      <div className="flex flex-col items-center">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 z-10 ${iconBgClass}`}>
          <span className="material-symbols-outlined text-white text-[18px]">{icon}</span>
        </div>
        <div className={`w-[2px] h-full my-2 rounded-full ${isLast ? 'bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-800 dark:to-transparent' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
      </div>
      <div className="pb-8">
        <div className="bg-white dark:bg-card-dark p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{time}</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
