import { describe, it, expect, vi } from 'vitest';
import { runSaga } from 'redux-saga';
import { put, delay, takeEvery, all } from 'redux-saga/effects';

import {
    increment,
    decrement,
    incrementAsync,
    decrementAsync,
} from '../redux/counterSlice';

import rootSaga, {
    incrementAsyncSaga,
    decrementAsyncSaga,
} from '../redux/counterSagas';

vi.mock('redux-saga/effects', async () => {
    const actual: any = await vi.importActual('redux-saga/effects');
    return {
        ...actual,
        delay: vi.fn(() => Promise.resolve()),
    };
});

describe('Saga Unit Tests', () => {
    it('incrementAsyncSaga delays and dispatches increment', () => {
        const gen = incrementAsyncSaga();
        expect(gen.next().value).toEqual(delay(1000));
        expect(gen.next().value).toEqual(put(increment()));
        expect(gen.next().done).toBe(true);
    });

    it('decrementAsyncSaga delays and dispatches decrement', () => {
        const gen = decrementAsyncSaga();
        expect(gen.next().value).toEqual(delay(1000));
        expect(gen.next().value).toEqual(put(decrement()));
        expect(gen.next().done).toBe(true);
    });

    it('rootSaga watches both incrementAsync and decrementAsync actions', () => {
        const gen = rootSaga();
        expect(gen.next().value).toEqual(
            all([
                takeEvery(incrementAsync.type, incrementAsyncSaga),
                takeEvery(decrementAsync.type, decrementAsyncSaga),
            ])
        );
        expect(gen.next().done).toBe(true);
    });

    it('incrementAsyncSaga runs completely in runSaga context', async () => {
        const dispatched: any[] = [];
        await runSaga(
            { dispatch: (action) => dispatched.push(action) },
            incrementAsyncSaga
        ).toPromise();

        expect(dispatched).toEqual([increment()]);
    });

    it('decrementAsyncSaga runs completely in runSaga context', async () => {
        const dispatched: any[] = [];
        await runSaga(
            { dispatch: (action) => dispatched.push(action) },
            decrementAsyncSaga
        ).toPromise();

        expect(dispatched).toEqual([decrement()]);
    });
});
