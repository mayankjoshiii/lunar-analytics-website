import {
  BarChart3,
  Calendar,
  FlaskConical,
  GraduationCap,
  Hammer,
  HelpCircle,
  PhoneCall,
  PoundSterling,
  Repeat,
  Scale,
  SearchCheck,
  Timer,
  Trophy,
  UserMinus,
  Code2,
  Award,
  Briefcase,
} from "lucide-react";

export const site = {
  name: "Lunar Analytics",
  url: "https://www.lunaranalytics.co.uk",
  email: "hello@lunaranalytics.co.uk",
  location: "Swansea, Wales",
  founder: "Mayank Joshi",
  linkedinCompany: "https://www.linkedin.com/company/lunar-analytics-uk/",
  linkedinPersonal: "https://www.linkedin.com/in/mayank-joshi-analyst/",
  github: "https://github.com/mayankjoshiii",
  description:
    "Fractional data analytics for UK small and medium businesses. Dashboards, churn analysis and financial reporting on a monthly plan, from an analyst with nearly four years onsite at Google and an MSc in Business Analytics.",
};

export const sections = [
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "process", label: "How it works" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Fractional data analytics · Swansea, UK",
  titleTop: "Your business has data.",
  titleBottom: "Let's turn it into decisions.",
  sub: "Lunar Analytics gives small and medium UK businesses a senior analyst on a monthly plan. I set up dashboards you'll actually use and help you answer the questions your data can already answer.",
  primary: "Book a free 30-minute call",
  secondary: "See pricing",
  micro: "No pitch deck. You'll talk to Mayank, the analyst who does the work.",
  status: "Open to new clients",
  creds: ["Nearly 4 years onsite at Google", "MSc Business Analytics, Distinction", "CMI Level 7 Certificate"],
};

// Mirrors the live Financial KPI demo, which runs on an illustrative 32-row sample dataset.
export const heroDashboard = {
  title: "Financial KPI dashboard",
  period: "Jan to Apr 2024",
  badge: "Sample data",
  href: "https://mayankjoshiii.github.io/financial-kpi-dashboard/",
  kpis: [
    { label: "Revenue", prefix: "£", value: 4.92, decimals: 2, suffix: "M", delta: "-1.0% vs budget", tone: "down" as const },
    { label: "Gross margin", prefix: "", value: 41.9, decimals: 1, suffix: "%", delta: "£2.06M profit", tone: "flat" as const },
    { label: "EBITDA margin", prefix: "", value: 17.6, decimals: 1, suffix: "%", delta: "£867K", tone: "flat" as const },
  ],
  months: ["Jan", "Feb", "Mar", "Apr"],
  actual: [1190, 1219, 1255, 1255],
  budget: [1202, 1232, 1258, 1276],
  mix: [
    { label: "Electronics", share: 66.9 },
    { label: "Clothing", share: 18.9 },
    { label: "Food & Bev", share: 14.2 },
  ],
  growth: "+5.5% Jan to Apr",
};

export const tools = ["Excel & VBA", "SQL", "Python", "Power BI", "Tableau", "Looker Studio", "Google Sheets"];

const salary = 46055;
const employerNi = Math.round((salary - 5000) * 0.15);
const pension = Math.round((salary - 6240) * 0.03);
const hireCost = salary + employerNi + pension;

export const cost = {
  eyebrow: "The problem",
  titleTop: "A full-time analyst costs",
  titleAccent: "more than most small businesses can justify.",
  body: `A senior data analyst in the UK earns a median of £${salary.toLocaleString("en-GB")} a year. Add employer National Insurance and pension and it comes to about £${(Math.round(hireCost / 100) * 100).toLocaleString("en-GB")}, before you've paid for recruitment, a laptop or any software.`,
  bars: [
    { label: "Full-time senior analyst", value: hireCost, note: "salary, NI and pension", kind: "hire" as const },
    { label: "Lunar Scale", value: 4000 * 12, note: "£4,000 a month", kind: "plan" as const },
    { label: "Lunar Growth", value: 2500 * 12, note: "£2,500 a month", kind: "featured" as const },
    { label: "Lunar Starter", value: 1500 * 12, note: "£1,500 a month", kind: "plan" as const },
  ],
  footnote:
    "Median base salary for a senior data analyst from Payscale UK (2026). Employer National Insurance at 15% above £5,000 and a 3% employer pension on qualifying earnings, using 2026/27 rates. Lunar figures are 12 months on a monthly plan.",
  pains: [
    {
      icon: Scale,
      title: "Reports nobody trusts",
      text: "Two spreadsheets, two different totals, and a meeting spent arguing about which one is right.",
    },
    {
      icon: BarChart3,
      title: "Tools you pay for but don't use",
      text: "Power BI or a CRM got set up once. Nobody has opened the dashboards since.",
    },
    {
      icon: HelpCircle,
      title: "Decisions made on gut feel",
      text: "The answer is often sitting in data you already have. It needs someone to pull it out and check it.",
    },
  ],
};

