import { FormControl, InputLabel, Select, MenuItem, Button, Box }  from '@mui/material'
import useNews from '../hooks/useNews'
import { CATEGORIAS } from '../helpers'

const Formulario = () => {
    const { category, handleChangeCategory } = useNews()

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoría</InputLabel>
                <Select label='Categoria' onChange={handleChangeCategory} value={category}>
                    {CATEGORIAS.map(categoria => (
                        <MenuItem key={categoria.value ?? 0} value={categoria.value}>
                            {categoria.label}
                        </MenuItem>
                    ))}
                </Select>
                <Box sx={{marginTop: 2}}>
                    <Button fullWidth variant='contained' color='secondary'>Buscar Noticias</Button>
                </Box>
            </FormControl>
        </form>
  )
}

export default Formulario