import React, { useState, useRef } from 'react';


interface Person {
    firstName: string;
    lastName: string
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string
    person: Person
    //handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}
interface TextNode {
    text: string
}

export const TextField: React.FC<Props> = (
    //{ handleChange }
) => {
    const [input, setInputValue] = useState<number | null | undefined | string>()
    // const [text, setText]=useState<{text: string}>({text:"Hello"})
    const [text, setText] = useState<TextNode>({ text: "Hello", })
    const inputRef = useRef<HTMLInputElement>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value)
    }
    console.log("input:", input)
    console.log("ref:", inputRef.current?.value)
    return (
        <div>
            <input ref={inputRef}
                // onChange={(
                //     ev: React.ChangeEvent<HTMLInputElement>,
                // ): void => setInputValue(ev.target.value)} 
                onChange={handleChange}
            />
        </div>
    )
}
