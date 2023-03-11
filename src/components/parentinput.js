import { Button, Grid } from "@mui/material";

function ButtonsParent(prop) {
    const { data , OptionClick } = prop
    return (
        <>
        <Grid container>
            {data && Array.isArray(data) && data.length > 0 ? 
        data.map((x,i) => {
            return(
                <Grid md={6} item>
                <Button onClick={() => OptionClick(x)} className="w-100 rounded-pill opt shadow mt-5  fw-bold fs-5 d-inline my-2" key={i} color="primary"
                    variant="outlined">{x}</Button>
            </Grid>
        )
        }):null    
    }
        </Grid>
        </>
        )
}
export default ButtonsParent;