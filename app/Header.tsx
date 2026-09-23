'use client';
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { FiSun, FiMoon } from 'react-icons/fi'
import { CgClose, CgMenuRight } from 'react-icons/cg'
import ResumeButton from '@/components/ResumeButton'

const navs = [
    { id: 'home', label: 'Index' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
]

export default function Header({ logo }: { logo: string }) {
    const [navCollapse, setNavCollapse] = useState(true)
    const [scroll, setScroll] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const brand = logo.split(' ')[0]

    useEffect(() => {
        setMounted(true)
        const updateScroll = () => setScroll(window.scrollY >= 24)
        updateScroll()
        window.addEventListener('scroll', updateScroll, { passive: true })
        return () => window.removeEventListener('scroll', updateScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = navCollapse ? '' : 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [navCollapse])

    return (
        <header className="pointer-events-none fixed inset-x-0 top-0 z-40 p-3 sm:p-4">
            <nav className={`pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-200 sm:px-5 ${scroll ? 'glass-nav shadow-lift' : ''}`}>
                <Link href="/" className="font-heading text-base font-semibold tracking-tight text-slate-900 transition-colors duration-200 hover:text-primary focus-ring dark:text-white">
                    {brand}
                    <span className="text-primary">*</span>
                </Link>

                <ul className="hidden items-center gap-1 lg:flex">
                    {navs.map((item) => (
                        <li key={item.id}>
                            <ScrollLink
                                className="cursor-pointer rounded-full px-3 py-2 text-[13px] font-medium text-slate-500 transition-colors duration-200 hover:text-slate-900 focus-ring dark:text-slate-400 dark:hover:text-white"
                                to={item.id}
                                offset={-90}
                                spy={true}
                                smooth={true}
                                duration={400}
                                isDynamic={true}
                                activeClass="text-primary dark:text-primary"
                            >
                                {item.label}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="grid h-10 w-10 cursor-pointer place-items-center rounded-full text-slate-700 transition-colors duration-200 hover:text-primary focus-ring dark:text-slate-200"
                    >
                        {mounted && theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
                    </button>
                    <div className="hidden sm:block">
                        <ResumeButton className="!py-2 !px-4 text-xs" label="CV" />
                    </div>
                    <button
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={!navCollapse}
                        onClick={() => setNavCollapse(false)}
                        className="grid h-10 w-10 cursor-pointer place-items-center rounded-full text-slate-800 focus-ring lg:hidden dark:text-white"
                    >
                        <CgMenuRight size={20} />
                    </button>
                </div>
            </nav>

            {!navCollapse && (
                <div className="pointer-events-auto fixed inset-0 z-50 lg:hidden">
                    <button
                        type="button"
                        aria-label="Close menu"
                        className="absolute inset-0 cursor-pointer bg-slate-950/70"
                        onClick={() => setNavCollapse(true)}
                    />
                    <div className="absolute right-3 top-3 flex w-[min(100%-1.5rem,20rem)] flex-col gap-1 rounded-3xl border border-white/10 bg-ink p-4">
                        <button
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setNavCollapse(true)}
                            className="mb-2 ml-auto grid h-10 w-10 cursor-pointer place-items-center rounded-full focus-ring"
                        >
                            <CgClose size={18} />
                        </button>
                        {navs.map((item) => (
                            <ScrollLink
                                key={item.id}
                                className="cursor-pointer rounded-xl px-4 py-3 text-base font-medium text-slate-100 transition-colors duration-200 hover:bg-white/5 focus-ring"
                                to={item.id}
                                offset={-90}
                                smooth={true}
                                duration={400}
                                onClick={() => setNavCollapse(true)}
                            >
                                {item.label}
                            </ScrollLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
