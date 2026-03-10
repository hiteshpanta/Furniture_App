
import { ChevronRight } from 'lucide-react'
import React from 'react'
import bannerImage from '../../assets/accbaner.jpeg'

export default function TopBanner({title, paths}) {
  return (
    <div>
        <section className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />


      <div className="absolute inset-0 bg-white/70" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold text-black">{title}</h1>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-3">
          {paths.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index !== 0 && <ChevronRight size={14} />}

              {item.href ? (
                <a
                  href={item.href}
                  className="hover:text-black transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="font-medium text-black">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
      
    </div>
  )
}
