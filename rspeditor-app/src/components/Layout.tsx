import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
      <Header />
      <main className="flex-1 w-full max-w-[1126px] mx-auto px-4 sm:px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
