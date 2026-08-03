'use client';

import { motion } from 'framer-motion';

interface Props {
  tech: string[];
}

const techIcons: Record<string, string> = {
  React: '⚛️',
  'Next.js': '▲',
  Node: '🟢',
  'Node.js': '🟢',
  TypeScript: '🔷',
  JavaScript: '🟨',
  Python: '🐍',
  AWS: '🟠',
  Azure: '🔵',
  GCP: '☁️',
  Docker: '🐳',
  Kubernetes: '⚙️',
  OpenAI: '🤖',
  Claude: '🧠',
  Gemini: '✨',
  LangChain: '🔗',
  Pinecone: '🌲',
  PostgreSQL: '🐘',
  MongoDB: '🍃',
  Redis: '🔴',
};

export default function ServiceTechStack({ tech }: Props) {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full bg-[#EEF4FF] px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
            Technology Stack
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-[-0.04em] text-[#111827]">
            Built using modern technologies.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We select the best technologies for scalability,
            security and long-term maintainability.
          </p>

        </motion.div>

        {/* Grid */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {tech.map((item, index) => (

            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#9B1C31] hover:shadow-xl"
            >

              {/* Glow */}

              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#9B1C31]/10 blur-3xl" />

              </div>

              <div className="relative flex flex-col items-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F8FAFC] text-5xl transition group-hover:scale-110">

                  {techIcons[item] ?? '💻'}

                </div>

                <h3 className="mt-6 text-xl font-bold text-[#111827]">

                  {item}

                </h3>

                <p className="mt-2 text-center text-sm text-gray-500">

                  Production Ready

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}