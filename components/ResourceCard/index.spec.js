/* eslint react/prop-types: 0 */
import React from 'react'
import { render } from '@testing-library/react'
import ResourceCard from '.'

const props = {
    resource: {
        description: 'testing',
        image: 'testing',
        link: 'testing',
        name: 'testing',
        posted: 'testing',
    },
}

describe('ResourceCard', () => {
    it('should render a header when passed the correct data', () => {
        const { container } = render(<ResourceCard {...props} />)

        expect(container.firstChild).toBeInTheDocument()
    })
})
