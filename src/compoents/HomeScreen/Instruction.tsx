
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import PopupCard from '../common/PopupCard'
import InstructionContainer from './InstructionContainer'

const Instruction = () => {
  const {isInstructionPopupOpen} = useSelector((state:RootState) => state.game)
  return (
    <div>
        <PopupCard popupContent={<InstructionContainer />} isOpen={isInstructionPopupOpen} />
    </div>
  )
}

export default Instruction