const demoLinks = {
  financial: { label: "Open the Financial KPI demo", href: "https://mayankjoshiii.github.io/financial-kpi-dashboard/" },
  churn: { label: "Open the churn model", href: "https://mayankjoshiii.github.io/customer-churn-prediction/" },
  ab: { label: "Open the A/B testing demo", href: "https://mayankjoshiii.github.io/ab-testing-dashboard/" },
};

export const challenges = {
  eyebrow: "What I help with",
  title: "Pick the problem that sounds most like yours.",
  items: [
    {
      id: "numbers",
      tab: "Our numbers don't match",
      icon: Scale,
      title: "One set of numbers everyone agrees on",
      text: "I pull your sources into one place, agree the definitions with you, and build a single KPI dashboard the whole team works from.",
      deliver: ["A KPI dashboard in Power BI, Looker Studio or Excel", "A written definition for every metric", "Refreshes from your sources, not copy and paste"],
      demo: demoLinks.financial,
    },
    {
      id: "churn",
      tab: "Customers keep leaving",
      icon: UserMinus,
      title: "Know who is likely to leave",
      text: "I look at who leaves and when, find the patterns that show up before they go, and give you a list of customers worth contacting this month.",
      deliver: ["Churn analysis on your own customer data", "A risk score you can sort and filter", "Plain notes on what seems to drive it"],
      demo: demoLinks.churn,
    },
    {
      id: "money",
      tab: "Where is the money going?",
      icon: PoundSterling,
      title: "See where margin is made and lost",
      text: "I break margin down by product, channel and region, compare actuals with budget, and flag anything that's drifting.",
      deliver: ["Gross margin and EBITDA views", "Budget against actual with red, amber and green", "A short monthly note on what changed"],
      demo: demoLinks.financial,
    },
    {
      id: "reporting",
      tab: "Reporting takes all week",
      icon: Timer,
      title: "Reports that update themselves",
      text: "I automate the weekly report with tools you already have. At Google I built Looker Studio dashboards and automated Excel reports with VBA, so this is familiar ground.",
      deliver: ["Automated weekly and monthly reports", "Built in Excel, Google Sheets or Looker Studio", "Less copying and pasting every Monday"],
      demo: null,
    },
    {
      id: "testing",
      tab: "Did that change work?",
      icon: FlaskConical,
      title: "Test changes before you commit to them",
      text: "I set up simple tests for prices, emails or offers, work out how much data you need, and tell you honestly whether a result is real or just noise.",
      deliver: ["Test design and sample sizes", "Results checked with the right statistics", "A repeatable way to run the next test"],
      demo: demoLinks.ab,
    },
  ],
};

export const pricing = {
  eyebrow: "Pricing",
  titleTop: "Monthly plans.",
  titleAccent: "No setup fees.",
  sub: "Cancel any time. Pay annually and save 25%.",
  tiers: [
    {
      name: "Starter",
      monthly: 1500,
      annual: 13500,
      desc: "For businesses starting out with their data",
      features: [
        "Monthly data health report",
        "KPI dashboard setup (Power BI)",
        "2 data sources connected",
        "Fortnightly strategy call",
        "Email support",
        "GA4 setup and tracking",
      ],
    },
    {
      name: "Growth",
      monthly: 2500,
      annual: 22500,
      desc: "The plan I'd suggest for most businesses",
      featured: true,
      features: [
        "Everything in Starter",
        "Weekly insight reports",
        "A custom model, such as churn",
        "5 data sources connected",
        "Weekly strategy call",
        "A/B testing framework",
        "Financial analytics",
        "Slack channel access",
      ],
    },
    {
      name: "Scale",
      monthly: 4000,
      annual: 36000,
      desc: "A part-time head of analytics",
      features: [
        "Everything in Growth",
        "A data roadmap for your business",
        "Unlimited data sources",
        "Custom Python pipelines",
        "Real-time analytics",
        "Fortnightly briefings for directors",
        "Priority same-day support",
        "Quarterly business review",
      ],
    },
  ],
  note: "All prices in GBP.",
};

