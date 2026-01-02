import { useState } from "react"; 
// 유즈 스테이트는 한개의 페이지에 여러개 사용 가능하다. 
const Page3 = () => {
    const [ array, setArray] = useState([])
    const [ txt, setTxt] = useState('') 
    const submitEvent = e => {
        e.preventDefault()
        // 위의 프리벤트디폴트는 폼의 서브밋이벤트를 막는것 (페이지 이동을 하면서 번쩍거리고 뒤에 ?의 쿼리스트링 실행되는 행위) => 그리고 프리벤트디폴트는 리액트 기술 아니고 자바스크립트 기술이다. ==> 폼사용하면 그 이후 로직 사용시 필수라 생각하라
        if(txt === '') return
        // 입력된 값이 빈칸이면 자동스레 리턴된다=> 인풋에 값이 없을때 무조건 작동된다. =>화면 출력을 위해 쓴다 이번에서는 자바스크립트 로직.  
        setArray([txt, ...array])
        //값 변경한다. [txt, ...array]는 전체로 봤을때([]) 인자값이다. 그리고 데이터 정렬이 setarray 에서 배열 인자 내의 순서에 따라 바뀔 수 있다. [txt, ...array] or [...array, txt] 가능
        setTxt('')
        // 기존에 있었던 내용을 서브밋하고 내용을 초기화 할때 사용하는 것
    }
    console.log("txt :", txt)
    return (
        // 기본적으로 폼을 사용해서 submit이 이용될때 어딘가로 이동하려는 역할이 있다 그래서 번쩍거리고 뒤에 ?의 쿼리스트링 실행된다 
        <form onSubmit={submitEvent}> 
            <input type="text" placeholder="글 작성하세요."
                defaultValue={txt} onChange={(e)=>{
                    console.log("input :", e.target.value)
                    setTxt(e.target.value)
                    //이 부분들 다시 한 번  스스로 구동하는것 콘솔로그로 확인하고 설명할 수 있게 하자.
                }}
                />
                
            <button type="submit">입력</button>        
            <div>
                {
                    array.toReversed().map((v,i) => <p key={i}>{v}</p>)
                }
                 {/* 배열의 순서를 바꾸는 함수 toreversed있다. 나중에 데이터 처리 과정에 있어서 이를 오름차순 내림차순 바꿀 때 사용할 수 있다. 리액트에서만 사용 ? 아님 자바스크립트도 가능? */}
            </div>
        </form>
    )
}


//    value={txt} onChange={e => setTxt(e.target.value)}/> /*인풋은 벨류가 있다.*/ 그리고 읽기전용을 쓰려면 밸류 말고 디폴트 밸류를 사용한다. 디폴트 밸류하려면 리드온리를 사용해야 된다.
//   arr은 참조형 값이고 그래서 저장하는 공간이 있다 생각하면된다.


// 주석으로 단계화 시키는 글을 쓰고 코드를 생성해도 된다.

export default Page3