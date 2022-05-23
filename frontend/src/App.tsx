import { Button, Stack } from '@mui/material'
import { VFC } from 'react'
import { Link } from 'react-router-dom'
import { css } from "@emotion/react";

const style = css`
  background-color: blue;
  &:hover {
    background-color: red;
  }
`;

const App: VFC = () => (
  <div className="App">
    Home画面
    <nav>
      <ul>
        <li>
          <Link to="list">タスク一覧ページへ</Link>
        </li>
        <li>
          <Link to="register">タスク登録ページへ</Link>
        </li>
      </ul>
    </nav>
    <h2>サンプルスタイル</h2>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained" css={style}>ボタン</Button>
    </Stack>
  </div>
)

export default App
