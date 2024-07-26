import Images from "../atoms/Images"
import Buttons from "../atoms/Buttons"
function InteractiveImage(props) {
return (
    <div>
        <Images image={props.image}></Images>
        <Buttons name={props.name}></Buttons>
    </div>
)
}

export default InteractiveImage