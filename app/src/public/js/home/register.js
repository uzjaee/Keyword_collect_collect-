"use strict"


const id = document.querySelector("#id"),
 nm = document.querySelector("#name"),
 pw = document.querySelector("#pw"),
 pw_confirm = document.querySelector("#pw-confirm"),
 registerbtn = document.querySelector("button");


registerbtn.addEventListener("click",register);

function register(){
    if(!id.value){ return alert("아이디를 입력해주세요.")}
    if (pw.value !== pw_confirm.value){return alert("비밀번호가 일치하지 않습니다.");}
    // 클라이언트로 부터 넘겨받은 값 req
    const req = {
        name : nm.value,
        id : id.value,
        psword : pw.value,
       
    };
    console.log(req);
    fetch("/register", {
        method : "post",
        headers : {
            "Content-Type" : "application/json",
        },
        // req를 서버에 넘길 수 있는 형태로 변환 
        body : JSON.stringify(req),
    }).then((res) =>res.json())   // 서버에 넘겨준 값을 이후 처리 
      .then((res)=> {
        if (res.success) {
            location.href ="/login"
        } else {
            alert(res.msg);
        }
      })
      .catch((err)=>{
         console.error("회원가입 중 에러 발생 ");
      })
}