// import { ReactLenis } from "lenis/react";

// export default function SmoothScroll({ children }: { children: React.ReactNode }) {
//   return (
//     <ReactLenis 
//       root 
//       options={{
//         lerp: 0.1,
//         duration: 1.5,
//         smoothWheel: true,
//       }}
//     >
//       {children}
//     </ReactLenis>
//   );
// }

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [enable, setEnable] = useState<boolean | null>(null);

  useEffect(() => {
    const isClient = typeof window !== "undefined";
    if (!isClient) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEnable(false);
      return;
    }
    const mq = window.matchMedia("(min-width: 768px)");
    setEnable(mq.matches);
    const handler = (e: MediaQueryListEvent) => setEnable(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  if (enable === null) return <>{children}</>;

  if (!enable) {
    return <>{children}</>;
  }

  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
// ...existing code...