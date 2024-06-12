import { MainNavigationMenu } from "@/components/navbar";
import Hero from "@/components/hero";
import KeyFeatures from "@/components/key-features";
import Confidence from "@/components/confidence";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <MainNavigationMenu />
      <main className="flex-1">
        <div className="container relative">
          <Hero />
          <KeyFeatures />
          <Confidence />
        </div>
      </main>
    </div>
  );
}