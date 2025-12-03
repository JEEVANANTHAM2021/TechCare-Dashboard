const API_URL = import.meta.env.VITE_API_URL;
const USERNAME = import.meta.env.VITE_USERNAME;
const PASSWORD = import.meta.env.VITE_PASS;

const getAuthHeader = () => {
  const credentials = `${USERNAME}:${PASSWORD}`;
  // btoa is available in browsers; for Node use Buffer if needed.
  return `Basic ${btoa(credentials)}`;
};

export async function fetchPatientByName(name) {
  try {
    const res = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthHeader(),
      },
    });

    if (!res.ok) {
      throw new Error(`API error ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      // fallback if api returns single object
      return data.name === name ? data : null;
    }

    const found = data.find(
      (p) =>
        String(p.name).toLowerCase() === String(name).toLowerCase()
    );

    return found || null;
  } catch (err) {
    // keep throw so UI can handle errors
    throw err;
  }
}
