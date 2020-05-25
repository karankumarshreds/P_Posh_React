import React, {Component} from 'react';
import './Banner.css';
import Form from './Form/Form';

class Banner extends Component {

    state = {
        weightLoss : true,
        stress: false, 
        chronic: false,
        lackOfPurpose: false,
    }

    render() {
        return (
            <div className="Banner">
                <div className="Banner-heading">
                <h3>Get your Panchtattva Analysis</h3>
                </div>

            <nav className="Banner-nav">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Weight Loss</a>
                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Stress</a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Chronic Ailments</a>
                    <a class="nav-item nav-link" id="nav-address-tab" data-toggle="tab" href="#nav-address" role="tab" aria-controls="nav-address" aria-selected="false">Lack of Purpose</a>
                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <h1>Weight Loss Program</h1>
                    
                    <Form program="weightLoss"/>
                </div>

                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <h1>Stress Program</h1>
                    
                    <Form program="stress"/>
                </div>

                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <h1>Chronic Ailment Program</h1>
                    
                    <Form program="chronicAilments"/>
                </div>

                <div className="tab-pane fade" id="nav-address" role="tabpanel" aria-labelledby="nav-address-tab">
                    <h1>Lack Of Purpose Program</h1>
                    
                    <Form program="LackOfPurpose"/>
                </div>
            </div>
            </div>
        )
    }
}

export default Banner;