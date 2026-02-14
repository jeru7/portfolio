"use client";

import { useEffect, useState } from "react";
// motion - for animation
import { motion } from "motion/react";
// local imports
import { socMeds } from "@/lib/socials";
import { toast } from "sonner";
import Button from "../_ui/Button";

const Contact = () => {
  const [formData, setFormData] = useState<MessageData>(initialFormData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: { value, error: undefined },
    }));
  };

  // field validator
  const validate = (): boolean => {
    const errors: Partial<MessageData> = {};

    // name
    if (!formData.name.value.trim()) {
      errors.name = { ...formData.name, error: "Name is required" };
    }

    // email
    if (!formData.email.value.trim()) {
      errors.email = { ...formData.email, error: "Email is required" };
    }

    // message
    if (!formData.message.value.trim()) {
      errors.message = { ...formData.message, error: "Message is required" };
    }
    if (
      formData.message.value.trim().length < 40 &&
      formData.message.value.trim().length > 0
    ) {
      errors.message = {
        ...formData.message,
        error: "Message must have at least 40 characters",
      };
    }

    if (Object.keys(errors).length > 0) {
      setFormData((prev) => ({ ...prev, ...errors }));
      return false;
    }

    return true;
  };

  // submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setIsLoading(true);

      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.value,
          email: formData.email.value,
          message: formData.message.value,
        }),
      });

      const data = await res.json();

      if (!res.ok && data.errors) {
        setFormData((prev) => ({ ...prev, ...data.errors }));
        return;
      }

      setIsSuccess(true);
      setFormData(initialFormData);
      toast.success("Message sent successfully.");
    } catch (error) {
      toast.success("Something went wrong. Please try again..");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isSuccess) return;
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isSuccess]);

  return (
    <section className="h-full w-full p-4 md:p-8 flex md:w-200 mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-5xl mx-auto my-auto">
        {/* contact info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:justify-center md:w-1/3"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Get in touch
            </h2>
            <p className="text-muted-foreground font-normal text-sm md:text-base">
              Have a project in mind? Feel free to send me a message.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-accent text-sm font-medium">Connect with me</p>
            <div className="flex gap-3">
              {socMeds.map((social, index) => (
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  title={social.title}
                  className="p-2 border border-border rounded-md hover:border-accent hover:text-accent transition-all duration-200"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/UNGAB_RESUME.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm border border-foreground rounded-md hover:border-accent transition-colors duration-200 px-4 py-2 w-fit"
          >
            View CV
          </a>
        </motion.div>

        {/* message form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 md:w-2/3 w-full"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name..."
                  value={formData.name.value}
                  onChange={handleChange}
                  className="text-sm border border-border rounded-lg p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
                {formData.name.error && (
                  <p className="text-red-500 text-xs">{formData.name.error}</p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email..."
                  value={formData.email.value}
                  onChange={handleChange}
                  className="text-sm border border-border rounded-lg p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
                {formData.email.error && (
                  <p className="text-red-500 text-xs">{formData.email.error}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message.value}
                onChange={handleChange}
                className="w-full text-sm border border-border rounded-lg p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none h-40 md:h-48"
              />
              {formData.message.error && (
                <p className="text-red-500 text-xs">{formData.message.error}</p>
              )}
            </div>

            <div className="flex justify-end">
              <Button
                content={isLoading ? "Sending..." : "Send Message"}
                disabled={isLoading || isSuccess}
                type="submit"
                customClasses="px-6 py-2.5"
              />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const initialFormData = {
  name: { value: "" },
  email: { value: "" },
  message: { value: "" },
};

interface MessageField {
  value: string;
  error?: string;
}

interface MessageData {
  name: MessageField;
  email: MessageField;
  message: MessageField;
}

export default Contact;
