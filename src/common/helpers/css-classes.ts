export const cts = (classNames: string[]) => {
  return classNames.filter(Boolean).join(" ").trim();
};

export const ctsWithCondition = (classNames: { [key: string]: boolean }) => {
  return Object.entries(classNames)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(" ")
    .trim();
};
