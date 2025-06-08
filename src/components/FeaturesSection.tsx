
import { 
  Brain, 
  Building, 
  Coins, 
  FileSpreadsheet, 
  Layers, 
  ShieldCheck, 
  SlidersHorizontal, 
  Truck 
} from "lucide-react";

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI-Powered Classification",
    description: "Our system automatically classifies materials and services with minimal human intervention"
  },
  {
    icon: <FileSpreadsheet className="h-6 w-6" />,
    title: "Automated RFP/RFQ",
    description: "Create and distribute requests for proposals and quotes with just a few clicks"
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Smart Matching",
    description: "Get intelligently matched with the right suppliers based on your specific requirements"
  },
  {
    icon: <SlidersHorizontal className="h-6 w-6" />,
    title: "Comparison Sheets",
    description: "AI automatically prepares technical and commercial comparison sheets"
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Price Optimization",
    description: "Compare prices and payment terms to find the best deal for your project"
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Vendor Recommendation",
    description: "Get AI-powered recommendations on which supplier to choose"
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Secure Transactions",
    description: "Conduct business with confidence on our secure platform"
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Order Tracking",
    description: "Track your orders from purchase to delivery in real-time"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powered by Intelligent Technology</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-driven platform simplifies and streamlines the construction procurement process from end to end
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
