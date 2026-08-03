'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export default function ServiceFAQ({
  faqs,
}: {
  faqs: FAQ[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-[#EEF4FF] px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-[-0.04em] text-[#111827]">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Everything clients usually ask before starting a project.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const active = open === index;

            return (

              <motion.div
                key={faq.question}
                layout
                className="overflow-hidden rounded-3xl border border-gray-200"
              >

                <button
                  onClick={() => setOpen(active ? -1 : index)}
                  className="flex w-full items-center justify-between p-7 text-left"
                >

                  <h3 className="text-xl font-bold text-[#111827]">
                    {faq.question}
                  </h3>

                  {active ? (
                    <Minus className="text-[#9B1C31]" />
                  ) : (
                    <Plus />
                  )}

                </button>

                <AnimatePresence>

                  {active && (

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >

                      <div className="px-7 pb-7 text-gray-600 leading-8">
                        {faq.answer}
                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}