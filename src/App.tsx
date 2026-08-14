import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SplashScreen from './ui/screens/SplashScreen'
import OnboardingScreen from './ui/screens/OnboardingScreen'
import AuthScreen from './ui/screens/AuthScreen'
import HomeScreen from './ui/screens/HomeScreen'

function Home(){
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white dark:bg-darksurface rounded-lg shadow p-8" role="region" aria-label="PodScript UI Scaffold">
        <h1 className="text-2xl font-medium text-darksurface mb-2" role="heading" aria-level={1}>PodScript UI — Scaffold</h1>
        <p className="text-sm text-gray-600 mb-4">Rama: feature/ui/react-screens — Tailwind + Vite + TypeScript scaffold.</p>
        <nav className="flex gap-2" role="navigation" aria-label="Demo routes">
          <Link to="/screens" className="px-4 py-2 bg-primary text-white rounded">Abrir demo</Link>
        </nav>
      </div>
    </main>
  )
}

function Screens(){
  return (
    <main className="min-h-screen p-6">
      <h2 className="text-xl font-medium mb-4">Screens demo</h2>
      <ul role="list" className="space-y-2">
        <li role="listitem"><Link to="/screens/splash" className="text-primary">Splash</Link></li>
        <li role="listitem"><Link to="/screens/onboarding" className="text-primary">Onboarding</Link></li>
        <li role="listitem"><Link to="/screens/auth" className="text-primary">Auth</Link></li>
        <li role="listitem"><Link to="/screens/home" className="text-primary">Home</Link></li>
      </ul>
    </main>
  )
}

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/screens" element={<Screens/>} />
      <Route path="/screens/splash" element={<SplashScreen/>} />
      <Route path="/screens/onboarding" element={<OnboardingScreen/>} />
      <Route path="/screens/auth" element={<AuthScreen/>} />
      <Route path="/screens/home" element={<HomeScreen/>} />
    </Routes>
  )
}
