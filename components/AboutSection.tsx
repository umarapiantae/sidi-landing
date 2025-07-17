const features = [
  {
    title: 'Tentang halaman ini',
    desc: 'Halaman web ini dirancang untuk memperkenalkan dan mempromosikan produk digital kami.',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUIbpsToUTHB7aNL8J1mJGzA08qlnW4-wKkyY_pdQi8mMQbtaoAbyMoSr5AibNTiv3UwyI0_XiVdPBnYhIWVO5_u7JFu10pMuiL2ZESC8aSol3tR8KpGXPXK37v_IDWeBLp9CPhkMx49EjqgvXo0ojqy4wgYnGtoK7klc0yXipZV4jIiBquhWzWUsUu8w/s512/icon%20About%20this%20page.png',
  },
  {
    title: 'Tujuan produk',
    desc: 'Kami merancang struktur digital agar pekerjaan lebih cepat dan efisien.',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgubzEVdDOTJrx9lRCyli2o6Sv1rzBMREcmx1S7pOj7eOnbXocxG70_UKrHycE4K14dYeZby5W1S6Q3vJC7aBDDtTV3BeW1RuMc6s88rE9uTylIHN0Fp0R9mWbKNtOxqv3hfU6CdpThBeVurj5WwxdO4CkwVT7hs_P_9gJuYU5jPUfT5tqqdtarjUPhPss/s512/icon%20What%20is%20our%20purpose.png',
  },
  {
    title: 'Penyedia produk',
    desc: 'Produk tersedia di Toko Digisma, mitra resmi distribusi kami.',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqMQ5WMQs3NY0ZhG-0bNOEr9GenigWLBSa6xZI5jhgQtZqEJ2l_S2g-6qP26MEAnMLuktCzOARNO22fAOgjj6Lpnt1ECbt09pg0uwWk7i_VWuOTXVlyAHOP7lxuFu8u_ScBPb0e36eQ4i719087j5xbPwaf-RtjEZkV5J0lwvq2weSFpiNJpf3ApDCmEI/s512/icon%20Our%20product%20providers.png',
  },
];

const AboutSection = () => {
  return (
    <section className="bg-[#202e49] text-white px-6 py-20 text-left">
      <h2 className="text-3xl md:text-4xl mb-20">Tentang</h2>
      <div className="flex flex-wrap justify-between gap-10 max-w-6xl mx-auto">
        {features.map(({ title, desc, img }) => (
          <div key={title} className="flex-1 min-w-[260px] max-w-[350px] hover:-translate-y-2 transition">
            <img src={img} alt={title} className="w-[60px] mb-7" />
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-sm font-light">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
