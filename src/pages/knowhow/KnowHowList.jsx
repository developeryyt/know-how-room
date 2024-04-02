import {Link} from "react-router-dom";

const KnowHowList = () => {


    const lists = [
        {
            id: '5C132664-5E31-4B8C-8C50-5F5D4993A2BB',
            desc: {
                title: '제목',

            }
        },
        {
            id: '5A0C7758-B1B4-4384-9E92-9B9125FC39A3',
            desc: {
                title: '제목'
            }
        }
    ]

    return (
        <ul>
            {
                lists?.map((list) => {
                    return (
                        <li key={list['id']}>
                            <Link to='/'>

                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default KnowHowList
