import KnowHowList from "../knowhow/KnowHowList.jsx";
import styled from "styled-components";
import tw from "twin.macro";
import ListWrapper from "../list/ListWrapper";
import {Outlet} from "react-router-dom";

import $ from 'jquery'
import {useEffect, useLayoutEffect} from "react";


const PageWrapper = styled.section`
  height: 100%;
`

const Home = () => {

    useLayoutEffect(() => {
        let main = document.getElementById('zd')

        // console.log($(document))

        // const jquery = document.createElement('script');
        // jquery.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        // jquery.async = true;

        $(document).ready(() => {
            const script = document.createElement('script');
            script.src = 'https://cdn.pickkoadmin.com/zaksimdisplay1/ZaksimDisplay.js?spn=11'
            script.async = true;

            script.onload = function() {
                main.style.display = 'inline'
            }

            script.onerror = function() {
            }

            main.appendChild(script)
        })
        // main.appendChild(jquery)

    },[])




    return (
        <>
            <PageWrapper>
                <div id='zd'>
                </div>
                {/*  TODO: 데이트 피커 (날짜별로 보기) */}
                {/*  TODO: 조회수  */}

                {/* TODO: 리스트   */}
                {/*<KnowHowList />*/}

                <ListWrapper />

            </PageWrapper>
        </>
    )
}

export default Home
