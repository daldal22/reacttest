export default function Btn({name,func,color}){
    return (<button style={{background:color}} onClick={func}>{name? name : "button"}</button>)

    // 리턴값에 값을 적으려면 항상 중괄호 써야함
    // 값에 들어가면 안 되는 것:
    // if, for문
    // 값에 들어갈 수 있는 것:
    // 함수, 삼항 조건 연산자
}