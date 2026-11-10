"use client";

import { useRevealAnimations } from "@/hooks/useRevealAnimations";

export default function SiteMotion({ children }: { children: React.ReactNode }) {
  useRevealAnimations();

  return (
    <div data-q-root>
      <div className="scroll-progress" id="scroll-progress" aria-hidden="true" />
      {children}
    </div>
  );
}
