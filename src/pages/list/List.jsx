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
        },
        {
            id: '560FD674-B76C-43DD-9746-B780C719FC15',
            title: '대제목',
            thumbnail: '',
            desc: {
                conts: '내용내용내용내용내용내용내용내용내용내용',
                itCreate: format(new Date(), 'yyyy-MM-dd'),
                itUpdate: format(new Date(), 'yyyy-MM-dd'),
            }
        },
        {
            id: 'CDDBD13E-B8A3-4AD8-B825-BB8DFC71FBF9',
            title: '대제목',
            thumbnail: '',
            desc: {
                conts: '내용내용내용내용내용내용내용내용내용내용',
                itCreate: format(new Date(), 'yyyy-MM-dd'),
                itUpdate: format(new Date(), 'yyyy-MM-dd'),
            }
        },
        {
            id: 'C4614D9A-5C24-4573-ADFA-1EA63DAB2933',
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
        <ul className='grid gap-14 lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1'>
            {
                store?.map((list) => {
                    return (
                        <li key={list['id']} className='min-h-[240px] border-box'>
                            <Link to={`/detail/${list['id']}`} className='block'>
                                <div>
                                    <div className='thumbNail'>
                                        <img src={dummy} alt='썸네일' className='w-full h-full align-middle object-cover'/>
                                    </div>
                                    <dl className='px-6 py-6 border-b border-l border-r border-1 border-box'>
                                        <dt className='text-18 font-[600] text-[#212529] pb-5'>{list['title']}</dt>
                                        <dd className='text-14 truncate text-[#495057] pb-6'>{list['desc']['conts']}</dd>
                                        <dd className='text-12 text-[#868e96]'>최종수정알: {list['desc']['itCreate']}</dd>
                                    </dl>
                                </div>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default List;
