import React,{useRef,useState} from "react";

export default function UseRefTest2() {
    const [name,setName] = useState("");
    const inputRef = useRef(null);

    return (
        <>
        <h2>UseRefTest2</h2>
        {/* useRef 변수는 현재 엘리먼트를 연결시키고 있음 */}
        <input 
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        
        <div>이름: {name}</div>

        <button onClick={() => inputRef.current.focus()}>포커스</button>
        </>
    )
}