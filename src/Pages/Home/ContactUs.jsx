import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaLinkedin } from "react-icons/fa";

function ContactUs({ id = "contact" }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill required fields.");
      return;
    }
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Thanks — your message has been received. We'll reply soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 800);
  }

  return (
    <section id={id} style={{ scrollMarginTop: "96px" }} className="relative py-20 bg-sky-50 overflow-hidden">

      {/* Decorative Glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-12" data-aos="fade-up"> 
          <div className="inline-block px-5 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Get in touch with Shreya Water Tech LLP</h2>
          <p className="mt-3 text-blue-700 max-w-2xl mx-auto">For enquiries about RO systems, spare parts, or custom solutions — drop us a message or reach out directly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left: Contact details */}
          <div data-aos="fade-right">
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-blue-100 shadow-[0_20px_50px_rgba(2,132,199,0.08)]">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Company Contact</h3>
              <p className="text-blue-900 mb-6">Plot No-1, Price Industrial, Kuha-Kothiya Road, Near Shreenath Weight Bridge, Kuha</p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="p-3 rounded-full bg-blue-50 text-blue-900"><FaPhoneAlt /></span>
                  <div>
                    <div className="text-sm text-blue-900 font-semibold">Phone</div>
                    <div className="text-blue-900">+91 98984 06504<br/>+91 98982 28284</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="p-3 rounded-full bg-blue-50 text-blue-900"><FaEnvelope /></span>
                  <div>
                    <div className="text-sm text-blue-900 font-semibold">Email</div>
                    <div className="text-blue-900 break-all">seapuremkt@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="p-3 rounded-full bg-blue-50 text-blue-900"><FaMapMarkerAlt /></span>
                  <div>
                    <div className="text-sm text-blue-900 font-semibold">Address</div>
                    <div className="text-blue-900">Kuha, Gujarat, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="p-3 rounded-full bg-blue-50 text-blue-900"><FaGlobe /></span>
                  <div>
                    <div className="text-sm text-blue-900 font-semibold">Website</div>
                    <div className="text-blue-900"><a href="https://www.shreyaenterprise.net" className="underline">shreyaenterprise.net</a></div>
                  </div>
                </div>

                  <div className="p-5 flex flex-col sm:flex-row items-center justify-between gap-8 bg-white border-t border-blue-100">
          <div className="text-center sm:text-left">
            <p className="text-blue-500 uppercase tracking-widest text-xs">Secure Digital Access</p>
            <h3 className="text-blue-900 text-xl sm:text-2xl mt-2 font-bold">Scan to Connect Instantly</h3>
            <p className="text-blue-700 mt-1 text-sm sm:text-base">Enterprise encrypted digital identity with NFC support.</p>
          </div>
          <div className="relative">
            <div className="p-4 bg-blue-50 rounded-xl shadow-lg">
              <QRCodeCanvas value="https://shreya-water-tech-llp.vercel.app/" size={140} />
            </div>
          </div>
        </div>
              </div>

              {/* <div className="mt-6 flex items-center gap-4">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-cyan-600"><FaLinkedin /></a>
              </div> */}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-blue-100 shadow-[0_20px_50px_rgba(2,132,199,0.06)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm text-blue-900 font-semibold mb-2">Name *</span>
                  <input name="name" value={form.name} onChange={handleChange} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" placeholder="Your name" />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-blue-900 font-semibold mb-2">Email *</span>
                  <input name="email" value={form.email} onChange={handleChange} type="email" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" placeholder="you@company.com" />
                </label>
              </div>

              <div className="mt-4">
                <label className="flex flex-col">
                  <span className="text-sm text-blue-900 font-semibold mb-2">Phone</span>
                  <input name="phone" value={form.phone} onChange={handleChange} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" placeholder="Mobile number" />
                </label>
              </div>

              <div className="mt-4">
                <label className="flex flex-col">
                  <span className="text-sm text-blue-900 font-semibold mb-2">Message *</span>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" placeholder="How can we help?"></textarea>
                </label>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <button type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-500 transition">Send Message</button>
                <div className="text-sm text-blue-900">{status}</div>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactUs;