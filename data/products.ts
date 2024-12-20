import { Product } from "../types";

const products: Product[] = [
  {
    id: 1,
    title: "Kue Kering",
    description: "Nikmati kue kering lezat yang sempurna untuk menemani waktu santai Anda.",
    route: "/produk/kue-kering",
    imageUrl: "/images/kue-kering.webp",
    rating: 4.8,
    category: "Camilan",
    price: 50000,
    availability: true,
  },
  {
    id: 2,
    title: "Snack",
    description: "Beragam pilihan snack gurih dan manis yang menggugah selera.",
    route: "/produk/snack",
    imageUrl: "/images/snack-ultah.webp",
    rating: 4.7,
    category: "Camilan",
    price: 20000,
    availability: true,
  },
  {
    id: 3,
    title: "Rice Box",
    description: "Rice box praktis dengan porsi ideal untuk makan siang Anda.",
    route: "/produk/rice-box",
    imageUrl: "/images/rice-box.webp",
    rating: 4.9,
    category: "Makanan Berat",
    price: 35000,
    availability: true,
  },
  {
    id: 4,
    title: "Ayam Bakar",
    description: "Ayam bakar yang dimasak dengan bumbu pilihan, siap memanjakan lidah.",
    route: "/produk/ayam",
    imageUrl: "/images/ayam-bakar.webp",
    rating: 5,
    category: "Makanan Berat",
    price: 45000,
    availability: false,
  },
  {
    id: 5,
    title: "Brownies",
    description: "Brownies coklat yang lembut dan kaya rasa, sempurna untuk pencuci mulut.",
    route: "/produk/brownies",
    imageUrl: "/images/kue-kering.webp",
    rating: 4.9,
    category: "Camilan",
    price: 30000,
    availability: true,
  },
  {
    id: 6,
    title: "Nasi Goreng",
    description: "Nasi goreng spesial dengan campuran sayur dan telur.",
    route: "/produk/nasi-goreng",
    imageUrl: "/images/snack-ultah.webp",
    rating: 4.6,
    category: "Makanan Berat",
    price: 28000,
    availability: true,
  },
  {
    id: 7,
    title: "Es Krim",
    description: "Es krim dengan berbagai rasa yang menyegarkan di hari panas.",
    route: "/produk/es-krim",
    imageUrl: "/images/rice-box.webp",
    rating: 4.8,
    category: "Minuman",
    price: 15000,
    availability: false,
  },
  {
    id: 8,
    title: "Sushi",
    description: "Sushi segar dengan pilihan ikan dan sayuran, cocok untuk makan siang.",
    route: "/produk/sushi",
    imageUrl: "/images/ayam-bakar.webp",
    rating: 4.7,
    category: "Makanan Berat",
    price: 50000,
    availability: true,
  },
  {
    id: 9,
    title: "Keripik Sayur",
    description: "Keripik sayur gurih yang cocok untuk camilan sehat.",
    route: "/produk/keripik-sayur",
    imageUrl: "/images/kue-kering.webp",
    rating: 4.2,
    category: "Camilan",
    price: 10000,
    availability: true,
  },
  {
    id: 10,
    title: "Pasta Carbonara",
    description: "Pasta carbonara krim dengan daging asap dan keju parmesan.",
    route: "/produk/pasta-carbonara",
    imageUrl: "/images/snack-ultah.webp",
    rating: 4.5,
    category: "Makanan Berat",
    price: 40000,
    availability: false,
  },
];

export default products;
