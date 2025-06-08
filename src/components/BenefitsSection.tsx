
import {
  Clock,
  DollarSign,
  FileCheck,
  LineChart,
  SearchCheck,
  ShieldCheck,
  Users
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const buyerBenefits = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Time Efficiency",
    description: "Reduce procurement time by up to 60% with automated RFP/RFQ processing"
  },
  {
    icon: <SearchCheck className="h-6 w-6" />,
    title: "Quality Suppliers",
    description: "Access a verified network of quality material suppliers and service providers"
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "Smart Comparisons",
    description: "Automatically generated comparison sheets for informed decision making"
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Cost Savings",
    description: "Average 15-20% savings on procurement costs through competitive bidding"
  }
];

const sellerBenefits = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expanded Reach",
    description: "Connect with new clients specifically looking for your materials or services"
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Market Insights",
    description: "Gain valuable data on market trends and buyer requirements"
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Reduced Overhead",
    description: "Lower customer acquisition costs and streamlined proposal submissions"
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Faster Payments",
    description: "Secure transaction system with improved payment processing times"
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Benefits for All Parties</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform creates value for both buyers and sellers in the construction ecosystem
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">B</div>
              <h3 className="text-2xl font-semibold">For Buyers</h3>
            </div>
            <div className="grid gap-6">
              {buyerBenefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="text-primary">{benefit.icon}</div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-white">S</div>
              <h3 className="text-2xl font-semibold">For Sellers</h3>
            </div>
            <div className="grid gap-6">
              {sellerBenefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="text-accent">{benefit.icon}</div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
