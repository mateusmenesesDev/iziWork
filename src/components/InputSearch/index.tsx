import { useState } from 'react';
import { Autocomplete } from '@mantine/core';
import { AiOutlineSearch } from 'react-icons/ai';

export default function InputSearch() {
  const [value, setValue] = useState('');

  return (
    <Autocomplete
      value={value}
      onChange={setValue}
      data={['Projeto A', 'Projeto B', 'Projeto C', 'Projeto D']}
      icon={<AiOutlineSearch />}
      transition='pop-top-left'
      transitionDuration={80}
      transitionTimingFunction='ease'
      styles={{ input: { backgroundColor: '#EFEFEF78', borderRadius: '18px' } }}
      variant={'filled'}
    />
  );
}
