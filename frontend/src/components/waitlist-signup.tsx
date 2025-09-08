"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function WaitlistSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      //Handle waitlist signup logic here -- will add later.
      console.log("Email submitted:", email)
      setIsSubmitted(true)
      //Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">Available in Late 2025</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-serif text-black mb-6 text-balance leading-tight">
          Knowledge, Made Simple
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Join the waitlist, to simplify studying
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <div className="bg-blue-200/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-black mb-2">Join Our Waitlist</h2>
              <p className="text-black text-sm">Be the first to know when we launch</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email..."
                  className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent placeholder-gray-500 text-gray-800"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? "Thank you!" : "Join The Waitlist"}
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-4 p-3 bg-green-100/50 backdrop-blur-sm border border-green-200/50 rounded-lg">
                <p className="text-green-800 text-sm text-center">🎉 You're on the list! We'll be in touch soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}