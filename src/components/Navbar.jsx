import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/30 bg-white/60 px-4 py-3 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500 text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight">DominoGrid</span>
          </div>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a className="hover:text-gray-900" href="#features">Features</a>
            <a className="hover:text-gray-900" href="#about">About</a>
            <a className="hover:text-gray-900" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 sm:block">Sign in</button>
            <button className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-black">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}
