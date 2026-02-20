import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { tournaments } from '@/data/tournaments';

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
              {tournaments.map((tournament, index) => (
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
          {tournaments.map((tournament, index) => (
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
