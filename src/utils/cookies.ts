import Cookies from 'js-cookie';

const REGION_COOKIE_KEY = 'media_problem_region';
const USER_PREFERENCES_KEY = 'media_problem_preferences';
const COOKIE_EXPIRY_DAYS = 365;

export const setCookie = (key: string, value: string, days: number = COOKIE_EXPIRY_DAYS) => {
  Cookies.set(key, value, {
    expires: days,
    secure: window.location.protocol === 'https:',
    sameSite: 'strict',
  });
};

export const getCookie = (key: string): string | undefined => {
  return Cookies.get(key);
};

export const removeCookie = (key: string) => {
  Cookies.remove(key);
};

// Region detection and storage
export const detectAndStoreRegion = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const region = data.country_name || data.region_name || 'Unknown';
    setCookie(REGION_COOKIE_KEY, region);
    return region;
  } catch (error) {
    return 'Unknown';
  }
};

export const getStoredRegion = (): string | undefined => {
  return getCookie(REGION_COOKIE_KEY);
};

// User preferences
export const setUserPreferences = (preferences: Record<string, any>) => {
  setCookie(USER_PREFERENCES_KEY, JSON.stringify(preferences));
};

export const getUserPreferences = (): Record<string, any> => {
  const prefs = getCookie(USER_PREFERENCES_KEY);
  return prefs ? JSON.parse(prefs) : {};
};
