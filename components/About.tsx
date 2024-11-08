const About = () => {
  return (
    <section id="about" className="sticky top-10 bg-pastel-pink z-10 py-20">
      <div className="container mx-auto text-center flex gap-10">
        <div className="flex flex-col flex-2 bg-white mt-10 h-[350px]">
          <img
            src="/images/banner.webp"
            alt="Profile"
            className="w-full h-full mx-auto"
          />
        </div>
        <div className="flex flex-col flex-1 mt-10 justify-center text-justify">
          <h1 className="text-3xl font-bold text-black text-start">
            {" "}
            Tentang Kami{" "}
          </h1>
          <p className="mt-4 text-black text-lg max-w-2xl mx-auto">
            Selamat datang di Dapur Indah! Kami hadir untuk menyajikan hidangan
            lezat yang bisa dinikmati oleh semua. Dengan pengalaman dalam dunia
            kuliner, kami percaya bahwa makanan yang baik dapat menyatukan dan
            menciptakan momen-momen berharga. Di Dapur Indah, setiap hidangan
            dibuat dengan sepenuh hati untuk memberikan pengalaman rasa yang
            istimewa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
