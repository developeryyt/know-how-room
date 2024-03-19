import tw, { styled } from "twin.macro";
import {useState} from "react";


const Box = styled.div(({ action }) => [
    tw`text-3xl`,
    action && tw`bg-black opacity-100`,
    'color: #fff'
])



function App() {

    const [a, ] = useState(true)

    return (
        <Box action={a}>
            123
        </Box>
    )
}

export default App
