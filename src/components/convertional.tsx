import React, { useState, useEffect } from 'react';
import { Card } from './card';

const Counter = ({ endValue }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(endValue.replace('%', '').replace('+', ''), 10);
    if (start === end) return;

    let incrementTime = Math.abs(Math.floor(2000 / end));
    let timer = setInterval(() => {
      start += 1;
      setValue(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [endValue]);

  return (
    <span>
      {endValue.includes('%') || endValue.includes('+')
        ? `${value}${endValue.slice(-1)}`
        : value}
    </span>
  );
};

export const Convertional = () => {
  return (
    <div className="flex flex-col base:mt-4 md:mt-0 gap-8 base:px-2 md:px-0">
      <div className="grid grid-row-1 base:grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Resolve até" hightlight={<Counter endValue="90%" />} />
        <Card title="Taxa de conversão alta" hightlight={<Counter endValue="+30%" />} />
        <Card title="Economia de até" hightlight={<Counter endValue="70%" />} />
      </div>
    </div>
  );
};