# Specification

## Summary
**Goal:** Replace the standings table with a new Top 25 standings format and remove the average fish size tracker from the homepage.

**Planned changes:**
- Replace existing standings table with new "Top 25 Standings" table containing columns: Rank, Angler, Adj Pts, Behind Leader, Events, Move, Notes
- Add section title "Top 25 Standings" and subtitle "Adjusted standings through January 2026"
- Implement sticky table header that stays visible when scrolling
- Apply zebra striping to table rows
- Highlight first place row with subtle gold/green accent
- Display Notes as colored badges (Leader, Tied, Perfect attendance, Missed events, etc.)
- Color-code Move arrows: green (↑), red (↓), gray (—)
- Right-align numeric columns (Rank, Adj Pts, Behind Leader, Events), keep Angler left-aligned
- Enable horizontal scrolling on mobile devices
- Remove average fish size tracker component from homepage

**User-visible outcome:** Users can view a comprehensive Top 25 standings table with 24 anglers plus one "Unknown / Name Error" entry, featuring improved readability through zebra striping, color-coded movement indicators, badge-style notes, and a sticky header. The homepage no longer displays the average fish size tracker.
