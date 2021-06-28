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
    console.log(input)
    return (
        <div>
            <input ref={inputRef}
                onChange={(
                    ev: React.ChangeEvent<HTMLInputElement>,
                ): void => setInputValue(ev.target.value)} />
        </div>
    )
}
