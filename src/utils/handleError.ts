import { AxiosError, isAxiosError } from "axios";
import { toast } from "react-toastify";
/**
 * Handle error message
 * @param error - `any`
 * @param message - `string
 * @description Show toast message or error
 */
export const handleError = (error: AxiosError, message?: string): void => {
  if (isAxiosError<{ content: string }>(error)) {
    toast.error(message || error?.response?.data?.content);
  }
};
