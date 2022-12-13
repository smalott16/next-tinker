import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import RouteDisplay from './RouteDisply'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('RouteDisplay', () => {
  it('Renders the component with a query parameter', () => {
    useRouter.mockImplementation(() => ({
      query: { rcid: 'coffee' },
    }))
    
    render(<RouteDisplay />)
    expect(screen.getByText(/coffee/)).toBeInTheDocument()
  })
  it('Renders the component with a different query parameter', () => {
    useRouter.mockImplementation(() => ({
      query: { rcid: 'beans' },
    }))
    
    render(<RouteDisplay />)
    expect(screen.getByText(/beans/)).toBeInTheDocument()
  })
})