// src/data/features.ts

type AboutFeatures = {
  title: string;
  description: string;
  image: string;
};

type recruiterFeatureList = {
  img: string;
  alt: string;
  title: string;
  description: string;
};

export const AboutFeatures = [
  {
    title: 'A Trusted Recruiter Network',
    description:
      'We connect your job openings to a vetted community of professional recruiters and headhunters, increasing the reach and quality of submitted candidates — without inflating costs or timelines.',
    image:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1747942436/About_Features_1_yxvh9x.png',
  },
  {
    title: 'Referral-Driven Sourcing Engine',
    description:
      'Our platform thrives on referrals — ensuring candidates are submitted by people who stand by their quality. That means fewer cold applications and more credible talent.',
    image:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1747944278/About_Features_2_due2da.png',
  },
  {
    title: 'Transparency at Every Step',
    description:
      'From candidate scoring to recruiter confidence levels, our system helps you make informed decisions — fast. Hiring managers get a clear view of who’s worth interviewing.',
    image:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1747944912/About_Features_3_rejet7.png',
  },
  {
    title: 'Technology That Works With You',
    description:
      'We’ve eliminated complexity from hiring tech. Reflense integrates smart automation, analytics, and collaboration features — so you can focus on hiring, not admin.',
    image:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1747945443/About_Features_4_uypmvx.png',
  },
];

export const recruiterFeatureList = [
  {
    img: 'https://res.cloudinary.com/dbn5muylh/image/upload/v1751160163/Product_Graphics_6_npwkrt.png',
    alt: 'Clear & Fair Incentives',
    title: 'Recruiter Rewards: Fixed or %‑based Payouts',
    description:
      "Earnings are visible upfront—whether it's a flat fee or a salary percentage. Everything is defined before you refer.",
  },
  {
    img: 'https://res.cloudinary.com/dbn5muylh/image/upload/v1751160461/Product_Graphics_7_ledxe2.png',
    alt: 'Freedom to Refer',
    title: 'Choose Jobs That Match Your Network',
    description:
      'Explore and select only the roles you believe in. There are no obligations or exclusivity requirements.',
  },
  {
    img: 'https://res.cloudinary.com/dbn5muylh/image/upload/v1751160737/Product_Graphics_8_sdpyrm.png',
    alt: 'Real‑Time Tracking',
    title: 'Stay Updated on Referral Progress',
    description:
      'Monitor your candidates through each hiring stage with a live dashboard that keeps you informed.',
  },
  {
    img: 'https://res.cloudinary.com/dbn5muylh/image/upload/v1751161852/Product_Graphics_9_p8yce2.png',
    alt: 'Prompt Payouts',
    title: 'Quick Transfers Without the Hassle',
    description:
      'Once your referral passes probation, your reward is processed automatically. No waiting, no follow-up needed.',
  },
];
