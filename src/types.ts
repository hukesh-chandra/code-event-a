export interface Quest {
  id: string;
  title: string;
  description: string;
  category: "Workshop" | "Library" | "Coding" | "Club" | "Wellness" | "Secret";
  grade: "Grade 4" | "Grade 3" | "Grade 2" | "Grade 1" | "Special Grade";
  xp: number;
  bounty: string;      // bounty e.g. "Canteen coupon", "Cursed Talisman badge"
  locationId: string;  // must match an id in LOCATIONS
  photo?: string;      // optional override; default = the location's photo
  proofType: "photo" | "code" | "none";
}

export type Category = Quest["category"];
export type Grade = Quest["grade"];
export type ProofType = Quest["proofType"];

export interface PlayerProfile {
  name: string;
  xp: number;
}

export interface CompletedQuest {
  id: string;
  proof?: string;
  completedAt: string;
}
