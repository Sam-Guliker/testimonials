import React from 'react'

import quoteImage from '../images/bg-pattern-quotation.svg'

type CardProps = {
    name: string;
    image: string;
    role: string;
    highlightParagraph: string;
    paragraph: string;
    quote: boolean;
}

function Card({name, image, role, highlightParagraph, paragraph, quote}: CardProps) {
    return (
        <section className="card-container">
          <header className="header">
            {quote && <img className="quote" src={quoteImage}  alt="quote" />}
            <div className="image-container">
              <img className="image" src={image} alt="photo" />
            </div>
            <div className="user-details">
              <h2 className="heading-02">{name}</h2>
              <h3 className="heading-03">{role}</h3>
            </div>
          </header>
            <p className="paragraph paragraph-highlight">{highlightParagraph}</p>
            <p className="paragraph">{paragraph}</p>
        </section>
    )
}

export default Card