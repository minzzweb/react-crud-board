import React, { useState, useEffect } from "react";
import * as client from "../lib/api"; // 모듈 물러오기
import BoardList from "../components/BoardList";

// 목록조회 컨테이너 컴포넌트
const BoardListContainer = () => {
  //게시판 목록,로딩여부
  const [boards, setBoards] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const listBoard = async () => {
    setLoading(true);
    try {
      const response = await client.fetchBoardList();
      setBoards(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw e;
    }
  };
  //브라우저상에 컴포넌트가 나타낼 때 게시글 목록을 조회하는 함수를 실행한다.
  useEffect(() => {
    listBoard();
  }, []);

  return <BoardList boards={boards} isLoading={isLoading} />;
};

export default BoardListContainer;
