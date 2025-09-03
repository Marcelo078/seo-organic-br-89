import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

const FAQ = ({ items, title = "Perguntas Frequentes" }: FAQProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="faq-section">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors duration-200"
            >
              <h3 className="font-semibold text-foreground">{item.question}</h3>
              {openItems.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-primary" />
              ) : (
                <ChevronDown className="w-5 h-5 text-primary" />
              )}
            </button>
            {openItems.includes(index) && (
              <div className="px-6 pb-4">
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;