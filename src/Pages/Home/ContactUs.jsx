import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

function ContactUs({ id = "contact" }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

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
      setStatus("Thanks — your message has been received.");
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 800);
  }

  return (
    <section
      id={id}
      style={{ scrollMarginTop: "96px" }}
      className="relative py-20 bg-cyan-800 overflow-hidden"
    >

      <div className="relative w-full mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">

          <div className="inline-block px-6 py-2 bg-cyan-700 text-white rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
            Contact
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Get in Touch with Shreya Water Tech LLP
          </h2>

          <p className="mt-3 text-cyan-100 max-w-2xl mx-auto">
            For enquiries about RO systems, spare parts, or custom solutions — reach out to us anytime.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CONTACT CARD */}
          <div data-aos="fade-right">

            <div className="bg-white p-8 rounded-3xl border border-cyan-100 shadow-xl">

              <h3 className="text-xl font-bold text-cyan-900 mb-4">
                Company Contact
              </h3>

              <p className="text-cyan-700 mb-8">
                Plot No-1, Price Industrial, Kuha-Kothiya Road,
                Near Shreenath Weight Bridge, Kuha
              </p>


              <div className="space-y-6">

                {/* Phone */}
                <div className="flex gap-4">

                  <div className="p-3 rounded-xl bg-cyan-100 text-cyan-700">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-cyan-900">
                      Phone
                    </div>
                    <div className="text-cyan-700">
                      +91 98984 06504
                      <br />
                      +91 98982 28284
                    </div>
                  </div>

                </div>


                {/* Email */}
                <div className="flex gap-4">

                  <div className="p-3 rounded-xl bg-cyan-100 text-cyan-700">
                    <FaEnvelope />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-cyan-900">
                      Email
                    </div>
                    <div className="text-cyan-700 break-all">
                      seapuremkt@gmail.com
                    </div>
                  </div>

                </div>


                {/* Address */}
                <div className="flex gap-4">

                  <div className="p-3 rounded-xl bg-cyan-100 text-cyan-700">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-cyan-900">
                      Address
                    </div>
                    <div className="text-cyan-700">
                      Kuha, Gujarat, India
                    </div>
                  </div>

                </div>


                {/* Website */}
                <div className="flex gap-4">

                  <div className="p-3 rounded-xl bg-cyan-100 text-cyan-700">
                    <FaGlobe />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-cyan-900">
                      Website
                    </div>
                    <a
                      href="https://www.shreyaenterprise.net"
                      className="text-cyan-700 underline"
                    >
                      shreyaenterprise.net
                    </a>
                  </div>

                </div>

              </div>


              {/* QR Code */}
              <div className="mt-10 p-6 bg-cyan-50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">

                <div>

                  <p className="text-xs uppercase tracking-widest text-cyan-500">
                    Secure Digital Access
                  </p>

                  <h3 className="text-cyan-900 text-lg font-bold mt-1">
                    Scan to Connect Instantly
                  </h3>

                  <p className="text-cyan-700 text-sm">
                    Enterprise digital identity with NFC support.
                  </p>

                </div>


                <div className="bg-white p-3 rounded-xl shadow-lg">
                  <QRCodeCanvas
                    value="https://shreya-water-tech-llp.vercel.app/"
                    size={110}
                  />
                </div>

              </div>

            </div>

          </div>



          {/* CONTACT FORM */}
          <div data-aos="fade-left">

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-3xl border border-cyan-100 shadow-xl"
            >

              <div className="grid md:grid-cols-2 gap-4">

                <label className="flex flex-col">
                  <span className="text-sm font-semibold text-cyan-900 mb-2">
                    Name *
                  </span>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl border border-cyan-200 focus:ring-2 focus:ring-cyan-400 outline-none"
                    placeholder="Your name"
                  />
                </label>


                <label className="flex flex-col">
                  <span className="text-sm font-semibold text-cyan-900 mb-2">
                    Email *
                  </span>

                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl border border-cyan-200 focus:ring-2 focus:ring-cyan-400 outline-none"
                    placeholder="you@company.com"
                  />
                </label>

              </div>


              <div className="mt-4">

                <label className="flex flex-col">

                  <span className="text-sm font-semibold text-cyan-900 mb-2">
                    Phone
                  </span>

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl border border-cyan-200 focus:ring-2 focus:ring-cyan-400 outline-none"
                    placeholder="Mobile number"
                  />

                </label>

              </div>


              <div className="mt-4">

                <label className="flex flex-col">

                  <span className="text-sm font-semibold text-cyan-900 mb-2">
                    Message *
                  </span>

                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl border border-cyan-200 focus:ring-2 focus:ring-cyan-400 outline-none"
                    placeholder="How can we help?"
                  ></textarea>

                </label>

              </div>


              <div className="mt-6 flex items-center justify-between">

                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-xl font-semibold hover:from-cyan-700 hover:to-cyan-500 transition"
                >
                  Send Message
                </button>

                <div className="text-sm text-cyan-100">
                  {status}
                </div>

              </div>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactUs;