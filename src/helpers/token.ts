import jwtDecode from "jwt-decode";

export const getAccessToken = (): string => {
  return (
    localStorage.getItem(import.meta.env.VITE_PUBLIC_ACCESS_TOKEN ?? "") ?? ""
  );
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(
    import.meta.env.VITE_PUBLIC_ACCESS_TOKEN ?? "",
    accessToken,
  );
};

export const clearAccessToken = () => {
  localStorage.removeItem(import.meta.env.VITE_PUBLIC_ACCESS_TOKEN ?? "");
};

export const getRefreshToken = (): string => {
  return (
    localStorage.getItem(import.meta.env.VITE_PUBLIC_REFRESH_TOKEN ?? "") ?? ""
  );
};

export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem(
    import.meta.env.VITE_PUBLIC_REFRESH_TOKEN ?? "",
    refreshToken,
  );
};

export const clearRefreshToken = () => {
  localStorage.removeItem(import.meta.env.VITE_PUBLIC_REFRESH_TOKEN ?? "");
};

export const decodeAccessToken = () => {
  try {
    const accessToken = getAccessToken();
    if (!accessToken) return;
    return jwtDecode<any>(accessToken);
  } catch (error) {
    console.log(error);
  }
};

export const decodeRefreshToken = () => {
  try {
    const accessToken = getRefreshToken();
    if (!accessToken) return;
    return jwtDecode<any>(accessToken);
  } catch (error) {
    console.log(error);
  }
};

export const isAccessTokenExpired = () => {
  const tokenExpiredAt = decodeAccessToken()?.exp;
  if (!tokenExpiredAt) return true;
  return tokenExpiredAt < Date.now() / 1000;
};

export const isRefreshTokenExpired = () => {
  const tokenExpiredAt = decodeRefreshToken()?.exp;
  if (!tokenExpiredAt) return true;
  return tokenExpiredAt < Date.now() / 1000;
};
