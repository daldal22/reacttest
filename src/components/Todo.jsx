import { useState } from "react";

export default function Todo({ todo, onToggle, onRemove, onEdit }) {
  let { id, done } = todo;
  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState(todo.content);
  const [originalContent, setOriginalContent] = useState(todo.content);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    if (!editContent.trim()) {
      return;
    }
    onEdit(id, editContent);
    setEdit(false);
  };

  const handleCancel = () => {
    setEditContent(originalContent);
    setEdit(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={done}
        onChange={() => onToggle(id)}
        onRemove={onRemove}
      />
      {edit ? (
        <>
          <input
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <button onClick={handleSave} disabled={!editContent.trim()}>
            저장
          </button>
          <button onClick={handleCancel}>취소</button>
        </>
      ) : (
        <>
          <span>{todo.content}</span>
          <button onClick={handleEdit}>수정</button>
        </>
      )}
      <button onClick={() => onRemove(id)}>삭제</button>
    </li>
  );
}


// 유효성 검사를 해야함 trim해서 값이 없으면 기존 content 값을 쓰거나 값을 입력해주세요 이런 메세지 아니면 아예 저장 버튼을 못 누르게
// 취소 버튼 눌러서 값 원래대로 돌려놓게 저장 버튼을 취소버튼으로 바꾸기
// 이벤트핸들러(자바스크립트)
// useEffect, useState, useMemo 이렇게 알아오기
// 리콜 문서 읽어보기(유즈메모 보다 먼저 알아오기)