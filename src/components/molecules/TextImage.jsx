import Images from "../atoms/Images"
import Text from "../atoms/Text"

function TextImage(props) {
  return (
    <div>
       <Images image={props.img} ></Images>
        <Text text={props.text} />
        <Text text={props.text2} />
        <Text text={props.text3} />
       
    </div>
  )
}

export default TextImage