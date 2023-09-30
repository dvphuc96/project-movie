export const handleLoading = (isLoading: boolean): void => {
  document.querySelector("body").style.overflow = isLoading
    ? "hidden"
    : "unset";
};
