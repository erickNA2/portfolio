import React, { ElementType } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "body-small";

interface Props {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  "body-small": "p",
};

const sizes: Record<Variant, string> = {
  h1: "lg:text-9xl text-8xl font-cinzel",
  h2: "lg:text-4xl font-bold text-3xl",
  h3: "lg:text-3xl font-bold text-2xl",
  h4: "lg:text-2xl font-bold text-1xl",
  h5: "text-xl font-bold sm:text-lg",
  body: "lg:text-lg text-sm",
  "body-small": "text-[14px] lg:text-sm font-roboto"
};

export const Typography = ({ variant, children, className, as }: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};