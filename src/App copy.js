import Calc from "./components/Calc";

export default function App(){
  return(
    <div>
      <Calc isAdmin={true}/>
    </div>
  ) 
};

// 1. 리턴 값이 하나의 엘리먼트로 묶여있어야 한다.
// 안에 또 div로 묶어도 되는데 꼭 하나의 엘리먼트로 바깥에 묶어놔야함

// 2. empty fragment를 사용해서 div를 대체할 수 있다. 맨 바깥 div 빈괄호<></>로 사용가능
// 3. 컴포넌트는 <컨포넌트명 /> 과 같은 방식으로 셀프클로징 해야한다

