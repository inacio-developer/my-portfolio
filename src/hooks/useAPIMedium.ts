import { useGetFeedQuery } from '../services/API';
import { Feed, Medium } from '../types/medium';
const useAPIMedium = () => {
  const { data: content, isLoading } = useGetFeedQuery();
  const data: Feed[] = [];
  if (isLoading && !content) {
    return { content: [] };
  }
  data.push(
    ...(content as Medium).items.map((item, i) => ({ ...item, id: i + 1 })),
  );
  return { data, isLoading };
};
export { useAPIMedium };
