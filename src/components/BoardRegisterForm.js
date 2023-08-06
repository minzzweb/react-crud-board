import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

function BoardRegisterForm({ onRegister }) {
  //폼 입력 요소 처리
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");

  //title 상태값 변경

  const handleChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleChangeContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const handleChangeWriter = useCallback((e) => {
    setWriter(e.target.value);
  }, []);

  //등록 이벤트 처리
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      //등록 처리 함수 호출
      onRegister(title, content, writer);
    },
    [title, content, writer, onRegister]
  );

  return (
    <div aglign="center">
      <h2>게시판 등록</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <input type="text" value={title} onChange={handleChangeTitle} />
              </td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>
                <input
                  type="text"
                  value={writer}
                  onChange={handleChangeWriter}
                />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea
                  rows="5"
                  value={content}
                  onChange={handleChangeContent}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="sumbit">등록</button>
          <Link to="/">취소</Link>
        </div>
      </form>
    </div>
  );
}

export default BoardRegisterForm;
