import Dates from './index.js'
import classNames from "classnames";
import tw from "twin.macro";
import styled from "styled-components";
import i18n from "../../utils/i18n.js";
import {observer} from "mobx-react";
import DATES from "./index.js";



const DatesListWrapper = observer(() => {

    const DateWrapper = styled.div`
    `

    const DateInfo = styled.div`
      display: flex;
      gap: 8px;
      justify-content: center;
    `

    const InfoWrapper = styled.div`
    `



    return (
        <DateWrapper>
            <DateInfo>
                <button
                    type='button'
                    onClick={() => {
                        DATES?.prevYear()
                    }}
                >{i18n.t("Prev Year")}</button>
                <button
                    type='button'
                    onClick={() => {
                        DATES?.prevMonth()
                    }}
                >{i18n.t("Prev Month")}</button>
                <select
                    onChange={(e) => {

                    }}
                    defaultValue={DATES.selectedDate?.['year']}
                >
                    {
                        DATES.yearSelect?.map(year => {
                            return <option value={year} selected={DATES.selectedDate['year'] === year}>{year}년</option>
                        })
                    }
                </select>
                <select
                    onChange={() => {}}
                    defaultValue={DATES.selectedDate?.['month'] + 1}
                >
                    <option value={DATES.selectedDate?.['month'] + 1}>{DATES.selectedDate?.['month'] + 1}월</option>
                </select>
                <button
                    type='button'
                    onClick={() => {
                        DATES?.nextMonth()
                    }}
                >{i18n.t("Next Month")}</button>
                <button
                    type='button'
                    onClick={() => {
                        DATES?.nextYear()
                    }}
                >{i18n.t("Next Year")}</button>
            </DateInfo>
            <InfoWrapper>
                <ul>
                    {
                        (DATES?.dateArr || [])?.map(({ dd, ee }, idx) => {

                            let restDay = ee === '일' ? 'text-red-500' : ee === '토' ? 'text-blue-500' : ''

                            return (
                                <li key={`day__${idx}`}>
                                    <button
                                        type='button'
                                        onClick={() => {

                                        }}
                                        className={restDay}
                                    >{dd}일 ({ee})</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </InfoWrapper>
        </DateWrapper>
    )
})

export default DatesListWrapper
