"use strict"

const authcheck = document.cookie;
const authUi = document.querySelector("#authcheck");
const logIO = document.querySelector("#logIO");
if (authcheck){
    const userId = authcheck.split('=')[1];
    authUi.innerHTML = `User ID:  ${userId}`; 
    logIO.innerHTML= "<a href=/logout_process>로그아웃</a>";
}
else {
    logIO.innerHTML = '<a href=/login>로그인</a>';
};






// 키워드 등록을 위한 변수 및 상수 
const keyword_nm = document.querySelector("#keyword-nm"),
 keyword_cnt = document.querySelector("#keyword-cnt"),
 registerbtn = document.querySelector("#button");
registerbtn.addEventListener("click",keyword_register);

getKewordInfo();



// 키워드 목록 불러오기 
const keywordTableUI = document.querySelector("#keyword-table");
function tableHtml(data){
    var tablehtml = `
    <table border="1">
    <thead>
        <tr>
            <th>키워드</th>
            <th>관련키워드개수</th>
        </tr>
    </thead>
    <tbody>
    `;
    for (var i = 0; i<data.length; i++){
        var nm = data[i].keyword_nm;
        var count = data[i].keyword_cnt;
        tablehtml += `
        <tr>
        <td> ${nm} </td>
        <td> ${count}  </td>
        </tr>
        `
    }
    tablehtml +=`</tbody> </table>`
    return tablehtml;
}
function getKewordInfo(){
    fetch("/keywords",{
        method : "post",
        headers : {
            "Content-Type" : "application/json",
        },
        // req를 서버에 넘길 수 있는 형태로 변환 
    })
    .then((res) =>res.json())
    .then((data)=> {
        
        keywordTableUI.innerHTML = tableHtml(data);
        return data;
    })

}



// 키워드 등록 
function keyword_register(){
    if(!authcheck){
        return alert("로그인을 먼저해주세요.")
    }
    const req = {
        keyword_name : keyword_nm.value,
        keyword_count : keyword_cnt.value,
        user_id :document.cookie.split('=')[1],
    };
    fetch("/keyword_register",{
        method : "post",
        headers : {
            "Content-Type" : "application/json",
        },
        // req를 서버에 넘길 수 있는 형태로 변환 
        body : JSON.stringify(req),
    }).then((res) =>res.json())   // 서버에 넘겨준 값을 이후 처리 
    .then((res)=> {
      if (res.success) {
          location.href ="/"
      } else {
          alert(res.msg);
      }
    })
    .catch((err)=>{
       console.error("키워드 입력중 에러 발생 ");
    })
}
