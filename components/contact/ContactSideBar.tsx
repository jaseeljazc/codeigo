import { motion, Variants } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Instagram,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  },
};

const stagger: Variants = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const socialLinks = [
  { icon: Instagram, label: "Instagram", link: "#" },
  { icon: Linkedin, label: "LinkedIn", link: "#" },
  { icon: Twitter, label: "Twitter", link: "#" },
  { icon: Globe, label: "Website", link: "#" },
];
const ContactSideBar = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className="lg:col-span-2 space-y-8 pt-25"
    >
      {/* Why Choose Us */}
      <div className="bg-primary/5 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">
          Why Work With Us?
        </h3>
        <ul className="space-y-3">
          {[
            "24-hour response time",
            "Free initial consultation",
            "Transparent pricing",
            "Dedicated project manager",
            "Post-launch support",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Links */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">
          Connect With Us
        </h3>
        <p className="text-muted-foreground mb-6">
          Follow us on social media for updates, tips, and inspiration.
        </p>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors group"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-primary group-hover:text-white" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSideBar;
