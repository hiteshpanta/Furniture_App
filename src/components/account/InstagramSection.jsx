"use client"

import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export default function InstagramSection() {
  return (
    <section className="relative w-full py-24 bg-muted/40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/instagram-bg.jpg" // replace with your image
          alt="Instagram background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our Instagram
        </h2>

        <p className="mt-4 text-muted-foreground text-lg">
          Follow our store on Instagram
        </p>

        <div className="mt-8">
          <Button
            size="lg"
            className="rounded-full px-8 shadow-md"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow Us
          </Button>
        </div>
      </div>
    </section>
  )
}