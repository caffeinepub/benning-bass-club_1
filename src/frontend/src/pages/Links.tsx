import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Fish, FileText, MapPin, Waves } from 'lucide-react';

export default function Links() {
  const linkCategories = [
    {
      title: 'Fishing Regulations',
      icon: FileText,
      description: 'Official state and local fishing regulations',
      links: [
        { name: 'Georgia DNR Fishing Regulations', url: 'https://georgiawildlife.com/fishing' },
        { name: 'Alabama Fishing Regulations', url: 'https://www.outdooralabama.com/fishing' },
        { name: 'Fishing License Information', url: '#' },
      ],
    },
    {
      title: 'Local Lakes & Reservoirs',
      icon: Waves,
      description: 'Information about nearby fishing locations',
      links: [
        { name: 'Lake Harding', url: '#' },
        { name: 'West Point Lake', url: '#' },
        { name: 'Lake Oliver', url: '#' },
        { name: 'Goat Rock Lake', url: '#' },
      ],
    },
    {
      title: 'Bass Fishing Resources',
      icon: Fish,
      description: 'Tips, techniques, and educational resources',
      links: [
        { name: 'Bassmaster', url: 'https://www.bassmaster.com' },
        { name: 'Bass Fishing Tips & Techniques', url: '#' },
        { name: 'Seasonal Fishing Patterns', url: '#' },
        { name: 'Equipment Recommendations', url: '#' },
      ],
    },
    {
      title: 'Local Resources',
      icon: MapPin,
      description: 'Tackle shops, boat ramps, and local services',
      links: [
        { name: 'Local Tackle Shops', url: '#' },
        { name: 'Boat Ramp Locations', url: '#' },
        { name: 'Marina Services', url: '#' },
        { name: 'Fishing Guides', url: '#' },
      ],
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Helpful Links</h1>
            <p className="text-lg text-muted-foreground">
              Curated resources for bass fishing in the Fort Moore / Benning area
            </p>
          </div>

          <div className="space-y-6">
            {linkCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-primary" />
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary hover:underline group"
                          >
                            <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            <span>{link.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
