export default function ErrorMessage({ message }) {
  if (!message) return null;
  return <span className="h-5 text-xs text-red-500">{message}</span>;
}
