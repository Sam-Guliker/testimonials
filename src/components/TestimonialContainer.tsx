import React, { ReactNode } from 'react'

type TestimonialProps = { children: ReactNode }

const TestimonialContainer = ({children}: TestimonialProps): JSX.Element | null => <main className="main">{children}</main>

export default TestimonialContainer