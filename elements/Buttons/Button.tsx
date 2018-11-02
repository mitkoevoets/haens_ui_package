import styled from 'react-emotion'
import ds from '../../design-system'

const corner = `calc(100% - ${ds.spacing(1)})`

interface IButtonProps {
    wide?: boolean
}

export const Button = styled<IButtonProps, 'button'>('button')`
    position: relative;
    display: inline-block;
    padding: ${ds.spacing(1)} ${ds.spacing(1.5)} ${ds.spacing(1)} ${ds.spacing(2)};
    margin-right: ${ds.spacing(1)};
    border: none;
    cursor: pointer;

    color: #fff;
    background-color: ${ds.color.primary.base};

    text-decoration: none;
    text-transform: uppercase;
    font-family: ${ds.fontFamily.heading};
    font-size: ${ds.em(14)};
    line-height: ${ds.spacing(2)};
    border-radius: 0;

    -webkit-appearance: none;

    ${p => p.wide
        ? 'display: block;'
        : ''}

    &:after {
        position: absolute;
        top: 0;
        left: 100%;
        height: 100%;
        margin-left: -1px;
        width: ${ds.spacing(1)};
        content: '';
        display: inline-block;
        background-color: ${ds.color.primary.base};
        clip-path: polygon(0 0, 100% 0, 100% ${corner}, ${corner} 100%, 0 100%);
    }

    &:hover, &:hover:after {
        background-color: ${ds.color.secondary.base};

    }

    &:focus, &:focus:after {
        outline: none;
        background-color: ${ds.color.secondary.base};
        font-weight: bold;
    }

    &:disabled, &:disabled:after {
        background-color: ${ds.color.gray.midLight};
        color: #fff;
    }
`

export default Button
