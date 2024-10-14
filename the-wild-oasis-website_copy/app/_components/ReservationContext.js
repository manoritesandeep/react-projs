"use client";

import { createContext, useState, useContext } from "react";

// Create new Context
const ReservationContext = createContext();

// initialize initialState
const initialState = { from: undefined, to: undefined };

// function for context provider
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

// Custom hook to consume the context, useContext
function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

// export
export { ReservationProvider, useReservation };
