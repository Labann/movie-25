

export function formatRuntimeSafe(runtime?: number): string {
  if (!runtime || runtime <= 0) return "N/A";
  const hrs = Math.floor(runtime / 60);
  const mins = runtime % 60;
  return `${hrs}h ${mins}min`;
}

// Example:
console.log(formatRuntimeSafe(undefined)); // "N/A"
console.log(formatRuntimeSafe(126));       // "2h 6min"
