import { useNavigate } from "react-router-dom"; // (1) useNavigate를 import한다. 
import "./List.css";

const List = () => {

  const navigate = useNavigate(); 

  const dummyList = [
    {
      id: 1,
      title: "1번 게시글",
    },
    {
      id: 2,
      title: "2번 게시글",
    },
    {
      id: 3,
      title: "3번 게시글",
    },
    {
      id: 4,
      title: "4번 게시글",
    },
    {
      id: 5,
      title: "5번 게시글",
    },
  ];

  return (
    <div>
      <h1>List</h1>
      <p>이곳은 리스트페이지입니다.</p>
      <div className="list-container">
        {dummyList.map((it) => ( // (2) 클릭 이벤트에 경로 설정해주기
          <div key={it.id}>
            <div className="list-box" onClick={() => { navigate(`/detail/${it.id}`); }}>{it.title}</div> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;