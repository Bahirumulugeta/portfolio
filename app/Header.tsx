'use client';
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { FiSun, FiMoon } from 'react-icons/fi'
import { CgClose, CgMenuRight } from 'react-icons/cg'

const navs = [
    { id: 'home', label: 'Home' },
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

    const ThemeToggle = ({ className = '' }: { className?: string }) => (
        <button
            type="button"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-slate-200 text-slate-700 transition-colors duration-200 hover:border-primary hover:text-primary focus-ring dark:border-white/10 dark:text-slate-200 ${className}`}
        >
            {mounted && theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
    )

    return (
        <header className="pointer-events-none fixed inset-x-0 top-0 z-40 p-3 sm:p-4">
            <nav className={`pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-200 sm:px-6 ${scroll ? 'glass-nav shadow-lift' : 'border border-transparent'}`}>
                <Link href="/" className="font-heading text-lg font-semibold tracking-tight text-slate-900 transition-colors duration-200 hover:text-primary focus-ring dark:text-white">
                    {brand}
                    <span className="text-primary">.</span>
                </Link>

                <ul className="hidden items-center gap-1 md:flex">
                    {navs.map((item) => (
                        <li key={item.id}>
                            <ScrollLink
                                className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium capitalize text-slate-600 transition-colors duration-200 hover:text-slate-900 focus-ring dark:text-slate-300 dark:hover:text-white"
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
                    <li className="ml-2">
                        <ThemeToggle />
                    </li>
                    <li>
                        <ScrollLink
                            to="contact"
                            offset={-90}
                            smooth={true}
                            duration={400}
                            className="ml-1 inline-flex cursor-pointer items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-ring"
                        >
                            Hire me
                        </ScrollLink>
                    </li>
                </ul>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={!navCollapse}
                        onClick={() => setNavCollapse(false)}
                        className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-slate-200 text-slate-800 transition-colors duration-200 hover:border-primary focus-ring dark:border-white/10 dark:text-white"
                    >
                        <CgMenuRight size={20} />
                    </button>
                </div>
            </nav>

            {!navCollapse && (
                <div className="pointer-events-auto fixed inset-0 z-50 md:hidden">
                    <button
                        type="button"
                        aria-label="Close menu"
                        className="absolute inset-0 cursor-pointer bg-slate-900/50"
                        onClick={() => setNavCollapse(true)}
                    />
                    <div className="absolute right-3 top-3 flex w-[min(100%-1.5rem,20rem)] flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-ink">
                        <button
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setNavCollapse(true)}
                            className="mb-2 ml-auto grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-slate-200 focus-ring dark:border-white/10"
                        >
                            <CgClose size={18} />
                        </button>
                        {navs.map((item) => (
                            <ScrollLink
                                key={item.id}
                                className="cursor-pointer rounded-lg px-4 py-3 text-base font-medium capitalize text-slate-800 transition-colors duration-200 hover:bg-slate-100 focus-ring dark:text-slate-100 dark:hover:bg-surface-dark"
                                to={item.id}
                                offset={-90}
                                smooth={true}
                                duration={400}
                                isDynamic={true}
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
