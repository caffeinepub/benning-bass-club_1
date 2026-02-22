import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StandingsEntry {
  rank: number;
  angler: string;
  adjPts: number;
  behindLeader: number;
  events: number;
  move: string;
  notes: string[];
}

const standingsData: StandingsEntry[] = [
  { rank: 1, angler: 'Cox, Clint', adjPts: 975, behindLeader: 0, events: 5, move: '—', notes: ['Leader', 'Perfect attendance'] },
  { rank: 2, angler: 'Clarke, Kevin', adjPts: 960, behindLeader: 15, events: 5, move: '—', notes: ['Perfect attendance'] },
  { rank: 3, angler: 'Gavan, Sean', adjPts: 954, behindLeader: 21, events: 5, move: '—', notes: ['Perfect attendance'] },
  { rank: 4, angler: 'McCarthy, Brad', adjPts: 940, behindLeader: 35, events: 5, move: '↑1', notes: ['Perfect attendance'] },
  { rank: 5, angler: 'Hirata, Brandon', adjPts: 935, behindLeader: 40, events: 5, move: '↓1', notes: ['Perfect attendance'] },
  { rank: 6, angler: 'Schurr, George', adjPts: 895, behindLeader: 80, events: 5, move: '—', notes: ['Perfect attendance'] },
  { rank: 7, angler: 'Scott, Ozia', adjPts: 890, behindLeader: 85, events: 5, move: '↑1', notes: ['Perfect attendance', 'Tied'] },
  { rank: 8, angler: 'Cannon, Andrew', adjPts: 890, behindLeader: 85, events: 4, move: '↑9', notes: ['Missed 1 event', 'Tied'] },
  { rank: 9, angler: 'Cecalupo, Josh', adjPts: 880, behindLeader: 95, events: 5, move: '↑1', notes: ['Perfect attendance'] },
  { rank: 10, angler: 'Brown, Niikki', adjPts: 870, behindLeader: 105, events: 5, move: '↓3', notes: ['Perfect attendance'] },
  { rank: 11, angler: 'Parish, Stanley', adjPts: 870, behindLeader: 105, events: 5, move: '↑4', notes: ['Tied'] },
  { rank: 12, angler: 'Ralls, Greg', adjPts: 865, behindLeader: 110, events: 5, move: '↓1', notes: ['Perfect attendance'] },
  { rank: 13, angler: 'Labranche, Joseph', adjPts: 860, behindLeader: 115, events: 5, move: '↓4', notes: ['Perfect attendance'] },
  { rank: 14, angler: 'Bonnell, Bryon', adjPts: 855, behindLeader: 120, events: 4, move: '↑2', notes: ['Missed 1 event'] },
  { rank: 15, angler: 'Shepherd, Dave', adjPts: 830, behindLeader: 145, events: 5, move: '—', notes: ['Perfect attendance'] },
  { rank: 16, angler: 'Brown, Quintin', adjPts: 825, behindLeader: 150, events: 5, move: '—', notes: ['Perfect attendance'] },
  { rank: 17, angler: 'Jones, Larry', adjPts: 815, behindLeader: 160, events: 5, move: '—', notes: ['Perfect attendance'] },
  { rank: 18, angler: 'Brown, Curtis', adjPts: 805, behindLeader: 170, events: 5, move: '—', notes: ['Perfect attendance'] },
  { rank: 19, angler: 'Stutts, Jim', adjPts: 765, behindLeader: 210, events: 3, move: '↑1', notes: ['Missed 2 events'] },
  { rank: 20, angler: 'Unknown / Name Error', adjPts: 705, behindLeader: 270, events: 4, move: '↓1', notes: ['Needs correction in source sheet'] },
  { rank: 21, angler: 'Siler, Dirrick', adjPts: 400, behindLeader: 575, events: 3, move: '—', notes: ['Missed multiple events'] },
  { rank: 22, angler: 'Paul, Billy', adjPts: 255, behindLeader: 720, events: 1, move: '—', notes: ['Partial season'] },
  { rank: 23, angler: 'Gurley, Jim', adjPts: 195, behindLeader: 780, events: 2, move: '—', notes: ['Partial season'] },
  { rank: 24, angler: 'Himmelreich, Ron', adjPts: 135, behindLeader: 840, events: 1, move: '—', notes: ['Partial season'] },
];

