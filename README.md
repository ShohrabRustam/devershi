# Shohrab Rustam | Portfolio

A clean, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a minimal design inspired by modern software engineering portfolios.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14.x-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Professional Design**: Clean, minimal aesthetic with dark blue theme
- **Fully Responsive**: Works seamlessly across all devices
- **Performance Optimized**: Built with Next.js for excellent performance
- **SEO Ready**: Optimized metadata and structure
- **Easy to Customize**: Well-organized, readable code
- **Modern Stack**: React 18, Next.js 14, TypeScript 5

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ShohrabRustam/devershi.git
cd devershi
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
devershi/
├── app/
│   ├── globals.css          # Global styles with CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section with intro
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Work experience timeline
│   ├── Projects.tsx         # Project showcase
│   ├── Skills.tsx           # Skills tags
│   ├── Contact.tsx          # Contact information
│   └── Footer.tsx           # Footer
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🎨 Customization

### Update Personal Information

The portfolio uses a clean, professional design. Here's what to customize:

1. **Hero Section** (`components/Hero.tsx`):
   - Update your name, title, and tech stack
   - Modify the core focus points
   - Change the introduction text

2. **About Section** (`components/About.tsx`):
   - Update your bio and experience details

3. **Experience Section** (`components/Experience.tsx`):
   - Add your actual work experience
   - Include company names, roles, and descriptions

4. **Projects Section** (`components/Projects.tsx`):
   - Replace with your real projects
   - Add descriptions that highlight your impact

5. **Skills Section** (`components/Skills.tsx`):
   - Update the skills array with your technologies

6. **Contact Section** (`components/Contact.tsx`):
   - Update email, phone, and location

### Color Scheme

The portfolio uses CSS variables defined in `app/globals.css`:

```css
:root {
  --bg: #07111f;           /* Main background */
  --bg-soft: #0f1d31;      /* Secondary background */
  --text: #f5f7fb;         /* Primary text */
  --muted: #9fb0c8;        /* Secondary text */
  --accent: #7c9cff;       /* Blue accent */
  --accent-2: #34d399;     /* Green accent */
  --border: rgba(255,255,255,0.12);
}
```

Modify these values to change the color scheme.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter)

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click deploy!

### Deploy to Other Platforms

You can also deploy to:
- [Netlify](https://www.netlify.com/)
- [AWS](https://aws.amazon.com/)
- [DigitalOcean](https://www.digitalocean.com/)
- Any platform that supports Node.js

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ShohrabRustam/devershi/issues).

## 💬 Support

If you have any questions or need help, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Shohrab Rustam](https://linkedin.com/in/shohrabrustam)
- GitHub: [@ShohrabRustam](https://github.com/ShohrabRustam)

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ by Shohrab Rustam
