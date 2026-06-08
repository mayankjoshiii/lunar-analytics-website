import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Lunar Analytics — Fractional Data Consultancy for UK SMEs',
  description: 'Enterprise-grade analytics for UK SMEs. Churn prediction, KPI dashboards, ML — without the enterprise price tag.',
  keywords: 'data analytics, UK SME, business intelligence, Power BI, Python analytics, churn prediction, data consultancy, Swansea',
  authors: [{ name: 'Mayank Joshi' }],
  openGraph: {
    title: 'Lunar Analytics — Data Intelligence for UK SMEs',
    description: 'Your business has data. We turn it into decisions.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lunar Analytics — Data Intelligence for UK SMEs',
    description: 'Your business has data. We turn it into decisions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
