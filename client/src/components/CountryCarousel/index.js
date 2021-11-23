import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Carousel, Card, Button } from "react-bootstrap";

import AuthorButton from "../AuthorButton";

import { QUERY_AUTHOR_ALL, QUERY_QUOTE_ID } from "../../utils/queries";

const CarouselPiece = (input) => {
    const {loading, data} = useQuery(QUERY_QUOTE_ID, {
        variables: { quoteId: input.input._id }
    })

    if(loading) return <p>Loading...</p>

    const quote = data.quoteID;

    const testPath = "url(/assets/images/countries/" + quote.authorName.replace(/\s/g, '') + ".png)";

    return (
        <Card>
            <Link className="noDecor font-Kaisei" to={`/quote/${input.input._id}`}>
                <Card.Body className="countryBG" style={{backgroundImage: testPath}}>"{quote.quoteText}"</Card.Body>
            </Link>
            <Card.Footer>
                <AuthorButton input={quote.authorName}/>
            </Card.Footer>
        </Card>
    );
}

const CountryCarousel = () => {
    const {loading, data} = useQuery(QUERY_AUTHOR_ALL);

    if(loading) return <p>Loading...</p>

    const authorList = data.authors

    let author;
    do {
        author = authorList[Math.floor(Math.random() * authorList.length)];
    } while (author.quotes.length <=1)
    
    return (
        <div className="auttopBody pb-3">
            <p>Quotes under {author.name}</p>
            <hr/>
            <div className="px-2">
                <Carousel indicators={false} controls={true} nextIcon={<Button variant={"light"}><strong>{`>`}</strong></Button>} prevIcon={<Button variant={"light"}><strong>{`<`}</strong></Button>}>
                    {author.quotes.map((index) => (
                        <Carousel.Item key={index._id}>
                            <CarouselPiece input={index}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default CountryCarousel;