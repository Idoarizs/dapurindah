const Testimonials = () => {
  return (
    <section id="testimonials" className="sticky z-10 top-10 py-20 bg-white text-black">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold">Apa Kata Pelanggan Kami</h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6">
            <p className="italic">"Masakan Dapur Indah selalu memuaskan!"</p>
            <p className="mt-2 font-semibold">- Ibu Siti</p>
          </div>
          <div className="p-6">
            <p className="italic">"Pelayanan yang cepat dan ramah!"</p>
            <p className="mt-2 font-semibold">- Bapak Joko</p>
          </div>
          <div className="p-6">
            <p className="italic">
              "Hidangan yang luar biasa, pasti akan kembali!"
            </p>
            <p className="mt-2 font-semibold">- Ibu Ani</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
