function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

export default formatDate;