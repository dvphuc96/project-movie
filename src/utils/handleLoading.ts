export const handleLoading = (isLoading: boolean) => {
  document.querySelector("body").style.overflow = isLoading
    ? "hidden"
    : "unset";
};
