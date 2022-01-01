import React, { ReactNode, ReactElement } from 'react'

type TestimonialProps = { children: ReactNode }

function TestimonialContainer({children}: TestimonialProps): ReactElement | null {
    return (
        <main className="main">{children}</main>
    )
}

export default TestimonialContainer