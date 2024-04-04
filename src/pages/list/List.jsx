import SpacingBox from "../../components/layout/SpacingBox.jsx";
import {Link} from "react-router-dom";
import {format} from "date-fns";

const List = () => {


    const store = [
        {
            id: 'E851A474-FB03-4D77-B34E-8428F0C8CCCB',
            title: '대제목',
            thumbnail: '',
            desc: {
                conts: '내용내용내용내용내용내용내용내용내용내용',
                itCreate: format(new Date(), 'yyyy-MM-dd'),
                itUpdate: format(new Date(), 'yyyy-MM-dd'),
            }
        },
        {
            id: 'B6F2D3D4-EA6B-4A54-9412-3611040AF9E1',
            title: '대제목',
            thumbnail: '',
            desc: {
                conts: '내용내용내용내용내용내용내용내용내용내용',
                itCreate: format(new Date(), 'yyyy-MM-dd'),
                itUpdate: format(new Date(), 'yyyy-MM-dd'),
            }
        },
        {
            id: 'E00B323F-BD6A-485D-899C-D55B99CAD96E',
            title: '대제목',
            thumbnail: '',
            desc: {
                conts: '내용내용내용내용내용내용내용내용내용내용',
                itCreate: format(new Date(), 'yyyy-MM-dd'),
                itUpdate: format(new Date(), 'yyyy-MM-dd'),
            }
        },
        {
            id: 'B4EC89CF-3ACB-458C-8933-39FBBD71F664',
            title: '대제목',
            thumbnail: '',
            desc: {
                conts: '내용내용내용내용내용내용내용내용내용내용',
                itCreate: format(new Date(), 'yyyy-MM-dd'),
                itUpdate: format(new Date(), 'yyyy-MM-dd'),
            }
        }
    ]


    return (
        <SpacingBox classes={{ paddingTop: '20px' }}>
            <ul className='grid gap-14 lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1'>
                {
                    store?.map((list) => {
                        return (
                            <li key={list['id']} className='border-1 border-red-300'>
                                <Link to={`/detail/${list['id']}`} className='block'>
                                    <div>
                                        <div className='thumbNail'>
                                            <img src={list['thumbnail']} alt='썸네일'/>
                                        </div>
                                        <dl>
                                            <dt>{list['title']}</dt>
                                            <dd>{list['desc']['conts']}</dd>
                                            <dd>최종수정알: {list['desc']['itCreate']}</dd>
                                        </dl>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </SpacingBox>
    );
};

export default List;
