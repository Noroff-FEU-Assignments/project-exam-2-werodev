import PropTypes from 'prop-types'
import { Link } from '@mui/material'


function ProductItem({id,title,description,price,allergens,image}) {
    return (
        <Link href={`product/${id}`} sx={{color:'inherit' }} underline="hover">
            <Typography variant='h5' textAlign={'left'}>{product.attributes.title}</Typography>
        </Link>
    )
} 

ProductItem.PropTypes={
    id: PropTypes.number.isRequired
    title: PropTypes.string.isRequired
    description: PropTypes.string.isRequired
    price: PropTypes.number.isRequired
    allergens: PropTypes.array.isRequired
    image: PropTypes.array.isRequired
}

export default ProductItem