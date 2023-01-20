import { useState } from 'react';
import { Autocomplete } from '@mantine/core';

export default function InputSearch() {
  const [value, setValue] = useState('');
  return (
    <Autocomplete
      value={value}
      onChange={setValue}
      data={['Projeto A', 'Projeto B', 'Projeto C', 'Projeto D']}
    />
  );
}
