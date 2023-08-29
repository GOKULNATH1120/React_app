import React from 'react';
import Header from '../components/Header';

import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { FaIndustry, FaTruck, FaHeart, FaUniversity, FaHandsHelping, FaHome } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon

import { FaStar } from 'react-icons/fa';
import google from '../Images/google.png';



import image1 from '../Images/dollor.png'; // Import the image
import image2 from '../Images/tech.png';
import image3 from '../Images/industry.png'
import image4 from '../Images/scale.png'

import man from '../Images/man.png'
import erp from '../Images/erp.png'
import lap from '../Images/lap.png'
import gaming from '../Images/gaming.png'
import mobile from '../Images/mobile.png'
import fintech from '../Images/fintech.png'

import lu from '../Images/lu.png'
import nn from '../Images/nn.png'
import under from '../Images/under.png'

import brand from '../Images/brand.png'

import clutch from '../Images/clutch.png'



const Home = ( ) => {
   const starRating = 3;
  return (
    <div>
        
        <Header/>
        <Container className="py-5">
          <Row>
              <Col md={5}>
                <h1 className="custom-font-size">We Build, Operate,Transform your businesses{''}
                <span className="gradient-text">Digitally</span> </h1>
                <p>Take charge of your business continuity
                 with innovative IT solutions</p>

                 <div className="buttons-container" >
              <Button variant="dark" className="black-button">Schedule a Free Consultation</Button>
              <Button variant="secondary" className="hash-button">Services</Button>
            </div>

             {/* form section */}

            <div className="form-section">
           <Container>
        <div className="form-content shadow-box">
          <div className="header">
            <h6 className="bold-header">Get a Quote from Our Experts</h6>
            <p className="small-text">Find the services you need and receive quotes from our team of Specialists.</p>
          </div>
          <Form>
            <div className="field">
              <Form.Control type="text" placeholder="Search services..." />
            </div>
            <div className="field">
              <Form.Control type="tel" placeholder="Mobile Number" />
            </div>
            <div className="button-wrapper">
              <Button variant="dark">Submit</Button>
            </div>
          
           {/* icons*/}

            <div className="icon-container text-center d-flex align-items-center">
                 <div className="icon-with-text">
                 <i className="bi bi-building"></i>
                <strong className="bold-number">1000</strong>
                <p>Clients</p>
                <div className="vertical-line"></div>
            </div>
               <div className="icon-with-text">
              <div className="vertical-line"></div>
              <i className="bi bi-person"></i>
             <strong className="bold-number">1000</strong>
             <p>Agencies</p>
             </div>
           </div>

          </Form>
        </div>
      </Container>
       </div>
              </Col>
          </Row>
        </Container>
        <hr className="horizontal-line" /> {/* horizontal line  */}

        {/* start review  */}
        <div className="section-container ">
        <div className="section">
    
    <div className="section-content">
      <p className="bold-text">
        Reviewed on <i className="bi bi-star"></i>
      </p>
      <strong className="bold-text">Clutch 31 Reviews</strong>
    </div>
</div>
  <div className="section">
    <span className="divider">|</span>
    <div className="section-content align-start">
      <strong className="bold-text">20 Years</strong>
      <p>Proven Track Record</p>
    </div>
  </div>
  <div className="section">
    <span className="divider">|</span>
    <div className="section-content align-start">
      <strong className="bold-number">98%</strong>
      <p>Customer Satisfaction</p>
    </div>
  </div>
  <div className="section">
    <span className="divider">|</span>
    <div className="section-content align-start">
      <strong className="bold-number">1,500</strong>
      <p>We Have Completed</p>
    </div>
  </div>
  <div className="section">
    <span className="divider">|</span>
    <div className="section-content align-start">
      <strong className="bold-number">3 Mins</strong>
      <p>Average Answer Time</p>
    </div>
  </div>
</div>

{/* container  */}

<Container fluid className="outer-container">
    <div className="black-container mx-5"> {/* Add mx-4 here */}
        <Button variant="light" className="white-button">What We Do</Button>
        <p className="white-paragraph"><strong>Simplifying IT<br />for a complex world.</strong></p>
      </div>
    </Container>

    {/* image container  */}

    <Container fluid>
      <Row>
        <Col xs={6} md={3}>
          <div className="section-13">
            <img src={image1} alt="Image 1" />
            <h4>Cost effectiveness</h4>
            <p className="custom-paragraph">We offer affordable IT solutions that
              help you reduce costs and improve your
              bottom line.</p>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="section-13">
            <img src={image2} alt="Image 2" />
            <h4>Innovative Technology</h4>
            <p className="custom-paragraph">We stay up to date with the latest
              technology trends and offer innovative
              solutions that help you stay ahead of
              the competition.</p>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="section-13">
            <img src={image3} alt="Image 3" />
            <h4>Industry Expertise</h4>
            <p className="custom-paragraph">We specialize in serving specific
             industries, such as healthcare, finance,
             or manufacturing, and offer tailored
             solutions that meet your unique needs.</p>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="section-13">
            <img src={image4} alt="Image 4" />
            <h4>Scalability</h4>
            <p className="custom-paragraph">Our solutions are scalable and can grow
              with your business, ensuring that you
             get the most value out of your
            investment.</p>
          </div>
        </Col>
      </Row>
    </Container>
    <hr className="horizontal-line" /> {/* horizontal line  */}

    {/*image grid */}
    <div className="rectangle-section-4">
      <Container>
      <Row>
          <Col md={12}>
            <Button variant="dark" className="top-button">How We Do </Button>
            <h2 className="header-text-4">Solution</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={4} className="image-col-4">
          <img src={man} alt="Image 3" />
          </Col>
          <Col md={4} className="image-col-4">
          <img src={erp} alt="Image 3" />
          </Col>
          <Col md={4} className="image-col-4">
          <img src={lap} alt="Image 3" />
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={4} className="image-col-4">
          <img src={gaming} alt="Image 3" />
          </Col>
          <Col md={4} className="image-col-4">
          <img src={mobile} alt="Image 3" />
          </Col>
          <Col md={4} className="image-col-4">
          <img src={fintech} alt="Image 3" />
          </Col>
        </Row>
       
        <Row className="justify-content-center">
          <Col md={12}>
            <Button variant="dark" className="bottom-button-4">View Solutions</Button>
          </Col>
        </Row>
      </Container>
    </div>

    {/* icon with names*/}

    <section className="custom-section-container">
      <Container className="custom-container">
        <div className="custom-button-container">
          <Button variant="dark" className="custom-how-we-do-button">How We Do It</Button>
        </div>
        <h2 className="custom-header-text">Solving IT challenges in every <br/> industry, every day.</h2>
        <div className="custom-icon-row center-icons">
          <div className="custom-icon-container">
            <FaIndustry className="custom-icon blue-icon"  />
            <p className="custom-icon-name">Industry & Manufacturing</p>
          </div>
          <div className="custom-icon-container">
            <FaTruck className="custom-icon blue-icon" />
            <p className="custom-icon-name">Transportation & Logistics</p>
          </div>
          <div className="custom-icon-container">
            <FaHeart className="custom-icon blue-icon" />
            <p className="custom-icon-name">Healthcare</p>
          </div>
        </div>
        <div className="custom-icon-row center-icons">
          <div className="custom-icon-container">
            <FaUniversity className="custom-icon blue-icon" />
            <p className="custom-icon-name">Banks & Insurance</p>
          </div>
          <div className="custom-icon-container">
            <FaHandsHelping className="custom-icon blue-icon" />
            <p className="custom-icon-name">Consulting Providers</p>
          </div>
          <div className="custom-icon-container">
            <FaHome className="custom-icon blue-icon" />
            <p className="custom-icon-name">Non-Profit</p>
          </div>
        </div>
        <p className="custom-read-more-text">View All Industries</p>
      </Container>
    </section>

    {/*mind map*/}

    <div className="position-relative mx-lg-20 bg-dark text-white rounded p-4">
      <Button variant="light" size="lg" active>WHAT WE USE</Button>
      <h3>Bringing the best IT vendors to you.</h3>
      <p>Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.</p>

      <Row className='p-5'>
        <Col className="d-flex justify-content-center"> {/* Center the Your IT Challenges card */}
          <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white' }}>
            <Card.Body>
              <Card.Title>Your IT Challenges</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Cards */}
      <Row className='p-5'>
        <Col>
          <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white' }}>
            <Card.Body>
              <Card.Title>Datacenter & Hosting</Card.Title>
              <Card.Text>
                Our facility – Data Center – is the first in the USA that meets the strict ANSI/TIA-942 rated 4 certificate requirements for design, build, and operate.
              </Card.Text>
              <Card.Link href='#' className="d-flex align-items-center text-white">
                <span className="d-flex align-items-center">
                  <FaPlus className="mr-2" />
                  View more
                </span>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white' }}>
            <Card.Body>
              <Card.Title>Datacenter & Hosting</Card.Title>
              <Card.Text>
                Our facility – Data Center – is the first in the USA that meets the strict ANSI/TIA-942 rated 4 certificate requirements for design, build, and operate.
              </Card.Text>
              <Card.Link href='#' className="d-flex align-items-center text-white">
                <span className="d-flex align-items-center">
                  <FaPlus className="mr-2" />
                  View more
                </span>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white' }}>
            <Card.Body>
              <Card.Title>Datacenter & Hosting</Card.Title>
              <Card.Text>
                Our facility – Data Center – is the first in the USA that meets the strict ANSI/TIA-942 rated 4 certificate requirements for design, build, and operate.
              </Card.Text>
              <Card.Link href='#' className="d-flex align-items-center text-white">
                <span className="d-flex align-items-center">
                  <FaPlus className="mr-2" />
                  View more
                </span>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    
                     
                  
            
                     

    {/*container image*/}

    <Container>
      <Row>
        <Col xs={12} md={3}>
          <div className="button-section">
            <Button variant="light" className="custom-button">
            WHERE WE DO
            </Button>
            <h2>Success Stories</h2>
          </div>
        </Col>
        <Col xs={12} md={9}>
          {/* Rest of your content */}
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <div className="custom-column">
          <img src={lu} alt="Image 1" className="custom-image" />
            <p className="custom-image-name">Cloud Hosting</p>
            <p className="custom-paragraph">
           <strong>Major Insurance Provider Saves
            $750k per Month With Big Data
            Migration</strong> 
            </p>
            <p className='custom-paragraph'>The company needed to complete a complex
            migration on a tight deadline to avoid millions
           of dollars in post contract fees and fines.<br/><br/>
︎           Modern infrastructure<br/>
︎           Consulting services</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="custom-column">
          <img src={nn} alt="Image 2" className="custom-image" />
            <p className="custom-image-name">IT Consulting</p>
            <p className="custom-paragraph">
            <strong>Maximizing Efficiency with Proper
              Technology Implementation Coffee
             Success Story</strong> 
            </p>
            <p className='custom-paragraph'>The company needed to complete a complex
                 migration on a tight deadline to avoid millions
                 of dollars in post contract fees and fines.<br/><br/>
︎          ︎ Modern infrastructure<br/>
︎           Consulting servicess</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="custom-column">
          <img src={under} alt="Image 3" className="custom-image" />
            <p className="custom-image-name">Mobile development</p>
            <p className="custom-paragraph">
            <strong>Strategic Move to an AI-supported
              application for Public Safety Travel
              App in London</strong> 
            </p>
            <p className='custom-paragraph'>Travel confidently around London with maps
               and live travel updates. Our reliable journey
               planner will map a safe route.<br/><br/>
︎          ︎     Modern infrastructure<br/>
︎                Consulting services</p>
          </div>
        </Col>
      </Row>
    </Container>


{/*star review */}
<div className="main-container">
  <Container>
    <Row>
      <Col xs={12}>
        {/* Logo Section */}
        <div className="logo-section">
          <img src={lu} alt="Image 2" className="custom-image" />
        </div>
        {/* Paragraph Section */}
        <div className="paragraph-section">
          <p>
          Tecnologia implemented such a powerful platform that<br/>
          we had no break in service when our employees had to<br/>
           work from home due to the COVID-19 pandemic. We<br/>
          weren t concerned about how to shift to a remote<br/>
           working environment because Integris facilitated a<br/>
           seamless transition.
          </p>
          <p><strong>Amanda Parks</strong><br/>
           Network Manager, Healthcare Organization</p>
        </div>
      </Col>
    </Row>
  </Container>
</div>


{/*star rating*/}
<Container>
<Row>
  <Col xs={12}>
    <div className="logo-and-rating">
      <div className="rating">
      <div className="logo">
        <img src={google} alt="Logo" />
      </div>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={`star ${index < starRating ? 'filled' : ''}`}>
            <FaStar />
          </span>
        ))}
        
        <span className="customer-reviews">Customer Reviews</span>
      </div>
      
    </div>
  </Col>
</Row>
</Container>

{/* overlayout container  */}

<div className="main-container-s">
<Container className="custom-container-s">
  <div className="contact-button-s">
    <Button variant="Dark">Contact Us</Button>
  </div>
  <div className="partner-text-s">
    <strong>Partner with Us for<br/> Comprehensive IT</strong>
  </div>
</Container>
</div>



{/*overlay form*/}


<div className="main-container-r">
            <Container className="custom-container-r">
                <Row>
                    <Col>
                        <div className="partner-text-r">
                            <p>We're happy to answer any questions you may have and help<br />
                                you determine which of our services best fit your needs.</p>
                            <p>Call us at: 1 800 356-8933</p><br />
                            <h4>Your benefits:</h4>
                        </div>
                        <Container>
                        <Row className="item-50">
        <Col xs={1} className="icon-50">
          ✓
        </Col>
        <Col xs={11} className="text">
        Client oriented
        </Col>
      </Row>
      <Row className="item-50">
        <Col xs={1} className="icon-50">
          ✓
        </Col>
        <Col xs={11} className="text">
        Independent
        </Col>
      </Row>

      <Row className="item-50">
        <Col xs={1} className="icon-50">
          ✓
        </Col>
        <Col xs={11} className="text">
        Competent
        </Col>
      </Row>
                        </Container>
                        <br /><br /><h4>What happens next?</h4>
                        <Container>
                        <Row className="horizontal-section-77">
        <Col>
          <p>1 We Schedule a call at<br/>
           your convenience</p>
        </Col>
        <Col>
          <p><strong>2</strong> We do a discovery<br/>and consulting meting</p>
        </Col>
        <Col>
          <p><strong>3</strong> We prepare a<br/>proposal</p>
        </Col>
      </Row>
                        </Container>
                    </Col>
                    <Col md={6} className="form-col">
                        <Container className="form-container">
                            <h1>Schedule a Free Consultation</h1>
                            <hr />
                            <Form>
                            <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" required />
                        </Form.Group>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" required />
                        </Form.Group>
                        <Form.Group controlId="company">
                            <Form.Label>Company / Organization</Form.Label>
                            <Form.Control type="text" placeholder="Enter company/organization" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Company Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" placeholder="Enter phone number" required />
                        </Form.Group>
                        <Form.Group controlId="help">
                            <Form.Label>How Can We Help You?</Form.Label>
                            <Form.Control as="select">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
                        </Form.Group>
                                <Button variant="secondary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>


  {/*company logos*/}


  <Container className="main-container-45">
      <Row>
        <Col md={6} className="left-column-45">
          <Button className="custom-button-45" variant="Dark">WHERE WE DO</Button>
          <h2 className="custom-header-45">Recognized by the best</h2>
          <p>
          The company needed to complete a complex
          migration on a tight deadline to avoid millions of
          dollars in post contract fees and fines.
          </p>
        </Col>
        <Col md={6} className="right-column-45">
        <img src={brand} alt="Image 3" />
        </Col>
      </Row>
    </Container>


