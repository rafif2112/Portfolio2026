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
        "z-50 h-px origin-left bg-linear-to-r from-[#000000] via-[#000000] to-[#000000] dark:from-[#6B5CE6] dark:via-[#9A5FD5] dark:to-[#b4cefc]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  )
}
