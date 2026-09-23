import axios from "axios";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      toast.warning("Please complete every field.");
      return false;
    }
    setLoading(true);
    axios
      .post("/api/mail", {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      .then((res) => {
        if (res.status === 200) {
          setValues({ name: "", email: "", message: "" });
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const fieldClass =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition-colors duration-200 focus:border-primary focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-ink dark:text-slate-100";

  return (
    <SectionWrapper id="contact" className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-surface-dark md:grid-cols-2 md:p-10">
          <div>
            <SectionHeading
              index="05 — Contact"
              title="Let’s build the next product together."
              subtitle="I reply to thoughtful briefs about fullstack web work, Telegram bots, and product engineering."
            />
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>Based in Ethiopia · remote-friendly</li>
              <li>Typical response within 24 hours</li>
              <li>Open to contract and full-time roles</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <ToastContainer theme="colored" />
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                onChange={handleChange}
                required
                value={values.name}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Jane Cooper"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                onChange={handleChange}
                required
                value={values.email}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                onChange={handleChange}
                required
                value={values.message}
                name="message"
                rows={5}
                placeholder="Tell me about the product, timeline, and stack."
                className={`${fieldClass} resize-none`}
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-ring disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  Sending
                  <BiLoaderAlt className="animate-spin" />
                </span>
              ) : (
                "Send message"
              )}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
