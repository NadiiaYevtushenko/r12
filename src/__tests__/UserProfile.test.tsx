import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from '../components/UserProfile';

declare const global: any;

beforeEach(() => {
  vi.resetAllMocks();
});

describe('UserProfile component', () => {
  it('displays loading indicator initially', () => {
    global.fetch = vi.fn(() => new Promise(() => {})) as any;
    render(<UserProfile />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays user data after successful fetch', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ name: 'John Doe', email: 'john@example.com' }),
      })
    ) as any;

    render(<UserProfile />);
    await waitFor(() => expect(screen.getByText('Name: John Doe')).toBeInTheDocument());
    expect(screen.getByText('Email: john@example.com')).toBeInTheDocument();
  });

  it('displays error message on fetch failure', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as any;

    render(<UserProfile />);
    await waitFor(() => expect(screen.getByText(/Error/)).toBeInTheDocument());
  });
});