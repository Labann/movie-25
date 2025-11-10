"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
export function Slider() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const items = [
  {
    label: "Mountain Landscape",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Forest Path",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Ocean Waves",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Desert Dunes",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Sunset Lake",
    url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80&w=2070",
  },
]
  return (
    <div className="mx-auto max-w-7xl p-4 h-[30vh] md:h-[45vh]">
      <Carousel setApi={setApi} className="h-[30vh] md:h-[45vh]">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>  
                  <Image 
                    src={item.url}
                    alt="img"
                    width={100}
                    height={100}
                    unoptimized
                    className="w-full md:h-[45vh] h-[30vh] rounded-md"
                  />
                
              
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        
      </Carousel>
      
    </div>
  )
}
