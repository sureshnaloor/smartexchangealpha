
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Construction Procurement?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our platform today and experience the power of AI-driven material and service procurement
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="font-medium">
              Register as Buyer
            </Button>
            <Button size="lg" variant="outline" className="font-medium text-stone-800 border-primary-foreground hover:bg-teal-400 hover:text-stone-100">
              Register as Seller
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No credit card required. Start with our free tier and upgrade as your business grows.
          </p>
        </div>
      </div>
    </section>
  );
}
