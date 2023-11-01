import React from "react";
import Header from "../components/Header";
import ProfileBackgroundImg from '../images/ProfileBackgroundImg.svg';
import redFlag from '../images/redFlag.png';
import '../styles/profile.css'; 
import pic from "../images/profpic.svg"
import pen from "../images/pen.svg"
import camera from "../images/camera.svg"
import gtu from "../images/gtu.svg"
import school from "../images/school.svg"
import eye from "../images/eye.svg"
import signal from "../images/signal.svg"
import networking from "../images/networking.svg"
import demographic from "../images/demographic.svg"
import users from "../images/users.svg"
import searchh from "../images/searchh.svg"
import chart from "../images/chart.svg"

function Profile() {
  return (
    <>
    <div>
      <Header />
    </div>
    <div className="ProfileBackgroundSection">
        <div className="profile-section">
              <img src={ProfileBackgroundImg} alt="ProfileBackgroundImg" id="ProfileBackgroundImg"/>
        </div>
      <div className="WhiteDiv"></div>
      <div className="redFlag">
      <img src={redFlag} alt="redFlag" id="redFlag"/>
      </div>
      <div className="profileImageIcon">
      <img src={pic} alt="profileImageIcon" id="profileImageIcon"/>
      </div>
        <div className="nameSurname">
          <h2>Anna Matveichuk</h2>
        </div>
        <div className="degree">
          <h5>Bachelor International Relations and Law</h5>
        </div>
        <div className="adress">
          <h5>Tbilisi, Georgia</h5>
        </div>
        <div className="contactInfoButton">
          <h5>Contact Info</h5>
        </div>
      <div className="relatedLinks">
        <div className="openTo">
          <h6>Open to</h6>
        </div>
        <div className="addprofileSection">
          <h6>Add profile section</h6>
        </div>
        <div className="more">
          <h6>More</h6>
        </div>
      </div>

      <div className="leftSideItems"> 
        <div className="ediTCameraIcons">
          <div className="editPen">
            <img src={pen} alt="editpen" id="editPen"/>
          </div>
          <div className="cameraUpload">
            <img src={camera} alt="cameraUpload" id="cameraUpload"/>
          </div>
        </div>

        <div className="profileEditLinks">
          <div className="editPublicProfile">
            <h6>Edit public profile & URL</h6>
          </div>
          <div className="addprofilelanguage">
            <h6>Add profile in another language</h6>
          </div>
        </div>

      </div>
    </div>

    <div className="profile-feed-wrapper">
      <main>
        <div className="mainInformation">
          <div className="mainInfoHeader">
            <div><h1>Main Information</h1></div>
            <div><img src={pen} alt="pen" id="pen"/></div>
          </div>
          <div className="text-content">
            <h3>About</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing...</p>
          </div>
          <div className="showMore"><h5>Show more</h5></div>
        </div>
        <div className="experienceEducationDivs">
          <div className="experience">
            <div className="experienceHeader">
              <div><h1>Experience</h1></div>
              <div><img src={pen} alt="pen" id="pen"/></div>
            </div>
            <div className="experienceContent">
              <div className="uniTeacher">
                <div><h4>University Teacher</h4></div>
                <div><p>Future Diplomat School</p></div>
                <div><p>Sep 2021- Dec 2022</p></div>
              </div>
              <div className="businessOwner">
                <div><h4>Business Owner</h4></div>
                <div><p>Online Shop, Full-time</p></div>
                <div><p>Aug 2019- Oct 2020</p></div>
              </div>
              <div className="salesManager">
                <div><h4>Sales Manager</h4></div>
                <div><p>Online Shop, Full-time</p></div>
                <div><p>Sep 2021- Dec 2022</p></div>
              </div>
              <div className="showMore"><h5>Show more</h5></div>
            </div>
          </div>
          <div className="education">
            <div className="educationHeader">
              <div><h1>Education</h1></div>
              <div><img src={pen} alt="pen" id="pen"/></div>
            </div>
            <div className="educationContent">
              <div className="gtu">
                <div><img src={gtu} alt="gtuuni" id="gtuuni"/></div>
                <div className="gtuDetails">
                  <div><h4>Georgian Technical University</h4></div>
                  <div><p>Bachelor of International Relationship and Law</p></div>
                  <div><p>Sep 2008- Jun 2019</p></div>
                </div>
              </div>
              <div className="gtu">
                <div><img src={school} alt="school" id="school"/></div>
                <div className="gtuDetails">
                  <div><h4>School #493</h4></div>
                  <div><p>Secondary general education</p></div>
                  <div><p>Sep 2008- Jun 2019</p></div>
                </div>
              </div>
              <div className="showMore"><h5>Show more</h5></div>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skillsHeader">
            <div><h1>Main Information</h1></div>
            <div><img src={pen} alt="pen" id="pen"/></div>
          </div>
          <div className="skills-text-content">
            <p>Russian Language, Georgian Language, English Language, German Language, Microsoft Office, Communication, Attentiveness, Accuracy, Creativity, Critical Thinking, Active Listening, Time Management, and Prioritization...</p>
          </div>
          <div className="showMore"><h5>Show more</h5></div>
          </div>

          <div className="experienceEducationDivs">
          <div className="resources">
            <div className="resourcesHeader">
              <div>
                <div>
                  <h1>Resources</h1>
                </div>
                <div className="private">
                  <img src={eye} alt="eye" id="eye"/>
                  <h6>Private to you</h6>
                </div>
              </div>
              <div><img src={pen} alt="pen" id="pen"/></div>
            </div>
            <div className="resourceContent">
              <div className="creatorMode">
                <div className="signal"><img src={signal} alt="signal" id="signal"/></div>
                <div>
                  <div><h4>Creator mode</h4></div>
                  <div><p>Get discovered, showcase content <br /> on your profile, and get access to <br /> creator tools</p></div>
                </div>  
              </div>
              <div className="myNetwork">
                <div className="network"><img src={networking} alt="networking" id="networking"/></div>
                <div>
                  <div><h4>My Network</h4></div>
                  <div><p>See and manage your connections <br />  and interests</p></div>
                </div>  
              </div>
              <div className="demographicdetails">
                <div className="demographic"><img src={demographic} alt="demographic" id="demographic"/></div>
                <div>
                  <div><h4>Personal demographic information</h4></div>
                  <div><p>Add or manage your information</p></div>
                </div>  
              </div>
              
              <div className="showMore"><h5>Show more</h5></div>
            </div>
          </div>
          <div className="analytics">
            <div className="analyticsHeader">
              <div>
                <div>
                  <h1>Analytics</h1>
                </div>
                <div className="private">
                  <img src={eye} alt="eye" id="eye"/>
                  <h6>Private to you</h6>
                </div>
              </div>
              <div><img src={pen} alt="pen" id="pen"/></div>
            </div>
            <div className="analyticsContent , marginedit">
              <div className="profileViewed">
                <div className="users"><img src={users} alt="users" id="users"/></div>
                <div>
                  <div><h4>60 profile viewed</h4></div>
                  <div><p>Discover who’s viewed your profile</p></div>
                </div>  
              </div>
              <div className="impressions">
                <div className="myimpressions"><img src={chart} alt="chart" id="chart"/></div>
                <div>
                  <div><h4>14 post impressions</h4></div>
                  <div><p>Check out who’s engaging with your<br /> posts</p></div>
                </div>  
              </div>
              <div className="appearancesdetails">
                <div className="appearances"><img src={searchh} alt="demographic" id="demographic"/></div>
                <div>
                  <div><h4>20 search appearances</h4></div>
                  <div><p>See how often you appear in search <br />results</p></div>
                </div>  
              </div>
              
              <div className="showMore"><h5>Show more</h5></div>
            </div>
          </div>
          
        </div>

      </main>


      <aside>
        aside
      </aside>
    </div>


    </>
    )
}

export default Profile;
