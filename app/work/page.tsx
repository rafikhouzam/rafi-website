export default function WorkWithMe() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero */}
      <h1 className="text-4xl font-bold mb-4">Work With Me</h1>
      <p className="text-lg text-gray-600 mb-10">
        I help small businesses and founders get fast, modern websites that look great on any device. 
        Clean design, mobile-friendly, and built to convert –without the technical headaches.
      </p>

      {/* Packages */}
      <section id="packages" aria-labelledby="packages-title" className="max-w-3xl mx-auto">
        <h2 id="packages-title" className="text-3xl font-bold mb-6">Packages for Small Businesses</h2>

  {/* Starter */}
  <article className="mb-10 rounded-xl border border-slate-200 p-6 bg-white/80"
           itemScope itemType="https://schema.org/Service">
    <meta itemProp="serviceType" content="Starter Website" />
    <h3 className="text-2xl font-semibold mb-2" itemProp="name">Starter Website — $500–$1,000</h3>
    <p className="text-slate-600 mb-4" itemProp="description">
      Get online quickly with a modern, professional site. Perfect for new businesses or personal brands
      that need a polished presence without unnecessary complexity.
    </p>
    <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700">
      <li>1–3 pages (Home, About, Contact)</li>
      <li>Mobile-friendly and fast loading</li>
      <li>Domain and hosting setup</li>
    </ul>
    <div itemProp="offers" itemScope itemType="https://schema.org/AggregateOffer" className="sr-only">
      <meta itemProp="lowPrice" content="500" />
      <meta itemProp="highPrice" content="1000" />
      <meta itemProp="priceCurrency" content="USD" />
    </div>
  </article>

  {/* Business */}
  <article className="mb-10 rounded-xl border border-slate-200 p-6 bg-white/80"
           itemScope itemType="https://schema.org/Service">
    <meta itemProp="serviceType" content="Business Website" />
    <h3 className="text-2xl font-semibold mb-2" itemProp="name">Business Website — $1,500–$2,500</h3>
    <p className="text-slate-600 mb-4" itemProp="description">
      Stand out online with a site that builds trust and generates inquiries. Designed for established
      businesses ready to grow.
    </p>
    <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700">
      <li>5–7 pages (Services, Gallery, Testimonials, etc.)</li>
      <li>Custom contact form and Google Maps integration</li>
      <li>Basic SEO setup and Google Analytics tracking</li>
    </ul>
    <div itemProp="offers" itemScope itemType="https://schema.org/AggregateOffer" className="sr-only">
      <meta itemProp="lowPrice" content="1500" />
      <meta itemProp="highPrice" content="2500" />
      <meta itemProp="priceCurrency" content="USD" />
    </div>
  </article>
  </section>

      {/* Why Me */}
      <h2 className="text-2xl font-semibold mb-4">Why Work With Me?</h2>
      <ul className="list-disc list-inside text-gray-700 mb-12 space-y-2">
        <li>Fast turnaround — most sites live in 1–2 weeks.</li>
        <li>Clean, modern design that looks good on all devices.</li>
        <li>End-to-end setup: domain, hosting, analytics included.</li>
        <li>Option to grow into data dashboards & automation later.</li>
      </ul>

      {/* CTA */}
      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-2">Ready to upgrade your site?</h3>
        <p className="mb-4 text-gray-600">
          Let’s talk about your business and how I can help you stand out online.
        </p>
        <a
          href="mailto:rafi@rafikhouzam.com"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  )
}
