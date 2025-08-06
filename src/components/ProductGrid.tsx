const ProductGrid = () => {
  const templates = [
    { name: "E-commerce Store", category: "Online Store" },
    { name: "SaaS Landing Page", category: "Software" },
    { name: "Restaurant Menu", category: "Food & Dining" },
    { name: "Fitness Trainer", category: "Health & Fitness" },
    { name: "Real Estate Agent", category: "Property" },
    { name: "Digital Agency", category: "Marketing" }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase text-white mb-4">
            Products <span className="text-primary">Included</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            Premium templates worth ₹9999 - yours for just ₹299
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Template Preview */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl mx-auto"></div>
                    <p className="text-gray-600 font-poppins font-semibold text-sm">
                      [[ IMAGE_PLACEHOLDER ]]
                    </p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-primary text-white px-4 py-2 rounded-lg font-poppins font-semibold">
                    Preview
                  </button>
                </div>
              </div>
              
              {/* Template Info */}
              <div className="space-y-3">
                <h3 className="font-poppins font-bold text-xl text-gray-900">
                  {template.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {template.category}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-poppins font-bold text-lg">
                    Included
                  </span>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <button className="btn-primary text-xl px-12 py-6">
            Buy The Templates At Just ₹299 <span className="line-through opacity-60 ml-2">₹9999</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;