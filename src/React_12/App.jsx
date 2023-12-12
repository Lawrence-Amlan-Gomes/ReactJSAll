import Text2 from "./Composition/Text2"
import Emoji2 from "./Composition/Emoji2"
import Braket from "./Composition/Braket"

export default function App12() {
  return (
        <Emoji2>
          {({addEmoji})=>(
            <Braket>
              {({addBraket})=>(
                <div>
                  <Text2/><br></br>
                  <Text2 addBraket={addBraket}/><br></br>
                  <Text2 addEmoji={addEmoji}/><br></br>
                  <Text2 BraketEmoji={false} addEmoji={addEmoji} addBraket={addBraket}/><br></br>
                  <Text2 BraketEmoji={true} addEmoji={addEmoji} addBraket={addBraket}/><br></br>
                </div>
              )}
            </Braket>
          )}
        </Emoji2>
        
  )
}

