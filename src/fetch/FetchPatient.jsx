import { useState } from "react";
import { fetchPatientByName } from "@/api/FetchApi";


export async function fetchPatientOnDemand(name) {
  // Only attempt fetch if name provided
  if (!name) return null;
  return await fetchPatientByName(name);
}

// Optional hook 
export function useFetchPatient(name) {
  const [state, setState] = useState({ patient: null, isLoading: false, error: null });

  async function runFetch(patientName) {
    setState({ patient: null, isLoading: true, error: null });
    try {
      const p = await fetchPatientByName(patientName);
      setState({ patient: p, isLoading: false, error: null });
    } catch (err) {
      setState({ patient: null, isLoading: false, error: err.message || String(err) });
    }
  }

  return { state, runFetch };
}

export default fetchPatientOnDemand;
