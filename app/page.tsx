"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Globe2, PackageCheck, MessageCircle, ShieldCheck, Sprout, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Peppers",
    description: "Sweet, vibrant peppers.",
    image: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVwcGVyc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Avocados",
    description: "Fresh avocados prepared for wholesale and export inquiries.",
    image: "https://images.unsplash.com/photo-1671624749229-7d37826013b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZvY2Fkb3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Future crops",
    description: "Hibiscus and other plant-based products may be available in future seasons.",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?q=80&w=1200&auto=format&fit=crop",
  },
];

const trustPoints = [
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Farm-grown produce",
    text: "Products are sourced directly from family-led agricultural operations.",
  },
  {
    icon: <PackageCheck className="h-6 w-6" />,
    title: "Export-ready planning",
    text: "Bulk order details, packaging, seasonality, and documentation can be discussed before shipment.",
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: "International focus",
    text: "Built for importers, wholesalers, and international buyers looking for reliable suppliers.",
  },
];

export default function RwandanProduceExportHomepage() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      product: formData.get("product"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setFormStatus("success");
      form.reset();
    } else {
      setFormStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#1F302B]">
      <header className="sticky top-0 z-50 border-b border-[#E6D8C3]/80 bg-[#F7F3EB]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5D50] text-[#F7F3EB]">
              <Sprout className="h-5 w-5" />
            </div>
            <div>
              <p className="font-serif text-xl font-semibold tracking-tight">UDT</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#6B7E72]">Premium Produce Export</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#354A43] md:flex">
            <a href="#products" className="hover:text-[#2F5D50]">Products</a>
            <a href="#about" className="hover:text-[#2F5D50]">About</a>
            <a href="#export" className="hover:text-[#2F5D50]">Export</a>
            <a href="#contact" className="hover:text-[#2F5D50]">Contact</a>
          </div>

          <Button className="rounded-full bg-[#2F5D50] px-5 text-[#F7F3EB] hover:bg-[#24483E]">
            Request Quote
          </Button>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#E6D8C3,_transparent_34%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <p className="mb-4 inline-flex rounded-full bg-[#E6D8C3] px-4 py-2 text-sm font-medium text-[#2F5D50]">
                Fresh produce from Rwanda to international markets
              </p>
              <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-[#1F302B] md:text-7xl">
                Premium African produce, grown with care and prepared for export.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#53645D]">
                We connect international buyers with high-quality fruits and vegetables through a clear, professional, and quote-based ordering process.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-full bg-[#2F5D50] px-7 py-6 text-base text-[#F7F3EB] hover:bg-[#24483E]">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="rounded-full border-[#2F5D50] px-7 py-6 text-base text-[#2F5D50] hover:bg-[#E6D8C3]/60">
                  View Products
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative z-10"
            >
              <div className="relative rounded-[2rem] bg-[#E6D8C3] p-3 shadow-2xl shadow-[#2F5D50]/10">
                <img
                  src="https://images.unsplash.com/photo-1509099381441-ea3c0cf98b94?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Fresh tropical fruits"
                  className="h-[520px] w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-[#F7F3EB]/90 p-5 shadow-lg backdrop-blur-md">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#7A9E7E]">Current focus</p>
                  <p className="mt-1 font-serif text-2xl font-semibold text-[#1F302B]">Avocados & Peppers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#2F5D50] py-10 text-[#F7F3EB]">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
            {trustPoints.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-3xl bg-white/8 p-5">
                <div className="mt-1 text-[#E6D8C3]">{item.icon}</div>
                <div>
                  <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#E8EFE9]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A9E7E]">Our products</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Fresh crops with export potential</h2>
            </div>
            <p className="max-w-xl text-[#53645D]">
              Product availability may vary by season, quantity, and export requirements. Buyers can request details directly through the inquiry form.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {products.map((product) => (
              <Card key={product.name} className="overflow-hidden rounded-[1.5rem] border-[#E6D8C3] bg-[#FFFDF8] shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
                <CardContent className="p-5">
                  <h3 className="font-serif text-2xl font-semibold text-[#1F302B]">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#53645D]">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="bg-[#E6D8C3]/55 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=900&auto=format&fit=crop"
                alt="Agricultural field"
                className="h-72 rounded-[2rem] object-cover"
              />
              <img
                src="https://media.istockphoto.com/id/2213832554/fr/photo/de-grandes-plantations-davocats-en-cours-de-r%C3%A9colte.webp?a=1&b=1&s=612x612&w=0&k=20&c=kSeS5cdrgdaHUj0trOaHhOA9GGQAs_yv0tOanvLJ2Fc="
                alt="Farm harvest"
                className="mt-10 h-72 rounded-[2rem] object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A9E7E]">Family-led agriculture</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Rooted in Rwanda, built for global trade.</h2>
              <p className="mt-6 text-lg leading-8 text-[#53645D]">
                Our business represents a family commitment to agriculture, quality, and long-term partnerships. The website is designed to give buyers the information they need before starting a conversation: what we grow, where we operate, and how to begin an order inquiry.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-[#F7F3EB] p-5">
                  <ShieldCheck className="h-7 w-7 text-[#2F5D50]" />
                  <h3 className="mt-3 font-serif text-xl font-semibold">Trust-first communication</h3>
                  <p className="mt-2 text-sm leading-6 text-[#53645D]">Clear product and order information for serious buyers.</p>
                </div>
                <div className="rounded-3xl bg-[#F7F3EB] p-5">
                  <Truck className="h-7 w-7 text-[#2F5D50]" />
                  <h3 className="mt-3 font-serif text-xl font-semibold">Export conversations</h3>
                  <p className="mt-2 text-sm leading-6 text-[#53645D]">Shipping, packaging, and documentation can be discussed per request.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="export" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] bg-[#1F302B] p-8 text-[#F7F3EB] md:p-12">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#A7C957]">How ordering works</p>
                <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Simple quote-based ordering for international buyers.</h2>
              </div>
              <div className="grid gap-4">
                {[
                  "Tell us your product, destination country, and estimated quantity.",
                  "We review availability, seasonality, packaging, and export requirements.",
                  "Our team follows up directly with next steps and pricing information.",
                ].map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-3xl bg-white/8 p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E6D8C3] font-semibold text-[#1F302B]">
                      {index + 1}
                    </div>
                    <p className="leading-7 text-[#E8EFE9]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid overflow-hidden rounded-[2rem] bg-[#FFFDF8] shadow-xl shadow-[#2F5D50]/10 md:grid-cols-2">
            <div className="bg-[#2F5D50] p-8 text-[#F7F3EB] md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E6D8C3]">Start an inquiry</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold">Request product availability or a bulk order quote.</h2>
              <p className="mt-6 leading-8 text-[#E8EFE9]">
                Share your buying needs and our team will respond with the most relevant product and export information.
              </p>
              <div className="mt-8 flex items-center gap-3 rounded-3xl bg-white/10 p-5">
                <MessageCircle className="h-6 w-6 text-[#E6D8C3]" />
                <p className="text-sm leading-6">WhatsApp and email contact options are gonna be connected here later.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5 p-8 md:p-12">
              <input
                name="name"
                className="rounded-2xl border border-[#E6D8C3] bg-[#F7F3EB] px-4 py-3 outline-none focus:border-[#2F5D50]"
                placeholder="Your name"
              />

              <input
                name="company"
                className="rounded-2xl border border-[#E6D8C3] bg-[#F7F3EB] px-4 py-3 outline-none focus:border-[#2F5D50]"
                placeholder="Company name"
              />

              <input
                name="email"
                className="rounded-2xl border border-[#E6D8C3] bg-[#F7F3EB] px-4 py-3 outline-none focus:border-[#2F5D50]"
                placeholder="email@example.com"
                type="email"
              />

              <select
                name="product"
                className="rounded-2xl border border-[#E6D8C3] bg-[#F7F3EB] px-4 py-3 outline-none focus:border-[#2F5D50]"
              >
                <option>Peppers</option>
                <option>Avocados</option>
                <option>Future crops / Other</option>
              </select>
              <textarea
                name="message"
                className="min-h-32 rounded-2xl border border-[#E6D8C3] bg-[#F7F3EB] px-4 py-3 outline-none focus:border-[#2F5D50]"
                placeholder="Tell us your destination country, quantity, timeline, and packaging needs."
              />
              <Button
                type="submit"
                disabled={formStatus === "loading"}
                className="rounded-full bg-[#2F5D50] py-6 text-base text-[#F7F3EB] hover:bg-[#24483E]"
              >
                {formStatus === "loading" ? "Sending..." : "Submit Inquiry"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {formStatus === "success" && (
                <p className="text-sm font-medium text-[#2F5D50]">
                  Inquiry sent successfully.
                </p>
              )}

              {formStatus === "error" && (
                <p className="text-sm font-medium text-red-700">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E6D8C3] bg-[#F7F3EB] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#53645D] md:flex-row">
          <p>© 2026 UDT. All rights reserved.</p>
          <p>Premium agricultural products from Rwanda.</p>
        </div>
      </footer>
    </div>
  );
}
