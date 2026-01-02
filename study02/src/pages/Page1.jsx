import {useState} from "react" /*화면의 값이 교체되면 이를 다시 초기화 설정시키기 위해 사용하는 것 리액트에서는 그냥 변수를 담으면 안되고 유즈스테이트에 데이터를 담아 관리한다.*/

const Page1 = () => {
    const [data/*내가 바꿀수 없고 읽기전용 변수이다 => 상수라 생각하면된다*/, setData/*data의 값을 함수로 처리해 값을 변화시키는 변수*/] = useState(0/*지금 설정해놓은 값을 data에 넣는다*/)
    let 변수 = 0 /* 초기화를 주기위해 사용한 것인데 이는 계속 초기화만 될뿐 데이터 담기는 불가하다*/
    // console.log( useState(/* 돌아오는것은 배열인데 첫번쨰는 초기값 설정이라 생각하면된다.*/))

    console.log(data, 변수)
    return (
        <>
        <button type="button" onClick={() => {setData(data + 1)}}>증가</button>
        </>
    )
}

export default Page1