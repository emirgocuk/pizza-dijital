type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  as?: "button" | "a";
  href?: string;
};

export default function Button({ variant = "primary", as = "button", href, className = "", ...rest }: Props) {
  const base = "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition";
  const styles = {
    primary: "bg-pizzaYellow text-black hover:brightness-110",
    outline: "border border-black/10 hover:bg-black/5",
    ghost: "hover:bg-black/5",
  }[variant];

  if (as === "a" && href) {
    return <a href={href} className={`${base} ${styles} ${className}`} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }
  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}
