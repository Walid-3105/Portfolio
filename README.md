dr-portfolio/
│
├── public/
│ ├── assets/
│ │ ├── images/ # Profile photo, clinic, treatment visuals, etc.
│ │ └── favicon.ico
│ └── index.html
│
├── src/
│ ├── assets/
│ │ ├── images/
│ │ └── icons/ # SVG icons or icon packs
│ │
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── AppointmentForm.jsx
│ │ ├── TestimonialCard.jsx
│ │ └── Shared/ # Reusable buttons, modals, etc.
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── About.jsx # Doctor bio, education, experience
│ │ ├── Services.jsx # Treatments or specializations
│ │ ├── Testimonials.jsx
│ │ ├── Contact.jsx # Location, phone, form
│ │ └── NotFound.jsx
│ │
│ ├── layout/
│ │ └── MainLayout.jsx # Wraps pages with header/footer
│ │
│ ├── data/
│ │ └── testimonials.js # Mock data (can connect to backend later)
│ │
│ ├── routes/
│ │ └── AppRoutes.jsx # React Router routes
│ │
│ ├── styles/
│ │ └── global.css # Tailwind config, custom CSS
│ │
│ ├── utils/
│ │ └── helpers.js # Date formatter, email validator, etc.
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js (if using Tailwind)
