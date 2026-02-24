import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Car, Truck } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      title: 'Eastman Inverters',
      description: 'High-efficiency power inverters for home and commercial use. Reliable backup power when you need it most.',
      image: '/assets/generated/inverter.dim_400x400.png',
      icon: Zap,
      features: ['Pure sine wave', 'Multiple capacities', 'Overload protection']
    },
    {
      title: 'Car Batteries',
      description: 'Premium automotive batteries for all car models. Long-lasting performance and quick starts in any weather.',
      image: '/assets/generated/car-battery.dim_400x400.png',
      icon: Car,
      features: ['Maintenance-free', 'High CCA rating', 'Extended warranty']
    },
    {
      title: 'Truck Batteries',
      description: 'Heavy-duty batteries built for trucks and commercial vehicles. Maximum power for demanding applications.',
      image: '/assets/generated/truck-battery.dim_400x400.png',
      icon: Truck,
      features: ['Heavy-duty construction', 'Deep cycle capability', 'Vibration resistant']
    }
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality power solutions for every need. All products available at competitive prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
