import { DollarSign, Shield, Clock, Award } from 'lucide-react';

export default function ValueProposition() {
  const values = [
    {
      icon: DollarSign,
      title: 'Unbeatable Prices',
      description: 'We guarantee the lowest prices on all Eastman products and batteries. Save more without compromising quality.'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All our products come with manufacturer warranties and our commitment to quality assurance.'
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Quick turnaround on orders and installations. Get your vehicle powered up without delay.'
    },
    {
      icon: Award,
      title: 'Expert Advice',
      description: 'Our knowledgeable team helps you choose the right battery or inverter for your specific needs.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just low prices – we deliver value, quality, and service you can trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Price Highlight Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            New Batteries at Warehouse Prices
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stock up on premium car and truck batteries at prices that can't be beaten. 
            As an authorized Eastman dealer, we pass the savings directly to you.
          </p>
        </div>
      </div>
    </section>
  );
}
