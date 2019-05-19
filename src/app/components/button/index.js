import React from 'react';

import {classNames} from '../../utils';

export const ButtonTypes = Object.freeze({
    default: 'default',
    primary: 'is-primary',
    info: 'is-info',
    success: 'is-success',
    warning: 'is-warning',
    danger: 'is-danger',
});

export const ButtonBehavior = Object.freeze({
    focused: 'is-focused',
    hovered: 'is-hovered',
    active: 'is-active',
    loading: 'is-loading',
});


export const ButtonModifier = Object.freeze({
    white: 'is-white',
    light: 'is-light',
    dark: 'is-dark',
    black: 'is-black',
    link: 'is-link',
    text: 'is-text',
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
    outlined: 'is-outlined',
    inverted: 'is-inverted',
});



export default (props) => {
    const { type = ButtonTypes.default, behavior, modifiers = [] } = props;
    const isLink = modifiers.some(modifier => modifier === ButtonModifier.link);
    return isLink
        ? <a {...props} className={classNames('button', type, behavior, ...modifiers)}>{props.children}</a>
        : <button {...props} className={classNames('button', type, behavior, ...modifiers)}>{props.children}</button>
}