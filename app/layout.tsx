'use client';
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
        <body className="font-body bg-slate-50 text-slate-900 antialiased overflow-x-hidden dark:bg-ink dark:text-slate-50">
          <div className="noise" aria-hidden />
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
