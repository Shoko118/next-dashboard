import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex items-center space-x-3 py-4">
      <Link href="/">Home</Link>
      <Link href="/design-system">Design System</Link>
      <Link href="/dashboard">UI Dashboard</Link>
    </div>
  );
}
