import { useParams } from "react-router-dom";
import "./Detail.css";



const Detail = () => {
  
  const {id} = useParams();

  const dummyDetail = [
    {
      id: 1,
      title: "1번 게시글",
      content: "1번 내용입니다."
    },
    {
      id: 2,
      title: "2번 게시글",
      content: "2번 내용입니다."
    },
    {
      id: 3,
      title: "3번 게시글",
      content: "3번 내용입니다."
    },
    {
      id: 4,
      title: "4번 게시글",
      content: "4번 내용입니다."
    },
    {
      id: 5,
      title: "5번 게시글",
      content: "5번 내용입니다."
    },
  ];

  const targetData = dummyDetail.find(
    (it) => parseInt(it.id) === parseInt(id)
  );

  return (
    <div>
      <h1>Detail</h1>
      <p>이곳은 상세페이지입니다.</p>
      <div className="detail-container">

            <h2 className="detail-title">{targetData.title}</h2>
            <div className="detail-content">{targetData.content}</div>
          </div>

      </div>

  );
};

export default Detail;
