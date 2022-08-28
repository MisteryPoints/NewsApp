import { FormControl, InputLabel, Select, MenuItem }  from '@mui/material'
import useNews from '../hooks/useNews'
import { CATEGORIAS } from '../helpers' 

const Formulario = () => {
    const { category, handleChangeCategory } = useNews()

    return (
        <form className='select'>
            <FormControl fullWidth sx={{
                    borderInlineColor: '#fff !important',
                    borderColor: '#fff !important'
                }}>
                <InputLabel sx={{backgroundColor:'#ffffff75 !important', color: '#000' , borderRadius:'15px'}}>Categoría</InputLabel>
                <Select label='Categoria' onChange={handleChangeCategory} value={category} color='primary' variant='outlined' sx={{ 
                    backgroundColor:'#fff !important',
                    color:'#000 !important',
                    borderInlineColor: 'white !important',
                    borderColor: '#fff !important',
                    borderRadius:'15px'
                }}>
                    {CATEGORIAS.map(categoria => (
                        <MenuItem key={categoria.value ?? 0} value={categoria.value}>
                            {categoria.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
  )
}

export default Formulario