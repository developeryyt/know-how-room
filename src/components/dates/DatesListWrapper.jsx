import DATES from './index.js'
import styled from "styled-components";
import i18n from "../../utils/i18n.js";
import {observer} from "mobx-react";
import {useCallback, useEffect, useRef, useState} from "react";


const DatesListWrapper = observer(() => {

    const [topH, setTopH] = useState(0)
    const info = useRef()

    const DateWrapper = styled.div`
        height: 100%;
    `

    const DateInfo = styled.div`
        display: flex;
        padding: 10px 20px;
        gap: 8px;
    `

    const InfoWrapper = styled.div`
        display: flex;
        height: calc(100% - ${topH}px);
        
        .daypick {
            text-align: center;
            flex-basis: 140px;
        }
        
        .reserveList {
            flex-basis: 35%;
            padding: 0 15px;
            .btn_wrap {
                display: flex;
                justify-content: flex-end;
                gap: 6px;
            }
            
        }
        
        .reserveDetail {
            flex-basis: 65%;
            border-right: 0;
        }
        
        > * {
            overflow-y: auto;
            border-right: 1px solid black;
            box-sizing: border-box;
        }
        
    `

    const updateDates = useCallback((e) => {
        const { target: { value, name } } = e;

        // console.log(parseInt(value) + 1)
        DATES.updatesDate({
            ...DATES.selectedDate,
            [name]: parseInt(value)
        })
    }, [DATES.selectedDate['year'], DATES.selectedDate['month']])


    useEffect(() => {
        setTopH(info.current.clientHeight)
    }, [])


    return (
        <DateWrapper>
            <DateInfo ref={info}>
                <div>
                    <button
                        type='button'
                        onClick={() => {
                            DATES?.prevYear()
                        }}
                    >{i18n.t("Prev Year")}</button>
                    <select
                        name='year'
                        onChange={updateDates}
                        defaultValue={DATES.selectedDate?.['year']}
                    >
                        {
                            DATES.yearSelect?.map(year => {
                                return <option key={`years__${year}`} value={year}>{year}년</option>
                            })
                        }
                    </select>
                    <button
                        type='button'
                        onClick={() => {
                            DATES?.nextYear()
                        }}
                    >{i18n.t("Next Year")}</button>
                </div>

                <div>
                    <button
                        type='button'
                        onClick={() => {
                            DATES?.prevMonth()
                        }}
                    >{i18n.t("Prev Month")}</button>

                    <select
                        name='month'
                        onChange={updateDates}
                        defaultValue={DATES.selectedDate['month']}
                    >
                        {
                            DATES.monthSelect?.map((mth) => {
                                return <option key={`month__${mth}`} value={mth}>{parseInt(mth) + 1}월</option>
                            })
                        }
                        {/*<option value={DATES.selectedDate?.['month'] + 1}>{DATES.selectedDate?.['month'] + 1}월</option>*/}
                    </select>

                    <button
                        type='button'
                        onClick={() => {
                            DATES?.nextMonth()
                        }}
                    >{i18n.t("Next Month")}</button>

                </div>
            </DateInfo>
            <InfoWrapper>
                <ul className='daypick px-20 pb-10'>
                    {
                        (DATES?.dateArr || [])?.map(({dd, ee}, idx) => {
                            let restDay = ee === '일' ? 'text-red-500' : ee === '토' ? 'text-blue-500' : ''

                            return (
                                <li key={`day__${idx}`} className='mb-4 last:mb-0'>
                                    <button
                                        type='button'
                                        onClick={(e) => {
                                            console.log(e.target.textContent, dd, ee)
                                        }}
                                        className={`${restDay} text-14`}
                                    >{dd}일 ({ee})
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='reserveList'>
                    <div className='btn_wrap'>
                        <div>
                            <button
                                type='button'
                                onClick={() => {}}
                            >선택 항목 삭제</button>
                        </div>
                        <div>
                            <button
                                type='button'
                                onClick={() => {}}
                            >전체 삭제</button>
                        </div>
                    </div>

                    <div>
                        <ul>

                        </ul>
                    </div>

                </div>
                <div className='reserveDetail'>
                    <div className='w-[300px] h-[300px] bg-red-50 grid'>
                        <div className='w-[150px] h-[150px] bg-red-600 place-self-center'></div>
                    </div>
                </div>
            </InfoWrapper>
        </DateWrapper>
    )
})

export default DatesListWrapper
