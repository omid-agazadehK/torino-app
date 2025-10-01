export default function TourStatus({ status }) {
  const base = "absolute sm:top-4   sm:left-4 left-2  sm:text-xs text-[8px] rounded-full  md:!px-2 py-0.5 !px-1";
  const styles = {
    done: `${base} text-green-500 bg-green-500/20`,
    running: `${base} text-orange-500 bg-orange-500/20`,
    not_started: `${base} text-primary bg-primary/20 `,
  };
  return <span className={styles[status.status]}>{status.message}</span>;
}
