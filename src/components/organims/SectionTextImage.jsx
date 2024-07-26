import mysql from "../../data/mysql"
import TextImage from "../molecules/TextImage"
import Title from "../atoms/Title";

function SectionTextImage() {
  return (
    <div id="ubicacion" className="flex flex-col items-center py-8">
      <div className="mb-6 text-3xl">
        <Title text="SI PUE COLOCHO" />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {
          mysql.ImgText.map(TextImg => (
            <TextImage key={TextImg.id} img={TextImg.img} text={TextImg.text} text2={TextImg.text2} text3={TextImg.text3} />
          ))
        }
      </div>
    </div>
  )
}

export default SectionTextImage
