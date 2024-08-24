import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={`p-2 hover:bg-[#212121] rounded-lg transition duration-75 ${className}`}
      {...props}
    />
  );
};

export default Button;
