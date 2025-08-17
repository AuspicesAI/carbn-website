import React from "react";

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon,
  title,
  description,
  className = "",
}) => (
  <div className={`w-full ${className}`}>
    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12">
      <div className="text-primary-foreground lg:w-6 lg:h-6 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);
