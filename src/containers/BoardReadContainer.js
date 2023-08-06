import React, { useState, useEffect } from "react";
import BoardRead from "../components/BoardRead";
import * as client from "../lib/api";
import { Await, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//URL 파라미터 처리
//URL 파라미터를 사용하는 경우 라우더로 사용된 컴포넌트에서 수신되는
const BoardReadContainer = () => {
  const { boardNo } = useParams();
  const navigate = useNavigate();

  //게시글 정보, 로딩여부 상태를 선언한다.
  const [board, setBoard] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // 게시글 상세 조회
  const readBoard = async (boardNo) => {
    setLoading(true);
    try {
      const response = await client.fetchBoard(boardNo);

      setBoard(response.data);

      setLoading(false);
    } catch (e) {
      throw e;
    }
  };

  //삭제 처리 함수 정의
  const onRemove = async () => {
    console.log("boardNo = " + boardNo);

    try {
      //게시글 삭제 API 호출
      await client.removeBoard(boardNo);
      alert("삭제되었습니다.");

      //목록화면으로 이동
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  //마운트될 때 게시글 상세정보를 가져옴
  useEffect(() => {
    readBoard(boardNo);
  }, [boardNo]);

  return (
    <BoardRead
      boardNo={boardNo}
      board={board}
      isLoading={isLoading}
      onRemove={onRemove}
    />
  );
};

export default BoardReadContainer;
