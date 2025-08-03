import { useRef } from "react";

import { useVirtualization } from "./useVirtualization";
import styles from "./VirtualizationList.module.css";

interface VirtualizedItem {
  id: string | number;
}

interface VirtualizationListProps<T> {
  list: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemHeight: number;
  overflow?: number; // Optional overflow to account for additional space
  loading?: boolean;
}

const WRAPPER_HEIGHT = 700; // Fixed height for the virtualization wrapper;

export const VirtualizationList = <T extends VirtualizedItem>(
  props: VirtualizationListProps<T>
) => {
  const { list, renderItem, itemHeight, overflow = 5, loading } = props;

  const containerHeight = list.length * itemHeight;

  const ref = useRef<HTMLDivElement>(null);
  const [virtualizationList] = useVirtualization<T>({
    ref,
    list,
    wrapperHeight: WRAPPER_HEIGHT,
    itemHeight,
    overflow,
  });

  return (
    <div className={styles.container} ref={ref}>
      {loading ? (
        <div className={styles.loader}>
          <div>Loading...</div>
        </div>
      ) : (
        <div className={styles.wrapper} style={{ height: containerHeight }}>
          {virtualizationList.map((virtualItem, index) => (
            <div
              key={virtualItem.item.id}
              style={{
                position: "absolute",
                top: 0,
                transform: `translateY(${virtualItem.offset}px)`,
                height: itemHeight,
                width: "100%",
              }}
            >
              {renderItem(virtualItem.item, index)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
