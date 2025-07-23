const Clubs = () => {
  const clubList = [
    { name: 'Competitive Coding', link: '#' },
    { name: 'Machine Learning', link: '#' },
    { name: 'Web Design', link: '#' },
    { name: 'Graphic Design', link: '#' },
    { name: 'App Development', link: '#' },
    { name: 'Research & Development', link: '#' },
  ];

  const hoverColors = [
    'hover:bg-yellow-800/30',
    'hover:bg-blue-800/30',
    'hover:bg-pink-800/30',
    'hover:bg-green-800/30',
    'hover:bg-indigo-800/30',
    'hover:bg-red-800/30',
  ];

  return (
    <section id="clubs" className="py-20 container mx-auto px-4">
      <h2 className="text-5xl font-modern-negra mb-10">Our Clubs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {clubList.map((club, idx) => (
          <a
            key={idx}
            href={club.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`border border-white/20 p-6 rounded-xl transition-transform duration-300 transform hover:scale-105 ${hoverColors[idx]}`}
          >
            <h3 className="text-xl font-semibold">{club.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Clubs;

