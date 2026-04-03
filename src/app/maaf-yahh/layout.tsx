import { Providers } from "../providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div >
        <Providers>{children}</Providers>
    </div>
  )
}