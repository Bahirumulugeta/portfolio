'use client';
import './globals.css'
import { Archivo, Space_Grotesk, JetBrains_Mono } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react';

const heading = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
})

const body = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
        <body className={`${heading.variable} ${body.variable} ${mono.variable} font-body bg-slate-50 text-slate-900 antialiased overflow-x-hidden dark:bg-ink dark:text-slate-50`}>
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          {children}
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  )
}
