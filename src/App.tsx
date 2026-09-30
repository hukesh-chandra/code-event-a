import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import { BoardPage } from './pages/BoardPage';
import { MapPage } from './pages/MapPage';
import { QuestDetailPage } from './pages/QuestDetailPage';
import { Flame, Shield, MapPin, Scroll, ExternalLink } from 'lucide-react';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0B0B12] text-[#E8E8F0] font-sans flex flex-col selection:bg-purple-900 selection:text-amber-300">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Viewport */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/quest/:id" element={<QuestDetailPage />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Jujutsu High Themed Footer */}
        <footer className="border-t border-[#2A2A3D] bg-[#0E0E18] text-[#8B8BA3] py-10 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              
              {/* Brand Column */}
              <div className="md:col-span-2 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/20 border border-[#7C3AED]/50 flex items-center justify-center">
                    <Flame className="w-4 h-4 text-[#F5B301]" />
                  </div>
                  <span className="font-bebas text-2xl tracking-wider text-[#E8E8F0]">
                    CU CURSED MISSION BOARD
                  </span>
                </div>
                <p className="text-xs text-[#8B8BA3] max-w-md leading-relaxed">
                  Chandigarh University clandestine sorcery operations ledger. Quests distributed across 27 designated campus landmarks and 4 protective outer boundary gates.
                </p>
                <div className="flex items-center gap-2 text-[11px] font-mono text-purple-400">
                  <span>祓い、清め、高みへ</span>
                  <span>•</span>
                  <span>Exorcise • Purify • Ascend</span>
                </div>
              </div>

              {/* Navigation Column */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#E8E8F0] font-bold mb-3">
                  Sorcery Navigation
                </h4>
                <ul className="space-y-2 text-xs font-mono">
                  <li>
                    <Link to="/" className="hover:text-purple-300 transition-colors">
                      Home Sanctum
                    </Link>
                  </li>
                  <li>
                    <Link to="/board" className="hover:text-purple-300 transition-colors">
                      Cursed Mission Board
                    </Link>
                  </li>
                  <li>
                    <Link to="/map" className="hover:text-purple-300 transition-colors">
                      Campus Radar Map
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Module Integration Info */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#E8E8F0] font-bold mb-3">
                  System Architecture
                </h4>
                <div className="p-3 rounded-lg bg-[#14141F] border border-[#2A2A3D] space-y-1.5 text-[11px] font-mono">
                  <div className="flex items-center justify-between text-[#E8E8F0]">
                    <span>Pair A: Discovery Board</span>
                    <span className="text-emerald-400 font-bold">ONLINE</span>
                  </div>
                  <div className="flex items-center justify-between text-[#8B8BA3]">
                    <span>Pair B: Missions & Rank</span>
                    <span className="text-[#F5B301]">STANDBY</span>
                  </div>
                  <div className="text-[10px] text-zinc-500 pt-1 border-t border-[#2A2A3D]">
                    Shared Keys: cu_accepted_quests, cu_player
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Copyright Strip */}
            <div className="pt-6 border-t border-[#2A2A3D]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400">
              <div>
                © 2026 Chandigarh University Jujutsu High Division. All rights reserved.
              </div>
              <div className="flex items-center gap-4">
                <span className="text-purple-400">Barrier Integrity: 100%</span>
                <span>•</span>
                <span className="text-[#F5B301]">Special Grade Protocol</span>
              </div>
            </div>

          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}
