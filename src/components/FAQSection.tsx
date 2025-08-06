import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need any technical skills to use these templates?",
      answer: "Not at all! Our templates are designed for complete beginners. You can customize everything using our simple drag-and-drop interface. No coding knowledge required."
    },
    {
      question: "What's Included in The Bundle?",
      answer: "You get 6 premium landing page templates, complete customization access, WhatsApp integration setup, payment gateway integration, lifetime updates, and 24/7 customer support."
    },
    {
      question: "Are These Templates Conversion-Optimized?",
      answer: "Yes! Every template is designed by conversion experts and tested to achieve 15%+ conversion rates. They include proven elements like social proof, urgency, and clear CTAs."
    },
    {
      question: "Can I Get These Templates Customized?",
      answer: "Absolutely! You can customize colors, fonts, images, text, and layout. For advanced customizations, our support team can help you achieve the exact look you want."
    },
    {
      question: "Will I Get Support If I'm Stuck On Something?",
      answer: "Yes! We provide 24/7 customer support via WhatsApp and email. Our team will help you with setup, customization, and any technical issues you might face."
    },
    {
      question: "Can I Customize These Templates?",
      answer: "Yes, all templates are 100% customizable. Change colors, fonts, images, text, add your logo, modify layouts - everything can be adjusted to match your brand perfectly."
    },
    {
      question: "Does Pricing Has Launch Or Landing Page Templates?",
      answer: "Our bundle includes both pricing page templates and complete landing page templates. You'll get templates for every type of business and use case."
    },
    {
      question: "Are These Templates Suitable for All Types Of Business Niches?",
      answer: "Yes! We have templates for e-commerce, SaaS, restaurants, fitness, real estate, digital agencies, and more. Whatever your niche, we have a converting template for you."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase text-white mb-4">
            Frequently <span className="text-primary">Asked Questions</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            Everything you need to know about our templates
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="faq-item bg-card border border-border/20 rounded-xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-trigger w-full flex items-center justify-between p-6 hover:bg-card/50 transition-colors duration-200"
              >
                <span className="text-left font-poppins font-semibold text-white text-lg">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="faq-content px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <button className="btn-primary text-xl px-12 py-6">
            Buy The Templates At Just ₹299 <span className="line-through opacity-60 ml-2">₹9999</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;