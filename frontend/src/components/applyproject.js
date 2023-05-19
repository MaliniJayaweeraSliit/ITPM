
import React from 'react';
import { MDBCardText,MDBBtn, MDBTypography,} from 'mdb-react-ui-kit';

export default function ApplyProject() {
  return (
    <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="projectbox">
          <div md="12" xl="4">
            <div className=" cardproject">
              <div className="projectboxbody">
                <MDBTypography tag="h4">Julie L. Arsenault</MDBTypography><br/>
                <MDBCardText className="text-muted mb-4">
                  @Programmer <span className="mx-2">|</span> <a href="#!">mdbootstrap.com</a>
                </MDBCardText>
                <MDBBtn rounded size="lg" className='buttonapply'>
                  APPLY NOW
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}