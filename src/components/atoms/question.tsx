import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        {...props}
        className="w-[700px] border-2 border-blue-600 rounded-lg"
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
