import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      {/* Background 3D Spline cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient fades for readability; ensure interaction passes through */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur-md shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
            Interactive, minimalist cover background
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            A modern grid that responds like dominoes
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-700">
            Engage users with a seamless grid of white cubes that ripple to a soft red on interaction. Minimal and dynamic, ideal for modern digital brands.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900"
            >
              Explore Features
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
