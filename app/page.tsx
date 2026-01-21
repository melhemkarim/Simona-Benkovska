// app/page.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Instagram } from 'lucide-react'
import { Italiana, Inter } from 'next/font/google'

const headline = Italiana({
  subsets: ['latin'],
  weight: ['400'],
})

const body = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

const images = [
  { id: 1, src: '/1.jpeg' },
  { id: 2, src: '/2.jpeg' },
  { id: 3, src: '/3.jpeg' },
  { id: 4, src: '/4.jpeg' },
  { id: 5, src: '/5.jpeg' },
  { id: 6, src: '/6.jpeg' },
  { id: 7, src: '/7.jpeg' },
  { id: 8, src: '/8.jpeg' },
  { id: 9, src: '/9.jpeg' },
  { id: 10, src: '/10.png' },
  { id: 11, src: '/11.jpeg' },
  { id: 12, src: '/12.jpeg' },
  { id: 13, src: '/13.jpeg' },
  { id: 14, src: '/14.jpeg' },
  { id: 15, src: '/15.jpeg' },
  { id: 16, src: '/16.jpeg' },
  { id: 17, src: '/17.jpeg' },
  { id: 18, src: '/18.jpeg' },
  { id: 19, src: '/19.jpeg' },
  { id: 20, src: '/20.jpeg' },
  { id: 21, src: '/21.jpeg' },
  { id: 22, src: '/22.jpeg' },
  { id: 23, src: '/23.jpeg' },
  { id: 24, src: '/24.jpg' },
]

export default function Page() {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const videoRefs = useRef<HTMLVideoElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          entry.isIntersecting ? video.play() : video.pause()
        })
      },
      { threshold: 0.5 }
    )

    videoRefs.current.forEach((video) => video && observer.observe(video))
    return () => observer.disconnect()
  }, [])

  return (
    <main
      className={`min-h-screen bg-[#FAF7F4] text-black overflow-x-hidden ${body.className}`}
    >

      {/* HERO */}
      <section className="px-4 pt-24 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={`text-[13vw] md:text-[10vw] leading-none tracking-tight ${headline.className}`}
        >
           Simona
    <br />
    Benkovska
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-xs tracking-[0.35em] uppercase opacity-60"
        >
          Model Portfolio
        </motion.p>
      </section>

      {/* MODEL INFO */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur-sm p-10"
        >
          <h2 className="text-2xl tracking-wide uppercase mb-10 opacity-80">
            Model Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-sm">
            {[
              ['Height', '178 cm'],
              ['Weight', '52 kg'],
              ['Bust', '82 cm'],
              ['Nationality', 'Czech'],
              ['Hips', '85 cm'],
              ['Shoe Size', '40'],
              ['Waist', '66 cm'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between border-b border-black/10 pb-2"
              >
                <span className="opacity-60">{label}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* IMAGE GRID */}
      <section className="px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[3/4] overflow-hidden bg-neutral-200 cursor-pointer"
              onClick={() => setActiveImage(img.src)}
            >
              <Image
                src={img.src}
                alt="Model"
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <a
            href="#about"
            className="text-sm tracking-[0.3em] uppercase hover:opacity-60"
          >
            About
          </a>

          <a
            href="https://www.instagram.com/nasser_raad.x/"
            className="flex items-center gap-2 text-sm tracking-wide hover:opacity-60"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
        </div>
      </footer>

      {/* FULLSCREEN VIEWER */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer"
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
