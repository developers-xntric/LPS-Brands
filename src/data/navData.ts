export const servicesData = {
  Identity: [
    { title: "Leadership Branding", href: "leadership-branding" },
    { title: "Corporate Branding", href: "corporate-branding" },
    { title: "Social Media", href: "social-media" },
    { title: "Public Relations", href: "public-relations" },
  ],
  Communication: [
    { title: "Creative", href: "our-creative-services" },
    { title: "Production", href: "production-services" },
    { title: "Influencers", href: "influencers-marketing" },
    { title: "Gen AI", href: "gen-ai" },
    { title: "Short Form Video", href: "short-form-video" },
  ],
  Experiences: [
    { title: "Digital Marketing", href: "digital-marketing" },
    { title: "Website App", href: "website-app" },
    { title: "Events", href: "event-management" },
    { title: "Gaming", href: "gaming" },
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
