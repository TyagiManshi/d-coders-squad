import { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 container mx-auto px-4 text-center">
      <h2 className="text-5xl font-modern-negra mb-4">Contact Us</h2>
      <p className="text-lg mb-6">For inquiries, collaborations or event participation:</p>
      


      {isSubmitted ? (
        <p className="text-green-400 text-xl">✅ Thank you! Your message has been sent.</p>
      ) : (
        <form
          action="https://formspree.io/f/xkgzjjdq"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto flex flex-col gap-6 text-left"
        >
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              className="peer w-full px-4 pt-5 pb-2 bg-white/5 border border-white/20 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow transition-all"
              placeholder="Your Full Name"
            />
            <label className="absolute left-4 top-2 text-sm text-white/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow">
              Your Full Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full px-4 pt-5 pb-2 bg-white/5 border border-white/20 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow transition-all"
              placeholder="Your Email Address"
            />
            <label className="absolute left-4 top-2 text-sm text-white/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow">
              Your Email Address
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              rows="5"
              required
              className="peer w-full px-4 pt-5 pb-2 bg-white/5 border border-white/20 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow transition-all"
              placeholder="Your Message"
            ></textarea>
            <label className="absolute left-4 top-2 text-sm text-white/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow">
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow text-black font-semibold rounded-md hover:bg-white hover:text-black transition duration-300"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;

