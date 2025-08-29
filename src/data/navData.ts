export const servicesData = {
  Identity: [
    { title: "Leadership Branding", href: "/services/leadership-branding" },
    { title: "Corporate Branding", href: "/services/corporate-branding" },
    { title: "Social Media", href: "/services/social-media" },
    { title: "Public Relations", href: "/services/public-relations" },
  ],
  Communication: [
    { title: "Creative", href: "/services/our-creative-services" },
    { title: "Production", href: "/services/production-services" },
    { title: "Influencers", href: "/services/influencers-marketing" },
    { title: "Gen AI", href: "/services/gen-ai" },
    { title: "Short Form Video", href: "/services/short-form-video" },
  ],
  Experiences: [
    { title: "Digital Marketing", href: "/services/digital-marketing" },
    { title: "Website App", href: "/services/website-app" },
    { title: "Events", href: "/services/event-management" },
    { title: "Gaming", href: "/services/gaming" },
  ],
} as const;

export const menuItems = [
    { name: "Home", link: "/" },
    { name: "Who We Are", link: "/about-us" },
    { name: "Our Industries", link: "/our-industry" },
    { name: "Our Work", link: "/our-work" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Careers", link: "/careers" },
] as const;
