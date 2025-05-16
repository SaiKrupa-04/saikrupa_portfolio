import React from 'react';
import { profile } from '../data/profile';
import SectionHeading from '../components/SectionHeading';
import SocialIcons from '../components/SocialIcons';
import { Send, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const { contact } = profile;

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Let's connect and discuss opportunities"
        />

        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info and Social Links */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-pink-200 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-3xl font-extrabold text-purple-700 mb-8">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <Mail size={24} className="text-purple-600" />
                  <div>
                    <p className="text-sm text-purple-500 font-semibold uppercase tracking-wide">Email</p>
                    <a 
                      href={`mailto:${contact.email}`} 
                      className="text-purple-800 hover:text-purple-600 transition font-semibold text-lg"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <Phone size={24} className="text-purple-600" />
                  <div>
                    <p className="text-sm text-purple-500 font-semibold uppercase tracking-wide">Phone</p>
                    <a 
                      href={`tel:${contact.phone.replace(/\s+/g, '')}`} 
                      className="text-purple-800 hover:text-purple-600 transition font-semibold text-lg"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-purple-600 mb-4 font-semibold">Connect with me on:</p>
                <SocialIcons
                  email={contact.email}
                  phone={contact.phone}
                  linkedin={contact.linkedin}
                  github={contact.github}
                  portfolio={contact.portfolio}
                  size={26}
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-3xl font-extrabold mb-4">Open to Opportunities</h3>
              <p className="mb-6 leading-relaxed text-pink-100 font-medium">
                Currently looking for internship opportunities and collaborative projects. Reach out if you have something exciting!
              </p>
              <a 
                href={`mailto:${contact.email}?subject=Opportunity for SaiKrupa`}
                className="inline-flex items-center bg-white text-purple-700 px-5 py-3 rounded-xl hover:bg-pink-100 transition-colors font-semibold text-base shadow-md tracking-wide"
              >
                <Send size={20} className="mr-3" />
                Send an Opportunity
              </a>
            </div>
          </div>

          {/* Message Form */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-pink-200 hover:shadow-2xl transition-transform duration-300">
            <h3 className="text-3xl font-extrabold text-purple-700 mb-10">Send a Message</h3>

            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-purple-700 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-purple-900 font-medium"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-purple-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-purple-900 font-medium"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-purple-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-5 py-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-purple-900 font-medium"
                  placeholder="Project Opportunity"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-purple-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-5 py-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-purple-900 font-medium"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800 transition-colors font-semibold flex items-center justify-center shadow-md tracking-wide"
              >
                <Send size={22} className="mr-3" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
