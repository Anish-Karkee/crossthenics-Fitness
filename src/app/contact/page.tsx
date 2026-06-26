
"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({ mode: "onSubmit" });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact form submitted", data);
  };

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
              <a href="https://www.facebook.com/people/Crossthenics/61555726779804/?mibextid=wwXIfr&rdid=58cQcAPjpXPARQjs&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15oxRiQ9NE%2F%3Fmibextid%3DwwXIfr" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white hover:bg-blue-500 hover:-translate-y-1 transition duration-300">
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-1.5 text-sm font-medium text-gray-700">Your Name</label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                  aria-invalid={!!errors.name}
                  className={cn(
                    "w-full p-3",
                    errors.name && "border-red-500 focus-visible:ring-red-500"
                  )}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-gray-700">Email Address</label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  aria-invalid={!!errors.email}
                  className={cn(
                    "w-full p-3",
                    errors.email && "border-red-500 focus-visible:ring-red-500"
                  )}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1.5 text-sm font-medium text-gray-700">Phone Number</label>
                <Input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  {...register("phone", { required: "Phone number is required" })}
                  aria-invalid={!!errors.phone}
                  className={cn(
                    "w-full p-3",
                    errors.phone && "border-red-500 focus-visible:ring-red-500"
                  )}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block mb-1.5 text-sm font-medium text-gray-700">Subject</label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="Enter a subject"
                  {...register("subject", { required: "Subject is required" })}
                  aria-invalid={!!errors.subject}
                  className={cn(
                    "w-full p-3",
                    errors.subject && "border-red-500 focus-visible:ring-red-500"
                  )}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block mb-1.5 text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Write your message"
                  {...register("message", { required: "Message is required" })}
                  aria-invalid={!!errors.message}
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md text-sm min-h-35 resize-y focus:outline-none focus:ring-2 focus:ring-blue-300 transition",
                    errors.message && "border-red-500 focus:ring-red-300"
                  )}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-black hover:scale-115"
              >
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