{/*big container */}


<Container fluid className="black-container">
      <Row>
        <Col md={6} className="custom-col">
          <div class="mt-4">
            <h4 class="text-light">Solutions</h4>
            <div class="row my-2">
              <a href="" class="col-6 text-decoration-none light-gray">Managed services</a>
              <a href="" class="col-6 text-decoration-none light-gray">Mobile Development</a>

              <a href="" class="col-6 text-decoration-none light-gray">IT Consulting & Advisory</a>
              <a href="" class="col-6 text-decoration-none light-gray">Cloud Services</a>

              <a href="" class="col-6 text-decoration-none light-gray">Cyber Security</a>
              <a href="" class="col-6 text-decoration-none light-gray">Network Connectivity</a>

              <a href="" class="col-6 text-decoration-none light-gray">Web Development</a>
              <a href="" class="col-6 text-decoration-none light-gray">ERP Solutions</a>

            </div>
            {/* ... (Other solution rows) ... */}
            <h4 class="text-light pt-5">Company</h4>
            <div class="row my-2">
              <a href="" class="col-6 text-decoration-none light-gray">About Us</a>
              <a href="" class="col-6 text-decoration-none light-gray">Blog</a>

              <a href="" class="col-6 text-decoration-none light-gray">Why us</a>
              <a href="" class="col-6 text-decoration-none light-gray">Case studies</a>

              <a href="" class="col-6 text-decoration-none light-gray">Team</a>
              <a href="" class="col-6 text-decoration-none light-gray">Events</a>

              <a href="" class="col-6 text-decoration-none light-gray">Careers</a>
              <a href="" class="col-6 text-decoration-none light-gray">FAQ</a>

              <a href="" class="col-6 text-decoration-none light-gray">Partners & Certifications</a>
              <a href="" class="col-6 text-decoration-none light-gray">Reviews & Awards</a>
            </div>
          </div>
        </Col>
        <Col md={6} className="custom-col custom-right-center">
  <div className="custom-right-center-inner">
    <h2 className="text-light"><strong>LOGOIPUSIM</strong></h2>
    <Button className="custom-button">Schedule Consultation</Button>
  </div>
