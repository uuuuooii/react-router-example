import { useParams } from "react-router-dom";

export default function Profile(props) {
    const id = useParams();
    console.log(id.id,typeof id)
    return (
        <div> 
            <h2>Profile 페이지 입니다.</h2>
            {id && <p>id는 {props.id}입니다.</p>}
        </div>
    );
}