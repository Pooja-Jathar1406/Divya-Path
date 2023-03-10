import { Navigation } from "./Navigation";
import "../css/Home.css";
import "../css/Navigation.css";
import "../css/Footer.css";


export function JobAdmin() {
    return  (
      <>
        <Navigation></Navigation>
      
        <title>Job_User</title>
        <div className="container">
          <br />
          <div className="card">
            <h5 className="card-header">JOB_PROFILE_02</h5>
            <div className="card-body">
              <div><h5 className="card-title">Hiring Person with Disability For Microsoft Power BI For PAN India</h5>
                <span className="badge rounded-pill bg-success">Active</span></div>
              <p className="card-text">
                <b>Roles and Responsibilities</b>
              </p><p>Strong analytical skills and the ability to pay careful attention to detail.
                Capacity to work well in groups and a willingness to understand the various roles played by fellow team members.
                Knowledge about the subject area in which they are working.</p>
              <p /> 
              <dl className="row">
                <dt className="col-sm-2">Experience</dt>
                <dd className="col-sm-10">2 - 3 years</dd>
                <dt className="col-sm-2">Location</dt>
                <dd className="col-sm-10">Navi Mumbai</dd>
                <dt className="col-sm-2">Category</dt>
                <dd className="col-sm-10">Locomotor Disability</dd>
                <dt className="col-sm-2">Industry Type</dt>
                <dd className="col-sm-10">IT Services &amp; Consulting</dd>
                <dt className="col-sm-2">Employment Type</dt>
                <dd className="col-sm-10">Full Time, Permanent</dd>
                <dt className="col-sm-2">Education</dt>
                <dd className="col-sm-10">UG :B.Tech/B.E. in Any Specialization, B.A in Any Specialization, B.Com in Any Specialization, B.Sc in Any Specialization
                </dd>
              </dl>
              <div className="mt-2">
                <a href="#" className="btn btn-primary ">APPLY</a>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  );
}

    // ======= </>
   // );
  //}
 
