'use client';

import React, { useState } from 'react';

const DeviceConfiguration: React.FC = () => {
    const [ttsVolume, setTtsVolume] = useState(80);
    const [speechRate, setSpeechRate] = useState(1.2);
    const [confidenceThreshold, setConfidenceThreshold] = useState(65);
    const [activeClasses, setActiveClasses] = useState({
        vehicles: true,
        bicycles: true,
        pedestrians: true,
        hazards: false,
    });
    const [spatialAudio, setSpatialAudio] = useState(true);
    const [gpsFrequency, setGpsFrequency] = useState('5s (Balanced)');
    const [ecoMode, setEcoMode] = useState(false);
    const [frameRate, setFrameRate] = useState(30);

    const handleClassChange = (className: keyof typeof activeClasses) => {
        setActiveClasses(prev => ({ ...prev, [className]: !prev[className] }));
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display antialiased h-screen w-full flex flex-col overflow-hidden text-gray-900 dark:text-gray-100">
            <header className="flex-none pt-12 pb-4 px-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-20 flex items-center justify-between sticky top-0">
                <button className="p-2 -ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
                <h1 className="text-lg font-bold tracking-tight">Device Configuration</h1>
                <div className="relative">
                    <button className="p-2 -mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300">
                        <span className="material-symbols-outlined text-green-500 fill-1">wifi_tethering</span>
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto p-4 pb-32 space-y-8 scroll-smooth">
                <div className="bg-gradient-to-r from-blue-900 to-background-dark rounded-2xl p-4 flex items-center gap-4 border border-blue-500/30 shadow-lg relative overflow-hidden">
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-500/10 skew-x-12"></div>
                    <div className="relative size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                        <span className="material-symbols-outlined text-[28px]">watch</span>
                    </div>
                    <div>
                        <h2 className="text-white font-bold text-base">Cortex Watch Series 2</h2>
                        <div className="flex items-center gap-2 mt-0.5">
                            <span className="inline-block size-2 rounded-full bg-green-500 animate-pulse"></span>
                            <p className="text-blue-200 text-xs font-medium">Connected • Battery 84%</p>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="flex items-center gap-2 mb-3 ml-1">
                        <span className="material-symbols-outlined text-primary text-sm">volume_up</span>
                        <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Audio Settings</h3>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden divide-y divide-gray-100 dark:divide-gray-700/50">
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-3">
                                <label className="font-medium text-sm">TTS Volume</label>
                                <span className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-500">{ttsVolume}%</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-gray-400 text-[18px]">volume_mute</span>
                                <input
                                    className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                                    max="100"
                                    min="0"
                                    type="range"
                                    value={ttsVolume}
                                    onChange={(e) => setTtsVolume(parseInt(e.target.value))}
                                />
                                <span className="material-symbols-outlined text-gray-400 text-[18px]">volume_up</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-3">
                                <label className="font-medium text-sm">Speech Rate</label>
                                <span className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-500">{speechRate}x</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-gray-400">Slow</span>
                                <input
                                    className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                                    max="2.0"
                                    min="0.5"
                                    step="0.1"
                                    type="range"
                                    value={speechRate}
                                    onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                                />
                                <span className="text-xs font-bold text-gray-400">Fast</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-2 mb-3 ml-1">
                        <span className="material-symbols-outlined text-primary text-sm">radar</span>
                        <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Detection (YOLO)</h3>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden divide-y divide-gray-100 dark:divide-gray-700/50">
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-1">
                                <label className="font-medium text-sm">Confidence Threshold</label>
                                <span className="text-xs font-mono text-primary font-bold">{confidenceThreshold}%</span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-tight">Minimum certainty required before announcing an object.</p>
                            <input
                                className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                                max="100"
                                min="1"
                                type="range"
                                value={confidenceThreshold}
                                onChange={(e) => setConfidenceThreshold(parseInt(e.target.value))}
                            />
                        </div>
                        <div className="p-4">
                            <label className="font-medium text-sm block mb-3">Active Object Classes</label>
                            <div className="grid grid-cols-1 gap-3">
                                {Object.entries({
                                    vehicles: { icon: 'directions_car', bg: 'bg-blue-500/10', text: 'text-blue-500' },
                                    bicycles: { icon: 'pedal_bike', bg: 'bg-orange-500/10', text: 'text-orange-500' },
                                    pedestrians: { icon: 'person', bg: 'bg-purple-500/10', text: 'text-purple-500' },
                                    hazards: { icon: 'warning', bg: 'bg-red-500/10', text: 'text-red-500' },
                                }).map(([key, { icon, bg, text }]) => (
                                    <label key={key} className="flex items-center justify-between cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div className={`size-8 rounded-lg flex items-center justify-center ${bg} ${text}`}>
                                                <span className="material-symbols-outlined text-[18px]">{icon}</span>
                                            </div>
                                            <span className="text-sm font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                        </div>
                                        <div className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                checked={activeClasses[key as keyof typeof activeClasses]}
                                                onChange={() => handleClassChange(key as keyof typeof activeClasses)}
                                                className="sr-only peer"
                                                type="checkbox"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-2 mb-3 ml-1">
                        <span className="material-symbols-outlined text-primary text-sm">explore</span>
                        <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Navigation</h3>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden divide-y divide-gray-100 dark:divide-gray-700/50">
                        <div className="p-4 flex items-center justify-between">
                            <div>
                                <div className="text-sm font-medium">Spatial 3D Audio</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Directional cues for waypoints</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    checked={spatialAudio}
                                    onChange={() => setSpatialAudio(prev => !prev)}
                                    className="sr-only peer"
                                    type="checkbox"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        <div className="p-4 flex items-center justify-between">
                            <div>
                                <div className="text-sm font-medium">GPS Frequency</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Higher frequency uses more battery</div>
                            </div>
                            <select
                                className="bg-gray-100 dark:bg-gray-800 border-none text-sm rounded-lg focus:ring-primary focus:border-primary block p-2 px-3 dark:text-white"
                                value={gpsFrequency}
                                onChange={(e) => setGpsFrequency(e.target.value)}
                            >
                                <option>1s (High)</option>
                                <option>5s (Balanced)</option>
                                <option>30s (Low Power)</option>
                            </select>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-2 mb-3 ml-1">
                        <span className="material-symbols-outlined text-primary text-sm">battery_charging_full</span>
                        <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Power Management</h3>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden divide-y divide-gray-100 dark:divide-gray-700/50">
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600">
                                    <span className="material-symbols-outlined text-[18px]">eco</span>
                                </div>
                                <div>
                                    <div className="text-sm font-medium">Eco Mode</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Disable non-critical sensors</div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    checked={ecoMode}
                                    onChange={() => setEcoMode(prev => !prev)}
                                    className="sr-only peer"
                                    type="checkbox"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500"></div>
                            </label>
                        </div>
                        <div className="p-4 flex items-center justify-between">
                            <div>
                                <div className="text-sm font-medium">Camera Frame Rate</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Limit FPS to save processing power</div>
                            </div>
                            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                                {[15, 30, 60].map(rate => (
                                    <button
                                        key={rate}
                                        onClick={() => setFrameRate(rate)}
                                        className={`px-3 py-1 text-xs font-medium rounded ${
                                            frameRate === rate
                                                ? 'bg-white dark:bg-gray-600 shadow text-gray-900 dark:text-white font-bold'
                                                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                    >
                                        {rate}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="flex-none bg-surface-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 p-5 pb-8 safe-area-pb z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
                <div className="max-w-md mx-auto flex flex-col gap-3">
                    <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-14 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all">
                        <span className="material-symbols-outlined">save_as</span>
                        Push to Device
                    </button>
                    <button className="w-full text-gray-500 dark:text-gray-400 text-sm font-medium py-2 hover:text-gray-900 dark:hover:text-white transition-colors">
                        Restore Default Settings
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default DeviceConfiguration;
