import { useState } from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  'Hair Cut', 'Hair Color', 'Hair Straightening Treatments', 
  'Hair Care Treatments', 'Hair Styling', 'Makeup', 
  'Bridal Packages', 'Eyebrow & Lashes', 'Skin Care', 
  'Nails', 'Pedicure & Manicure', 'Nail Care Packages'
];

export function BookingSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const branch = formData.get('branch');
    const date = formData.get('date');
    const time = formData.get('time');
    const notes = formData.get('notes');
    const services = formData.getAll('services');

    const message = `*New Appointment Request*
Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
Branch: ${branch}
Date: ${date}
Time: ${time}
Services: ${services.join(', ')}
Notes: ${notes}`;

    const whatsappUrl = `https://wa.me/923312473575?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="w-full bg-gray-50 py-24 md:py-40 border-t border-gray-200">
      <div className="max-w-[800px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold leading-none tracking-tighter text-[10vw] md:text-7xl uppercase mb-6">
            For Bookings & Appointments
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Appointment requests are confirmed by our salon team. For urgent bookings, please use our direct phone number.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-mono text-gray-500">First Name *</label>
              <input name="firstName" required type="text" className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-mono text-gray-500">Last Name *</label>
              <input name="lastName" required type="text" className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-black transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-mono text-gray-500">Email Address *</label>
              <input name="email" required type="email" className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-mono text-gray-500">Contact Number *</label>
              <input name="phone" required type="tel" className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-black transition-colors" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest font-mono text-gray-500">Preferred Branch / Area *</label>
            <select name="branch" required className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-black transition-colors appearance-none">
              <option value="">Select a location</option>
              <option value="Gulistan-e-Johar">Gulistan-e-Johar Studio</option>
            </select>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-xs uppercase tracking-widest font-mono text-gray-500">Service Categories</label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicesList.map(service => (
                <label key={service} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input name="services" type="checkbox" value={service} className="peer appearance-none w-5 h-5 border border-gray-300 checked:bg-black checked:border-black transition-colors cursor-pointer" />
                    <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm group-hover:text-black text-gray-600 transition-colors">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-mono text-gray-500">Preferred Date *</label>
              <input name="date" required type="date" min={new Date().toISOString().split('T')[0]} className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-mono text-gray-500">Preferred Time</label>
              <input name="time" type="time" className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-black transition-colors" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest font-mono text-gray-500">Additional Notes</label>
            <textarea name="notes" rows={4} className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-black transition-colors resize-none" placeholder="Any special requests or stylist preferences?"></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="mt-8 px-8 py-5 bg-black text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black border border-black transition-colors w-full disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Request Appointment'}
          </button>
        </form>
      </div>
    </section>
  );
}
