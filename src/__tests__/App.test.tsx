import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App component without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Count:/i)).toBeInTheDocument();
});
