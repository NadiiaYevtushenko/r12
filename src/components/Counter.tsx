
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { incrementAsync, decrementAsync } from '../redux/counterSlice';

const Counter = () => {
    const count = useSelector((state: RootState) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(incrementAsync())}>Increment Async</button>
            <button onClick={() => dispatch(decrementAsync())}>Decrement Async</button>
        </div>
    );
};

export default Counter;
