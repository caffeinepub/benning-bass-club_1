import { Tournament } from '@/data/tournaments';

export function getNextUpcomingTournament(tournaments: Tournament[]): Tournament | null {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Reset time to start of day for fair comparison
  
  // Filter tournaments that are in the future
  const upcomingTournaments = tournaments.filter(tournament => {
    return tournament.parsedDate >= now;
  });
  
  // Sort by date ascending
  upcomingTournaments.sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());
  
  // Return the first (nearest) upcoming tournament, or null if none exist
  return upcomingTournaments.length > 0 ? upcomingTournaments[0] : null;
}
