const technologies = [
  "TypeScript",
  "JavaScript",
  "React",
  "NextJS",
  "C#",
  "MongoDB",
  "Neovim",
  "Tmux",
  "Git",
  "NodeJS",
  "Kitty",
  "Postman",
];

const Technologies = () => {
  return (
    <section className="h-screen">
      <article className="h-full flex flex-col w-full">
        <header className="">My development tools</header>
        <ul className="flex gap-2 flex-wrap">
          {technologies.map((technology, index) => (
            <li
              key={index}
              className="rounded-md flex items-center justify-center bg-foreground p-2"
            >
              <p className="text-sm text-background">{technology}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Technologies;
