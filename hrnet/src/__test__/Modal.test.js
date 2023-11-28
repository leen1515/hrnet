import { render, fireEvent, screen } from '@testing-library/react';
import Modal from '../modules/modal/Modal';
import '@testing-library/jest-dom';

describe('Modal Component', () => {
    test('renders children and close button when open', () => {
        render(
            <Modal isOpen={true} onClose={() => { }}>
                <div>Modal contain</div>
            </Modal>
        );

        expect(screen.getByText('Modal contain')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('does not render when isOpen is false', () => {
        render(
            <Modal isOpen={false} onClose={() => { }}>
                <div>Modal contain</div>
            </Modal>
        );

        expect(screen.queryByText('Modal contain')).not.toBeInTheDocument();
    });

    test('calls onClose when close button is clicked', () => {
        const mockOnClose = jest.fn();
        render(
            <Modal isOpen={true} onClose={mockOnClose}>
                <div>Modal contain</div>
            </Modal>
        );

        fireEvent.click(screen.getByRole('button'));
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});
