export interface Tournament {
  date: string;
  lake: string;
  ramp: string;
  drawDate: string;
  parsedDate: Date;
}

// Parse date strings in various formats to Date objects
function parseDate(dateStr: string): Date {
  // Handle "N/A" or special cases
  if (dateStr === 'N/A' || dateStr.includes('St Classic')) {
    // For the State Classic, use the start date (11-Nov)
    if (dateStr.includes('11-15 Nov')) {
      return new Date(2025, 10, 11); // November 11, 2025
    }
    return new Date(9999, 0, 1); // Far future for N/A
  }

  // Handle formats like "13-Sep-25", "17 Jan 26", "21-22 Mar 26"
  const parts = dateStr.trim().split(/[\s-]+/);
  
  // Extract day (first number)
  const day = parseInt(parts[0]);
  
  // Extract month
  let monthStr = '';
  let year = 2025;
  
  if (parts.length >= 2) {
    // Find the month part (could be second or third element)
    for (let i = 1; i < parts.length; i++) {
      if (isNaN(parseInt(parts[i]))) {
        monthStr = parts[i];
        break;
      }
    }
    
    // Extract year (last part that's a number)
    const yearPart = parts[parts.length - 1];
    if (!isNaN(parseInt(yearPart))) {
      year = parseInt(yearPart) < 100 ? 2000 + parseInt(yearPart) : parseInt(yearPart);
    }
  }
  
  // Convert month string to number
  const monthMap: { [key: string]: number } = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };
  
  const month = monthMap[monthStr] ?? 0;
  
  return new Date(year, month, day);
}

export const tournaments: Tournament[] = [
  { date: '13-Sep-25', lake: 'Eufaula', ramp: 'Lake Point', drawDate: '9-Sep-25', parsedDate: parseDate('13-Sep-25') },
  { date: '18-Oct-25', lake: 'West Point', ramp: 'Rocky Point', drawDate: '14-Oct-25', parsedDate: parseDate('18-Oct-25') },
  { date: '8-Nov-25', lake: 'West Point', ramp: 'Rocky Point', drawDate: '4-Nov-25', parsedDate: parseDate('8-Nov-25') },
  { date: '11-15 Nov (St Classic)', lake: 'West Point', ramp: 'Pyne Road Mega', drawDate: 'N/A', parsedDate: parseDate('11-15 Nov (St Classic)') },
  { date: '13-Dec-25', lake: 'Harding', ramp: 'Idol Hour Ramp', drawDate: '9-Dec-25', parsedDate: parseDate('13-Dec-25') },
  { date: '17 Jan 26', lake: 'Martin', ramp: 'County Rd 34 Ramp', drawDate: '13 Jan 26', parsedDate: parseDate('17 Jan 26') },
  { date: '14 Feb 26', lake: 'Jordan', ramp: 'Jordan Dam Ramp', drawDate: '10 Feb 26', parsedDate: parseDate('14 Feb 26') },
  { date: '21-22 Mar 26 (new moon)', lake: 'Seminole', ramp: 'State Park', drawDate: '17 Mar 26', parsedDate: parseDate('21-22 Mar 26') },
  { date: '18 Apr 26', lake: 'West Point', ramp: 'Rocky Point', drawDate: '14 Apr 26', parsedDate: parseDate('18 Apr 26') },
  { date: '16-17 May 26', lake: 'Hartwell', ramp: 'Gum Log Boat Ramp', drawDate: '12 May 26', parsedDate: parseDate('16-17 May 26') },
  { date: '13 Jun 26', lake: 'Eufaula', ramp: 'Lake Point', drawDate: '9 Jun 26', parsedDate: parseDate('13 Jun 26') },
  { date: '18 Jul 26', lake: 'Hooch', ramp: 'Uchee Creek', drawDate: '14 Jul 26', parsedDate: parseDate('18 Jul 26') },
  { date: '15 Aug 26', lake: 'West Point', ramp: 'Rocky Point Ramp', drawDate: '11 Aug 26', parsedDate: parseDate('15 Aug 26') },
];
