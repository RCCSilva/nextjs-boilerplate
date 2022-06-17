import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'tests/helper'
import Main from './Main'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeVisible()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
