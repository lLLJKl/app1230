import {useState} from "react" 
const Page2 = () => {
    const [num, setNum] = useState(0)
    let 변수 = 0
    const event = () => {
        변수 = 변수 + 1 /* 변수 변하지않는 이유 설명키 위해 */
        setNum(num + 1)
    }
    return (
        <>
        <span style={{margin: '0 10px'}}>변수 : {변수} </span> /* 변수 변하지않는 이유 설명키 위해 */
        <span style={{margin: '0 10px'}}>번호 : {num} </span>
        <button type="button"
                style={{cursor: 'pointer'}}
                onClick={event}>상태값 변경</button>
        </>
    )
}

export default Page2