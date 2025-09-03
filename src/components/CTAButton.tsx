import { ExternalLink } from "lucide-react";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: "primary" | "accent" | "success";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CTAButton = ({ 
  href, 
  text, 
  variant = "primary", 
  size = "md",
  className = "" 
}: CTAButtonProps) => {
  const sizeClasses = {
    sm: "px-6 py-3 text-base",
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl"
  };

  const variantClasses = {
    primary: "btn-primary",
    accent: "btn-accent", 
    success: "btn-success"
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className} group`}
    >
      <span>{text}</span>
      <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
    </a>
  );
};

export default CTAButton;