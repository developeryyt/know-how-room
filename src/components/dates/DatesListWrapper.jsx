import DATES from './index.js'
import styled from "styled-components";
import i18n from "../../utils/i18n.js";
import {observer} from "mobx-react";
import {useCallback} from "react";


const DatesListWrapper = observer(() => {

    const DateWrapper = styled.div`
    `

    const DateInfo = styled.div`
        display: flex;
        padding: 10px 20px;
        gap: 8px;
    `

    const InfoWrapper = styled.div`
        display: flex;
        
    `

    const updateDates = useCallback((e) => {
        const { target: { value, name } } = e;
        DATES.updatesDate({
            ...DATES.selectedDate,
            [name]: parseInt(value)
        })
    }, [DATES.selectedDate['year'], DATES.selectedDate['month']])



    return (
        <DateWrapper>
            <DateInfo>
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
                        defaultValue={DATES.selectedDate?.['month']}
                    >
                        {
                            DATES.monthSelect?.map((mth) => {
                                return <option key={`month__${mth}`} value={mth}>{parseInt(mth)}월</option>
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
                <ul className='px-20 pb-10'>
                    {
                        (DATES?.dateArr || [])?.map(({dd, ee}, idx) => {
                            let restDay = ee === '일' ? 'text-red-500' : ee === '토' ? 'text-blue-500' : ''

                            return (
                                <li key={`day__${idx}`} className='mb-4 last:mb-0'>
                                    <button
                                        type='button'
                                        onClick={() => {
                                        }}
                                        className={`${restDay} text-14`}
                                    >{dd}일 ({ee})
                                    </button>
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
