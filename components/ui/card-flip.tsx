"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import { Info, X } from "lucide-react"
import { cn } from "@/lib/utils"

function CardFlip({
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  children: [React.ReactNode, React.ReactNode]
}) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [front, back] = React.Children.toArray(children)

  return (
    <div
      className={cn("relative w-full", className)}
      style={{ perspective: "1000px" }}
      {...props}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? -180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative w-full h-full">
            <button
              onClick={() => setIsFlipped(true)}
              className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:text-primary transition-colors z-10 border"
              aria-label="Show info"
              style={{
                opacity: isFlipped ? 0 : 1,
                pointerEvents: isFlipped ? "none" : "auto",
                transition: "opacity 0.3s",
              }}
            >
              <Info className="w-4 h-4" />
            </button>
            {front}
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(-180deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative w-full h-full">
            <button
              onClick={() => setIsFlipped(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:text-primary transition-colors z-10 border"
              aria-label="Close"
              style={{
                opacity: isFlipped ? 1 : 0,
                pointerEvents: isFlipped ? "auto" : "none",
                transition: "opacity 0.3s",
              }}
            >
              <X className="w-4 h-4" />
            </button>
            {back}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function CardFlipFront({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-front"
      className={cn(
        "bg-card text-card-foreground flex flex-col rounded-2xl border overflow-hidden h-full",
        className
      )}
      {...props}
    />
  )
}

function CardFlipBack({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-back"
      className={cn(
        "bg-card text-card-foreground flex flex-col rounded-2xl border overflow-hidden h-full",
        className
      )}
      {...props}
    />
  )
}

function CardFlipHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("px-5 pt-5 pb-3", className)}
      {...props}
    />
  )
}

function CardFlipTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold text-lg", className)}
      {...props}
    />
  )
}

function CardFlipDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm mt-1.5", className)}
      {...props}
    />
  )
}

function CardFlipContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-5 flex-1", className)}
      {...props}
    />
  )
}

function CardFlipFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center gap-2 px-5 pb-5 pt-3", className)}
      {...props}
    />
  )
}

export {
  CardFlip,
  CardFlipFront,
  CardFlipBack,
  CardFlipHeader,
  CardFlipFooter,
  CardFlipTitle,
  CardFlipDescription,
  CardFlipContent,
}
