export const changeTheme = () => {
  const html = document.querySelector("html");
  const currentTheme = html?.getAttribute("class");
  html?.setAttribute("class", currentTheme === "dark" ? "light" : "dark");
};

export const isDarkMode = (): boolean => {
  if (typeof window === "undefined") return true;
  const html = document.querySelector("html");
  return html?.getAttribute("class") === "dark";
};
