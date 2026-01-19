/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer'

export const oldBlogUrls = [
  "https://lps-me.com/web-design-vs-web-development/",
  "https://lps-me.com/ai-for-social-media-marketing/",
  "https://lps-me.com/complete-video-production/",
  "https://lps-me.com/how-to-select-a-video-production-company-in-dubai/",
  "https://lps-me.com/why-partnering-with-a-creative-agency-can-elevate-your-brand/",
  "https://lps-me.com/importance-of-user-experience-in-website-design/",
  "https://lps-me.com/short-form-video-trends/",
  "https://lps-me.com/ai-in-web-development/",
  "https://lps-me.com/digital-marketing-agency-that-gets-results/",
  "https://lps-me.com/how-do-dubai-digital-marketing-agencies-help-their-clients/",
  "https://lps-me.com/how-to-elevate-remote-video-production/",
  "https://lps-me.com/competitive-analysis-in-digital-marketing/",
  "https://lps-me.com/how-effective-is-video-marketing/",
  "https://lps-me.com/b2b-influencer-marketing/",
  "https://lps-me.com/how-to-choose-the-best-web-development-company-in-dubai/",
  "https://lps-me.com/saudi-digital-marketing-strategy/",
  "https://lps-me.com/social-media-in-saudi-arabia/",
  "https://lps-me.com/digital-marketing-vs-traditional-marketing/",
  "https://lps-me.com/how-to-use-digital-marketing-for-brand-awareness/",
  "https://lps-me.com/video-production-in-dubai/",
  "https://lps-me.com/how-digital-marketing-services-in-dubai-can-transform-your-brand/",
  "https://lps-me.com/best-and-new-social-media-platforms/",
  "https://lps-me.com/social-media-strategy/",
  "https://lps-me.com/how-to-use-instagram-reels-for-business/",
  "https://lps-me.com/digital-pr-vs-digital-marketing/",
  "https://lps-me.com/how-to-choose-digital-marketing-agency-in-dubai/",
  "https://lps-me.com/b2b-digital-marketing-strategy/",
  "https://lps-me.com/how-web-design-agency-can-transform-your-business/",
  "https://lps-me.com/digital-marketing-strategy/",
  "https://lps-me.com/social-media-marketing-strategy/",
  "https://lps-me.com/social-media-trends/",
  "https://lps-me.com/what-is-co-branding/",
  "https://lps-me.com/website-design-and-development-cost/",
  "https://lps-me.com/social-media-marketing-agency-pricing-in-dubai/",
  "https://lps-me.com/how-to-build-a-personal-branding/",
  "https://lps-me.com/branded-gaming-experiences/",
  "https://lps-me.com/choosing-the-right-social-media-platforms-for-your-brand/",
  "https://lps-me.com/signs-your-company-needs-a-public-relations-strategy/",
  "https://lps-me.com/what-is-leadership-branding/",
  "https://lps-me.com/brand-story-framework/",
  "https://lps-me.com/pr-vs-marketing/",
  "https://lps-me.com/what-is-public-relations/",
  "https://lps-me.com/macro-vs-micro-influencers-in-video-advertising/",
  "https://lps-me.com/macro-vs-micro-influencers/",
  "https://lps-me.com/what-is-influencer-marketing/",
  "https://lps-me.com/brand-storytelling/",
  "https://lps-me.com/360-impact-strategy/",
  "https://lps-me.com/hiring-a-360-marketing-agency/",
  "https://lps-me.com/advantages-of-working-with-a-360-degree-agency/",
  "https://lps-me.com/why-every-business-needs-a-360-marketing-agency/",
  "https://lps-me.com/why-a-360-marketing-agency-is-the-future/",
  "https://lps-me.com/how-to-create-a-corporate-video-without-filming/",
  "https://lps-me.com/make-a-viral-marketing-video-strategies-for-success/",
  "https://lps-me.com/10-business-video-mistakes-to-avoid-corporate-video-tips/",
  "https://lps-me.com/video-marketing-dubai-create-compelling-content-that-sells/",
  "https://lps-me.com/short-form-video-to-maximize-your-business/",
  "https://lps-me.com/how-long-should-a-corporate-video-be/",
  "https://lps-me.com/what-is-the-difference-between-a-promo-and-a-corporate-video/",
  "https://lps-me.com/ai-in-digital-marketing/",
  "https://lps-me.com/how-to-write-scroll-stopping-captions-for-social-media/",
  "https://lps-me.com/how-ai-can-save-your-business-hours/",
  "https://lps-me.com/unlock-business-growth-with-mobile-applications/",
  "https://lps-me.com/corporate-videos-and-their-uses/",
  "https://lps-me.com/influencer-collaboration-ideas-to-boost-sales/",
  "https://lps-me.com/social-media-lead-generation-strategies/",
  "https://lps-me.com/how-to-run-a-social-media-giveaway/",
  "https://lps-me.com/why-digital-marketing-is-a-secret-weapon-for-your-business/",
  "https://lps-me.com/why-you-need-digital-marketing-for-your-business/",
  "https://lps-me.com/hire-a-digital-marketing-agency/",
];

