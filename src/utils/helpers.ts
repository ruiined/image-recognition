export function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const convertBytesToMbs = (bytes: number) => {
  return (bytes / (1024 * 1024)).toFixed(2);
};
