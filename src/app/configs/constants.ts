import { ICONS } from "@/shared/utils/icons";
import { atom } from "jotai";

export const navItems: NavItems[] = [
  {
    title: "Dashboard",
  },
  {
    title: "Pricing",
  },
];

export const partners: PartnersTypes[] = [
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/resume-worded.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/clickhole.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/cre.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/rap-tv.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/awa.svg",
  },
];

export const freePlan: PlanType[] = [
  {
    title: "Up to 2,500 subscribers",
  },
  {
    title: "Unlimited sends",
  },
  {
    title: "Custom newsletter",
  },
  {
    title: "Newsletter analytics",
  },
];

export const GrowPlan: PlanType[] = [
  {
    title: "Up to 10,000 subscribers",
  },
  {
    title: "Custom domains",
  },
  {
    title: "API access",
  },
  {
    title: "Newsletter community",
  },
];

export const scalePlan: PlanType[] = [
  {
    title: "Upto 100000 subscribers",
  },
  {
    title: "Referal program",
  },
  {
    title: "AI support",
  },
  {
    title: "Ad Network",
  },
];

export const sideBarActiveItem = atom<string>("/dashboard");

export const reportFilterActiveItem = atom<string>("Overview");

export const emailEditorDefaultValue = atom<string>("");

export const settingsActiveItem = atom<string>("Profile");

export const sideBarItems: DashboardSideBarTypes[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: ICONS.dashboard,
  },
  {
    title: "Write",
    url: "/dashboard/write",
    icon: ICONS.write,
  },
  {
    title: "Grow",
    url: "/dashboard/grow",
    icon: ICONS.analytics,
  },
  {
    title: "Subscribers",
    url: "/dashboard/audience",
    icon: ICONS.audience,
  },
];

export const sideBarBottomItems: DashboardSideBarTypes[] = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: ICONS.settings,
  },
  {
    title: "View Site",
    url: "/dashboard",
    icon: ICONS.world,
  },
];

export const subscribersData: subscribersDataTypes[] = [
  {
    _id: "64f717a45331088de2ce886c",
    email: "programmershahriarsajeeb@gmail.com",
    createdAt: "5Feb 2024",
    source: "Mail Mate website",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce886c",
    email: "support@mailmate.com",
    createdAt: "8Feb 2024",
    source: "External website",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce886d",
    email: "john.doe@example.com",
    createdAt: "10Feb 2024",
    source: "Social media",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce886e",
    email: "jane.smith@example.com",
    createdAt: "12Feb 2024",
    source: "Mail Mate website",
    status: "unsubscribed",
  },
  {
    _id: "64f717a45331088de2ce886f",
    email: "marketing@company.com",
    createdAt: "15Feb 2024",
    source: "External website",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce8870",
    email: "newsletter@domain.com",
    createdAt: "18Feb 2024",
    source: "Social media",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce8871",
    email: "alice.wonderland@example.com",
    createdAt: "20Feb 2024",
    source: "Mail Mate website",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce8872",
    email: "bob.builder@example.com",
    createdAt: "22Feb 2024",
    source: "External website",
    status: "unsubscribed",
  },
  {
    _id: "64f717a45331088de2ce8873",
    email: "charlie.brown@example.com",
    createdAt: "25Feb 2024",
    source: "Social media",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce8874",
    email: "david.jones@example.com",
    createdAt: "28Feb 2024",
    source: "Mail Mate website",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce8875",
    email: "emily.clark@example.com",
    createdAt: "1Mar 2024",
    source: "External website",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce8876",
    email: "frank.castle@example.com",
    createdAt: "3Mar 2024",
    source: "Social media",
    status: "unsubscribed",
  },
];
