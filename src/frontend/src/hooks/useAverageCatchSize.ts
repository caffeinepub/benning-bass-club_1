import { useMemo } from 'react';

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

export function useAverageCatchSize() {
  const averageCatchSize = useMemo(() => {
    // Filter out entries with no big fish data (marked as '-')
    const validBigFish = leaderboardData
      .filter(entry => entry.bigFish !== '-')
      .map(entry => parseFloat(entry.bigFish));

    if (validBigFish.length === 0) {
      return null;
    }

    // Calculate average
    const sum = validBigFish.reduce((acc, weight) => acc + weight, 0);
    const average = sum / validBigFish.length;

    return average.toFixed(2);
  }, []);

  return {
    averageCatchSize,
    isLoading: false,
  };
}
