import { useNavigate } from 'react-router-dom';


export default function LoginButton(props){
    const navigate = useNavigate();
    function login(){
        setTimeout(() => {
            navigate('/')
        }, 1000 );
    }

    return <button onClick={login}>로그인 하기 </button>
}