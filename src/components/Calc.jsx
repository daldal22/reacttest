import { useState } from "react"
import Btn from "./Btn"

export default function Calc({name, isAdmin}){
    const[number,setNumber] = useState(0)

    // [변수 1, 변수2] = [0 , 1]
    // 변수1 = 0
    // 변수2 = 1

    // useState(초기값) => [초기값, 초기값을 변경해줄 수 있는 함수]
    // update 1 : 값을 입력 => 즉시 state에 해당 값이 할당되는 형식
    // update 2 : 값 중에서도 함수를 입력하는 함수형 업데이트
    //           => (state) => {return 업데이트 값}
    

    return(
    <>
    <h1>{isAdmin ? <Btn name="setting"/> : ""}Hello, {name}</h1>
    <h2>{number}</h2>
    <div>
    <input type="text" disabled/>
    <Btn color="#fff" name="+" func={()=>{setNumber(num => num + 1)}}/>
    <Btn color="skyblue" name="-" func={()=>{setNumber(number-1)}}/>
    <Btn color="red" name="reset" func={()=>{setNumber(0)}}/>
    </div>
    </>
    )
}

Calc.defaultProps = {
    name: "이름없음"
}

// props = property의 줄임말
// defaultProps의 역할 : 매개변수의 디폴트 값을 정해줌
// 삼항연산자에서 컴포넌트도 값이기 때문에 넣어줄 수 있다 15번째 줄 참고