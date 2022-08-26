import { FormControl, InputLabel, Select, MenuItem }  from '@mui/material'
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
            </FormControl>
        </form>
  )
}

export default Formulario