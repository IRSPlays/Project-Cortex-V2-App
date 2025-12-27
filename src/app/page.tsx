import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="grid grid-cols-1 gap-8 text-center">
        <h1 className="text-4xl font-bold">Project-Cortex UI</h1>
        <p className="text-lg">Select a page to view:</p>
        <div className="flex flex-col gap-4">
          <Link href="/activity-feed" className="text-blue-500 hover:underline">
            Activity Feed
          </Link>
          <Link href="/location-map" className="text-blue-500 hover:underline">
            Location Map
          </Link>
          <Link href="/device-configuration" className="text-blue-500 hover:underline">
            Device Configuration
          </Link>
          <Link href="/caregiver-login" className="text-blue-500 hover:underline">
            Caregiver Login
          </Link>
          <Link href="/caregiver-dashboard" className="text-blue-500 hover:underline">
            Caregiver Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
