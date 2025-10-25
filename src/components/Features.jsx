import React from 'react';
import { Layers, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Seamless Grid',
    desc: 'A clean, modular grid of cubic tiles designed for performance and visual harmony.'
  },
  {
    icon: Zap,
    title: 'Responsive Interactions',
    desc: 'Domino-like ripple effects provide immediate tactile feedback to user input.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Ready',
    desc: 'Accessible, responsive, and optimized for modern frameworks and corporate use.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Designed for impact</h2>
          <p className="mt-4 text-gray-700">
            Built with a minimalist aesthetic and cutting-edge interaction design to elevate your brand without distraction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-red-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
