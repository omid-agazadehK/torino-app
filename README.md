[![React](https://img.shields.io/badge/React-19.1-blue)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black)](https://nextjs.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-0af)](https://vercel.com/)

# 🏞️ Torino

**Torino** is a **Persian-language** web application for browsing, filtering, and booking tours.  
Users can explore tours, filter by preferences, add them to the cart, complete checkout, and manage their bookings and transactions via a secure dashboard.

---

## ✨ Features

### 🌐 Public Site

- 🎛️ Filter tours based on categories and preferences
- 📄 View tour details
- 🛒 Add tours to shopping cart and checkout
- 🔑 User login and authentication: users must sign in to access protected features

### 👤 User Dashboard (Protected)

- 🛡️ Only accessible for authenticated users
- 🏦 Manage personal account and banking information
- 🗓️ View booked and completed tours
- 💳 View transaction history

### 🖥️ UX/UI

- 📱 Fully responsive design (desktop & mobile)
- ⏳ Suspense/loading placeholders for async data
- 📄 Pagination for large datasets

---

## 🛠️ Tech Stack

- **Frontend:** [React 19.1](https://react.dev/) , [Next.js 15.5](https://nextjs.org/)
- **Data Fetching & State Management:** [Axios](https://axios-http.com/), [React Query](https://tanstack.com/query/latest), [React Hook Form](https://react-hook-form.com/)
- **Date Handling:** [jalaali-js](https://github.com/jalaali/jalaali-js), [react-multi-date-picker](https://github.com/shahabyazdi/react-multi-date-picker)
- **UI & Interactivity:** [Tailwind CSS](https://tailwindcss.com/), [Swiper](https://swiperjs.com/)
- **Validation & Notifications:** - [Yup](https://github.com/jquense/yup), [React Toastify](https://fkhadra.github.io/react-toastify/), [React OTP Input](https://github.com/devfolioco/react-otp-input)
- **Other:** [Query String (qs) for URL params](https://github.com/ljharb/qs)

---

## 🚀 Deployment

This project Will be deployed on Vercel [Vercel](https://vercel.com/).  
You can access the live site here: [https://torino-app.vercel.app](https://torino-app.vercel.app)

## 🏁 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/omid-agazadehK/torino-app.git
```

2.  Install dependencies for both frontend and backend:

```bash
npm install

```

3.  Running the Project in Frontend and Backend:

```bash
npm run dev
```

### 📌 Note: Make sure to set the API base URL in the frontend .env.local file.

✍️ Developer Notes
This project was built as part of a learning experience with a teammate handling the backend.

Feel free to open an issue or contribute to improvements!

## 📄 License

This project is for **personal use and learning purposes**.  
You may not redistribute or use it for commercial purposes.
