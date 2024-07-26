import Nav from "../components/organims/Nav"
import Sectioncards from "../components/organims/Sectioncards"
import SectionTextImage from "../components/organims/SectionTextImage"

function Home() {
  return (
    <>
      <div>
          <Nav></Nav>
      </div>
      <div>
        <Sectioncards/>
      </div>
      <div id="nosotros">
        <SectionTextImage/>
      </div>
    </>
  )
}

export default Home