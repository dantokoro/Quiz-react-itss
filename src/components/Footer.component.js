import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <hr/>
          <Row>
            <div className="col-12">
              <div className="team-heading">
                <h2 className="entry-title">水2クラス 〜 チーム6</h2>
              </div>
            </div>
            <br></br>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="team-member">
                <img
                  src="https://res.cloudinary.com/dbzfjnlhl/image/upload/v1585989363/IMG_7013_foggvm.jpg"
                  alt=""
                />

                <h3>ズオン・マイン・ダン</h3>
                <h4>20160980</h4>                
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="team-member">
                <img
                  src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/13179194_1892512834308979_2704264156460112054_n.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=kzv7DF0xuB4AX_N-JSY&_nc_ht=scontent.fhan2-4.fna&oh=87fa11127db255167275eb85ccc2d0cb&oe=5EAC859A"
                  alt=""
                />

                <h3>ドー・フイ・バック</h3>
                <h4>20160301</h4>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="team-member">
                <img
                  src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-1/p240x240/52016177_2245706175650751_7322071846927466496_n.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=wZJwyRoSve4AX-FOC7C&_nc_ht=scontent.fhan2-4.fna&_nc_tp=6&oh=9ac0440301c5a0e0611e0545caf47ac2&oe=5EAECC86"
                  alt=""
                />

                <h3>レ・トゥン・ズオン</h3>
                <h4>20160834</h4>

              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Footer;
