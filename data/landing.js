import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data - just some random stats -i.e an array with 2 variables or attributes - label and value.
export const statsData = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "$2B+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data - here all the icons are imported from the lucide from react like barcharts , reciept , pie charts etc .
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics", 
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data - here the image is taken randomly using randomuser api ..where the images of the user are randomly generated 
export const testimonialsData = [
  {
    name: "Ritvik Kharde",
    role: "Business Owner",
    image: "/Ritvik.jpg",
    quote:
      "Welth has transformed how I manage my business finances. The AI insights have helped me identify cost-saving opportunities I never knew existed.",
  },
  {
    name: "Palak Purohit",
    role: "Freelancer",
    image: "/Palak.jpg",
    quote:
      "The receipt scanning feature saves me hours each month. Now I can focus on my work instead of manual data entry and expense tracking.",
  },
  {
    name: "Anmol Pandey",
    role: "Financial Advisor",
    image: "/Anmol.jpg",
    quote:
      "I recommend Welth to all my clients. The multi-currency support and detailed analytics make it perfect for international investors.",
  },
  {
    name: "Emily Rodriguez",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "Welth has completely streamlined my financial planning process.The AI-driven insights and real-time portfolio trackking are game changers for managing complex investments",
  },
  {
    name: "Devansh Kapoor",
    role: "CFO, FinEdge Group",
    image: "https://randomuser.me/api/portraits/men/74.jpg",
    quote:
      "Welth gives me a consolidated view of all financial metrics in real-time. The AI-generated forecasts and budget tracking are incredibly accurate and useful.",
  },
   {
    name: "Ananya Mehta",
    role: "Freelance Consultant",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "As a freelancer managing multiple clients across currencies, Welth's multi-currency tracking and expense categorization features save me hours every week.",
  },
];