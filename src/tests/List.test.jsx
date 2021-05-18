import { render, screen } from '@testing-library/react';

import List from '../components/List';

const renderEmptyList = () => {
  render(
    <List
      tasks={[]}
      onClickDelete={jest.fn()}
    />,
  );
};

const renderNonEmptyList = () => {
  render(
    <List
      tasks={[{ id: 1 }, { id: 2 }, { id: 3 }]}
      onClickDelete={jest.fn()}
    />,
  );
};

describe('List component', () => {
  context('without tasks', () => {
    renderEmptyList();
    it('renders string that tells nothing is left', () => {
      expect(screen.getByText('할 일이 없어요!')).toBeInTheDocument();
    });
  });

  context('with tasks', () => {
    it('renders tasks', () => {
      renderNonEmptyList();
      expect(screen.getAllByRole('listitem').length).toBe(3);
    });

    it('renders finish button for each task', () => {
      renderNonEmptyList();
      expect(screen.getAllByRole('button').length).toBe(3);
    });
  });
});
