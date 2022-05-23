import { Box } from '@mui/material'
import { VFC } from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import TextField from '@mui/material/TextField'

const box = css({
  width: '60%',
  margin: '0 auto',
  height: '70vh',
  boxShadow: '4px 4px 7px rgba(0,0,0,0.6)',
  h2: {
    textAlign: 'center',
  },
})

const form = css({
  width: '80%',
  display: 'flex',
})

type Inputs = {
  todo: string
  period: string
}

export const Register: VFC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <>
      <h2>タスク登録ページ</h2>
      <Box css={box}>
        <h2>タスク登録</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-basic"
            label="やること"
            variant="outlined"
            {...register('todo', { required: true })}
            css={form}
          />
          <TextField
            label="期限"
            {...register('period', { required: true })}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            css={form}
          />
          {errors.period && <span>This field is required</span>}
          <input type="submit" css={form} />
        </form>
      </Box>
      <Link to="/">戻る</Link>
    </>
  )
}
