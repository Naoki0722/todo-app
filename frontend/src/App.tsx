import { VFC } from 'react'
import { Link } from 'react-router-dom'

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
  </div>
)

export default App
