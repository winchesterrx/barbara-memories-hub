
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  description?: string;
  id?: string;
  className?: string;
}

const Section = ({ title, children, description, id, className }: SectionProps) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">{title}</h2>
        {description && (
          <p className="netflix-subtitle mb-8 max-w-3xl">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
