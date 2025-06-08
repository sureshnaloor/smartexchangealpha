
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "List Your Requirements",
    description: "Buyers submit their material or service requirements through an easy-to-use form",
    forUser: "buyer"
  },
  {
    number: "02",
    title: "AI Classification",
    description: "Our AI automatically classifies the requirement into existing or new categories",
    forUser: "system"
  },
  {
    number: "03",
    title: "Seller Notification",
    description: "Qualified sellers are notified about new requirements matching their offerings",
    forUser: "seller"
  },
  {
    number: "04",
    title: "Submit Proposals",
    description: "Sellers upload their technical specifications and commercial offers",
    forUser: "seller"
  },
  {
    number: "05",
    title: "AI Comparison",
    description: "System automatically generates comparison sheets for technical and commercial aspects",
    forUser: "system"
  },
  {
    number: "06",
    title: "Vendor Selection",
    description: "Buyers receive recommendations and select the best supplier for their needs",
    forUser: "buyer"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined process that saves time and eliminates complexity
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center 
                  ${step.forUser === "buyer" ? "bg-primary text-white" : 
                    step.forUser === "seller" ? "bg-accent text-white" : 
                    "bg-secondary text-primary"} 
                  shadow-md mb-4 md:mb-0`}>
                  {index < steps.length - 1 ? <ArrowRight className="h-5 w-5" /> : "✓"}
                </div>
                
                <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div className="text-sm font-medium text-muted-foreground mb-1">{step.number}</div>
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                    <div className="mt-2 text-sm">
                      <span className={`inline-block px-2 py-1 rounded-full ${
                        step.forUser === "buyer" ? "bg-primary/10 text-primary" : 
                        step.forUser === "seller" ? "bg-accent/10 text-accent" : 
                        "bg-secondary text-primary"}`}>
                        {step.forUser === "buyer" ? "Buyer" : step.forUser === "seller" ? "Seller" : "System"}
                      </span>
                    </div>
                  </div>
                  <div className={`hidden md:block ${index % 2 === 0 ? "" : ""}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
