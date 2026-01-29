import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl font-bold">SetPlay</h1>
        <p className="text-xl text-gray-600">
          Last Man Standing - Premier League Prediction Leagues
        </p>
        <p className="text-gray-500">
          Compete with friends. Pick a team each week. Don&apos;t repeat. Last person standing wins the pot.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button asChild size="lg">
            <Link href="/register">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
