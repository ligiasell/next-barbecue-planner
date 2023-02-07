import clsx from "clsx";

export type ButtonProps = React.PropsWithChildren<{
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  color?: "primary" | "secondary" | "outline";
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { className, children, color, ...rest } = props;

  const classes = clsx("button", className, {
    "button-primary": color === "primary",
    "button-secondary": color === "secondary",
    "button-outline": color === "outline",
  });

  return (
    <button className={classes} type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
