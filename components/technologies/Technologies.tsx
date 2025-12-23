import { motion } from "motion/react";

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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const Technologies = () => {
  return (
    <section className="h-full p-2 flex flex-col gap-4 justify-center">
      <header className="">My development tools</header>
      <motion.ul
        className="flex gap-2 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        {technologies.map((technology, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="rounded-md flex items-center justify-center bg-foreground p-2"
          >
            <p className="text-sm text-background">{technology}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Technologies;
