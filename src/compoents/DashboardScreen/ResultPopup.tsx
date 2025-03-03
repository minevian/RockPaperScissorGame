
import { RootState } from "../../Redux/store"
import PopupCard from "../common/PopupCard"
import { useSelector } from "react-redux"


const ResultPopup = () => {
    const {isGameOver} = useSelector((state:RootState) => state.game)
  return (
    <div>
        <PopupCard popupContent={undefined} isOpen={isGameOver} />

    </div>
  )
}

export default ResultPopup