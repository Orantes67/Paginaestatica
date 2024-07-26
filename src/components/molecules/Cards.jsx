import Images from "../atoms/Images"
import Text from "../atoms/Text"


function Cards(props) {
return (
    <div>
        <Images image={props.icons}></Images>
        <Text text={props.text}></Text>
    </div>
)
}

export default Cards