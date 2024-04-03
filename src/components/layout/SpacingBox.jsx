import styled from "styled-components";





const SpacingBox = ({ children, classes }) => {

    const Wrapper = styled.div`
        box-sizing: border-box;
        ${(props) => props.classes ? classes: ''}
    }
    `



    return (
        <Wrapper classes={classes}>
            {children}
        </Wrapper>
    )
}

export default SpacingBox
