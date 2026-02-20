import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const tournamentSchedule = [
  { date: '13-Sep-25', lake: 'Eufaula', ramp: 'Lake Point', drawDate: '9-Sep-25' },
  { date: '18-Oct-25', lake: 'West Point', ramp: 'Rocky Point', drawDate: '14-Oct-25' },
  { date: '8-Nov-25', lake: 'West Point', ramp: 'Rocky Point', drawDate: '4-Nov-25' },
  { date: '11-15 Nov (St Classic)', lake: 'West Point', ramp: 'Pyne Road Mega', drawDate: 'N/A' },
  { date: '13-Dec-25', lake: 'Harding', ramp: 'Idol Hour Ramp', drawDate: '9-Dec-25' },
  { date: '17 Jan 26', lake: 'Martin', ramp: 'County Rd 34 Ramp', drawDate: '13 Jan 26' },
  { date: '14 Feb 26', lake: 'Jordan', ramp: 'Jordan Dam Ramp', drawDate: '10 Feb 26' },
  { date: '21-22 Mar 26 (new moon)', lake: 'Seminole', ramp: 'State Park', drawDate: '17 Mar 26' },
  { date: '18 Apr 26', lake: 'West Point', ramp: 'Rocky Point', drawDate: '14 Apr 26' },
  { date: '16-17 May 26', lake: 'Hartwell', ramp: 'Gum Log Boat Ramp', drawDate: '12 May 26' },
  { date: '13 Jun 26', lake: 'Eufaula', ramp: 'Lake Point', drawDate: '9 Jun 26' },
  { date: '18 Jul 26', lake: 'Hooch', ramp: 'Uchee Creek', drawDate: '14 Jul 26' },
  { date: '15 Aug 26', lake: 'West Point', ramp: 'Rocky Point Ramp', drawDate: '11 Aug 26' },
];

export default function Schedule() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Tournament Schedule</h1>
        <p className="text-center text-muted-foreground mb-8">
          2025-2026 Benning Bass Club Tournament Schedule
        </p>
        
        {/* Desktop Table */}
        <div className="hidden md:block rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/10">
                <TableHead className="font-bold text-foreground">Date</TableHead>
                <TableHead className="font-bold text-foreground">Lake</TableHead>
                <TableHead className="font-bold text-foreground">Ramp</TableHead>
                <TableHead className="font-bold text-foreground">Draw Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tournamentSchedule.map((tournament, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{tournament.date}</TableCell>
                  <TableCell>{tournament.lake}</TableCell>
                  <TableCell>{tournament.ramp}</TableCell>
                  <TableCell>{tournament.drawDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {tournamentSchedule.map((tournament, index) => (
            <div key={index} className="border rounded-lg p-4 bg-card">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Date</p>
                  <p className="font-medium">{tournament.date}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Lake</p>
                  <p className="font-medium">{tournament.lake}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Ramp</p>
                  <p className="font-medium">{tournament.ramp}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Draw Date</p>
                  <p className="font-medium">{tournament.drawDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
