import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  HelpCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-[#005F2F] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <h1 className="text-4xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help students, teachers, and
            institutions. Reach out to our team anytime.
          </p>

        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <Phone className="w-12 h-12 mx-auto text-[#005F2F]" />
              <h3 className="mt-5 text-xl font-bold">
                Call Us
              </h3>
              <p className="mt-2 text-slate-500">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <Mail className="w-12 h-12 mx-auto text-[#005F2F]" />
              <h3 className="mt-5 text-xl font-bold">
                Email Us
              </h3>
              <p className="mt-2 text-slate-500">
                support@jsyc.in
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <MapPin className="w-12 h-12 mx-auto text-[#005F2F]" />
              <h3 className="mt-5 text-xl font-bold">
                Visit Us
              </h3>
              <p className="mt-2 text-slate-500">
                Ranchi, Jharkhand
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <Clock className="w-12 h-12 mx-auto text-[#005F2F]" />
              <h3 className="mt-5 text-xl font-bold">
                Working Hours
              </h3>
              <p className="mt-2 text-slate-500">
                Mon - Fri, 10 AM - 6 PM
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Contact Form */}
  
      {/* Office Locations */}
      <section className=" bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Our Offices
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            {[
              "Ranchi Office",
              "Jamshedpur Office",
              "Dhanbad Office",
            ].map((office) => (
              <div
                key={office}
                className="bg-slate-50 rounded-3xl p-8"
              >
                <MapPin className="text-[#005F2F] w-10 h-10 " />

                <h3 className="mt-5 text-xl font-bold">
                  {office}
                </h3>

                <p className="mt-3 text-slate-500">
                  Jharkhand, India
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

  

      {/* Map */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">
          

         <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.79900197577!2d85.23892442851177!3d23.34318324293198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1781795627547!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

        </div>

      </section>


    </main>
  );
}