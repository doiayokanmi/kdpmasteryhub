'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 md:px-12 py-4 text-gray-800">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={40}
            className="object-contain hover:scale-110 transition-all duration-300"
          />
        </Link>

        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/about" className="hover:text-[#F97A0B]">About</a>
          <a href="/ourservices" className="hover:text-[#F97A0B]">Services</a>
          <a href="/contact" className="hover:text-[#F97A0B]">Contact</a>
        </nav>

        <div className="hidden md:flex space-x-6 items-center">
          <a href='/login' className="border border-[#F97A0B] px-4 py-2 rounded text-[#F97A0B]">
            Login
          </a>
          <a href='/signup' className="bg-[#F97A0B] text-white px-4 py-2 rounded">
            Sign Up
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t"
          >
            <nav className="flex flex-col items-center gap-6 py-6">
              <a onClick={() => setOpen(false)} href="/about" className="hover:text-[#F97A0B]">
                About
              </a>
              <a onClick={() => setOpen(false)} href="/ourservices" className="hover:text-[#F97A0B]">
                Services
              </a>
              <a onClick={() => setOpen(false)} href="/contact" className="hover:text-[#F97A0B]">
                Contact
              </a>

              <div className="flex gap-4 pt-4">
                <a href='/login' className="border border-[#F97A0B] px-4 py-2 rounded text-[#F97A0B]">
                  Login
                </a>
                <a href='/signup' className="bg-[#F97A0B] text-white px-4 py-2 rounded">
                  Sign Up
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
