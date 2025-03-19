
import React, { useEffect, useRef, forwardRef } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  description?: string;
  id?: string;
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ title, children, description, id, className }, ref) => {
  const defaultRef = useRef<HTMLElement>(null);
  const sectionRef = ref || defaultRef;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const currentRef = sectionRef as React.RefObject<HTMLElement>;
    if (currentRef && currentRef.current) {
      observer.observe(currentRef.current);
    }
    
    return () => {
      if (currentRef && currentRef.current) {
        observer.unobserve(currentRef.current);
      }
    };
  }, [sectionRef]);

  return (
    <motion.section 
      id={id} 
      ref={sectionRef}
      className={`py-12 md:py-16 ${className} opacity-0`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p 
            className="netflix-subtitle mb-8 max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
});

Section.displayName = 'Section';

export default Section;