export const processSteps = {
  eyebrow: "How it works",
  titleTop: "From the first call to a first useful insight in about",
  titleAccent: "30 days.",
  steps: [
    {
      icon: PhoneCall,
      when: "30 minutes",
      title: "Free call",
      text: "You tell me what you're trying to figure out and what data you have. No slides, no hard sell.",
    },
    {
      icon: SearchCheck,
      when: "Week 1",
      title: "Data audit",
      text: "I go through your sources, check the quality, and look for quick wins you can act on straight away.",
    },
    {
      icon: Hammer,
      when: "By day 30",
      title: "Build",
      text: "Dashboards, models or automated reports, built around the questions you care about most.",
    },
    {
      icon: Repeat,
      when: "Every month",
      title: "Review and improve",
      text: "We look at what's changed, what the numbers are saying, and what to work on next.",
    },
  ],
};

export const work = {
  eyebrow: "Proof of work",
  titleTop: "Work you can open",
  titleAccent: "and check.",
  intro: "Lunar is new, so instead of client logos here's my own work. Each project says whether it runs on real or simulated data.",
};

export const msc = {
  label: "MSc business project · team of six · Distinction",
  title: "Customer retention strategy for an Enterprise Mobility case study",
  text: "For the final project of my MSc at Swansea, our team of six analysed secondary survey data on 2,495 UK respondents aged 18 to 64. We used multiple regression to model customer loyalty, cluster analysis to group customers, and sentiment analysis on their open-text answers, then built dashboards in Power BI and Tableau.",
  role: "My part: the data analysis, including the regression and sentiment analysis, drafting the methodology, and building a Tableau dashboard.",
  findings: [
    "Four factors (brand popularity, usage, buzz and awareness) explained 81% of the variation in loyalty.",
    "The case company's analytics were mostly descriptive, so we recommended moving towards predictive retention tools.",
  ],
  stats: [
    { value: 2495, decimals: 0, suffix: "", label: "UK survey respondents" },
    { value: 0.81, decimals: 2, suffix: "", label: "R² on loyalty" },
    { value: 6, decimals: 0, suffix: "", label: "People in the team" },
    { value: 70, decimals: 0, suffix: "%", label: "Project mark" },
  ],
};

export type DataKind = "real" | "sample" | "simulated";

export const demos: {
  title: string;
  category: string;
  data: DataKind;
  dataLabel: string;
  desc: string;
  metrics?: { value: string; label: string }[];
  tags: string[];
  live: string;
  repo: string;
}[] = [
  {
    title: "Customer churn prediction",
    category: "Machine learning",
    data: "real",
    dataLabel: "Real data",
    desc: "A churn model on 7,043 real telecom customers from the public IBM sample. SQL exploration, engineered features, and logistic regression checked with five-fold cross-validation.",
    metrics: [
      { value: "80%", label: "Accuracy" },
      { value: "0.85", label: "AUC" },
      { value: "7,043", label: "Customers" },
    ],
    tags: ["Python", "scikit-learn", "SQL"],
    live: "https://mayankjoshiii.github.io/customer-churn-prediction/",
    repo: "https://github.com/mayankjoshiii/customer-churn-prediction",
  },
  {
    title: "UK job market analysis",
    category: "Market research",
    data: "real",
    dataLabel: "Real sample",
    desc: "A look at 25 UK analyst job adverts from early 2025: which skills come up, and what London roles pay.",
    metrics: [
      { value: "25/25", label: "Ask for SQL" },
      { value: "18", label: "Ask for Excel" },
      { value: "£52K", label: "London median" },
    ],
    tags: ["Python", "Pandas", "Charts"],
    live: "https://mayankjoshiii.github.io/uk-job-market-analysis/",
    repo: "https://github.com/mayankjoshiii/uk-job-market-analysis",
  },
  {
    title: "Financial KPI dashboard",
    category: "Business intelligence",
    data: "sample",
    dataLabel: "Sample data",
    desc: "Budget against actual, margin, EBITDA and a P&L bridge with RAG status by region, built on an illustrative 32-row dataset.",
    metrics: [
      { value: "41.9%", label: "Gross margin" },
      { value: "17.6%", label: "EBITDA" },
      { value: "4", label: "Regions" },
    ],
    tags: ["Plotly.js", "JavaScript"],
    live: "https://mayankjoshiii.github.io/financial-kpi-dashboard/",
    repo: "https://github.com/mayankjoshiii/financial-kpi-dashboard",
  },
  {
    title: "A/B testing analytics",
    category: "Experimentation",
    data: "simulated",
    dataLabel: "Simulated data",
    desc: "Frequentist and Bayesian tests side by side, sequential testing, and a sample-size calculator.",
    tags: ["Statistics", "Plotly.js"],
    live: "https://mayankjoshiii.github.io/ab-testing-dashboard/",
    repo: "https://github.com/mayankjoshiii/ab-testing-dashboard",
  },
  {
    title: "Customer intelligence",
    category: "Segmentation",
    data: "simulated",
    dataLabel: "Simulated data",
    desc: "RFM segments with K-Means and PCA, cohort retention curves and a customer lifecycle view.",
    tags: ["K-Means", "PCA", "Plotly.js"],
    live: "https://mayankjoshiii.github.io/customer-intelligence-dashboard/",
    repo: "https://github.com/mayankjoshiii/customer-intelligence-dashboard",
  },
  {
    title: "Model explainability",
    category: "Model governance",
    data: "simulated",
    dataLabel: "Simulated data",
    desc: "SHAP-style explanations, drift monitoring with PSI, and fairness checks for a model in use.",
    tags: ["Explainability", "Plotly.js"],
    live: "https://mayankjoshiii.github.io/ml-explainability-dashboard/",
    repo: "https://github.com/mayankjoshiii/ml-explainability-dashboard",
  },
];

