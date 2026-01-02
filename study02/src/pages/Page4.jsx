import {useState} from "react" 
const Page4 = () => {
    const a =[]
    a[0] = 1
    const b =[]
    b[0] = 2
    const d = [b[0]]
    const c = [...a]
    // ...을 쓰면 값을 직접 꺼내 쓴다 -> 저장된 위치가 새로 바뀐다. 리액트에서쓰인다 깊은복사라고도 부른다. 
    // -> 리액트를 쓸때 저장된 위치를 바꾼다는 표현형이 c,d 의 표현이 되면 state가 교체된 것 처럼 인식된다. 그리고 배열 위치에 따라 그대로 된다. 앞에 해도 되고 뒤에해도 된다.
    // 그럼 배열은 여러번 담을 수 있는가 아님 한번까지만 더 담을 수 있는가? 배열에서 , 뒤에 있는거는 뒤로 이동한다 한다.
    c[0] =3
    console.log(a,b,c)

    return (
        <>
        
        </>
    )
}

export default Page4