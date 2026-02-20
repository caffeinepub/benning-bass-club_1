import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Users, Facebook } from 'lucide-react';
import { SiFacebook, SiInstagram } from 'react-icons/si';

export default function Contact() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with the Benning Bass Club
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <CardTitle>Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-3">
                  <p>
                    For general inquiries, membership questions, or tournament information, 
                    please reach out to us via email:
                  </p>
                  <a
                    href="mailto:info@benningbassclub.com"
                    className="text-primary hover:underline font-medium text-lg"
                  >
                    info@benningbassclub.com
                  </a>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <CardTitle>Social Media</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-4">
                  <p>
                    Follow us on social media for the latest updates, fishing reports, 
                    tournament results, and community highlights.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiFacebook className="h-5 w-5" />
                      <span>Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiInstagram className="h-5 w-5" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle>Club Leadership</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-3">
                  <p>
                    Our club is led by a dedicated team of officers who volunteer their time 
                    to organize events, manage communications, and ensure a great experience for all members.
                  </p>
                  <p>
                    If you have specific questions or concerns, feel free to reach out to any 
                    of our officers at club meetings or via email.
                  </p>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-3">
                  <p>
                    The best way to learn more about the club is to attend one of our monthly meetings. 
                    Meetings are held on the first Tuesday of each month at 7:00 PM at the Community Center 
                    on Fort Moore.
                  </p>
                  <p>
                    Visitors are always welcome! Come meet our members, learn about upcoming tournaments, 
                    and see if the Benning Bass Club is right for you.
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
