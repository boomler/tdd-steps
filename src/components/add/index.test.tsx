import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Add from './index'

describe('#add todo', () => {
    it('Should add a todo', () => {

        const onAddMock = jest.fn();
        const wrapper = render(<Add onAdd={onAddMock} />)

        const inputEle = wrapper.container.querySelector('input')

        fireEvent.change(inputEle!, {target: {value: 'test content'}});
        expect(inputEle?.value).toBe('test content');
        fireEvent.keyDown(inputEle!, {code: 'Enter'});
        expect(onAddMock).toHaveBeenCalledWith('test content');
        expect(inputEle?.value).toBe('');
    })

    it('Should not add an empty todo', () => {

        const onAddMock = jest.fn();
        const wrapper = render(<Add onAdd={onAddMock} />)

        const inputEle = wrapper.container.querySelector('input')

        fireEvent.change(inputEle!, {target: {value: ''}});
        fireEvent.keyDown(inputEle!, {code: 'Enter'});
        // 不应该添加空的 todo
        expect(onAddMock).not.toHaveBeenCalled();
    })
})