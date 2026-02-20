import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Heart, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-muted-foreground">
              Learn more about the Benning Bass Club and what we stand for
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Story</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-4">
                  <p>
                    The Benning Bass Club was founded by a group of passionate anglers in the Fort Moore / Benning 
                    community who wanted to create a welcoming space for bass fishing enthusiasts of all skill levels.
                  </p>
                  <p>
                    What started as informal fishing trips among friends has grown into a thriving community 
                    dedicated to the sport of bass fishing, conservation, and camaraderie.
                  </p>
                  <p>
                    Today, we bring together military personnel, veterans, and civilians who share a love for 
                    the outdoors and the thrill of bass fishing on Georgia and Alabama waters.
                  </p>
                </CardDescription>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle>Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To promote the sport of bass fishing, foster a supportive community of anglers, 
                    and encourage responsible fishing practices that preserve our local waters for future generations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-primary" />
                    <CardTitle>Our Values</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Integrity, sportsmanship, conservation, and community. We believe in ethical fishing, 
                    respect for nature, and supporting one another both on and off the water.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle>Who We Are</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-3">
                  <p>
                    Our members come from diverse backgrounds but share a common passion for bass fishing. 
                    Whether you're stationed at Fort Moore, a veteran in the area, or a local civilian, 
                    you'll find a welcoming community here.
                  </p>
                  <p>
                    We welcome anglers of all experience levels—from those just learning to cast to 
                    seasoned tournament competitors. Our club is built on the principle that everyone 
                    has something to learn and something to teach.
                  </p>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  <CardTitle>What We Do</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Organize regular bass fishing tournaments on local lakes and reservoirs</li>
                    <li>Host monthly meetings to share knowledge, techniques, and fishing reports</li>
                    <li>Provide educational resources for anglers looking to improve their skills</li>
                    <li>Promote conservation and ethical fishing practices</li>
                    <li>Build lasting friendships through shared outdoor experiences</li>
                    <li>Support local fishing initiatives and community events</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
