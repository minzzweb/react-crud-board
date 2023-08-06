import axios from "axios";

//axios => 서버 api 호출
//게시글 등록 API
export const registerBoard = (title, content, writer) =>
  axios.post("/boards", { title, content, writer });

//게시글 상세 조회  API
export const fetchBoard = (boardNo) => axios.get(`/boards/${boardNo}`);

//게시글 목록 조회 API
export const fetchBoardList = () => axios.get("/boards");

//게시글 삭제
export const removeBoard = (boardNo) => axios.delete(`/boards/${boardNo}`);

//게시글 수정
export const modifyBoard = (boardNo, title, content) =>
  axios.put(`/boards/${boardNo}`, { title, content });
