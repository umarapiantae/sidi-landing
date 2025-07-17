const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-wrap justify-between items-center px-10 py-10 gap-4">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhh-m3RYJG23xU7skEP18A7nEJFIg7wJ80Dx5k53RiRbEChyphenhyphenb24RZeEPk9Um469ip5jJxy4kS4Fe07QgdgRm0jKRo8tMUNf-0ipDqMjdEi1tImnyNdsvERImGZC0Dlrr-HGmQLibhPet4JHIbPqBJQo0tIYeX6VdqaX2g6FkGSSxqs-S-WkFND3mvciWhY/s3264/logo%20sidi.png"
        alt="Logo SiDi"
        className="w-[180px]"
      />
      <p className="text-sm text-center flex-1">© 2025 - Sistem Digitalisasi | Hak Cipta Dilindungi</p>
      <a href="#top" aria-label="Kembali ke atas" className="hover:-translate-y-1 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[35px] h-[35px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 15.75L12 8.25l7.5 7.5" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
