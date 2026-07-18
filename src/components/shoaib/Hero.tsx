import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="w-full bg-white flex flex-col">
      {/* Video Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="w-full h-[60vh] md:h-[85vh] relative px-4 md:px-8"
      >
        <video 
          src="/assets/Hero page vid.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Description below video */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="w-full flex justify-center py-16 md:py-24 px-6"
      >
        <p className="text-sm md:text-xl text-black font-medium tracking-widest max-w-3xl mx-auto uppercase text-center leading-relaxed font-sans">
          A considered approach to hair, grooming, beauty, and personal style.
        </p>
      </motion.div>
    </section>
  );
}
