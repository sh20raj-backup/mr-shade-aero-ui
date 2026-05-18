/**
 * Debounce function - reduce frequent function calls
 * @param func Function to debounce
 * @param wait Wait time (milliseconds)
 * @returns Returns a debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void => {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
} 