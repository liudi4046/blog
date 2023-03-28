export default function getFormattedDate(dateString: string): string {
  const date = new Date(dateString)

  const formattedDate = new Intl.DateTimeFormat("ZN-ch", {
    dateStyle: "long",
  }).format(date)
  return formattedDate
}
