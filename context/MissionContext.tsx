import { createContext, useContext, useState } from 'react';

const MissionContext = createContext<any>(null);

export function MissionProvider({ children }: any) {
  const [state] = useState({
    metrics: {
      temperature: 42,
      power: 78,
      signal: 65,
      stability: 94,
    },
    config: {
      missionName: 'Missão Apolo-X',
      crewCount: 4,
      targetOrbit: 408,
      tempMaxThreshold: 85,
    },
    alerts: [],
  });

  return (
    <MissionContext.Provider value={{ state }}>
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  const context = useContext(MissionContext);

  if (!context) {
    throw new Error(
      'useMission must be used inside MissionProvider'
    );
  }

  return context;
}