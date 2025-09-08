import { CrowdCanvas, Skiper39 } from "../components/ui/skiper-ui/skiper39";
import WaitlistSignup from "../components/waitlist-signup"

// Named exports for individual components
export const DemoSkiper39 = () => {
  return <Skiper39 />;
};

export const CustomCrowd = () => {
  return (
    <div className="relative h-screen w-full">
      <CrowdCanvas src="/images/all-peeps.png" rows={15} cols={7} />
    </div>
  );
};

// Main page component combining both
export default function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* Background crowd canvas */}
      <CrowdCanvas src="/images/all-peeps.png" rows={15} cols={7} />
      
      {/* Waitlist signup overlaid on top */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <WaitlistSignup />
      </div>
    </div>
  );
}