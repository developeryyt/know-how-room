import{r as o,b as c,u,j as e}from"./index-Dtfs4zTk.js";import{u as x}from"./formik.esm-TAsHXv2q.js";const m=()=>{const{onLogin:l}=c(),n=u(),s=x({initialValues:{userId:"",userPw:""},validateOnChange:!1,validateOnBlur:!1,validate:r=>{const a={};return r.userId||(a.userId="필수 입력값입니다."),r.userPw||(a.userPw="필수 입력값입니다."),a},onSubmit:async(r,{setErrors:a})=>{const t=s.validateField({...r});a(t),Object.keys(t).length===0&&(i(),s.resetForm())}}),i=()=>{console.log("login 시도"),l({data:{id:s.values.userId,pw:s.values.userPw}})},d=()=>{n("/signup")};return e.jsx("div",{className:"login_wrapper make-center rounded-md p-20 shadow-lg min-w-[375px]",children:e.jsx("div",{className:"login",children:e.jsx("form",{onSubmit:r=>{r.preventDefault(),s.handleSubmit()},children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h1",{className:"text-24 pb-24 font-[800]",children:"KNOW-HOW"}),e.jsxs("div",{className:"pb-24",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block pr-12 pb-5 text-14 font-500",children:"아이디"}),e.jsx("input",{id:"userId",name:"userId",value:s.values.userId,onChange:s.handleChange,placeholder:"아이디를 입력해주세요.",type:"text",className:"ipt"})]}),s.errors.userId&&e.jsxs("div",{className:"text-red-500 text-xs",children:["*",s.errors.userId]})]}),e.jsxs("div",{className:"pb-24",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block pr-12 pb-5 text-14 font-500",children:"비밀번호"}),e.jsx("input",{id:"userPw",name:"userPw",type:"password",value:s.values.userPw,onChange:s.handleChange,placeholder:"비밀번호를 입력해주세요.",className:"ipt"})]}),s.errors.userPw&&e.jsxs("div",{className:"text-red-500 text-xs",children:["*",s.errors.userPw]})]}),e.jsxs("div",{className:"pb-24 text-right",children:[e.jsx("span",{className:"text-12 pr-2 text-gray-500",children:"혹시 아직 계정이 없으신가요?"}),e.jsx("button",{className:"text-14 border-b-1 border-b-blue-600 hover:border-b-red-700",onClick:d,type:"button",children:"회원가입"})]}),e.jsx("div",{children:e.jsx("button",{className:"btn ty_submit",type:"submit",children:"로그인"})})]})})})})},b=o.memo(m);export{b as default};
