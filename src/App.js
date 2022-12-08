import peanut from './doodles/peanut.svg'
import sleepy from './doodles/sleepy.svg'
import thinker from './doodles/thinker.svg'
import exit from './doodles/exit.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tile from './components/Tile'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import ResponsiveRedesignThumbnail from './responsive-redesign-thumbnail.png'
import DevelopmentThumbnail from './development-thumbnail.png'
import EyeTrackingThumbnail from './eye-tracking-thumbnail.png'
import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PortfolioItem from './components/PortfolioItem.js'
// images
import CNNDiagram from './cnn-diagram.png'
import DLNAPoster from './dlna-poster.svg'
import ADesign from './images/a-b-testing/a-design.jpg'
import BDesign from './images/a-b-testing/b-design.jpg'
import AHeatmap from './images/a-b-testing/a-heatmap.png'
import BHeatmap from './images/a-b-testing/b-heatmap.png'
import AReplay from './images/a-b-testing/a-replay.png'
import BReplay from './images/a-b-testing/b-replay.png'
import OriginalWebpage from './images/responsive-redesign/original-webpage.png'
import StyleGuide from './images/responsive-redesign/style-guide.png'
import RedesignedWebpage from './images/responsive-redesign/redesigned-webpage.png'
import Lightbulb from './doodles/lightbulb.svg'
import UnlitLightbulb from './doodles/unlit-lightbulb.svg'
import Smile from './doodles/smile.svg'

