export const servicesData = {
    Identity: ["Leadership Branding", "Corporate Branding", "Social Media", "Public Relations"],
    Communication: ["Creative", "Production", "Influencers", "Gen AI", "Short Form Video"],
    Experiences: ["Digital Marketing", "Website App", "Events", "Gaming"],
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
