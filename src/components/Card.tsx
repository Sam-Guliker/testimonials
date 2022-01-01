import React from 'react'

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
        <section className="card">
          <header className="header">
            <div className="image-container">
              <img src={image} />
            </div>
            <div className="user-details">
              <h2 className="heading-02">{name}</h2>
              <h3 className="heading-03">{role}</h3>
            </div>
            <p className="paragraph paragraph-highlight">{highlightParagraph}</p>
            <p className="paragraph">{paragraph}</p>
          </header>
        </section>
    )
}

export default Card