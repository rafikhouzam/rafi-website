export default function WorkWithMe() {
  return (
    <div className="landing max-w-3xl mx-auto">
      {/* Hero */}
      <h1 className="text-4xl font-bold mb-4">Work With Me</h1>
      <div className="gradient-bar"></div>
      <div className="text-center py-5">
        <a >
          I help small businesses and founders get fast, modern websites that look great on any device. 
          Clean design, mobile-friendly, and built to convert without the technical headaches.
        </a>
      </div>

      {/* Packages */}
      <section id="packages" aria-labelledby="packages-title" className="space-y-6">
        <h2 id="packages-title" className="text-3xl font-bold">Packages for Small Businesses</h2>

        {/* Starter */}
        <div
          className="work-card p-6"
          itemScope
          itemType="https://schema.org/Service"
        >
          <meta itemProp="serviceType" content="Starter Website" />
          <div className="font-semibold text-xl mb-1" itemProp="name">
            <h3>Starter Website <span className="text-slate-300">— $500–$1,000</span></h3>
          </div>
          <p className="text-slate-300 mb-3" itemProp="description">
            Get online quickly with a modern, professional site. Perfect for new businesses or personal brands
            that need a polished presence without unnecessary complexity.
          </p>
          <ul className="check-bullets space-y-1">
            <li>1–3 pages (Home, About, Contact)</li>
            <li>Mobile-friendly and fast loading</li>
            <li>Domain and hosting setup</li>
          </ul>
          <div
            itemProp="offers"
            itemScope
            itemType="https://schema.org/AggregateOffer"
            className="sr-only"
          >
            <meta itemProp="lowPrice" content="500" />
            <meta itemProp="highPrice" content="1000" />
            <meta itemProp="priceCurrency" content="USD" />
          </div>
        </div>

        {/* Business */}
        <div
          className="work-card p-6"
          itemScope
          itemType="https://schema.org/Service"
        >
          <meta itemProp="serviceType" content="Business Website" />
          <div className="font-semibold text-xl mb-1" itemProp="name">
            <h3>Business Website <span className="text-slate-300">— $1,500–$2,500</span></h3>
          </div>
          <p className="mb-3" itemProp="description">
            Stand out online with a site that builds trust and generates inquiries. Designed for established
            businesses ready to grow.
          </p>
          <ul className="check-bullets space-y-1">
            <li>5–7 pages (Services, Gallery, Testimonials, etc.)</li>
            <li>Custom contact form and Google Maps integration</li>
            <li>Basic SEO setup and Google Analytics tracking</li>
          </ul>
          <div
            itemProp="offers"
            itemScope
            itemType="https://schema.org/AggregateOffer"
            className="sr-only"
          >
            <meta itemProp="lowPrice" content="1500" />
            <meta itemProp="highPrice" content="2500" />
            <meta itemProp="priceCurrency" content="USD" />
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="work-card mt-12">
        <h3 className="text-2xl font-semibold mb-4">Why Work With Me?</h3>
        <ul className="check-bullets space-y-1">
          <li>Fast turnaround — most sites live in 1–2 weeks.</li>
          <li>Clean, modern design that looks good on all devices.</li>
          <li>End-to-end setup: domain, hosting, analytics included.</li>
          <li>Option to grow into data dashboards & automation later.</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="work-card p-8 mt-12 text-center">
        <h3 className="text-2xl font-bold mb-2">Ready to upgrade your site?</h3>
        <p className="mb-4 text-gray-600">
          Let’s talk about your business and how I can help you stand out online.
        </p>
        <a
          href="mailto:rafi@rafikhouzam.com"
          className="btn"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  )
}
