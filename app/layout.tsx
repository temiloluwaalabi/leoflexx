import Navbar from "@/components/Navbar"
import "./globals.css"
import Footer from "@/components/Footer"
export const metadata = {
  title: 'DavidLeo Tech Portfolio App',
  description: 'Showcase and discover remarkable developer project',
}

export const revalidate = 0;

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
