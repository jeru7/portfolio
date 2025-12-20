import { socMeds } from "@/lib/socials";

const LetsConnect = () => {
  return (
    <section className="h-full p-2 flex flex-col pb-8">
      {/* message form */}
      <section className="flex-1 flex items-center">
        <form className="flex flex-col gap-4">
          {/* title */}
          <p>Feel free to message me</p>
          <section className="flex flex-col gap-2">
            {/* name */}
            <input
              type="text"
              placeholder="Name"
              className="text-sm border rounded-md p-2 focus:outline-none focus:ring-0"
            />
            {/* email */}
            <input
              type="email"
              placeholder="Email"
              className="text-sm border rounded-md p-2 focus:outline-none focus:ring-0"
            />
            {/* message */}
            <textarea
              placeholder="Message"
              className="w-full text-sm border rounded-md p-2 focus:outline-none focus:ring-0"
              rows={10}
            />
            {/* send message button */}
            <button
              type="submit"
              className="bg-foreground w-fit h-fit p-2 rounded-md self-end"
            >
              <p className="text-background text-xs font-normal">
                Send message
              </p>
            </button>
          </section>
        </form>
      </section>

      {/* social media and cv */}
      <section className="flex flex-col gap-2 items-center">
        {/* social media buttons */}
        <div className="flex gap-2">
          {socMeds.map((social, index) => (
            <div
              className="flex items-center justify-center"
              key={index}
              title={social.title}
            >
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                {<social.icon className="w-6 h-6" />}
              </a>
            </div>
          ))}
        </div>
        {/* cv button */}
        <button className="bg-foreground rounded-md p-2">
          <p className="text-xs font-normal text-background">Download CV</p>
        </button>
      </section>
    </section>
  );
};

export default LetsConnect;
