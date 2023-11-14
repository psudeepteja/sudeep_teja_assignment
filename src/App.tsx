import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
import { data } from './data';
import { AppProps } from './helper/types';

const App: React.FC<AppProps> = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const onSelect = (index: number) => {
    const newSelected = [...selected];
    if (newSelected.includes(index)) {
      newSelected.splice(newSelected.indexOf(index), 1);
    } else {
      newSelected.push(index);
    }
    setSelected(newSelected);
  };

  const onSelectAll = () => {
    if (selected.length === data.length) {
      setSelected([]);
    } else {
      const keys: number[] = [];
      for (let i = 0; i < data?.length; i++) {
        keys.push(i);
      }
      setSelected(keys);
    }
  };

  return (
    <MantineProvider>
      <div>
        <SideBar data={data} selected={selected} onSelect={onSelect} onSelectAll={onSelectAll} />
        <MainContent data={data} />
      </div>
    </MantineProvider>
  );
};

export default App;
