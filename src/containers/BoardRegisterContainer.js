import React from "react";
import BoardRegisterForm from "../components/BoardRegisterForm";
import * as client from "../lib/api"; // 모듈 물러오기
import { useNavigate } from "react-router-dom";

// 등록 컨테이너 컴포넌트
//게시글 등록 기능을 수행하고 게시글 등록 폼 컴포넌트를 표시한다.
const BoardRegisterContainer = ({ history }) => {
  const navigate = useNavigate();

  //등록 처리, 정보 전달
  const onRegister = async (title, content, writer) => {
    try {
      //게시글 등록 서버 api 호출 함수 실행
      const response = await client.registerBoard(title, content, writer);
      alert("등록되었습니다.");

      //게시글 상세보기 페이지로 이동 (등록 처리)
      navigate("/read/" + response.data.boardNo);
    } catch (e) {
      console.log(e);
    }
  };

  //등록 처리 함수 전달
  return <BoardRegisterForm onRegister={onRegister} />;
};

// withRouter 함수를 사용하여 history 객체에 접근
export default BoardRegisterContainer;
