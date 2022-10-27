import store from '../..';
import './Button.css';
import { useDispatch, useSelector } from 'react-redux';

interface IButton {
    value?: string,
    content: string
}

const Number = (props: IButton) => {
    let { value, content } = props;
    let dispatch = useDispatch()
    const click = (event: React.MouseEvent<HTMLButtonElement>) => {
        let target = event.target as HTMLButtonElement;
        dispatch({ type: "PUSH", payload: target.value });
    }
    return (
        <button value={value}
            className='btn'
            id={`btn-${content}`}
            onClick={click}> {content} </button>)
}

const Sign = (props: IButton) => {
    let { value, content } = props;
    let dispatch = useDispatch();
    let state = useSelector((state: string) => state);

    const click = (event: React.MouseEvent<HTMLButtonElement>) => {
        let target = event.target as HTMLButtonElement;
        dispatch({ type: "PUSH", payload: target.value });
        
    }
    return (
        <button value={value}
            className='btn'
            id={`btn-${content}`}
            onClick={click}
            disabled={['+', '-', '*', '/'].includes(state[state.length - 1])}
        > {content} </button>)
}

const Operation = (props: IButton) => {
    let { value, content } = props;
    let dispatch = useDispatch()
    let state = useSelector((state: string) => state);

    const click = (event: React.MouseEvent<HTMLButtonElement>) => {
        let target = event.target as HTMLButtonElement;
        dispatch({ type: "PUSH", payload: target.value });
    }
    return (
        <button value={value}
            className='btn'
            id={`btn-${content}`}
            onClick={click}
            disabled={['+', '-', '*', '/'].includes(state[state.length - 1]) || state === '0'}
        >{content}</button>)
}
export { Number, Sign, Operation };