import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface LeaderboardEntry {
  place: number;
  angler: string;
  officialWeight: number;
  behindLeader: number;
  bag: string;
  bigFish: string;
  points: number;
  notes: string;
}

const leaderboardData: LeaderboardEntry[] = [
  {
    place: 1,
    angler: 'Sean Gavan',
    officialWeight: 15.61,
    behindLeader: 0.00,
    bag: '5/5',
    bigFish: '3.62',
    points: 300,
    notes: 'Leader, Full Limit',
  },
  {
    place: 2,
    angler: 'Clint Cox',
    officialWeight: 15.05,
    behindLeader: 0.56,
    bag: '5/5',
    bigFish: '3.46',
    points: 295,
    notes: 'Full Limit',
  },
  {
    place: 3,
    angler: 'Brad McCarthy',
    officialWeight: 11.89,
    behindLeader: 3.72,
    bag: '5/5',
    bigFish: '3.05',
    points: 290,
    notes: 'Full Limit',
  },
  {
    place: 4,
    angler: 'Billy Paul',
    officialWeight: 11.55,
    behindLeader: 4.06,
    bag: '5/5',
    bigFish: '3.82',
    points: 285,
    notes: 'Big Fish, Full Limit',
  },
  {
    place: 5,
    angler: 'Josh Cecalupo',
    officialWeight: 10.96,
    behindLeader: 4.65,
    bag: '5/5',
    bigFish: '3.67',
    points: 280,
    notes: 'Full Limit',
  },
  {
    place: 6,
    angler: 'Quintin Brown',
    officialWeight: 10.85,
    behindLeader: 4.76,
    bag: '5/5',
    bigFish: '2.97',
    points: 275,
    notes: 'Full Limit',
  },
  {
    place: 7,
    angler: 'Brandon Hirata',
    officialWeight: 10.65,
    behindLeader: 4.96,
    bag: '5/5',
    bigFish: '-',
    points: 270,
    notes: 'Full Limit',
  },
  {
    place: 8,
    angler: 'Kevin Clarke',
    officialWeight: 9.60,
    behindLeader: 6.01,
    bag: '5/5',
    bigFish: '3.72',
    points: 265,
    notes: 'Full Limit',
  },
  {
    place: 9,
    angler: 'Curtis Brown',
    officialWeight: 8.55,
    behindLeader: 7.06,
    bag: '4/4',
    bigFish: '3.27',
    points: 260,
    notes: '',
  },
  {
    place: 10,
    angler: 'George Schurr',
    officialWeight: 6.73,
    behindLeader: 8.88,
    bag: '3/4',
    bigFish: '-',
    points: 255,
    notes: 'Penalty -0.25, Dead Fish',
  },
];

export default function Top10() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            TOP 10 Leaderboard
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Current tournament standings showcasing our top anglers and their impressive catches.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16 text-center font-bold">Place</TableHead>
                    <TableHead className="font-bold">Angler</TableHead>
                    <TableHead className="text-right font-bold">Official Weight</TableHead>
                    <TableHead className="text-right font-bold">Behind Leader</TableHead>
                    <TableHead className="text-center font-bold">Bag</TableHead>
                    <TableHead className="text-right font-bold">Big Fish</TableHead>
                    <TableHead className="text-center font-bold">Points</TableHead>
                    <TableHead className="font-bold">Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaderboardData.map((entry) => (
                    <TableRow key={entry.place} className={entry.place === 1 ? 'bg-primary/5' : ''}>
                      <TableCell className="text-center font-bold">
                        {entry.place === 1 && (
                          <Badge variant="default" className="bg-primary">
                            {entry.place}
                          </Badge>
                        )}
                        {entry.place !== 1 && entry.place}
                      </TableCell>
                      <TableCell className="font-semibold">{entry.angler}</TableCell>
                      <TableCell className="text-right font-medium">{entry.officialWeight.toFixed(2)}</TableCell>
                      <TableCell className="text-right text-muted-foreground">{entry.behindLeader.toFixed(2)}</TableCell>
                      <TableCell className="text-center">{entry.bag}</TableCell>
                      <TableCell className="text-right">{entry.bigFish}</TableCell>
                      <TableCell className="text-center font-medium">{entry.points}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{entry.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4 max-w-2xl mx-auto">
          {leaderboardData.map((entry) => (
            <Card key={entry.place} className={entry.place === 1 ? 'border-primary' : ''}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">
                    {entry.place === 1 && (
                      <Badge variant="default" className="bg-primary mr-2">
                        #{entry.place}
                      </Badge>
                    )}
                    {entry.place !== 1 && <span className="text-muted-foreground mr-2">#{entry.place}</span>}
                    {entry.angler}
                  </CardTitle>
                  <Badge variant="outline" className="font-bold">
                    {entry.points} pts
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Official Weight</p>
                    <p className="text-lg font-bold text-foreground">{entry.officialWeight.toFixed(2)} lbs</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Behind Leader</p>
                    <p className="text-lg font-medium text-muted-foreground">{entry.behindLeader.toFixed(2)} lbs</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Bag</p>
                    <p className="text-base font-medium text-foreground">{entry.bag}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Big Fish</p>
                    <p className="text-base font-medium text-foreground">{entry.bigFish}</p>
                  </div>
                </div>
                {entry.notes && (
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground">{entry.notes}</p>
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
