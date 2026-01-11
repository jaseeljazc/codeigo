import { motion, Variants } from "framer-motion";
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
const Faq = () => {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-center mb-12"
          >
            Quick answers to common questions we receive
          </motion.p>

          <div className="space-y-4">
            {[
              {
                q: "How long does a typical project take?",
                a: "Most projects take 4-8 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! We offer maintenance packages and ongoing support to ensure your website stays up-to-date and running smoothly.",
              },
              {
                q: "What's your payment structure?",
                a: "We typically work with a 50% deposit to start, with the remaining 50% due upon project completion. Custom payment plans available for larger projects.",
              },
              {
                q: "Can you work with my existing brand?",
                a: "Absolutely! We can work with your existing brand guidelines or help you develop a new brand identity if needed.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
