
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Building className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">SmartChain Marketplace</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary">
            How It Works
          </a>
          <a href="#benefits" className="text-sm font-medium hover:text-primary">
            Benefits
          </a>
          <Button variant="outline" className="mr-2">
            Log In
          </Button>
          <Button>Sign Up</Button>
        </nav>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="container md:hidden pb-4">
          <nav className="flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" className="w-full">
                Log In
              </Button>
              <Button className="w-full">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
