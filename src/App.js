import './App.css';
import one from './Assets/01.png'
import two from './Assets/04.png'
import three from './Assets/03.png'
import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin"

gsap.registerPlugin(TextPlugin);

const data = [
  {
    id: 1,
    title: "Design Systems",
    content: "A Design System is the single source of truth which groups all the elements that will allow the teams to design, realize and develop a product. So a Design System is not a deliverable, but a set of deliverables. It will evolve constantly with the product, the tools and the new technologies.",
    imgageUrl: "one",
  },
  {
    id: 2,
    title: "Color Systems",
    content: `Color schemes are used to create style and appeal. Colors that create an aesthetic feeling when used together will commonly accompany each other in color schemes. A basic color scheme will use two colors that look appealing together. More advanced color schemes involve several related colors in "Analogous".`,
    imgageUrl: "two",
  },
  {
    id: 3,
    title: "Structured Content",
    content: `Structured content is information or content that is organized in a predictable way[1] and is usually classified with metadata. XML is a common storage format, but structured content can also be stored in other standard or proprietary formats.`,
    imgageUrl: "three",
  }, {
    id: 4,
    title: "Find out more ",
    content: "We have a selection of resource designed to help you",
    imgageUrl: "three",

  }
]

const toolsFor = [
  "Desingers.", "Engineers.", "Writers.", "Architects."
]

function App() {


  useEffect(() => {
    const typer = gsap.to(".typer", { opacity: 0, ease: "power1.inOut", repeat: -1, repeatDelay: .4 })

    const skilltl = gsap.timeline({ repeat: -1, delay: 1 })

    toolsFor.forEach(skill => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2.4 })
      tl.to(".toolsFor", { duration: 1, text: skill })
      skilltl.add(tl)
    })

    // gsap.from(".card", { opacity: 0 })
    // gsap.from(".card", { opacity: 1, direction: 1, opacity: 0, y: "100px", stagger: 0.24, delay: .2 })
    const cardTl = gsap.timeline()
    // cardTl.from(".main", { delay: 0.2 })
    cardTl.from(".card", { opacity: 1, direction: 1, opacity: 0, y: "100px", stagger: 0.24 , delay:.23})

  })




  return (
    <div className="App">
      <header className="App-header">
        <h1>Tools for  <br className="breakHr" />  <span className="toolsFor"></span> <span className="typer">{"|"}</span></h1>
        <h1>That's all.</h1>
        <p>Design is a part of the communication arts, design is something you plan to create, it communicates to the viewer or user a visual and emotional message to change or 
        guide through an emotional connection with a product or service. enhancing their experience of the product or brand.</p>
      </header>
      <main className="main">

        <div className="card" >
          <div className="card_text">
            <h3>{data[0].title}</h3>
            <p>{data[0].content}</p>
          </div>
          <div className="card_media">
            <img src={one} alt="" width="100%" />
          </div>
        </div>

        <div className="card" >
          <div className="card_text">
            <h3>{data[1].title}</h3>
            <p>{data[1].content}</p>
          </div>
          <div className="card_media">
            <img src={two} alt="" width="100%" />
          </div>
        </div>

        <div className="card" >
          <div className="card_text">
            <h3>{data[2].title}</h3>
            <p>{data[2].content}</p>
          </div>
          <div className="card_media">
            <img src={three} alt="" width="100%" />
          </div>
        </div>
        <div className="card" >
          <div className="card_text">
            <h3>{data[3].title}</h3>
            <p>{data[3].content}</p>
            <a href="https://absurd.design/">Illustration by Absurd.design</a> <br />
            <a href="https://dribbble.com/shots/9438502-Designers-Stash">Design inspiration by Søren Clausen </a>

          </div>
          {/* <div className="card_media">
            <img src={three} alt="" width="100%" />
          </div> */}
        </div>

      </main>
    </div>
  );
}

export default App;
