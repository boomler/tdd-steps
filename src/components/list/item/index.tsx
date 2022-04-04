import { DeleteTrashOutlined } from '@universe-design/icons-react';
import {Checkbox, IconButton } from '@universe-design/react';
import * as React from 'react'
import { Todo } from '../../../interface';

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    detail: Todo;
    onFinish: (todo: Todo) => void;
    onRemove: (todo: Todo) => void;
}

export default (props: ListItemProps) => {
    const {detail, onFinish, onRemove, ...restProps} = props;
    return <div {...restProps} className={'todo-list-item'} >
       <Checkbox
       onCheckChange={(checked) => {
        if (checked) {
            onFinish(detail)
        }
       }}
       className="todo-list-item-content"
       data-testid='finish-checkbox'
       >{detail.content}</Checkbox>
       <IconButton 
       onClick={() => onRemove(detail)}
       icon={ <DeleteTrashOutlined />}
        data-testid="remove-button"></IconButton>
    </div>
}