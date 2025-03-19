import type React from "react"
export default function SpinningWheelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gray-100">{children}</div>
}
