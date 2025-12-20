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
    <section className="h-full p-2 flex flex-col gap-4 justify-center">
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
    </section>
  );
};

export default Technologies;
