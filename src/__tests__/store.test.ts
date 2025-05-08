import { describe, expect, test } from 'vitest';
import store from '../redux/store';

describe('Redux store', () => {
    test('should initialize with expected state shape', () => {
        const state = store.getState();
        expect(state).toHaveProperty('count');
    });

    test('should be a valid Redux store instance', () => {
        expect(typeof store.dispatch).toBe('function');
        expect(typeof store.getState).toBe('function');
        expect(typeof store.subscribe).toBe('function');
    });
});