export const WrongUrls = [
  'https://lps-me.com/blog/dynamics-365-sharepoint-integration/',
  'https://lps-me.com/erp-implementation-challenges-solutions/',
  'https://lps-me.com/using-finance-charges-in-business-central-to-boost-cash-flow/',
  'https://lps-me.com/microsoft-dynamics-365-business-central-connectors/',
  'https://lps-me.com/get-started-with-microsoft-dynamics-365/',
  'https://lps-me.com/how-microsoft-dynamics-365-consultants-can-maximize-your-investment/',
  'https://lps-me.com/migrating-to-microsoft-365-from-google-workspace/',
  'https://lps-me.com/how-to-choose-an-erp-system/',
  'https://lps-me.com/blog/why-microsoft-dynamics-365-is-game-changer/',
  'https://lps-me.com/blog/100-performance-boosting-things-in-microsoft-dynamics-365/',
  'https://lps-me.com/review-financial-journals-in-dynamics-365-business-central/',
  'https://lps-me.com/microsoft-business-central-extensions/',
  'https://lps-me.com/how-to-choose-an-erp-system-complete-guide-for-businesses/',
  'https://lps-me.com/everything-you-need-to-know-when-selecting-an-erp-system/',
  'https://lps-me.com/dynamics-with-other-apps-integration/',
  'https://lps-me.com/how-to-set-up-multiple-addresses-in-business-central/',
  'https://lps-me.com/guide-to-migrating-from-g-suite-to-microsoft-365/',
  'https://lps-me.com/everything-you-need-to-know-about-microsoft-dynamics-nav/',
  'https://lps-me.com/erp-vs-crm-whats-the-difference-and-which-do-you-need/',
  'https://lps-me.com/microsoft-dynamics-365-finance-operations-modules/',
  'https://lps-me.com/set-up-cash-management-in-dynamics-365-business-central/',
  'https://lps-me.com/what-is-dynamics-365-customer-service/',
  'https://lps-me.com/copilot-for-d365-business-central-integration-benefits/',
  'https://lps-me.com/how-to-create-custom-dashboards-in-dynamics-365/',
  'https://lps-me.com/erp-saudi-vision-2030s-ai-powered-transformation-enabler/',
  'https://lps-me.com/common-types-of-erp-understanding-the-options-available/',
  "https://lps-me.com/blog/microsoft-dynamics-365-finance-operations-modules",
  "https://lps-me.com/blog/dynamics-365-business-central-vs-finance-and-operations",
  "https://lps-me.com/blog/dynamics-365-vs-sap",
  "https://lps-me.com/blog/migrating-to-microsoft-365-from-google-workspace",
  "https://lps-me.com/blog/what-are-the-different-versions-of-microsoft-dynamics",
  "https://lps-me.com/blog/the-future-for-dynamics-365-finance-and-operations",
  "https://lps-me.com/blog/how-to-set-up-multiple-addresses-in-business-central",
  "https://lps-me.com/blog/microsoft-dynamics-365-finance-operations-modules"
];

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'standalone',
  images: {
  domains: ['lps-me.com', 'res.cloudinary.com'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
      port: '',
      pathname: '/images/**', // ensures all Sanity images load
    },
  ],
},

  async redirects() {
    const blogRedirects = oldBlogUrls.map((full) => {
      const slug = full.replace('https://lps-me.com/', '').replace(/\/$/, '');
      return {
        source: `/${slug}`,
        destination: `/blog/${slug}`,
        permanent: true,
      };
    });

    const extraRedirects = [
      {
        source: '/services/gaming-experiences',
        destination: '/services/gaming',
        permanent: true,
      },
    ];

    const homepageRedirects = WrongUrls.map((url) => {
      const path = url.replace('https://lps-me.com', '').replace(/\/$/, '');
      return {
        source: path === '' ? '/' : path,
        destination: '/',
        permanent: true,
      };
    });

    return [...blogRedirects, ...extraRedirects, ...homepageRedirects];
  },
};

export default withBundleAnalyzer(nextConfig);

