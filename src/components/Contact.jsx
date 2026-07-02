import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'tiwarivishwanath5395@gmail.com',
      href: 'mailto:tiwarivishwanath5395@gmail.com',
      accent: 'bg-brutal-blue',
      shadow: 'shadow-brutal-blue'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 6396689012',
      href: 'tel:+916396689012',
      accent: 'bg-brutal-lime',
      shadow: 'shadow-brutal-lime'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Kanpur, Uttar Pradesh, India',
      href: 'https://maps.google.com/?q=Kanpur,UP,India',
      accent: 'bg-brutal-pink',
      shadow: 'shadow-brutal-pink'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      href: 'https://github.com/Vishwa5395',
      accent: 'bg-brutal-black text-white hover:bg-brutal-yellow hover:text-brutal-black'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vishwanath-tiwari-779528287/',
      accent: 'bg-brutal-blue text-white hover:bg-brutal-lime hover:text-brutal-black'
    },
    {
      icon: <Twitter size={24} />,
      name: 'Twitter',
      href: 'https://x.com/Vishwanath5395',
      accent: 'bg-brutal-purple text-white hover:bg-brutal-mint hover:text-brutal-black'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        publicKey
      );

      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };


  return (
    <section id="contact" className="py-20 bg-cream-dark dark:bg-dark-card relative overflow-hidden">
      {/* Dot Grid Background */}
      <div className="dot-grid absolute inset-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-mono text-sm bg-brutal-black text-white px-3 py-1 border-3 border-brutal-black uppercase tracking-widest">
              💬 Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-brutal-black dark:text-dark-text mb-4">
            Let's Work{' '}
            <span className="bg-brutal-lime px-2 -rotate-1 inline-block border-3 border-brutal-black dark:border-dark-border">Together</span>
          </h2>
          <p className="text-lg text-brutal-black/70 dark:text-dark-text/70 max-w-3xl mx-auto font-mono text-sm">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-grotesk font-bold text-brutal-black dark:text-dark-text mb-6">
              Contact <span className="bg-brutal-yellow px-1 border-b-3 border-brutal-black">Information</span>
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`group flex items-center gap-4 p-4 bg-white dark:bg-dark-card rounded-md border-3 border-brutal-black dark:border-dark-border shadow-brutal dark:shadow-brutal-dark hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200`}
                >
                  <div className={`p-3 rounded-md ${info.accent} border-3 border-brutal-black text-white flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-brutal-black/60 dark:text-dark-text/60 text-sm font-mono uppercase tracking-wider">{info.title}</div>
                    <div className="text-brutal-black dark:text-dark-text font-grotesk font-bold text-sm sm:text-base break-all group-hover:text-brutal-blue transition-colors duration-200">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-grotesk font-bold text-brutal-black dark:text-dark-text mb-4">
                Follow Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-md border-3 border-brutal-black dark:border-dark-border shadow-brutal-sm dark:shadow-brutal-dark-sm ${social.accent} transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal hover:animate-wobble`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="relative">
              <div className="p-5 bg-white dark:bg-dark-card rounded-md border-3 border-brutal-black dark:border-dark-border shadow-brutal dark:shadow-brutal-dark rotate-[-0.5deg]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-brutal-black"></div>
                  <span className="text-brutal-black dark:text-dark-text font-grotesk font-bold text-lg uppercase">Available for Work</span>
                </div>
                <p className="text-brutal-black/70 dark:text-dark-text/70 font-mono text-sm">
                  I'm currently available for freelance projects and remote internship opportunities.
                  Let's discuss your next project!
                </p>
              </div>
              {/* Sticker accent */}
              <div className="absolute -top-3 -right-3 bg-brutal-lime text-brutal-black font-grotesk font-bold text-xs px-3 py-1 border-3 border-brutal-black rotate-6 shadow-brutal-sm">
                OPEN ✦
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-dark-card rounded-md p-4 sm:p-8 border-3 border-brutal-black dark:border-dark-border shadow-brutal-lg dark:shadow-brutal-dark-lg">
            <h3 className="text-2xl font-grotesk font-bold text-brutal-black dark:text-dark-text mb-6">
              Send <span className="bg-brutal-pink text-white px-2 border-3 border-brutal-black inline-block -rotate-1">Message</span>
            </h3>

            {/* Status Message */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-md border-3 flex items-center gap-3 font-mono text-sm ${submitStatus.type === 'success'
                  ? 'bg-green-50 border-green-600 text-green-800'
                  : 'bg-red-50 border-red-600 text-red-800'
                }`}>
                {submitStatus.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span className="font-bold">{submitStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-brutal-black dark:text-dark-text font-grotesk font-bold mb-2 text-sm uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-brutal w-full"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-brutal-black dark:text-dark-text font-grotesk font-bold mb-2 text-sm uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-brutal w-full"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-brutal-black dark:text-dark-text font-grotesk font-bold mb-2 text-sm uppercase tracking-wider">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="input-brutal w-full"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-brutal-black dark:text-dark-text font-grotesk font-bold mb-2 text-sm uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="input-brutal w-full resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-brutal-pink w-full flex items-center justify-center gap-3 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span className="font-grotesk font-bold">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span className="font-grotesk font-bold">Send Message</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="font-mono text-xs text-brutal-black/50 dark:text-dark-text/50 uppercase tracking-wider">
                ⚡ I typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block p-4 sm:p-8 bg-white dark:bg-dark-card rounded-md border-3 border-brutal-black dark:border-dark-border shadow-brutal-xl dark:shadow-brutal-dark-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-grotesk font-bold text-brutal-black dark:text-dark-text mb-4">
              Ready to start your{' '}
              <span className="bg-brutal-yellow px-2 border-3 border-brutal-black inline-block rotate-1">next project</span>?
            </h3>
            <p className="text-brutal-black/70 dark:text-dark-text/70 mb-6 max-w-2xl font-mono text-sm">
              Whether you need a new website, mobile app, or want to improve your existing digital presence,
              I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:tiwarivishwanath5395@gmail.com"
                className="btn-brutal flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                <span className="font-grotesk font-bold">Email Me</span>
              </a>
              <a
                href="/Ref resume 7.pdf"
                download
                className="btn-brutal-outline flex items-center justify-center gap-2"
              >
                <Send size={20} />
                <span className="font-grotesk font-bold">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;