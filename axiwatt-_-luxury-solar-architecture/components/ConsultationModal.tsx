import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { saveConsultationRequest } from '../config/supabaseClient';

interface ConsultationModalProps {
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  estateLocation: string;
  objectives: string;
  phone?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    estateLocation: '',
    objectives: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Validate form data
      if (!formData.fullName.trim() || !formData.email.trim() || !formData.estateLocation.trim()) {
        setSubmitMessage({ type: 'error', text: 'Please fill in all required fields.' });
        setIsSubmitting(false);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setSubmitMessage({ type: 'error', text: 'Please enter a valid email address.' });
        setIsSubmitting(false);
        return;
      }

      // Save consultation request to Supabase
      await saveConsultationRequest({
        full_name: formData.fullName,
        email: formData.email,
        estate_location: formData.estateLocation,
        objectives: formData.objectives,
        phone: formData.phone
      });

      // Send email notification to admin
      try {
        // Use localhost for development, production URL for production
        const supabaseUrl = import.meta.env.DEV
          ? 'http://localhost:54321'
          : 'https://njdxufiyzwwmkcekbqbm.supabase.co';

        const functionPath = '/functions/v1/send-consultation-email';

        const emailResponse = await fetch(
          `${supabaseUrl}${functionPath}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              full_name: formData.fullName,
              email: formData.email,
              estate_location: formData.estateLocation,
              objectives: formData.objectives,
              phone: formData.phone
            })
          }
        );

        if (!emailResponse.ok) {
          console.warn('Email notification failed, but consultation was saved');
        }
      } catch (emailError) {
        console.warn('Failed to send email notification:', emailError);
        // Don't fail the submission if email sending fails
      }

      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Our concierge team will contact you within 24 hours at ' + formData.email
      });

      // Reset form after short delay
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          estateLocation: '',
          objectives: ''
        });
      }, 2000);

      // Close modal after success
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Unable to process your request. Please try again or email concierge@axiwatt.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#fdfcfb] border border-[#e8e4df] p-8 md:p-16 overflow-hidden shadow-2xl rounded-sm"
      >
        {/* Close Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="absolute top-8 right-8 text-black hover:text-[#2c2825] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif text-[#2c2825] mb-4">Request a Private Consultation</h2>
          <p className="text-black font-light text-base">
            Experience absolute discretion and architectural excellence. Our concierge team will contact you within 24 hours.
          </p>
        </motion.div>

        {/* Form or Success Message */}
        {submitMessage?.type === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 text-center"
          >
            <div className="mb-6 text-5xl">✓</div>
            <h3 className="text-2xl font-serif text-[#2c2825] mb-4">Consultation Requested</h3>
            <p className="text-black font-light text-lg leading-relaxed max-w-lg mx-auto">
              {submitMessage.text}
            </p>
            <p className="text-[12px] text-[#b9975b] tracking-[0.1em] uppercase font-semibold mt-8">
              Closing in a moment...
            </p>
          </motion.div>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="group"
              >
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="w-full bg-transparent border-b-2 border-[#e8e4df] py-4 focus:outline-none focus:border-[#b9975b] transition-colors text-[#2c2825] placeholder:text-[#2c2825] font-light"
                  required
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="group"
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Private Email Address *"
                  className="w-full bg-transparent border-b-2 border-[#e8e4df] py-4 focus:outline-none focus:border-[#b9975b] transition-colors text-[#2c2825] placeholder:text-[#2c2825] font-light"
                  required
                />
              </motion.div>
            </div>

            {/* Estate Location */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="group"
            >
              <input
                type="text"
                name="estateLocation"
                value={formData.estateLocation}
                onChange={handleChange}
                placeholder="Estate Location (e.g., Jubilee Hills) *"
                className="w-full bg-transparent border-b-2 border-[#e8e4df] py-4 focus:outline-none focus:border-[#b9975b] transition-colors text-[#2c2825] placeholder:text-[#2c2825] font-light"
                required
              />
            </motion.div>

            {/* Objectives */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="group"
            >
              <textarea
                name="objectives"
                value={formData.objectives}
                onChange={handleChange}
                rows={4}
                placeholder="Primary Objectives (Architecture, Independence, Retrofit, etc.)"
                className="w-full bg-transparent border-b-2 border-[#e8e4df] py-4 focus:outline-none focus:border-[#b9975b] transition-colors text-[#2c2825] placeholder:text-[#2c2825] font-light resize-none"
              />
            </motion.div>

            {/* Error Message */}
            {submitMessage?.type === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 text-sm font-light"
              >
                {submitMessage.text}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center gap-6 pt-6"
            >
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full py-5 bg-[#2c2825] text-white text-[13px] tracking-[0.3em] uppercase font-bold hover:bg-[#b9975b] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Processing...
                  </span>
                ) : (
                  'Confirm Request'
                )}
              </motion.button>
              
              <p className="text-[11px] text-black tracking-[0.1em] text-center max-w-sm font-light">
                By submitting, you acknowledge Axiwatt operates with strict confidentiality protocols and UHNW-grade security standards.
              </p>
            </motion.div>
          </form>
        )}

        {/* Decorative Background Elements */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 border border-[#b9975b]/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute -top-32 -left-32 w-64 h-64 border border-[#b9975b]/5 rounded-full blur-2xl opacity-30" />
      </motion.div>
    </motion.div>
  );
};
