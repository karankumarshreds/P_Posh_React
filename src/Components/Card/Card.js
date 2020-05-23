import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Card">

                <div className="Card-heading container">
                <h1>SOME OF OUR SERVICES</h1>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                </div>

                <div className="Card-section">
                <div className="card">
                <img src="card1.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Service1</h5>
                        <p className="card-text">
                        Some quick example text to build on the card title and 
                        make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div className="card">
                <img src="card2.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Service2</h5>
                        <p className="card-text">
                        Some quick example text to build on the card title and 
                        make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div className="card">
                <img src="card3.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Service3</h5>
                        <p className="card-text">
                        Some quick example text to build on the card title and 
                        make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Card;