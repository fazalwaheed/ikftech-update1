import { LucideIcon, ArrowUpRight } from 'lucide-react';

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  items,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
}) {
  return (
    <div className="card group transition hover:-translate-y-1 hover:border-brand-blue/40">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
          <Icon size={22} />
        </span>
        <ArrowUpRight
          size={18}
          className="text-brand-ink/30 transition group-hover:text-brand-blue"
        />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-brand-black">{title}</h3>
      <p className="mt-2 text-sm text-brand-ink/60">{description}</p>
      {items && (
        <ul className="mt-4 space-y-1.5 border-t border-brand-line pt-4">
          {items.map((it) => (
            <li key={it} className="text-xs text-brand-ink/50">
              — {it}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
