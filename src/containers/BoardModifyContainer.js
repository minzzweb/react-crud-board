import React, { useEffect, useState } from "react";
import BoardModifyForm from "../components/BoardModifyForm";
import { Await, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as client from "../lib/api";

// 수정 컨테이너 컴포넌트
//게시글 수정 기능을 수행하고 게시글 수정 폼 컴포넌트를 표시한다.
const BoardModifyContainer = () => {
  const { boardNo } = useParams();
  const navigate = useNavigate();

  //컴포넌트 상태 선언
  const [board, setBoard] = useState(null);
  const [isLoading, setLoading] = useState(false);

  //수정처리
  const onModify = async (boardNo, title, content) => {
    try {
      await client.modifyBoard(boardNo, title, content);
      alert("수정되었습니다.");

      navigate("/read/" + boardNo);
    } catch (e) {
      console.log(e);
    }
  };

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

  //마운트될 때 게시글 상세정보를 가져옴
  useEffect(() => {
    readBoard(boardNo);
  }, []);

  return (
    <BoardModifyForm board={board} isLoading={isLoading} onModify={onModify} />
  );
};

export default BoardModifyContainer;
