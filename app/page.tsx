import {
  Header,
  Hero,
  About,
  Product,
  Testimonials,
  Footer,
  WhatsappButton,
} from "../components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main */}
      <Hero />
      <Product />
      <About />
      <Testimonials />
      <WhatsappButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
