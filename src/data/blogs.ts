// src/data/blogs.ts

export interface BlogSection {
  title?: string | null;
  data: string;
  type?: 'text' | 'image';
}

export interface BlogDetail {
  id: number;
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  sections: BlogSection[];
}

export const blogs: BlogDetail[] = [
  {
    id: 1,
    title: 'Why Referral Hiring Outperforms Job Boards',
    slug: 'referral-vs-job-boards',
    date: '2025-06-25',
    author: 'Reflense Team',
    category: 'Recruitment',
    readTime: '4 min read',
    excerpt:
      'Referrals offer better quality hires, faster placements, and lower costs compared to traditional job boards. Here’s why the shift is happening.',
    image:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1751153601/Reddit_Graphics_be4ru7.png',
    sections: [
      {
        title: 'Introduction',
        data: "Job boards certainly attract volume—but when hiring the right person matters most, volume alone isn't enough. Here's why referral hiring offers superior quality, speed, and cost-efficiency backed by compelling data.",
        type: 'text',
      },
      {
        title: 'Higher Quality Hires & Cultural Fit',
        data: 'Referred candidates perform 25–33% better compared to other hires (erinapp.com). They’re 40–70% more likely to align with company culture and values—boosting long-term fit (taap.mercer.com).',
        type: 'text',
      },
      {
        title: 'Superior Retention Rates',
        data: 'After one year, 46% of referral hires remain, versus just 33% from job boards (erinapp.com). 45% of referrals stay over four years, compared to only 25% from online sources (electroiq.com). Referrals reduce turnover by 20%, saving significant rehiring and training costs.',
        type: 'text',
      },
      {
        title: 'Faster Time-to-Hire',
        data: 'Referrals help fill roles in ~29 days, compared to 39–44 days using job boards (erinapp.com). They have 3–5× higher interview-to-hire conversion, with roughly 1 in 6 referrals hired versus 1 in 14 from job boards.',
        type: 'text',
      },
      {
        title: 'Lower Cost Per Hire',
        data: 'Referrals reduce cost-per-hire by $1,000–$3,000, and even up to 50% compared to active sourcing (taap.mercer.com). Employers save by cutting out advertising, agency fees, and extended vacancy costs.',
        type: 'text',
      },
      {
        title: 'Better Candidate Experience & Employer Brand',
        data: '84–92% of candidates trust employee recommendations more than job ads. Referrals come with internal advocates, smoother onboarding, and a sense of belonging—resulting in faster engagement and higher satisfaction.',
        type: 'text',
      },
      {
        title: 'Referrals Dominate Hiring Outcomes',
        data: 'Although just 17% of candidates are referrals, they account for 30–50% of total hires (electroiq.com). Referrals are 4–5× more likely to be hired than job board applicants.',
        type: 'text',
      },
      {
        title: 'Conclusion',
        data: 'Referral hiring isn’t just a niche tactic—it’s a strategic advantage. It delivers higher performance, faster hires, significant cost savings, and better satisfaction for all parties involved. As the talent market evolves, network-driven hiring will define the future.',
        type: 'text',
      },
    ],
  },
  {
    id: 2,
    title: 'How AI and Community Referrals Will Shape Recruitment in 2025',
    slug: 'ai-community-referrals-2025',
    date: '2025-06-25',
    author: 'Reflense Team',
    category: 'Future of Work',
    readTime: '7 min read',
    excerpt:
      'Explore how AI and trusted personal networks are transforming talent acquisition—combining scale, speed, and human insight for smarter hiring.',
    image:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1751713177/ChatGPT_Image_Jul_5_2025_04_29_12_PM_bjofey.png',
    sections: [
      {
        title: 'Introduction',
        data: 'In 2025, recruitment isn’t about choosing between AI or people—it’s about combining both. AI offers scale and efficiency; community referrals bring trust and fit.',
        type: 'text',
      },
      {
        title: 'The AI Recruitment Boom',
        data: 'AI-driven tools now power 87% of hiring processes, with the market valued at $661M in 2023 and projected to hit $1.12B by 2030 (DemandSage) :contentReference[oaicite:1]{index=1}. Recruiters use AI largely to save time (44%), enhance sourcing (58%) and cut hiring costs by up to 30% per hire :contentReference[oaicite:2]{index=2}.',
        type: 'text',
      },
      {
        title: 'Community Referrals: The Trust Advantage',
        data: 'While AI expands reach, community referrals offer pre-vetted candidates with cultural fit and reliability. Referred hires are 3–5× more likely to convert and have significantly better retention :contentReference[oaicite:3]{index=3}.',
        type: 'text',
      },
      {
        title: 'AI + Referrals: A Powerful Partnership',
        data: 'Combining AI and referrals means smart scaling—AI screens candidates at volume, while referral input ensures quality and alignment. In 2025, leading companies invest in both—75% of Indian recruiters allocate 70% of hiring budget to AI tools to enhance sourcing quality :contentReference[oaicite:4]{index=4}.',
        type: 'text',
      },
      {
        title: 'Key Benefits at a Glance',
        data: `
        - Time savings: AI can save up to 23 hours per hire through resume screening and interview prep (Deloitte).
        - Bias mitigation: Validated studies show AI-based interview tools can reduce sentiment bias by ~41%.
        - Quality increase: Referral hires have a 3–5× higher interview-to-hire ratio.
        - Efficiency savings: AI tools cut recruitment costs by 30%+ per hire.`,
        type: 'text',
      },
      {
        title: 'Challenges to Watch',
        data: 'AI can introduce bias—accents, race, or background may be misinterpreted. Australian research found error rates up to 22% for non-native English speakers :contentReference[oaicite:9]{index=9}. Debate continues on bias, explainability, and regulation (Illinois AI Video Interview Act, academic fairness frameworks) :contentReference[oaicite:10]{index=10}.',
        type: 'text',
      },
      {
        title: 'Best Practices for Integrating AI + Referrals',
        data: `
        1. Use AI for screening, not final decisions: Let AI rank candidates while referrers assess fit.  
        2. Monitor for bias: Regularly audit AI tools and set D&I guardrails.  
        3. Track impact metrics: Measure source, time-to-hire, retention. Companies using AI in hiring report 98% improved efficiency.  
        4. Empower community referrers: Make it easy for anyone to refer via mobile, social, and reward transparency.`,
        type: 'text',
      },
      {
        title: 'Conclusion',
        data: '2025 marks the convergence of scale and trust. AI brings efficiency at scale; community referrals bring quality at speed. Blended thoughtfully, they empower smarter, fairer hiring—and unlock the future of talent acquisition.',
        type: 'text',
      },
    ],
  },
  {
    id: 3,
    title: 'Top Recruiting Trends This Year: Referrals, Remote & Results',
    slug: '2025-recruiting-trends',
    date: '2025-06-25',
    author: 'Reflense Team',
    category: 'Trends',
    readTime: '6 min read',
    excerpt:
      'Stay ahead of the curve with this year’s top hiring trends—referral networks, remote work norms, and data-driven hiring.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
    sections: [
      {
        title: 'Introduction',
        data: '2025 is shaping up to be a transformative year in recruitment. Companies are leaning into more agile, trusted, and measurable hiring methods. Referrals, remote hiring models, and data-driven decisions are leading the charge. Here’s how each trend is reshaping the future of work.',
        type: 'text',
      },
      {
        title: '1. Referrals are Now Mainstream',
        data: 'With increasing focus on quality hires and retention, referral-based hiring has gone from optional to essential. Referred candidates have 25–33% better performance and 40% higher retention (erinapp.com). Platforms like Reflense make it easier for anyone—not just internal employees—to refer talent and earn rewards.',
        type: 'text',
      },
      {
        title: '2. Remote-First Isn’t Going Away',
        data: '86% of job seekers now expect remote or hybrid flexibility (Buffer’s State of Remote Work 2024). Recruiters are using video interviews, asynchronous assessments, and remote onboarding to access wider talent pools without sacrificing speed or quality.',
        type: 'text',
      },
      {
        title: '3. Data is the New Recruiter Superpower',
        data: 'Modern recruiters rely on data from sourcing tools, CRM platforms, and onboarding workflows to optimize every stage of the hiring funnel. Metrics like time-to-fill, referral-to-hire rate, and cost-per-hire are no longer nice-to-haves—they’re must-track KPIs.',
        type: 'text',
      },
      {
        title: '4. Rise of Community-Driven Talent Pools',
        data: 'Communities of developers, designers, and operators are becoming fertile hiring grounds. Instead of spraying job ads, companies are turning to trusted micro-networks, alumni groups, and niche talent platforms to find culturally aligned talent.',
        type: 'text',
      },
      {
        title: '5. Recruiter Roles Are Evolving',
        data: 'Today’s recruiters are hybrid professionals—part marketer, part analyst, and part relationship manager. Tools like AI sourcing and automated referral platforms have freed them from manual work, allowing more focus on candidate experience and strategic alignment.',
        type: 'text',
      },
      {
        title: 'Conclusion',
        data: 'To stay competitive in 2025, recruiters and hiring teams must embrace smarter, leaner strategies. Prioritizing referrals, remote-readiness, and data-backed hiring decisions can help organizations attract and retain top talent faster and more efficiently.',
        type: 'text',
      },
    ],
  },
  {
    id: 4,
    title: 'How to Earn Money by Referring Jobs Online',
    slug: 'earn-money-referring-jobs',
    date: '2025-06-25',
    author: 'Reflense Team',
    category: 'Guides',
    readTime: '5 min read',
    excerpt:
      'Anyone can become a recruiter. Here’s how you can earn real income by simply referring jobs to your network.',
    image:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1751715915/Earn_Money_by_Referring_Jobs_Online_ngpjo2.jpg',
    sections: [
      {
        title: 'Introduction',
        data: 'You don’t need to be a professional recruiter to start earning. With referral-based hiring platforms like Reflense, anyone with a good network can refer candidates to jobs and earn real money. It’s flexible, scalable, and 100% performance-based.',
        type: 'text',
      },
      {
        title: 'Step 1: Sign Up on Reflense',
        data: 'Start by creating a free account on Reflense. No contracts, no prior experience required—just a basic profile and you’re ready to go.',
        type: 'text',
      },
      {
        title: 'Step 2: Browse Open Roles',
        data: 'Explore verified job listings from top companies. Each listing includes role details, requirements, and the referral incentive—either a fixed payout or a percentage of the salary.',
        type: 'text',
      },
      {
        title: 'Step 3: Share with Your Network',
        data: 'Share job links with qualified connections via LinkedIn, WhatsApp, Telegram, or email. You can even pitch directly if you know someone perfect for the role.',
        type: 'text',
      },
      {
        title: 'Step 4: Track Progress & Earn',
        data: 'Once your referral applies, you’ll see real-time updates on their status—applied, interviewed, hired. Payout is processed automatically after the candidate completes probation.',
        type: 'text',
      },
      {
        title: 'Success Tip: Target High-Value Roles',
        data: 'Roles with higher salaries often offer larger rewards. Look out for sales, tech, and executive roles for better earning potential.',
        type: 'text',
      },
      {
        title: 'Conclusion',
        data: 'Referral recruiting is more than a side hustle—it’s a scalable way to monetize your network. With platforms like Reflense, it’s never been easier to help someone land a job and get rewarded for it.',
        type: 'text',
      },
    ],
  },
  {
    id: 5,
    title: 'Freelance Recruiting vs. Traditional Agencies',
    slug: 'freelance-vs-agency-recruiting',
    date: '2025-06-25',
    author: 'Reflense Team',
    category: 'Comparison',
    readTime: '6 min read',
    excerpt:
      'From independence to incentives—how freelance recruiting is changing the hiring landscape compared to agency models.',
    image:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1751716573/ChatGPT_Image_Jul_5_2025_05_26_02_PM_ymevdy.png',
    sections: [
      {
        title: 'Introduction',
        data: 'The recruiting world is evolving fast. Traditional agencies are no longer the default option. Freelance recruiters—independent professionals who source and refer talent on their own terms—are growing in number and impact.',
        type: 'text',
      },
      {
        title: '1. Flexibility vs. Structure',
        data: 'Freelancers work where and when they want. Agencies often require office hours, quotas, and centralized systems. The freedom of freelancing appeals to professionals with niche networks and specialized knowledge.',
        type: 'text',
      },
      {
        title: '2. Cost & Incentives',
        data: 'Freelancers are often more cost-efficient for companies—paid only for successful hires. In contrast, agencies charge retainer fees or high commissions regardless of results. Platforms like Reflense give freelancers full visibility and control over incentive structures.',
        type: 'text',
      },
      {
        title: '3. Client Relationships',
        data: 'Agencies manage client accounts directly. Freelancers may work with multiple platforms or companies, focusing purely on sourcing. This can lead to faster, more targeted referrals, but also requires clearer communication and alignment.',
        type: 'text',
      },
      {
        title: '4. Quality vs. Volume',
        data: 'Agencies often prioritize volume to meet KPIs. Freelancers, on the other hand, lean into quality by leveraging personal networks and vetting candidates thoroughly.',
        type: 'text',
      },
      {
        title: 'Conclusion',
        data: 'While agencies offer scale and structure, freelance recruiting provides speed, savings, and specialization. As hiring becomes more decentralized, freelance recruiters will play a key role in helping companies tap into untapped talent pools.',
        type: 'text',
      },
    ],
  },
  {
    id: 6,
    title: 'Understanding Referral Incentives: Flat vs. % Based',
    slug: 'referral-incentives-explained',
    date: '2025-06-25',
    author: 'Reflense Team',
    category: 'Incentives',
    readTime: '4 min read',
    excerpt:
      'What’s the difference between flat-rate and percentage-based referral bonuses? Here’s how to choose the best for your role.',
    image:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1751718143/Reddit_Graphics_1_n8xxlq.png',
    sections: [
      {
        title: 'Introduction',
        data: 'Referral platforms offer two main types of payouts: flat-rate and percentage-based. Understanding both helps recruiters and hiring managers align incentives with hiring goals.',
        type: 'text',
      },
      {
        title: 'Flat-Rate Bonuses',
        data: 'A flat-rate bonus is a fixed amount paid upon successful hire—e.g., ₹10,000 or $300. It’s straightforward, easy to communicate, and works well for junior or volume roles.',
        type: 'text',
      },
      {
        title: 'Percentage-Based Bonuses',
        data: 'This model pays a % of the candidate’s annual salary—typically 5–10%. It aligns incentives with seniority and salary level, making it popular for high-value executive or tech roles.',
        type: 'text',
      },
      {
        title: 'Which is Better?',
        data: 'Flat rates offer clarity; % based rewards offer scalability. Companies often use both depending on urgency, role level, and budget. Freelancers prefer % bonuses for higher earning potential.',
        type: 'text',
      },
      {
        title: 'Conclusion',
        data: 'There’s no one-size-fits-all approach. Choosing the right incentive model depends on the role, the budget, and your recruiting goals. Transparent, timely rewards—whatever the format—drive better participation and results.',
        type: 'text',
      },
    ],
  },
  {
    id: 7,
    title: 'Is LinkedIn Enough? Exploring Alternative Recruiting Channels',
    slug: 'linkedin-alternatives-recruiting',
    date: '2025-06-25',
    author: 'Reflense Team',
    category: 'Sourcing',
    readTime: '5 min read',
    excerpt:
      'LinkedIn is great—but it’s not the only game in town. Discover the power of referrals, communities, and niche platforms.',
    image:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1751719960/ChatGPT_Image_Jul_5_2025_06_22_31_PM_fkz4e2.png',
    sections: [
      {
        title: 'Introduction',
        data: 'LinkedIn revolutionized professional networking—but recruiters are increasingly looking elsewhere. From niche platforms to community-driven referrals, there’s a broader, richer hiring ecosystem worth exploring.',
        type: 'text',
      },
      {
        title: '1. LinkedIn’s Limitations',
        data: 'While powerful, LinkedIn is saturated. Many passive candidates are bombarded with messages. Its algorithm also favors paid reach and standard profiles, often making differentiation difficult.',
        type: 'text',
      },
      {
        title: '2. Rise of Community Referrals',
        data: 'Platforms like Reflense enable community-based sourcing, where trust and networks drive relevance. Referrals yield better-fit hires, and the person referring gets rewarded—aligning incentives beautifully.',
        type: 'text',
      },
      {
        title: '3. Niche Platforms & Talent Pools',
        data: 'Sites like GitHub (for developers), Behance (for designers), and AngelList (for startups) offer access to deeply engaged professionals. These platforms often provide richer portfolios and signals than LinkedIn profiles.',
        type: 'text',
      },
      {
        title: '4. Peer Networks and Slack Communities',
        data: 'Hiring managers and founders are tapping into private Slack groups, alumni networks, and Telegram channels. These micro-networks are highly engaged and trusted, often delivering better results than job boards.',
        type: 'text',
      },
      {
        title: 'Conclusion',
        data: 'LinkedIn remains important, but it’s no longer enough. Combining it with referral networks, niche platforms, and peer communities can unlock stronger pipelines and higher-quality hires.',
        type: 'text',
      },
    ],
  },
  {
    id: 8,
    title: 'The Rise of Micro-Recruiters: Power of the Individual',
    slug: 'rise-of-micro-recruiters',
    date: '2025-06-25',
    author: 'Reflense Team',
    category: 'Talent Trends',
    readTime: '6 min read',
    excerpt:
      'Meet the new wave of solo recruiters transforming the talent ecosystem—flexible, fast, and network-first.',
    image: 'https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg',
    sections: [
      {
        title: 'Introduction',
        data: 'Say hello to the micro-recruiter: a single individual using digital tools, community knowledge, and personal networks to refer and place talent—without being tied to a traditional firm.',
        type: 'text',
      },
      {
        title: '1. Who Are Micro-Recruiters?',
        data: 'They can be former HR pros, domain experts, freelancers, or even students—anyone with a trusted network. Platforms like Reflense empower them to earn by referring, without overhead or exclusivity.',
        type: 'text',
      },
      {
        title: '2. The Tech Stack Behind Them',
        data: 'Micro-recruiters rely on intuitive dashboards, referral tracking, and smart notifications. Automated workflows allow them to source and refer at scale with minimal friction.',
        type: 'text',
      },
      {
        title: '3. Why Companies Love Them',
        data: 'Micro-recruiters offer speed, specificity, and savings. Their personal ties to talent pools often result in higher engagement and conversion compared to cold outreach or job portals.',
        type: 'text',
      },
      {
        title: '4. A Scalable Model for All',
        data: 'From startups to enterprises, businesses can tap into a flexible army of micro-recruiters—each driven by incentive, not overhead. This model scales organically and rewards performance.',
        type: 'text',
      },
      {
        title: 'Conclusion',
        data: 'The future of recruiting isn’t centralized—it’s community-powered. Micro-recruiters are proving that great hires come from trust, not titles.',
        type: 'text',
      },
    ],
  },
];

export const blogList = blogs.map(
  ({ id, title, slug, date, author, category, readTime, excerpt, image }) => ({
    id,
    title,
    slug,
    date,
    author,
    category,
    readTime,
    excerpt,
    image,
    content: 'Full blog content here...', // Optional placeholder or use actual content logic
  })
);
