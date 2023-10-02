import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material"

import { Link, useSearchParams } from "react-router-dom";

import { categories } from "../../constants/data";

const StyledTable = styled(Table)`
   border: 1px solid rgba(224, 224, 224, 1);
`
const StyledButton = styled(Button)`
  margin: 20px;
  width: 80%;
  background: #6495ED;
  color: #fff
`

const Categories = () => {


    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
      <>
      <Link to={ `/create?category=${category || '' }` } style={{textDecoration: 'none' }}>
        <StyledButton variant="contained">Create your Blog</StyledButton>
        </Link>
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Link to='/'>
                            All Categories
                        </Link>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category => (
                       <TableRow key={category.id}>
                           <TableCell>
                            <Link to={`/?category=${category.type}`} >
                                {category.type}
                            </Link>
                           </TableCell>
                       </TableRow>
                    ))
                }
                
            </TableBody>
        </StyledTable>
      </>

    )
}

export default Categories;