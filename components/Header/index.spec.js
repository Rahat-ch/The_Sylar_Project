import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'

describe('index page', () => {
    it('should render a header', () => {
        render(<Header />)
        const heading = screen.getByText('The Sylar Project')

        expect(heading).toBeInTheDocument()
    })
})
