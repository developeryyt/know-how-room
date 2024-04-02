import KnowHowList from "../knowhow/KnowHowList.jsx";
import styled from "styled-components";
import tw from "twin.macro";


const PageWrapper = styled.section`
    ${tw`p-20`}
`

const Home = () => {


    return (
        <PageWrapper>
            {/*  TODO: 데이트 피커 (날짜별로 보기) */}
            {/*  TODO: 조회수  */}

            {/* TODO: 리스트   */}
            <KnowHowList />
        </PageWrapper>
    )
}

export default Home
