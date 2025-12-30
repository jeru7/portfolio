interface ButtonProps {
  customClasses?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  content: string;
  onClick?: () => void;
}

const Button = ({
  customClasses,
  disabled = false,
  type = "button",
  content,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${customClasses} group border border-foreground rounded-md hover:cursor-pointer hover:border-accent transition-colors duration-200 px-3 py-1`}
      onClick={onClick}
    >
      <p className="text-sm text-nowrap group-hover:text-accent transition-colors duration-200">
        {content}
      </p>
    </button>
  );
};

export default Button;
