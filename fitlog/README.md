# ⚡ FitLog — Workout Library & Fitness Companion

> **Train hard, log honest.**  
FitLog is a dark, no-nonsense gym companion app built with Next.js and Tailwind CSS. Pick your lifts, lock them into today's workout plan, track completed exercises, and save workouts for future sessions.

---

## 🚀 Live Demo

Check out the live deployment on Vercel:  
👉 **[https://fitlog-livid-ten.vercel.app](https://fitlog-livid-ten.vercel.app)**

---

## 🛠️ Technologies Used

* **Framework:** [Next.js](https://nextjs.org/) (App Router & Server Components)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** JavaScript (ES6+) / React 19
* **State Management:** React Context API (`PlanContext`)
* **Persistence:** Browser `localStorage`
* **Deployment:** [Vercel](https://vercel.com/)

---

## ✨ 5 Key Features

1. **🏋️ Dynamic Exercise Library & Direct Route Access**  
   Browse a responsive grid of exercises complete with target muscle categories, equipment details, duration, calorie burn, and rating stats. Each card links directly to a dedicated workout details page supported by server-rendered data and custom loading states.

2. **⚡ Today's Plan & Saved Workouts Management**  
   Add up to 5 exercises to your active daily plan or bookmark workouts for later. The app features dynamic summary metrics (total exercises, total duration, total calories) that update instantly as you manage your routine.

3. **📊 Interactive Sorting & State Controls**  
   Easily reorder your daily plan or saved lists by **Duration**, **Calories**, **Rating**, or **Name**. Marking workouts as "Done" automatically updates exercise status and sorts completed lifts to the bottom of your plan.

4. **💾 Persistent Local Storage Sync**  
   All your selected workouts, saved lists, and completion statuses persist across browser refreshes and sessions using `localStorage` integration inside React Context.

5. **🎯 Adaptive Navbar & Navigation Badges**  
   Features interactive, real-time counter badges in the navbar for **Plan** and **Saved** workouts. Clicking either badge routes directly to the `/my-plan` view with the appropriate tab pre-selected.

---

## 🛠️ Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Miss-tea/A-next.js-project-Fitlog.git](https://github.com/Miss-tea/A-next.js-project-Fitlog.git)
   cd fitlog