import React, {memo, useCallback, useMemo, useState} from "react";


export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['HTML', 'JS', 'React', 'MongoDB'])


    // const addBook = () => {
    //     console.log(books)
    //     const newBooks = [...books, 'Angular' + new Date().getTime()]
    //     setBooks(newBooks)
    // }
    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

const memoizedAddBook2 = useCallback(() => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)

    }, [books])

    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>

            {counter}
            <Book addBook={ memoizedAddBook2}/>
        </div>
    )
}
type BookSecretPropsType = {
    addBook: () => void
}
const BooksSecret = (props: BookSecretPropsType) => {

    console.log("BooksSecret")
    return <div>
        <button onClick={() => {
            props.addBook()
        }}>add book
        </button>
    </div>

}
const Book = memo(BooksSecret)

function setBooks(newBooks: any[]) {
    throw new Error("Function not implemented.");
}
