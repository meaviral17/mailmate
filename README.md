# **MailMate: The Ultimate AI Newsletter Platform**

Welcome to **MailMate**, a cutting-edge AI-powered newsletter platform designed for creators, backed by experts. MailMate empowers users to create, manage, and grow their audience with ease, leveraging advanced analytics, seamless integrations, and a user-friendly interface.

---

## **Table of Contents**
1. Overview
2. Features
3. [Tech Stack](#tech-stack)
4. Architecture
5. Installation
6. Usage
7. [Folder Structure](#folder-structure)
8. Environment Variables
9. Contributing
10. License
11. [About the Developer](#about-the-developer)

---

## **Overview**

MailMate is a modern newsletter platform that combines **AI-driven insights** with a seamless user experience. Whether you're a content creator, marketer, or business owner, MailMate helps you:
- Build and manage your subscriber base.
- Create engaging newsletters with ease using a **drag-and-drop editor**.
- Analyze performance metrics to optimize growth.
- Monetize your newsletters with **Stripe-powered payments** and **custom pricing plans**.

The platform is designed with **scalability**, **performance**, and **user-centric design** in mind, making it a one-stop solution for all your newsletter needs.

---

## **Features**

### **1. User-Friendly Dashboard**
- A clean and intuitive dashboard to manage your newsletters, subscribers, and analytics.
- Real-time updates on subscriber growth and engagement metrics.

### **2. Drag-and-Drop Newsletter Editor**
- A **unique drag-and-drop interface** for creating newsletters quickly and efficiently.
- Add text, images, buttons, and other elements with ease.
- Customize layouts without any coding knowledge.
- Save templates for reuse, making the process even faster.

### **3. AI-Powered Insights**
- Leverage AI to analyze subscriber behavior and suggest content strategies.
- Personalized recommendations to improve open rates and click-through rates.

### **4. Subscriber Management**
- Add, delete, and manage subscribers effortlessly.
- Import subscribers from external sources.

### **5. Analytics and Growth Tools**
- Visualize subscriber growth with interactive charts.
- Track open rates, click rates, and other key metrics.

### **6. Stripe-Powered Payments**
- Monetize your newsletters with **Stripe integration**.
- Offer **custom pricing plans** to your subscribers.
- Secure and seamless payment processing.

### **7. Guest Mode**
- Allow users to explore the platform without signing up.
- Seamless transition to a full account when ready.

### **8. Tutorials and Resources**
- Access tutorials and resources to maximize the platform's potential.
- Learn best practices for growing your audience.

### **9. Responsive Design**
- Fully responsive UI for a seamless experience across devices.

---

## **Tech Stack**

MailMate is built with a modern tech stack to ensure performance, scalability, and maintainability:

### **Frontend**
- **React**: For building a dynamic and interactive user interface.
- **Next.js**: For server-side rendering, routing, and API integration.
- **Tailwind CSS**: For rapid and responsive UI development.
- **NextUI**: For pre-built, customizable UI components.
- **Drag-and-Drop Library**: For implementing the drag-and-drop newsletter editor.

### **Backend**
- **Next.js API Routes**: For handling server-side logic and API endpoints.
- **Clerk**: For user authentication and management.
- **MongoDB**: As the primary database for storing subscriber and newsletter data.
- **Stripe**: For handling payments and managing pricing plans.

### **Utilities**
- **React Hot Toast**: For real-time notifications.
- **Timeago.js**: For formatting timestamps in a human-readable format.

### **DevOps**
- **Vercel**: For hosting and deployment.
- **ESLint & Prettier**: For code quality and formatting.

---

## **Architecture**

MailMate follows a **modular and scalable architecture** to ensure maintainability and extensibility:

### **1. Modular Components**
- Reusable components for charts, cards, buttons, and forms.
- Centralized state management using React hooks.

### **2. Drag-and-Drop Editor**
- The drag-and-drop editor is a **standalone module** integrated into the newsletter creation flow.
- Built with a flexible architecture to allow easy addition of new elements (e.g., text blocks, images, buttons).
- Saves newsletter drafts in MongoDB for persistence.

### **3. API-Driven Design**
- Next.js API routes handle all server-side logic, including:
  - Subscriber management.
  - Newsletter creation.
  - Analytics data retrieval.
  - Stripe-powered payment processing.

### **4. Authentication**
- **Clerk** handles user authentication, including:
  - Sign-in and sign-up flows.
  - Guest mode for exploring the platform without an account.

### **5. Responsive and Accessible UI**
- Tailwind CSS ensures a responsive design that works seamlessly across devices.
- Accessibility features like focus states and ARIA labels are integrated for inclusivity.

### **6. Real-Time Feedback**
- Toast notifications provide instant feedback for user actions (e.g., subscription success, errors).

---

## **Installation**

Follow these steps to set up the project locally:

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- Stripe account for payment integration

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/meaviral17/mailmate.git
   cd mailmate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the following variables:
     ```env
     NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000
     MONGODB_URI=your-mongodb-connection-string
     CLERK_FRONTEND_API=your-clerk-frontend-api
     CLERK_API_KEY=your-clerk-api-key
     STRIPE_SECRET_KEY=your-stripe-secret-key
     STRIPE_PUBLIC_KEY=your-stripe-public-key
     STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## **Usage**

### **1. Start Writing**
- Navigate to `/dashboard/write` to create a new newsletter.
- Use the **drag-and-drop editor** to quickly design your newsletter:
  - Add text, images, and buttons by dragging them into the editor.
  - Customize layouts and styles with ease.

### **2. Manage Subscribers**
- View, add, or delete subscribers from the dashboard.

### **3. Analyze Growth**
- Use the analytics section to track subscriber growth and engagement metrics.

### **4. Monetize with Stripe**
- Set up pricing plans for your newsletters.
- Allow subscribers to choose a plan and pay securely via Stripe.
- Manage payments and subscriptions directly from the dashboard.

### **5. Tutorials**
- Access tutorials and resources to learn how to grow your audience.

---

## **Folder Structure**

```
src/
├── app/                                # Next.js app directory for routing and pages
│   ├── dashboard/                      # Dashboard-related pages
│   │   ├── write/                      # Drag-and-drop newsletter editor
│   │   │   └── page.tsx                # Page for creating newsletters
│   │   ├── subscribers/                # Subscriber management
│   │   │   └── page.tsx                # Page for managing subscribers
│   │   ├── pricing/                    # Pricing plans and payments
│   │   │   └── page.tsx                # Page for managing pricing plans
│   │   └── overview/                   # Dashboard overview
│   │       └── page.tsx                # Page for displaying analytics and growth metrics
│   ├── success/                        # Success page after subscription
│   │   └── page.tsx                    # Page for subscription success message
│   ├── subscribe/                      # Subscription page
│   │   └── page.tsx                    # Page for subscribing to newsletters
│   └── api/                            # API routes for server-side logic
│       ├── webhook/                    # Stripe webhook integration
│       │   └── route.ts                # Webhook handler for Stripe events
│       └── subscribe/                  # Subscription-related APIs
│           └── route.ts                # API for adding subscribers
├── shared/                             # Shared components, hooks, and utilities
│   ├── components/                     # Reusable UI components
│   │   ├── cards/                      # Card components
│   │   │   └── overview.card.tsx       # Overview card for dashboard
│   │   ├── charts/                     # Chart components
│   │   │   └── subscribers.chart.tsx   # Subscriber growth chart
│   │   ├── editor/                     # Drag-and-drop editor components
│   │   │   └── drag-and-drop-editor.tsx # Drag-and-drop editor for newsletters
│   │   ├── pricing/                    # Pricing-related components
│   │   │   └── pricing.card.tsx        # Pricing card for plans
│   │   └── layout/                     # Layout components
│   │       └── header.tsx              # Header component
│   ├── hooks/                          # Custom React hooks
│   │   ├── useSubscribersData.ts       # Hook for fetching subscriber data
│   │   └── useSubscribersAnalytics.ts  # Hook for fetching analytics data
│   ├── utils/                          # Utility functions and constants
│   │   ├── icons.tsx                   # Icon components
│   │   └── constants.ts                # Shared constants (e.g., mock data)
│   └── styles/                         # Shared styles
│       └── globals.css                 # Global CSS styles
├── public/                             # Public assets
│   ├── images/                         # Static images
│   │   └── logo.png                    # Logo for the platform
│   └── favicon.ico                     # Favicon for the platform
├── styles/                             # Project-wide styles
│   └── globals.css                     # Global CSS styles
├── .env.local                          # Environment variables for local development
├── package.json                        # Project dependencies and scripts
├── README.md                           # Project documentation
└── tsconfig.json                       # TypeScript configuration
```

---

## **Environment Variables**

Here’s a detailed explanation of the environment variables used in the project:

| Variable Name           | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| `NEXT_PUBLIC_WEBSITE_URL` | The base URL of the application (e.g., `http://localhost:3000`).           |
| `MONGODB_URI`            | MongoDB connection string for storing subscriber and newsletter data.      |
| `CLERK_FRONTEND_API`     | Clerk's frontend API key for user authentication.                          |
| `CLERK_API_KEY`          | Clerk's backend API key for server-side authentication.                    |
| `STRIPE_SECRET_KEY`      | Stripe's secret key for handling payments.                                 |
| `STRIPE_PUBLIC_KEY`      | Stripe's public key for client-side payment integration.                   |
| `STRIPE_WEBHOOK_SECRET`  | Stripe's webhook secret for validating payment events.                     |

---

## **About the Developer**

MailMate was developed by **Aviral Srivastava**, a passionate software developer dedicated to building innovative and user-friendly applications.

- **GitHub**: [meaviral17](https://github.com/meaviral17)

Feel free to reach out or contribute to the project to make it even better! 🚀

---

## **Conclusion**

MailMate is more than just a newsletter platform—it's a tool designed to empower creators and businesses to grow their audience with ease. The **drag-and-drop editor** makes creating newsletters faster and more intuitive, while the **AI-driven insights**, **Stripe-powered payments**, and **analytics tools** help optimize performance. With its modern architecture and user-friendly design, MailMate stands out as a unique and powerful solution for newsletter management.

Let us know your thoughts, and feel free to contribute to make MailMate even better! 🚀