import { Input } from '@universe-design/react';
import * as React from 'react'
interface AddProps {
  onAdd: (content: string) => void;
}
export default (props: AddProps) => {
  const [value, setValue] = React.useState('');

  const handleAddTodo: React.KeyboardEventHandler = React.useCallback((e) => {
    if (e.code === 'Enter' && value !== '') {
      props.onAdd(value);
      setValue('');
    }
  }, [value, setValue]);

  return (<div>
    <Input onKeyDown={handleAddTodo} value={value} onChange={e => {
      setValue(e.target.value)}
     } />
  </div>)
}