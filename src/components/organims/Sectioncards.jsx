import mysql from "../../data/mysql"
import Title from "../atoms/Title"
import Cards from "../molecules/Cards"

function Sectioncards() {
  return (
    <div id="grano" className="py-8">
      <div className="mb-6 text-center">
        <Title text="El grano más rico está en estos lugares..." />
      </div>
      <div className="grid grid-cols-3 gap-8 text-center">
        {
          mysql.Cards.map(cards => (
            <div className="flex flex-col items-center" key={cards.id}>
              <Cards icons={cards.icons} text={cards.text} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sectioncards