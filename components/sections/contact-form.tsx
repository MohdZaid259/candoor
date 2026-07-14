'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, Clock, MapPin } from 'lucide-react';
import { contactForm, contactInfo } from '@/lib/data';
import { asset } from '@/lib/assets';
import { ParallaxImg } from '@/components/ui/parallax';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as const },
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="section-container grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-stretch">
        {/* Image panel */}
        <motion.div
          className="relative lg:col-span-2 photo-frame corner-notch-sm min-h-96 hidden lg:block"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <ParallaxImg src={asset('contact/side.webp')} alt="CanDoor project consultation" />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/85 via-foreground/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
            <div className="flex items-start gap-3 text-white/90">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold">Response within 24 hours</p>
                <p className="text-xs text-white/60">Site visits arranged promptly</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-white/90">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold">{contactInfo.address}</p>
                <p className="text-xs text-white/60">Serving projects across the UAE</p>
              </div>
            </div>
          </div>
        </motion.div>

      <motion.div
        className="lg:col-span-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center lg:text-left mb-12" variants={itemVariants}>
          <span className="eyebrow justify-center lg:justify-start">Send a Message</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-4">Tell Us About Your Project</h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-secondary border border-border rounded-xl p-10 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out. Our team will be in touch within 24 hours.
              </p>
              <button onClick={() => setSubmitted(false)} className="button-secondary">
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={handleSubmit} className="space-y-6" variants={containerVariants}>
              {/* Two Column Grid */}
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
                {contactForm.fields.slice(0, 4).map((field) => (
                  <motion.div key={field.name} variants={itemVariants}>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {field.label}
                      {field.required && <span className="text-accent">*</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full px-4 py-3 bg-secondary/40 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                  <span className="text-accent">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary/40 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-300 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="button-accent w-full md:w-fit inline-flex items-center justify-center gap-2"
                variants={itemVariants}
              >
                {contactForm.submitButton}
                <Send className="w-4 h-4" />
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
      </div>
    </section>
  );
}
