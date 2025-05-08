import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counterSlice';
import Counter from '../components/Counter';

// Мокаємо асинхронні дії
vi.mock('../redux/counterSlice', async () => {
    const actual = await vi.importActual('../redux/counterSlice');
    return {
        ...actual,
        incrementAsync: () => ({ type: 'incrementAsync' }),
        decrementAsync: () => ({ type: 'decrementAsync' }),
    };
});

// Хелпер для рендера
function renderWithStore(initialState = { count: 0 }) {
    const store = configureStore({
        reducer: counterReducer,
        preloadedState: initialState,
    });

    return render(
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}

describe('Counter component', () => {
    it('renders with initial count', () => {
        renderWithStore({ count: 5 });
        expect(screen.getByText(/Count: 5/i)).toBeInTheDocument();
    });

    it('dispatches incrementAsync on button click', () => {
        const dispatchSpy = vi.fn();
        const store = {
            getState: () => ({ count: 0 }),
            dispatch: dispatchSpy,
            subscribe: vi.fn(),
        };

        render(
            <Provider store={store as any}>
                <Counter />
            </Provider>
        );

        fireEvent.click(screen.getByText('Increment Async'));
        expect(dispatchSpy).toHaveBeenCalledWith({ type: 'incrementAsync' });
    });

    it('dispatches decrementAsync on button click', () => {
        const dispatchSpy = vi.fn();
        const store = {
            getState: () => ({ count: 0 }),
            dispatch: dispatchSpy,
            subscribe: vi.fn(),
        };

        render(
            <Provider store={store as any}>
                <Counter />
            </Provider>
        );

        fireEvent.click(screen.getByText('Decrement Async'));
        expect(dispatchSpy).toHaveBeenCalledWith({ type: 'decrementAsync' });
    });
});
