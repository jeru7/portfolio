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
    <section className="h-full w-full p-2 flex flex-col pb-8">
      {/* message form */}
      <section className="flex-1 flex items-center w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          {/* title */}
          <p className="text-accent">Feel free to message me</p>
          <section className="flex flex-col gap-2">
            {/* name */}
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name.value}
              onChange={handleChange}
              className="text-sm border rounded-md p-2 focus:outline-none focus:ring-0"
            />
            {formData.name.error && (
              <p className="text-red-500 text-sm font-normal">
                {formData.name.error}
              </p>
            )}
            {/* email */}
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email.value}
              onChange={handleChange}
              className="text-sm border rounded-md p-2 focus:outline-none focus:ring-0"
            />
            {formData.email.error && (
              <p className="text-red-500 text-sm font-normal">
                {formData.email.error}
              </p>
            )}
            {/* message */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message.value}
              onChange={handleChange}
              className="w-full text-sm border rounded-md p-2 focus:outline-none focus:ring-0 resize-none h-48 md:h-96"
            />
            {formData.message.error && (
              <p className="text-red-500 text-sm font-normal">
                {formData.message.error}
              </p>
            )}

            {/* send message button */}
            <Button
              content={isLoading ? "Sending message" : "Send message"}
              disabled={isLoading || isSuccess}
              type="submit"
              customClasses="w-fit h-fit self-end"
            />
          </section>
        </form>
      </section>

      {/* social media and cv */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-2 items-center"
      >
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
                className="cursor-pointer hover:text-accent transition-colors duration-200"
              >
                {<social.icon className="w-6 h-6" />}
              </a>
            </div>
          ))}
        </div>
        {/* cv button */}
        <a
          href="/UNGAB_RESUME.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="group text-sm border border-foreground rounded-md hover:cursor-pointer hover:border-accent transition-colors duration-200 px-3 py-1 text-nowrap"
        >
          View CV
        </a>
      </motion.section>
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
