import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { UserPlus } from 'lucide-react';

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    militaryAffiliation: '',
    fishingExperience: '',
    ownsBoat: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <UserPlus className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join the Club</h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to express your interest in joining the Benning Bass Club. 
              We'll get back to you with more information about membership.
            </p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Interest Form</CardTitle>
              <CardDescription>
                Tell us a bit about yourself and your fishing experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="militaryAffiliation">Military Affiliation</Label>
                  <Input
                    id="militaryAffiliation"
                    name="militaryAffiliation"
                    type="text"
                    value={formData.militaryAffiliation}
                    onChange={handleChange}
                    placeholder="e.g., Army, Navy, Air Force, Marine Corps, Coast Guard, Veteran, Family Member"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fishingExperience">Fishing Experience *</Label>
                  <Select
                    value={formData.fishingExperience}
                    onValueChange={(value) => handleSelectChange('fishingExperience', value)}
                    required
                  >
                    <SelectTrigger id="fishingExperience">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="some">Some</SelectItem>
                      <SelectItem value="a lot">A Lot</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Do You Own a Boat? *</Label>
                  <RadioGroup
                    value={formData.ownsBoat}
                    onValueChange={(value) => handleSelectChange('ownsBoat', value)}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="boat-yes" />
                      <Label htmlFor="boat-yes" className="font-normal cursor-pointer">
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="boat-no" />
                      <Label htmlFor="boat-no" className="font-normal cursor-pointer">
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Interest Form
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
