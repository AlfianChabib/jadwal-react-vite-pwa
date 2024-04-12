import { Link } from "@tanstack/react-router";

interface HeaderLinkProps {
  children?: React.ReactNode;
  label: string;
  to: string;
}

export default function HeaderMenu(props: HeaderLinkProps) {
  const { children, to, label } = props;
  return (
    <Link
      to={to}
      className="flex justify-between items-center w-full p-2 bg-slate-900 rounded-md hover:bg-slate-900/70 transition-all"
    >
      <p>{label}</p>
      {children}
    </Link>
  );
}
