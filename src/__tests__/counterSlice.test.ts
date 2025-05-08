import { describe, it, expect } from 'vitest';
import reducer, {
    increment,
    decrement,
} from '../redux/counterSlice';

describe('counterSlice reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, { type: '' })).toEqual({ count: 0 });
    });

    it('should handle increment', () => {
        expect(reducer({ count: 0 }, increment())).toEqual({ count: 1 });
    });

    it('should handle decrement', () => {
        expect(reducer({ count: 1 }, decrement())).toEqual({ count: 0 });
    });

});
