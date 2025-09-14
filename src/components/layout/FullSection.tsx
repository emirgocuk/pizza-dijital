"use client";

import { motion } from "framer-motion";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;        // arka plan vb. eklemek için
  padTop?: number;           // navbar yüksekliği (px)
};

export default function FullSection({ id, children, className = "", padTop = 100 }: Props) {
  return (
    <section
      id={id}
      data-page
      className={`relative min-h-[100svh] ${className}`}
    >
      {/* içerik kutusu: header yüksekliği kadar boşluk ver */}
      <div className="container h-full">
        <motion.div
          className="flex h-full flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ paddingTop: padTop }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
