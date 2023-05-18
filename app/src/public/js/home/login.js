"use strict"



const id = document.querySelector("#id"),
 pw = document.querySelector("#pw"),
 loginbtn = document.querySelector("button");


loginbtn.addEventListener("click",login);

 function login(){
    if(!id.value){return alert("아이디를 입력해주세요.")}
    if(!pw.value){return alert("비밀번호를 입력해주세요.")}
    // 클라이언트로 부터 넘겨받은 값 req
    const req = {
        id : id.value,
        psword : pw.value
    };

       fetch("/login", {
        method : "post",
        headers : {
            "Content-Type" : "application/json",
        },
        // req를 서버에 넘길 수 있는 형태로 변환 
        body : JSON.stringify(req),
    })
    .then((res) => {
        return res.json()
    })
    .then((res)=>{
        if ( res.success){
            location.href = "/"
        }
        else {
            alert(res.msg);
        }
    })
    .catch((error)=>
    {
        console.log(error);
    })
}