
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn(
      "mb-8",
      centered && "text-center",
      className
    )}>
      <h2 className={cn(
        "section-title",
        centered && "after:right-1/2 after:translate-x-1/2"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-2">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
