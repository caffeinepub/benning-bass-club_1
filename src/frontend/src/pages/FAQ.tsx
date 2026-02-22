import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-foreground mb-8">
        Frequently Asked Questions
      </h1>

      <Accordion type="multiple" className="w-full space-y-4">
        <AccordionItem value="item-1" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            How B.A.S.S. Tournament Competition / Progression Works
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-3 pt-2">
            <p>
              <strong>Benning Bass Club under the B.A.S.S. sanctioning body</strong>
            </p>
            <p>
              The Benning Bass Club competes as part of the larger B.A.S.S.
              tournament structure. Anglers earn points throughout the season to qualify
              for higher levels of competition.
            </p>
            <p>
              Competitors weigh in their 5 largest fish for the day.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            MONTHLY - Club-Level Competition (Points System)
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-3 pt-2">
            <p className="font-semibold text-foreground">3000 Points (12 tournaments – worst 2 dropped for everyone)</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monthly tournaments, each worth up to 300 points.</li>
              <li>Points decline by 5 points per finishing position.</li>
              <li>
                Example:
                <ul className="list-circle pl-6 mt-1">
                  <li>1st place = 300 points</li>
                  <li>2nd place = 295 points</li>
                  <li>3rd place = 290 points and so on.</li>
                </ul>
              </li>
              <li>
                At the end of the year we drop your 2 worst tournaments. If you miss a tournament (for any reason) or simply perform bad, this helps everyone.
              </li>
            </ul>

            <p className="font-semibold text-foreground pt-4">180 Points Club Meetings – Each club meeting is worth 15 points</p>
            <p>
              Meetings may be attended in person at Summerland Outdoors or remotely via ZOOM.
            </p>

            <p className="font-semibold text-foreground pt-4">30 Points Youth or Environmental Projects</p>
            <p>
              Anglers attending and supporting club sanctioned youth or environmental projects.
            </p>

            <p className="pt-4">
              At the end of the season, anglers with the highest cumulative points qualify for the next level. These top 12 anglers advance to the B.A.S.S. State Invitational Tournament:
            </p>
            <ul className="list-disc pl-6">
              <li>Top 6 anglers attend as boaters.</li>
              <li>Next 6 anglers (7–12) attend as non-boaters/co-anglers.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            ANNUAL - State Tournament Advancement
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-3 pt-2">
            <p>At the State Tournament:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>After two days of competition, the top tier anglers advance.</li>
              <li>
                Of those:
                <ul className="list-circle pl-6 mt-1">
                  <li>Top anglers qualify directly for B.A.S.S. Nationals or the B.A.S.S. Regionals based on their tournament standings.</li>
                </ul>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            ANNUAL - Regional Advancement
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-3 pt-2">
            <p>At the Regional Tournament:</p>
            <ul className="list-disc pl-6">
              <li>
                The top anglers from each state (after two days of competition) qualify for B.A.S.S. Nationals.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            ANNUAL - National Advancement
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-3 pt-2">
            <p>
              The top Anglers at the National BASS tournament will progress to the BASSMASTER CLASSIC.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            Summary of the Path to Nationals
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-3 pt-2">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Earn points in monthly club tournaments + meetings</li>
              <li>Finish in top 12 overall → Qualify for State Invitational</li>
              <li>
                Finish top 5 at State → Go directly to Nationals
                <ul className="list-disc pl-6 mt-1">
                  <li>OR place 6–15 at State → Advance to Regionals</li>
                </ul>
              </li>
              <li>Finish at the top of Regionals → Qualify for Nationals</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-8 p-6 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          For more information about tournaments and standings, visit our{" "}
          <a href="/schedule" className="text-primary hover:underline font-medium">
            Tournament Schedule
          </a>{" "}
          and{" "}
          <a href="/top10" className="text-primary hover:underline font-medium">
            Standings
          </a>{" "}
          pages.
        </p>
      </div>
    </div>
  );
}
