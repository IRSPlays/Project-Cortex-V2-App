'use client';

import Link from 'next/link';
import Image from 'next/image';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 w-full max-w-md mx-auto z-50 bg-white/90 dark:bg-card-dark/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        <Link href="/activity-feed" className="flex flex-col items-center justify-center w-full h-full gap-1 group">
          <div className="relative p-1 rounded-full group-hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-primary text-[26px]">dashboard</span>
          </div>
          <span className="text-[10px] font-medium text-primary">Feed</span>
        </Link>
        <Link href="/device-configuration" className="flex flex-col items-center justify-center w-full h-full gap-1 group">
          <div className="relative p-1 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-[26px] group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">settings</span>
          </div>
          <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">Settings</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center w-full h-full gap-1 group">
          <div className="relative p-1 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700 transition-colors">
            <div className="w-[26px] h-[26px] rounded-full overflow-hidden bg-slate-200 dark:bg-slate-600">
              <Image width={500} height={500} alt="User Profile" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBTopLKqG1btX8F5R8WtM4JGXkkBvQ-a5fICjQn8YcTmjRuU3ClduGXRYmCbL08C5SpDbReI0DRgCQTDzsqapKlK1_fWdbmCq5Ck2LTX2ttf_fHi0NXWH1KQdRutVL-oFSk-jZyD9P1CQgvdif8vGiJm-2mkrQuz4uVmx1WjK63KOuDws73Gz3I7q_iE1nCSXh64ePMvTBMyDFNoCCF7eI4rbQurCDi6ZfbY4eTCDAXbPM8Qoh8NvcG80En0go_ET9jH9rTmNRxZCu" />
            </div>
          </div>
          <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
