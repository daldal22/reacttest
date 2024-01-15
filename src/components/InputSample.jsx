import { useRef, useState } from "react"

export default function InputSample(){
    const [statement, setStatement] = useState("");
    const [inputs, setInputs] = useState({
        name:'', age:'', gender:''
    });

    const nameInput = useRef()
    

    const {name,age,gender} = inputs

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value, // 변수로서의 name
        });
        
    }

    const onClick = (e) => {
        setStatement(`이름:${name} 나이:${age} 성별:${gender}`);
        setInputs({name: '', age: '', gender: ''});
        nameInput.current.focus();
    }

    return(
        <>
        <div>
        <input name="name" ref={nameInput} onChange={onChange} value={name} placeholder="이름" />
        <input name="age" onChange={onChange} value={age} placeholder="나이" />
        <input name="gender" onChange={onChange} value={gender} placeholder="성별" />
            <button onClick={onClick}>confirm</button>
        </div>
        <h2>
            값:{statement}
        </h2>
        </>
    )
}

//(e)=>setInput(e.target.value)