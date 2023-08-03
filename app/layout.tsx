import Navbar from "@/components/Navbar"
import "./globals.css"
import Footer from "@/components/Footer"
export const metadata = {
  title: 'Flexibble App',
  description: 'Showcase and discover remarkable developer project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
