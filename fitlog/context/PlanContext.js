'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [toast, setToast] = useState('');
 useEffect(() => {
    try {
      const storedPlan = localStorage.getItem('plan');
      if (storedPlan) setPlan(JSON.parse(storedPlan));
    } catch (error) {
      console.error('Failed to read plan from localStorage:', error);
    }

    try {
      const storedSaved = localStorage.getItem('saved');
      if (storedSaved) setSaved(JSON.parse(storedSaved));
    } catch (error) {
      console.error('Failed to read saved items from localStorage:', error);
    }
  }, []);

useEffect(() => {
    try {
      localStorage.setItem('plan', JSON.stringify(plan));
    } catch (error) {
      console.error('Failed to save plan to localStorage:', error);
    }
  }, [plan]);

  useEffect(() => {
    try {
      localStorage.setItem('saved', JSON.stringify(saved));
    } catch (error) {
      console.error('Failed to save saved items to localStorage:', error);
    }
  }, [saved]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast('');
    }, 2000);
  };

  const addToPlan = (workout) => {
    if (plan.length >= 5) {
      showToast('Plan is full! You can only add up to 5 workouts.');
      return;
    }
    if (plan.some((item) => item.id === workout.id)) {
      showToast(`${workout.name} is already in your plan!`);
      return;
    }
    setPlan((prev) => [...prev, { ...workout, done: false }]);
    showToast(`Added ${workout.name} to today's plan!`);
  };

  const addToSaved = (workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      showToast(`${workout.name} is already saved!`);
      return;
    }
    setSaved((prev) => [...prev, workout]);
    showToast(`Saved ${workout.name} for later!`);
  };

const removeFromPlan = (id) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
    showToast('Removed workout from plan');
  };

  const removeFromSaved = (id) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
    showToast('Removed workout from saved');
  };
   const toggleDone = (id) => {
    setPlan((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        toast,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        toggleDone,
        showToast,
      }}>
      {children}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-[#c2f012] text-black font-extrabold text-xs uppercase px-5 py-3 rounded-xl shadow-lg border border-black/10 z-50 animate-bounce">
          {toast}
        </div>
      )}
    </PlanContext.Provider>
  );  }
export function usePlan() {
  return useContext(PlanContext);
}