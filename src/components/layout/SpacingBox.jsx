import styled from "styled-components";





const SpacingBox = ({ children, classes }) => {

    const Wrapper = styled.div`
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        
    `




    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default SpacingBox
