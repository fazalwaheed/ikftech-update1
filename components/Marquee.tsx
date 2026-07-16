const logos = [
  'Adobe', 'Atlassian', 'Coupa', 'Hootsuite', 'Intuit', 'Slack', 'Salesforce', 'Verizon',
];

export default function Marquee() {
  const items = [...logos, ...logos];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-brand-black py-6">
      <div className="flex w-max animate-marquee gap-16">
        {items.map((logo, i) => (
          <span
            key={`${logo}-${i}`}
            className="whitespace-nowrap text-xl font-semibold tracking-tight text-white/30"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