export const about = {
  eyebrow: "About",
  title: "Hi, I'm Mayank.",
  bio: [
    "I spent nearly four years at Vaco Binary Semantics, working onsite at Google in Gurugram. I joined as an Associate Analyst and was promoted to Senior Analyst in 2024. Most of the job was turning loose questions from managers into analysis: gathering requirements, building dashboards in Looker Studio and Tableau, automating Excel reports with VBA, and presenting the results to team leads and management. I also trained new joiners until they could work on their own.",
    "In January 2026 I finished an MSc in Business Analytics at Swansea University with a Distinction. I started Lunar Analytics because most small businesses I talk to have useful data and nobody with the time to work through it.",
  ],
  nameNote: "Lunar comes from my name. Mayank means the moon in Sanskrit.",
  role: "Founder and lead analyst",
  credentials: [
    { icon: GraduationCap, title: "MSc Management (Business Analytics)", meta: "Distinction, 70.33% · Swansea University · 2026" },
    { icon: Award, title: "CMI Level 7 Certificate", meta: "Strategic Management and Leadership Practice · 2026" },
    { icon: Code2, title: "Python Programming, Level 4", meta: "Swansea University · 2026" },
    { icon: Trophy, title: "BCom (Hons), First Class", meta: "University of Delhi · 2020" },
  ],
  timeline: [
    { year: "2021–2025", title: "Associate Analyst, then Senior Analyst", text: "Vaco Binary Semantics, onsite at Google, Gurugram. Promoted in 2024." },
    { year: "2025–2026", title: "MSc Business Analytics, Distinction", text: "Swansea University. Completed January 2026." },
    { year: "2026", title: "Founder, Lunar Analytics", text: "Fractional analytics for UK small businesses.", current: true },
  ],
  skills: ["SQL", "Python", "Excel & VBA", "Power BI", "Tableau", "Looker Studio", "Regression", "Clustering", "Sentiment analysis", "A/B testing"],
  workIcon: Briefcase,
};

export const faqs = [
  {
    q: "Who is Lunar for?",
    a: "Small and medium UK businesses with data in spreadsheets, accounting software, an online shop or a CRM, and nobody whose job it is to make sense of it.",
  },
  {
    q: "Do I need special software or a data warehouse?",
    a: "No. I start with what you already have. A lot of useful work happens in Excel, Google Sheets, Power BI or Looker Studio.",
  },
  {
    q: "How quickly will I see something useful?",
    a: "The aim is a first useful insight within 30 days. The data audit in the first week often turns up something worth acting on.",
  },
  {
    q: "Is there a long contract?",
    a: "No. Plans are monthly with no setup fees, and you can cancel any time. If you pay for a year up front, you save 25%.",
  },
  {
    q: "Is it just you?",
    a: "Yes. You work with me directly, from the first call to the monthly reviews. There's no account manager in between.",
  },
  {
    q: "How do you handle our data?",
    a: "I only ask for access to what the work needs, and we agree how data is shared and stored before I start.",
  },
  {
    q: "Where are you based?",
    a: "Swansea, Wales. I work remotely with businesses anywhere in the UK.",
  },
];

export const contact = {
  eyebrow: "Free discovery call",
  titleTop: "Book a free",
  titleAccent: "30-minute call.",
  sub: "No pressure, and no pitch deck. Just a conversation about your data.",
  steps: [
    "You tell me what you're trying to figure out.",
    "We look at what data you already have.",
    "You leave with a couple of ideas you can use, whether or not we work together.",
  ],
  plans: ["Starter, £1,500 a month", "Growth, £2,500 a month", "Scale, £4,000 a month", "Not sure yet"],
  success: "Thanks, I'll be in touch.",
  successSub: "Expect an email from hello@lunaranalytics.co.uk within 24 hours.",
  calendarIcon: Calendar,
};
