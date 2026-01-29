/* eslint-disable @typescript-eslint/no-empty-object-type */
import { motion, type MotionProps, useScroll } from "framer-motion"

import { cn } from "@/lib/utils"

interface ScrollProgressProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof MotionProps
> { }

export function ScrollProgress({
  className,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className={cn(
        "z-50 h-px origin-left bg-black dark:bg-white",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  )
}