</Col>
      </Row>
    </Container>


   {/*footer*/} 
   <div className="mb-4">
      <Container fluid className="pt-4 d-none d-lg-flex">
        <Row>
          <Col>
            <p className="m-0 fw-semibold review-text d-flex align-items-center">
              <small className="text-secondary text-11px">REVIEWED ON</small>
              <span className="d-inline d-flex align-items-center px-3">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </span>
            </p>
            <p className="d-flex align-items-center">
              <a href="#">
              <img src={clutch} alt="Image 1" />
              </a>
              <span className="px-3 text-secondary fw-semibold text-12px">31 REVIEWS</span>
            </p>
          </Col>
          <Col className="border-start border-3">
            <p className="text-16px m-0">Seventh Ave, 20th Floor New York, NY 10018</p>
          </Col>
          <Col className="border-start border-3">
            <p className="text-16px m-0">T: 1 800 356 8933</p>
            <p className="text-16px m-0">E: office@dummy.com</p>
          </Col>
          <Col className="d-flex gap-4">
            <div>
              <a href="" className="social-link">
                <i className="bi bi-linkedin fs-3"></i>
                <p className="m-0 text-14px">LinkedIn</p>
              </a>
            </div>
            <div>
              <a href="" className="social-link">
                <i className="bi bi-twitter fs-3"></i>
                <p className="m-0 text-14px">Twitter</p>
              </a>
            </div>
            <div>
              <a href="" className="social-link">
                <i className="bi bi-facebook fs-3"></i>
                <p className="m-0 text-14px">Facebook</p>
              </a>
            </div>
            <div>
              <a href="" className="social-link">
                <i className="bi bi-youtube fs-3"></i>
                <p className="m-0 text-14px">Youtube</p>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      </div>

  <div className="d-flex justify-content-center">
  <Container className="container-centered">
    <div className="d-flex gap-3">
      <p className="text-14px">
        © 2023 <a href="/" className="text-black text-decoration-none"></a>
      </p>
      <p className="text-14px">
        <a href="/terms-conditions" className="text-black text-decoration-none">Terms &amp; Conditions</a>
      </p>
      <p className="text-14px">
        <a href="/privacy-policy" className="text-black text-decoration-none">Privacy Policy</a>
      </p>
    </div>
  </Container>
</div>






    </div>
  )
}

export default Home