function getMoveColor(move: string): string {
  if (move.includes('↑')) return 'text-green-600 dark:text-green-400';
  if (move.includes('↓')) return 'text-red-600 dark:text-red-400';
  return 'text-gray-500 dark:text-gray-400';
}

function getNoteBadgeVariant(note: string): { variant: 'default' | 'secondary' | 'outline' | 'destructive'; className?: string } {
  if (note === 'Leader') return { variant: 'default', className: 'bg-yellow-500 hover:bg-yellow-600 text-white' };
  if (note === 'Tied') return { variant: 'default', className: 'bg-blue-500 hover:bg-blue-600 text-white' };
  if (note === 'Perfect attendance') return { variant: 'default', className: 'bg-green-600 hover:bg-green-700 text-white' };
  if (note === 'Missed 1 event') return { variant: 'default', className: 'bg-yellow-600 hover:bg-yellow-700 text-white' };
  if (note === 'Missed 2 events') return { variant: 'default', className: 'bg-orange-600 hover:bg-orange-700 text-white' };
  if (note === 'Missed multiple events') return { variant: 'default', className: 'bg-red-600 hover:bg-red-700 text-white' };
  if (note === 'Partial season') return { variant: 'secondary' };
  if (note === 'Needs correction in source sheet') return { variant: 'destructive' };
  return { variant: 'outline' };
}

export default function Top10() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-center">
            Top 25 Standings
          </h1>
          <p className="text-lg text-muted-foreground text-center">
            Adjusted standings through January 2026
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="sticky top-0 z-10 bg-background">
                    <TableRow>
                      <TableHead className="text-right font-bold">Rank</TableHead>
                      <TableHead className="font-bold">Angler</TableHead>
                      <TableHead className="text-right font-bold">Adj Pts</TableHead>
                      <TableHead className="text-right font-bold">Behind Leader</TableHead>
                      <TableHead className="text-right font-bold">Events</TableHead>
                      <TableHead className="text-center font-bold">Move</TableHead>
                      <TableHead className="font-bold">Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {standingsData.map((entry, index) => (
                      <TableRow 
                        key={entry.rank} 
                        className={`
                          ${entry.rank === 1 ? 'bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-400' : ''}
                          ${entry.rank !== 1 && index % 2 === 0 ? 'bg-muted/30' : ''}
                        `}
                      >
                        <TableCell className="text-right font-medium">{entry.rank}</TableCell>
                        <TableCell className="font-semibold">{entry.angler}</TableCell>
                        <TableCell className="text-right font-medium">{entry.adjPts}</TableCell>
                        <TableCell className="text-right text-muted-foreground">{entry.behindLeader}</TableCell>
                        <TableCell className="text-right">{entry.events}</TableCell>
                        <TableCell className={`text-center font-medium ${getMoveColor(entry.move)}`}>
                          {entry.move}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {entry.notes.map((note, noteIndex) => {
                              const badgeProps = getNoteBadgeVariant(note);
                              return (
                                <Badge 
                                  key={noteIndex} 
                                  variant={badgeProps.variant}
                                  className={`text-xs ${badgeProps.className || ''}`}
                                >
                                  {note}
                                </Badge>
                              );
                            })}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4 max-w-2xl mx-auto overflow-x-auto">
          {standingsData.map((entry) => (
            <Card 
              key={entry.rank} 
              className={entry.rank === 1 ? 'border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-950/20' : ''}
            >
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-muted-foreground">#{entry.rank}</span>
                    <span className="text-lg font-bold text-foreground">{entry.angler}</span>
                  </div>
                  <span className={`text-lg font-medium ${getMoveColor(entry.move)}`}>
                    {entry.move}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Adj Pts</p>
                    <p className="text-base font-bold text-foreground">{entry.adjPts}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Behind Leader</p>
                    <p className="text-base font-medium text-muted-foreground">{entry.behindLeader}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Events</p>
                    <p className="text-base font-medium text-foreground">{entry.events}</p>
                  </div>
                </div>

                {entry.notes.length > 0 && (
                  <div className="pt-2 border-t border-border">
                    <div className="flex flex-wrap gap-1">
                      {entry.notes.map((note, noteIndex) => {
                        const badgeProps = getNoteBadgeVariant(note);
                        return (
                          <Badge 
                            key={noteIndex} 
                            variant={badgeProps.variant}
                            className={`text-xs ${badgeProps.className || ''}`}
                          >
                            {note}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
