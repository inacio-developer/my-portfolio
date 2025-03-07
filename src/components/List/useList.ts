import { Icon } from '../../types/icons';
import { useState } from 'react';

const useList = (list?: Icon[]) => {
  const repositionHeightPage = () => {
    window.scrollTo(0, 0);
  };

  const [state, setState] = useState<boolean[]>(
    new Array(list?.length).fill(false),
  );

  const handleTooltip = (i: number) => {
    const newArray = [...state];
    newArray[i] = !state[i];
    setState(newArray);
  };

  return { repositionHeightPage, handleTooltip };
};

export { useList };
