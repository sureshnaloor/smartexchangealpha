
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              AI-Powered B2B Marketplace for the Construction Industry
            </h1>
            <p className="text-xl text-muted-foreground">
              Connecting buyers and sellers of construction materials and services with intelligent matching and automated procurement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium">
                Register as Buyer
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Register as Seller
              </Button>
            </div>
            <p className="text-sm text-muted-foreground font-semibold italic">
              Join 500+ companies already streamlining their procurement process
            </p>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/20 p-6">
              <img 
                src="/images/hero-image.jpg" 
                alt="Construction site aerial view" 
                className="rounded-md object-cover w-full h-full"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-[80%]">
                <div className="text-sm font-medium text-primary">AI-Powered Matching</div>
                <div className="text-xs text-muted-foreground mt-1">Automatically classifies and matches your requirements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary/30 to-accent/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
    </section>
  );
}
