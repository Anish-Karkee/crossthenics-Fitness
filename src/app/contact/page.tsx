
import { Button } from '../../components/ui/button'

const ContactPage = () => {
  return (
    <div className="bg-white overflow-x-hidden py-10 px-5">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16">

        <div className="grid md:grid-cols-2 gap-0 bg-white rounded-xl shadow-lg overflow-hidden">

          {/* ─── LEFT: Contact Info ─── */}
          <div className="p-6 sm:p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-black mb-8 relative pb-4">
              Contact Information
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-400" />
            </h2>

            {/* Location */}
            <div className="flex items-start gap-4 mb-7">
              <div className="w-11 h-11 shrink-0 bg-red-500 flex items-center justify-center rounded-full text-white text-lg">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">Our Location</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Pokhara, Gandaki, Nepal</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-7">
              <div className="w-11 h-11 shrink-0 bg-red-500 flex items-center justify-center rounded-full text-white text-lg">
                <i className="fas fa-phone-alt" />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">Phone Numbers</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <a href="tel:+9779804165664" className="hover:text-blue-500 transition-colors">+977 9804165664</a><br />
                  <a href="tel:+9779804165664" className="hover:text-blue-500 transition-colors">+977 9804165664</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-7">
              <div className="w-11 h-11 shrink-0 bg-red-500 flex items-center justify-center rounded-full text-white text-lg">
                <i className="fas fa-envelope" />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">Email Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <a href="mailto:crossthenicfitness522@gmail.com" className="hover:text-blue-500 transition-colors break-all">crossthenicfitness522@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              <a href="https://www.facebook.com/people/Crossthenics/61555726779804/?mibextid=wwXIfr&rdid=58cQcAPjpXPARQjs&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15oxRiQ9NE%2F%3Fmibextid%3DwwXIfr" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white hover:bg-blue-600 hover:-translate-y-1 transition duration-300">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.instagram.com/crossthenicsfitness" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white hover:bg-red-600 hover:-translate-y-1 transition duration-300">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://wa.me/9779804165664" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white hover:bg-green-500 hover:-translate-y-1 transition duration-300">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* ─── RIGHT: Contact Form ─── */}
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-black mb-8 relative pb-4">
              Send Us a Message
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-400" />
            </h2>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-1.5 text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1.5 text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-1.5 text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1.5 text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm min-h-[140px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  required
                  defaultValue=""
                />
              </div>

              <Button className="cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-black hover:scale-115">
            Send Message
          </Button>
            </form>
          </div>

        </div>
      </section>
    </div>
  )
}

export default ContactPage