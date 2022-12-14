import { render, screen } from '@testing-library/react';
import App from '../App';
import Dashboard from '../components/dashboard';

describe("App.js", () => {
    test('Testing main App rendering', () => {
        render(<App/>)
        const title = screen.getByText('Events Log')
        expect(title).toBeInTheDocument()
})
})