function App() {
  const [greeting, setGreeting] = useState('')
  const greetings = ['Hi there!', 'Howdy!', 'Hallo!']
  const [doodle, setDoodle] = useState('')
  const doodles = [peanut, sleepy, thinker]

  // randomize greeting and doodle
  useEffect(() => {
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)])
    // setDoodle(doodles[Math.floor(Math.random() * doodles.length)])
  }, [])

  const [eyeTrackingShow, setEyeTrackingShow] = useState(false)

  const [showRes, setShowRes] = useState(false)
  
  const handleResClose = () => {
    setShowRes(false)
  }

  const handleResShow = () => {
    setShowRes(true)
  }

  const [showDLNA, setShowDLNA] = useState(false)
  
  const handleDLNAClose = () => {
    setShowDLNA(false)
  }

  const handleDLNAShow = () => {
    setShowDLNA(true)
  }

  const [showInt, setShowInt] = useState(false)
  
  const handleIntClose = () => {
    setShowInt(false)
  }

  const handleIntShow = () => {
    setShowInt(true)
  }

  const [showEye, setShowEye] = useState(false)
  
  const handleEyeClose = () => {
    setShowEye(false)
  }

  const handleEyeShow = () => {
    setShowEye(true)
  }

  const changeGreeting = () => {
    if (greetings.indexOf(greeting) === greetings.length - 1) {
      setGreeting(greetings[0])
    } else {
      setGreeting(greetings[greetings.indexOf(greeting) + 1])
    }
  }

  const [isLit, setIsLit] = useState(true)

  return (
    <div id="home" className="App">
      <Navbar className="custom-nav-bar" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Smile}
              width="40"
              height="40"
              className="d-inline-block align-top brand-logo"
            />{' '}
             Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <div className='lightbulb-container clickable' onClick={() => setIsLit(!isLit)}>
        {/* could use this as a light/dark mode toggle in the future */}
        <img src={isLit ? Lightbulb : UnlitLightbulb} width="150" height="150" className="d-inline-block align-top" />
      </div>
      <Container className="body">
        <Row>
          <Col className='header-col tile-col' onClick={changeGreeting}>
            <Row className='header-body'>
              <Col xs={4}>
                <img className='logo' src={peanut}></img>
              </Col>
              <Col className='header-body-text' xs={8}>
                <h1 className='greeting'>{greeting}</h1>
                <h2>I'm a recent—well, soon-to-be—alum from Brown University who
                  studied AI/ML and design! When I'm not coding, you can find me 
                  cooking, playing banjo, and writing letters on my typewriter!</h2>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className='responsive-redesign tile-col clickable position-relative' xs={8} onClick={handleResShow}>
            <Row className='tile-body'>
              <Col xs={4}>
                <img className='thumbnail' src={ResponsiveRedesignThumbnail}></img>
              </Col>
              <Col className='tile-preview-text' xs={8}>
                <h3 className='tile-preview-title'>Responsive Redesign</h3>
                <h4 className='tile-preview-description'>I redesign the home page of an Italian restaurant from my hometown...</h4>
              </Col>
            </Row>
            <Tile></Tile>
          </Col>
          <Col className='ufc-stats tile-col clickable position-relative' onClick={handleDLNAShow}>
            <Row className='tile-body'>
              <Col className='tile-preview-text'>
                <h3 className='tile-preview-title'>DLNA</h3>
                <h4 className='tile-preview-description'>A final project using deep learning to identify viral DNA...</h4>
              </Col>
            </Row>
            <Tile className="ufc-stats"></Tile>
            </Col>
        </Row>
        <Row>
          <Col className='interactive-design tile-col clickable position-relative' onClick={handleIntShow}>
            <Row className='tile-body'>
              <Col>
                <img className='thumbnail' src={DevelopmentThumbnail}></img>
              </Col>
              <Col className='tile-preview-text'>
                <h3 className='tile-preview-title'>Interactive Design</h3>
                <h4 className='tile-preview-description'>I try my hand at interactive design and make a React app to 
                plan a trip in the South Carolina park system...</h4>
              </Col>
            </Row>
            <Tile className="iterative-dev"></Tile>
          </Col>
          <Col className='eye-tracking tile-col clickable position-relative' onClick={handleEyeShow}>
            <Row className='tile-body'>
              <Col>
                <img className='thumbnail' src={EyeTrackingThumbnail}></img>
              </Col>
              <Col className='tile-preview-text'>
                <h3 className='tile-preview-title'>A/B Testing</h3>
                <h4 className='tile-preview-description'>I investigate whether layout changes produce the desired change in A/B testing...</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* responsive redesign modal */}
      <Modal show={showRes} onHide={handleResClose} fullscreen={true}>
        <Modal.Header className='custom-modal-header' closeButton>
          <h3 className='modal-title responsive-redesign-title'>Responsive Redesign</h3>
          <img className='exit-doodle' src={exit}></img>
        </Modal.Header>

        <Modal.Body className='custom-modal-body'>
          <h4 className='modal-subtitle'>The Beginning—An Introduction</h4>
          <p className='modal-text'>
            One of my favorites projects from my UI/UX class was this redesign assignment. Each student had to take an existing website and redesign it 
            with usability and accessibility in mind. I wanted to do something personal, so I picked the home page of an Italian restaurant from my town. 
            Responsiveness was of primary concern, so the redesigned page had to work on mobile, tablet, and desktop. 
            The project was not about building something interactive, so the page was built almost entirely using HTML and CSS exclusively. There's just a smattering
            of JavaScript for this one.
          </p>
          <img className='modal-body-image' src={OriginalWebpage}></img>
          <h4 className='modal-subtitle'>The Middle—An Overview</h4>
          <p className='modal-text'>
            After looking over the webpage—clicking buttons, resizing the window, following links—I found numerous usability issues I could fix. 
            Among them were two separate buttons for the same online ordering functionality, the at least five different fonts used,
            and the four different button designs. All of these are potential sources of confusion I wanted to remedy. There were also
            accessibility concerns, chief among them low contrast between certain pieces of text and their backgrounds and
            bad alt text.
          </p>
          <p className='modal-text'>
            After identifying all of these issues, I moved into the drafting phase. Again, I had to consider three distinct screen sizes
            and the possible differences in layout for each—mobile, tablet, and desktop. I first made wireframes for 
            each to hash out the general layout.
          </p>
          <p className='modal-text'>
            With a general idea of what elements I wanted to include, I went ahead creating a style guide so that my design
            would be cohesive.
          </p>
          <img className='modal-body-image' src={StyleGuide}></img>
          <p className='modal-text'>
            With an overall theme achieved, I used my style guide and my wireframes to design high-fidelity prototypes in Figma. Each prototype
            was the intended look of the final project. I then used the prototypes as reference to create the real thing—the coded webpage.
          </p>
          <img className='modal-body-image' src={RedesignedWebpage}></img>
          <h4 className='modal-subtitle'>The End—Takeaways</h4>
          <p className='modal-text'>
            I am extremely proud of how my redesigned website came out, even now. This was my first true attempt at coding
            a site from the ground up. It was helpful to redesign a webpage instead of creating one from scratch, both because
            the original webpage gave me a jumping off point and because I was able to see what mistakes people make. I am happy that I
            was able to work my way out of each problem I encountered; I never had to compromise my initial design in any fundamental way. 
            I think this remains one of my favorite projects from all of undergrad!
          </p>
        </Modal.Body>
      </Modal>
      <Modal show={showDLNA} onHide={handleDLNAClose} fullscreen={true}>
        <Modal.Header className='custom-modal-header' closeButton>
          <h3 className='modal-title dlna-title'>DLNA</h3>
          <img className='exit-doodle' src={exit}></img>
        </Modal.Header>
        <Modal.Body className='custom-modal-body'>
          <h4 className='modal-subtitle'>The Beginning—An Introduction</h4>
          <p className='modal-text'>
            DLNA is the final project of a deep learning course I took at Brown. Several of my group members were interested
            in computational biology, so we chose to improve
            upon a published paper that classified viral DNA sequences. During the project, we navigated the entire machine learning 
            pipeline as well as presented our findings to our classmates.
          </p>
          <h4 className='modal-subtitle'>The Middle—An Overview</h4>
          <p className='modal-text'>
            We collected over 40,000 DNA samples across six different viruses and preprocessed them accordingly. We designed
            a convolutional neural net (CNN) as well as two baseline models for comparison. Two convolutional layers, two pooling layers, 
            and three dense layers comprised the model.
          </p>
          <img className='modal-body-image' src={CNNDiagram}></img>
          <p className='modal-text'>
            One baseline model used just length to make its prediction, and the other used
            guanine-cytosine content, which measures the proportion of the two DNA bases to 
            all of the bases in the DNA sequence. Our CNN model greatly outperformed our baseline models.
            Our model also performed slightly better than the model in the paper, but the dataset used in
            the paper was not published, so our data is not exactly the same. Therefore, any true comparison
            is merely speculative. Still, we bundled together our findings, our methodology, and more into
            a written report as well as a poster, the latter of which we presented in a conference-style
            setting on campus with other classmates!
          </p>
          <img className='modal-body-image' src={DLNAPoster}></img>
          <h4 className='modal-subtitle'>The End—Takeaways</h4>
          <p className='modal-text'>
            One important lesson from this project—and it really is also a life lesson—is that simpler is sometimes better! While 
            the CNN performed better overall, for certain viruses, the baseline models were just as good. The project was also a great experience in working on a problem
            from start to finish. Often a project for a class has you pick up somewhere in the middle, whereas here we started from
            scratch.
          </p>
        </Modal.Body>
      </Modal>

      <Modal show={showInt} onHide={handleIntClose} fullscreen={true}>
        <Modal.Header className='custom-modal-header' closeButton>
          <h3 className='modal-title interactive-design-title'>Interactive Design</h3>
          <img className='exit-doodle' src={exit}></img>
        </Modal.Header>
        <Modal.Body className='custom-modal-body'>
          <h4 className='modal-subtitle'>The Beginning—An Introduction</h4>
          <p className='modal-text'>
            For my UI/UX class, we created an interactive webpage as an exercise in the JavaScript React
            library. Whenever possible, I like to tie my work back to my home,
            so I chose to make a trip planner for the South Carolina park system.
          </p>
          <h4 className='modal-subtitle'>The Middle—An Overview</h4>
          <p className='modal-text'>
            I chose a baker's dozen parks from the state and included attributes for each, 
            such as region, cost of admission, wifi availability, &c. I wanted a clean and straightforward 
            design that didn't feel flat at the same time, so I experimented with slight drop shadows
            to give depth. Moreover, I think the shadows made it easier for a user
            to develop a layered conceptual model. You can add/remove each park
            from your trip, and the total cost per adult for the trip is calculated each time you do so. You
            can also sort the parks alphabetically or by ticket price and filter by region and 
            wifi availability. A big thank you to the South Carolina State Park System for use of its logo
            and designs!!
          </p>
          <img className='modal-body-image' src={DevelopmentThumbnail}></img>
          <h4 className='modal-subtitle'>The End—Takeaways</h4>
          <p className='modal-text'>
            I had to be conscious in designing interactive elements that looked interactive as well as ensuring
            that all relevant details were obvious and accessible. For example, when scrolling through the parks, the filters
            and the trip planner should always be visible, so I had to lock those in place on the screen.
            My knowledge of HTML, CSS, and JavaScript continue to improve with every project I do, and this project helped
            my JavaScript knowledge greatly!
          </p>
        </Modal.Body>
      </Modal>

      <Modal show={showEye} onHide={handleEyeClose} fullscreen={true}>
        <Modal.Header className='custom-modal-header' closeButton>
          <h3 className='modal-title eye-tracking-title'>A/B Testing</h3>
          <img className='exit-doodle' src={exit}></img>
        </Modal.Header>
        <Modal.Body className='custom-modal-body'>
          <h4 className='modal-subtitle'>The Beginning—An Introduction</h4>
          <p className='modal-text'>
            This group project was a short but insightful (and fun!) look into A/B testing. 
            We were given a bakery menu page and asked to split into two subgroups and design two
            versions. We decided to tackle dietary restrictions—vegetarian, peanut allergies, lactose intolerance, &c.—
            and have each group address the issue in slightly different ways.
          </p>
          <h4 className='modal-subtitle'>The Middle—An Overview</h4>
          <p className='modal-text'>
            The of the group members wrote out the dietary restrictions next to each item (Version A), while my partner and I decided to use iconography. 
            We placed symbols next to each menu item detailing what dietary restrictions it
            addressed and added a legend to a corner of the page (Version B). For Version B, we assumed that in the beginning there would be repeated instances
            wherein the user would look at an icon and then at the legend, but that over time the back-and-forth glances
            would subside as the user familiarized herself with the meaning of the icons.
          <div className='double-images'>
            <img src={ADesign}></img>
            <img src={BDesign}></img>
          </div>
          We then had two participants A/B test our designs with eye tracking! We produced a set of heatmaps that showed where
          each user focused her attention.
          </p>
          <div className='double-images'>
            <img src={AHeatmap}></img>
            <img src={BHeatmap}></img>
          </div>
          <p className='modal-text'>
          We also watched the eye tracking data to see sequentially where users looked on the screen.
          </p>
          <div className='double-images'>
            <img src={AReplay}></img>
            <img src={BReplay}></img>
          </div>
          <p className='modal-text'>
          When the dietary restrictions are written out (Version A), the user tends to look sequentially—title, then description, then dietary restrictions. This was expected.
          What surprised us was that with the dietary icons (Version B), the user glanced through the items first and then looked at the legend for the icons afterwards. 
          We surmise the user then glanced quickly at the items she wanted in order to check the dietary restrictions.
          </p>
          <h4 className='modal-subtitle'>The End—Takeaways</h4>
          <p className='modal-text'>
            This was a great first foray into usability testing, something I will likely do in industry! The surprise finding
            with Version B was also a great reminder that just because you design an interface to be used in a certain way
            does not mean users will behave that way.
          </p>
        </Modal.Body>
      </Modal>
      <PortfolioItem title={'Eye Tracking'} show={eyeTrackingShow}></PortfolioItem>
    </div>
  );
}

export default App;
