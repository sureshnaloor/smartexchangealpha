
import { Building } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SmartLink</span>
            </div>
            <p className="text-muted-foreground">
              Transforming construction procurement with AI-powered solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">For Buyers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">For Sellers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 xBeyond LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
