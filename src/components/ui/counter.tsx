import { useEffect, useRef } from "react";
import { useMotionValue, useTransform, animate, useInView, motion } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number;
  className?: string;
}

export default function Counter({ value, duration = 2, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: duration,
        ease: "easeOut",
      });
    } else {
      motionValue.set(0);
    }
  }, [isInView, value, motionValue, duration]);

  return <motion.span ref={ref} className={className}>{springValue}</motion.span>;
}