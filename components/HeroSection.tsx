const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center py-[70px] px-5 md:px-[75px] text-white"
      style={{
        backgroundImage:
          "url('/images/hero-bg.webp')"
      }}
    >
      <img
        className="w-[280px] mb-12"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhh-m3RYJG23xU7skEP18A7nEJFIg7wJ80Dx5k53RiRbEChyphenhyphenb24RZeEPk9Um469ip5jJxy4kS4Fe07QgdgRm0jKRo8tMUNf-0ipDqMjdEi1tImnyNdsvERImGZC0Dlrr-HGmQLibhPet4JHIbPqBJQo0tIYeX6VdqaX2g6FkGSSxqs-S-WkFND3mvciWhY/s3264/logo%20sidi.png"
        alt="Logo SiDi"
      />
      <div className="text-[#f2cc30] text-[17px] font-light mb-0 font-garet">Selamat datang di</div>
      <h1 className="text-[50px] md:text-[70px] font-light w-full md:w-[500px] mb-5 text-black font-garet">Sistem Digitalisasi</h1>
      <p className="text-lg font-garet font-light w-full md:w-[500px] mb-5 text-[#f0eeee]">
        Merancang dan mengembangkan struktur dasar dokumen, aplikasi, dan desain dalam format digital. Lihat produk digital kami{' '}
        <a href="#" className="text-blue-700 hover:underline">disini</a>, atau klik tombol "Cari Produk" di bawah ini:
      </p>
      <button className="w-[160px] h-[50px] rounded-lg bg-[#e7ecee] text-[#1449a2] font-bold border border-[#5789ad] hover:bg-[#d6dde0] hover:text-[#0e356e] active:bg-[#5789ad] active:text-white transition">
        Cari Produk
      </button>
    </section>
  );
};

export default HeroSection;
