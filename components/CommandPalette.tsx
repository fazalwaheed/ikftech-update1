"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";

const items = [
  {
    heading: "Services",
    items: [
      { name: "AI Consulting", href: "/services/ai-consulting" },
      { name: "AI Agents", href: "/services/ai-agents" },
      { name: "AI Automation", href: "/services/ai-automation" },
      { name: "Machine Learning", href: "/services/machine-learning" },
      { name: "LLM Integration", href: "/services/llm-integration" },

      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Development", href: "/services/mobile-development" },
      { name: "Cloud DevOps", href: "/services/cloud-devops" },
      { name: "UI UX Design", href: "/services/ui-ux-design" },
      { name: "Product Design", href: "/services/product-design" },

      { name: "ERP", href: "/services/erp" },
      { name: "CRM", href: "/services/crm" },
      { name: "HRMS", href: "/services/hrms" },

      { name: "Data Analytics", href: "/services/data-analytics" },
      { name: "Power BI", href: "/services/power-bi" },

      { name: "QA Testing", href: "/services/qa-testing" },
      { name: "Automation Testing", href: "/services/automation-testing" },

      { name: "Cyber Security", href: "/services/cyber-security" },
      { name: "Blockchain", href: "/services/blockchain" },
      { name: "DevOps", href: "/services/devops" },
    ],
  },

  {
    heading: "Industries",

    items: [
      { name: "Fintech", href: "/industries/fintech" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Retail", href: "/industries/retail" },
      { name: "Travel", href: "/industries/travel" },
      { name: "Education", href: "/industries/education" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Logistics", href: "/industries/logistics" },
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "SaaS", href: "/industries/saas" },
      { name: "Web3", href: "/industries/web3" },
    ],
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };

    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-auto mt-28 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220] shadow-2xl"
          >
            <Command className="w-full">
              <Command.Input
                placeholder="Search services, industries..."
                className="w-full border-b border-white/10 bg-transparent px-6 py-5 text-lg text-white outline-none placeholder:text-white/40"
              />

              <Command.List className="max-h-[420px] overflow-y-auto p-3">
                <Command.Empty className="p-6 text-center text-white/50">
                  No results found.
                </Command.Empty>

                {items.map((section) => (
                  <Command.Group
                    key={section.heading}
                    heading={section.heading}
                    className="mb-4"
                  >
                    {section.items.map((item) => (
                      <Command.Item
                        key={item.href}
                        onSelect={() => {
                          router.push(item.href);
                          setOpen(false);
                        }}
                        className="cursor-pointer rounded-xl px-4 py-3 text-white transition hover:bg-[#9B1C31]"
                      >
                        {item.name}
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}