export type PortalRole = "candidate" | "facility";

export type PortalSession = {
  email: string;
  name: string;
  role: PortalRole;
};

const KEY = "medlicense-session";

export function readSession(): PortalSession | null {
  if (typeof window === "undefined") return null;
  const raw = window.sessionStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as PortalSession;
  } catch {
    return null;
  }
}

export function writeSession(session: PortalSession) {
  window.sessionStorage.setItem(KEY, JSON.stringify(session));
}

export function clearSession() {
  window.sessionStorage.removeItem(KEY);
}
