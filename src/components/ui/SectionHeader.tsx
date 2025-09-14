type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ eyebrow, title, subtitle, align = "left" }: Props) {
  const alignCls = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <span className="inline-block rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-neutral-600">{subtitle}</p>}
    </div>
  );
}
