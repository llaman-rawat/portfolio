const Project = () => {
  const projects = [
    {
      title: "Todo App",
      description: "Task management app using React",
      live: "https://todoapp-nu-red.vercel.app/"
    },
    {
      title: "Quiz App",
      description: "Interactive quiz application",
      live: "https://appquize.vercel.app/"
    },
    {
      title: "Landing Page",
      description: "Modern landing UI",
      live: "https://landing-one-sable-27.vercel.app"
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-20 px-6">

      <h2 className="text-4xl text-center font-bold mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.description}</p>
            <a href={p.live} target="_blank" className="bg-white text-black px-4 py-2 rounded-lg">
              Live
            </a>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Project;