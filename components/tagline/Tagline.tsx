// motion - for animation
import { motion } from "motion/react";

const Tagline = () => {
  return (
    <article className="h-full p-2 flex items-center">
      <p>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 1 }}
          className="text-accent inline-block"
        >
          byte by byte.
        </motion.span>
        <br />
        That's how I learn.
        <br />
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 1 }}
          className="text-accent inline-block"
        >
          plan. design. code.
        </motion.span>
        <br />
        That's how I build.
      </p>
    </article>
  );
};

export default Tagline;
