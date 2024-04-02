import { createEditor } from 'slate'
import {Slate, withReact, Editable } from "slate-react";
import {useMemo} from "react";


const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },
]

const MakeKnowhow = () => {

    const editor = useMemo(() => withReact(createEditor()), [])

    return (
        <>
            <div>
                <button
                    onClick={() => {}}
                    type='button'
                >이전으로</button>
            </div>
            <Slate editor={editor} initialValue={initialValue}>
                <Editable />
            </Slate>
        </>
    );
};

export default MakeKnowhow;
