import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { VFC } from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'

function createData(no: number, todo: string, period: string) {
  return { no, todo, period }
}

const rows = [
  createData(1, '学校に行く', '2022-12-10'),
  createData(2, '学校に行く、お弁当', '2022-12-10'),
  createData(3, '学校に行く、お弁当', '2022-12-10'),
  createData(4, '宿題をする、ちゃんとする!!!', '2022-12-10'),
  createData(5, '学校に行く、お弁当', '2022-12-10'),
]

const tableStyle = css({
  width: '80%',
  margin: '0 auto',
})

export const List: VFC = () => (
  <>
    <h1>TodoListページ</h1>
    <TableContainer component={Paper} css={tableStyle}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '50px', paddingLeft: '50px' }}>No</TableCell>
            <TableCell sx={{ width: '450px' }}>やること</TableCell>
            <TableCell>期限</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.no} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" sx={{ width: '50px', paddingLeft: '50px' }}>
                {row.no}
              </TableCell>
              <TableCell sx={{ width: '450px' }}>{row.todo}</TableCell>
              <TableCell>{row.period}</TableCell>
              <TableCell align="center">
                <Button variant="contained" sx={{ margin: '0 20px' }}>
                  編集
                </Button>
                <Button variant="contained" color="error" sx={{ margin: '0 20px' }}>
                  編集
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div style={{ textAlign: 'right', margin: '80px' }}>
      <Link to="/">戻る</Link>
    </div>
  </>
)
