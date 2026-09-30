import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getPlayerProfile } from '../utils/storage';
import { 
  Scroll, 
  MapPin, 
  Flame, 
  Sparkles, 
  Trophy, 
  User, 
  ShieldCheck, 
  Menu, 
  X,
  HelpCircle
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [player, setPlayer] = useState(getPlayerProfile());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleUpdate = () => {
      setPlayer(getPlayerProfile());
    };
    window.addEventListener('cu_storage_update', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('cu_storage_update', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const disabledLinks = [
    { name: 'My Missions', icon: ShieldCheck, key: 'missions' },
    { name: 'Leaderboard', icon: Trophy, key: 'leaderboard' },
    { name: 'Profile', icon: User, key: 'profile' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B0B12]/90 backdrop-blur-md border-b border-[#2A2A3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-[#7C3AED] via-[#4C1D95] to-[#14141F] p-[1px] cursed-glow-sm flex items-center justify-center">
              <div className="w-full h-full bg-[#0B0B12] rounded-lg flex items-center justify-center relative overflow-hidden">
                <Flame className="w-5 h-5 text-[#F5B301] transition-transform group-hover:scale-110" />
                <span className="absolute bottom-0 text-[8px] font-bold text-purple-400 font-mono">CU</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bebas text-xl sm:text-2xl tracking-wider text-[#E8E8F0] group-hover:text-purple-300 transition-colors">
                  CU CURSED BOARD
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold font-mono tracking-widest bg-[#7C3AED]/20 border border-[#7C3AED]/50 text-purple-300 rounded">
                  JUJUTSU HIGH
                </span>
              </div>
              <p className="text-[10px] text-[#8B8BA3] -mt-1 tracking-wider uppercase hidden sm:block">
                Chandigarh University Sorcerer HQ
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#7C3AED]/20 text-purple-300 border border-[#7C3AED]/40 cursed-glow-sm'
                    : 'text-[#8B8BA3] hover:text-[#E8E8F0] hover:bg-[#14141F]'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/board"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-[#7C3AED]/20 text-purple-300 border border-[#7C3AED]/40 cursed-glow-sm'
                    : 'text-[#8B8BA3] hover:text-[#E8E8F0] hover:bg-[#14141F]'
                }`
              }
            >
              <Scroll className="w-4 h-4 text-purple-400" />
              <span>Mission Board</span>
            </NavLink>

            <NavLink
              to="/map"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-[#7C3AED]/20 text-purple-300 border border-[#7C3AED]/40 cursed-glow-sm'
                    : 'text-[#8B8BA3] hover:text-[#E8E8F0] hover:bg-[#14141F]'
                }`
              }
            >
              <MapPin className="w-4 h-4 text-[#F5B301]" />
              <span>Campus Map</span>
            </NavLink>

            <div className="h-5 w-px bg-[#2A2A3D] mx-2" />

            {/* Disabled Placeholder Links for Pair B */}
            {disabledLinks.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.key} 
                  className="relative group cursor-not-allowed"
                  onMouseEnter={() => setActiveTooltip(item.key)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <button
                    disabled
                    className="px-3 py-2 rounded-md text-sm font-medium text-[#8B8BA3]/50 flex items-center gap-1.5 opacity-60 cursor-not-allowed select-none"
                    aria-label={`${item.name} (Coming from Pair B)`}
                  >
                    <Icon className="w-3.5 h-3.5 opacity-60" />
                    <span>{item.name}</span>
                  </button>

                  {/* Tooltip */}
                  {activeTooltip === item.key && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2.5 py-1 bg-[#14141F] border border-[#2A2A3D] text-[11px] font-mono text-[#F5B301] rounded shadow-xl whitespace-nowrap z-50 pointer-events-none animate-fade-in flex items-center gap-1">
                      <HelpCircle className="w-3 h-3 text-[#F5B301]" />
                      Coming from Pair B
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Player XP & Status Header */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#14141F] border border-[#2A2A3D] px-3 py-1.5 rounded-lg group">
              <div className="w-6 h-6 rounded-md bg-[#F5B301]/10 border border-[#F5B301]/40 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-[#F5B301]" />
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[10px] uppercase font-mono text-[#8B8BA3] tracking-wider leading-none">
                  Cursed Energy
                </span>
                <span className="font-bebas text-lg leading-tight tracking-wide text-[#F5B301] group-hover:text-amber-300 transition-colors">
                  {player.xp.toLocaleString()} XP
                </span>
              </div>
            </div>

            {/* Mobile menu trigger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#14141F] border border-[#2A2A3D] text-[#8B8BA3] hover:text-[#E8E8F0]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#2A2A3D] bg-[#0B0B12]/98 px-4 pt-3 pb-5 space-y-2">
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive ? 'bg-[#7C3AED]/20 text-purple-300' : 'text-[#8B8BA3]'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/board"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${
                isActive ? 'bg-[#7C3AED]/20 text-purple-300' : 'text-[#8B8BA3]'
              }`
            }
          >
            <Scroll className="w-4 h-4 text-purple-400" />
            <span>Mission Board</span>
          </NavLink>
          <NavLink
            to="/map"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${
                isActive ? 'bg-[#7C3AED]/20 text-purple-300' : 'text-[#8B8BA3]'
              }`
            }
          >
            <MapPin className="w-4 h-4 text-[#F5B301]" />
            <span>Campus Map</span>
          </NavLink>

          <div className="border-t border-[#2A2A3D] pt-2 space-y-1">
            <div className="px-3 text-xs text-[#8B8BA3] uppercase tracking-wider font-mono">
              External Modules (Pair B)
            </div>
            {disabledLinks.map((item) => (
              <div
                key={item.key}
                className="px-3 py-2 text-sm text-[#8B8BA3]/50 flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-[10px] font-mono text-[#F5B301] bg-[#F5B301]/10 px-2 py-0.5 rounded border border-[#F5B301]/20">
                  Coming from Pair B
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
