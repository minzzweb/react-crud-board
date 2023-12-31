import React from "react";
import { Link } from "react-router-dom";

//목록 컴포넌트
//게시글 목록, 로딩여부를 컴포넌트 속성으로 전달받음
function BoardList({ boards, isLoading }) {
  return (
    <div align="center">
      <h2>게시판 목록</h2>
      <Link to="/create">새로 만들기</Link>
      {isLoading && "로딩중..."}
      {!isLoading && boards && (
        <table border="1">
          <thead>
            <tr>
              <th align="center" width="80">
                번호
              </th>
              <th align="center" width="320">
                제목
              </th>
              <th align="center" width="100">
                작성자
              </th>
              <th align="center" width="180">
                등록일시
              </th>
            </tr>
          </thead>
          <tbody>
            {!boards.length && (
              <tr>
                <td colSpan="4">List is empty.</td>
              </tr>
            )}
            {!!boards.length &&
              boards.map((board) => (
                <tr key={board.boardNo}>
                  <td align="center">{board.boardNo}</td>
                  <td align="left">
                    <Link to={`/read/${board.boardNo}`}>{board.title}</Link>
                  </td>
                  <td align="right">{board.writer}</td>
                  <td align="center">{board.regDate}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BoardList;
