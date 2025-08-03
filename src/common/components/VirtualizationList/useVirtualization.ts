import { useLayoutEffect, useMemo, useState } from "react";

interface VirtualizationProps<T> {
  ref: React.RefObject<HTMLDivElement | null>;
  list: T[];
  wrapperHeight: number;
  itemHeight: number;
  overflow?: number;
}

export const useVirtualization = <T>({
  ref,
  list,
  wrapperHeight,
  itemHeight,
  overflow = 0,
}: VirtualizationProps<T>) => {
  const [scrollTop, setScrollTop] = useState(0);

  const totalItems = list.length;

  useLayoutEffect(() => {
    const scrollElement = ref.current;

    if (!scrollElement) return;

    const handleScroll = () => {
      const scrollTop = scrollElement.scrollTop;

      setScrollTop(scrollTop);
    };

    handleScroll();

    scrollElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const range = useMemo(() => {
    const scrollElement = ref.current;

    const rangeStart = scrollElement?.scrollTop || 0;
    const rangeEnd = rangeStart + wrapperHeight;

    const start = Math.floor(rangeStart / itemHeight);
    const end = Math.ceil(rangeEnd / itemHeight);

    return {
      startIndex: Math.max(0, start - overflow),
      endIndex: Math.min(totalItems, end + overflow),
    };
  }, [scrollTop, totalItems, wrapperHeight]);

  const virtualizationList = useMemo(() => {
    return list.slice(range.startIndex, range.endIndex).map((item, index) => ({
      item,
      offset: (range.startIndex + index) * itemHeight,
    }));
  }, [range.startIndex, range.endIndex, totalItems]);

  return [virtualizationList, scrollTop] as const;
};
