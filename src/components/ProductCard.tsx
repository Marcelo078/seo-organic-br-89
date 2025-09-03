import { ArrowRight, Star } from "lucide-react";
import CTAButton from "./CTAButton";

interface ProductCardProps {
  title: string;
  description: string;
  highlights: string[];
  ctaText: string;
  primaryLink: string;
  secondaryLink?: string;
  rating?: number;
  category: string;
  articleLink?: string;
}

const ProductCard = ({
  title,
  description,
  highlights,
  ctaText,
  primaryLink,
  secondaryLink,
  rating = 4.8,
  category,
  articleLink
}: ProductCardProps) => {
  return (
    <div className="card-product">
      <div className="flex items-center gap-2 mb-3">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </span>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-warning fill-warning' : 'text-muted-foreground'}`} 
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">{rating}</span>
        </div>
      </div>
      
      {articleLink ? (
        <a href={articleLink} className="block">
          <h3 className="text-xl font-bold mb-3 text-foreground hover:text-primary transition-colors">{title}</h3>
        </a>
      ) : (
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      )}
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="mb-6">
        <h4 className="font-semibold mb-2 text-foreground">Principais benefícios:</h4>
        <ul className="space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <ArrowRight className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="space-y-3">
        <CTAButton 
          href={primaryLink}
          text={ctaText}
          variant="primary"
          className="w-full justify-center"
        />
        {secondaryLink && (
          <CTAButton 
            href={secondaryLink}
            text="Link Alternativo"
            variant="accent"
            size="sm"
            className="w-full justify-center"
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;