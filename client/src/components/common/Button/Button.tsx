import classnames, { Argument } from "classnames";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

export interface IButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  loading?: boolean;
  className?: Argument;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  disabled,
  onClick,
  className,
  loading,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={classnames(
        `flex justify-center items-center w-full h-full text-center rounded-md p-4 text-siphon bg-sohoLights md:hover:opacity-75 active:opacity-75`,
        {
          "[&]:bg-sohoLights [&]:opacity-75 hover:opacity-75 active:opacity-75 [&]:text-ice cursor-not-allowed":
            disabled,
        },
        className
      )}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {loading ? (
        <span className="text-center">
          <p>Loading...</p>
        </span>
      ) : (
        children
      )}
    </button>
  );
};
