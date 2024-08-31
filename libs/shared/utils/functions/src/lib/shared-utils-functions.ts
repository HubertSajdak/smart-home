export const truncateString = (string: string, displayedLength: number) => {
  return string.length > displayedLength ? string.slice(0, displayedLength - 1) + '...' : string;
};

export const formatTranslationKey = (key: string) => key as unknown as TemplateStringsArray;
