// Next Utilities
import Link from "next/link";

// Components
import { ProductCard } from ".";

// Data
import products from "@/data/products";
import Image from "next/image";

const Product = () => {
  return (
    <section
      id="#products"
      className="relative sticky top-10 py-20 bg-white text-black"
    >
      <Image
        src="/images/cook.webp"
        alt="cook"
        width={150}
        height={150}
        className="absolute top-[-90px] left-1/2 transform -translate-x-1/2 rounded-t-lg"
      />
      <div className="container flex flex-col items-center mx-auto text-center gap-2.5">
        <h3 className="text-3xl font-bold">Produk Kami</h3>
        <p className="max-w-2xl">
          Pilihan makanan lezat untuk setiap momen spesial Anda. Dibuat dengan
          bahan berkualitas dan penuh cinta, siap menemani hari Anda dengan
          kelezatan tak terlupakan.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map(
            (
              product
            ) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                route={product.route}
                imageUrl={product.imageUrl}
                rating={product.rating}
              />
            )
          )}
        </div>
        <Link legacyBehavior href="/produk">
          <a className="mt-10 inline-block bg-black text-white py-2 px-4 rounded transition-transform duration-200 ease-in-out hover:scale-105">
            Lihat Semua Produk
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Product;
