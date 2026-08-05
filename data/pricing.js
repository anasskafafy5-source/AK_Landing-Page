export const pricingContent = {
  label: "Pricing",
  title: "Simple plans that grow with your team.",
  description:
    "Start with the essentials, then add more automation and insight as your operation becomes more complex.",
  billingNote: "Prices shown per user, billed monthly.",
};

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "For small teams organizing their work in one place.",
    price: "$19",
    period: "/ user / month",
    cta: "Start with Starter",
    href: "#contact",
    features: [
      "Unlimited projects and tasks",
      "Team views and collaboration",
      "Basic workflow automation",
      "30-day activity history",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    description: "For growing companies ready to automate daily operations.",
    price: "$39",
    period: "/ user / month",
    cta: "Choose Growth",
    href: "#contact",
    badge: "Most Popular",
    featured: true,
    features: [
      "Everything in Starter",
      "Advanced workflow automation",
      "AI meeting summaries",
      "Team analytics and insights",
      "Unlimited activity history",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    description: "For larger teams needing control, security, and support.",
    price: "Custom",
    period: "Built around your company",
    cta: "Talk to Sales",
    href: "#contact",
    features: [
      "Everything in Growth",
      "Advanced permissions",
      "Custom automation support",
      "Priority onboarding",
      "Dedicated success manager",
    ],
  },
];
