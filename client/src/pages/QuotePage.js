import React from "react";
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container, Row, Card, Col } from "react-bootstrap"
import MetaTags from "react-meta-tags";
import { FaTwitterSquare, FaFacebookSquare, FaRedditSquare } from "react-icons/fa";
import "../assets/css/index.css";

import TopicButton from "../components/TopicButton";
import AuthorButton from "../components/AuthorButton";
// import MobileButton from "../components/MobileShare";

import { QUERY_QUOTE_ID, QUERY_AUTHOR_NAME } from '../utils/queries';

window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|Edge|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(a.substr(0,4))) check = true;
    })(navigator.userAgent||navigator.vendor||window.opera);
    if((window.navigator.userAgent.indexOf("Edge/") > -1) || (window.navigator.userAgent.indexOf("Edg/") > -1)) check = true;
    return check;
};

function QuotePage() {
    // query targets are initialized as null objects to avoid loading errors
    let quote = {authorName: null, topics: ["null"]}, author = {_id: 1, quotes: []};
    let quoteList = [], randomQuote, pass;
    const { quoteId } = useParams();

    let { loading, data } = useQuery(QUERY_QUOTE_ID, {
        variables: { quoteId: quoteId },
    });

    if(!loading && data) quote = data.quoteID;

    ({loading, data} = useQuery(QUERY_AUTHOR_NAME, {
        variables: { name: quote.authorName},
    }));

    if(!loading && data) author = data.authorName;

    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    for(let i = 0; ((i < 3) && (i < author.quotes.length)); ++i) {
        do {
            pass = 1;
            randomQuote = author.quotes[Math.floor(Math.random() * author.quotes.length)]
            for(let index of quoteList) {
                if(index === randomQuote) {
                    pass = 0;
                }
            }
        } while(!pass)
        quoteList.push(randomQuote);
    }
    
    return (
        <Container className="auttopBody mt-3">
            <div className="wrapper">
                <MetaTags>
                    <title>PW - {quote.authorName} - {quote.quoteText}</title>
                    <meta name="twitter:card" content="summary"></meta>
                    <meta name="twitter:title" content="Proverbial Wisdom"></meta>
                    <meta name="twitter:site" content="@proverbial"></meta>
                    <meta name="twitter:url" content={window.location.href}></meta>

                    <meta property="og:title" content="Proverbial Wisdom"/>
                    <meta property="og:url" content={window.location.href}/>
                    <meta property="og:type" content="website"/>
                </MetaTags>
            </div>
            <Row className="mb-3">
                <Col>
                    <Link to={`/`} className="redText breadCrumb">Home</Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8} className="mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Text className="bigQuote font-Kaisei">
                                "{quote.quoteText}"
                            </Card.Text>
                                <AuthorButton key={quote.authorName} input={quote.authorName}></AuthorButton>
                        </Card.Body>
                        <Card.Body className="text-center">
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} className="shareButton mx-2" id="share-fb" title="Share on Facebook"><FaFacebookSquare/></a>
                            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} className="shareButton mx-2" id="share-t" title="Share on Twitter"><FaTwitterSquare/></a>
                            <a href={`https://www.reddit.com/submit?url=${window.location.href}`} className="shareButton mx-2" id="share-r" title="Share on Reddit"><FaRedditSquare/></a>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            {quote.topics.map((topic) => (
                                <TopicButton key={topic} input={topic}></TopicButton>
                            ))}
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>
                            Assorted quotes attributed to {quote.authorName}
                        </Card.Header>
                        <Card.Body>
                            {quoteList.map((newQuote) => (
                                <p key={newQuote.quoteText} className="font-Kaisei">
                                    <Link to={`/quote/${newQuote._id}`} className="redText breadCrumb">"{newQuote.quoteText}"</Link>
                                </p>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default QuotePage;
