import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, MapPin, FileText, Users, DollarSign } from 'lucide-react';

export default function Info() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Information Hub</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about club activities, schedules, and guidelines
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  <CardTitle>Meeting Schedule</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Regular club meetings are held on the first Tuesday of each month at 7:00 PM. 
                  Tournament schedules and special events are announced during meetings and via email.
                </CardDescription>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Meeting Time</p>
                      <p className="text-muted-foreground">7:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Community Center, Fort Moore</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <CardTitle>Club Rules & Guidelines</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-3">
                  <p>
                    All members are expected to follow ethical fishing practices, respect fellow anglers, 
                    and adhere to all state and local fishing regulations.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Practice catch and release when appropriate</li>
                    <li>Respect tournament rules and scoring procedures</li>
                    <li>Maintain good sportsmanship at all times</li>
                    <li>Keep fishing areas clean and free of litter</li>
                    <li>Follow all safety protocols on the water</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle>Membership Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-3">
                  <p>
                    Membership is open to all military personnel, veterans, and civilians in the Fort Moore / Benning area 
                    who have an interest in bass fishing.
                  </p>
                  <p>
                    Members receive access to exclusive tournaments, club resources, fishing reports, 
                    and a supportive community of fellow anglers.
                  </p>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <CardTitle>Dues & Fees</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-3">
                  <p>
                    Annual membership dues help cover club expenses including tournament prizes, 
                    meeting facilities, and club activities.
                  </p>
                  <p>
                    Tournament entry fees are separate and vary by event. All fees are announced 
                    in advance and are kept affordable to encourage participation.
                  </p>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
