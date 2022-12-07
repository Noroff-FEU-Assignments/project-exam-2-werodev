import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Grid } from "@mui/material"
import YupPassword from 'yup-password'
import axios from "axios"

/* const schema = yup.object().shape({
    username: yup.string().required("Email is required").email("incorrect format"),
    password: yup.string().required("Password is required").min(10),
})

const input = {
    username: 'user@example.com',
    password: 'secret',
}

try {
    
    const res = await schema.validate(input, { abortEarly: false })

} catch (e) {
    console.log(e.errors) 
} */

function LoginForm() {
/*     const [submitting,setSubmitting] = useState(false)
    const [loginError, setLoginError] = useState(null)
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver:yupResolver(schema)
    })

    function onSubmit(data) {
        setSubmitting(true)
        setLoginError(null)
        console.log(data)
    }

    try {
        const response = await axios.post(USERS, data)
        console.log("response", response.data)
        } 
    } catch (error) {
        setLoginError(error.toString())
    } finally {
        setSubmitting(false)
    }


    console.log(errors) */

    return (
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '50ch' },}}  autoComplete="off" /* onSubmit={handleSubmit(onSubmit)} */ paddingBottom={'10vh'}>
        <div>
            <Grid container>
            <Grid item xs={2} md={6}></Grid>    
            <Grid item xs={8} md={6}> 
            <TextField required id="outlined-required" /* {...register("username")} helperText={errors.username && <span>{errors.name.message}</span>} */ label="Login (required)"/>           
            </Grid>  
            <Grid item xs={2} md={6}></Grid>
            <Grid item xs={8} md={6}> 
            <TextField required id="outlined-required" /* {...register("password")} helperText={errors.password && <span>{errors.email.message}</span>} */ label="Password (required)"/>
            </Grid>  
           
                <Grid item xs={2} md={6} ></Grid>
                <Grid item xs={8} md={6} >
                    <Button variant="contained" type="submit" endIcon sx={{ marginTop:5,}}>logg in</Button>
                </Grid>
            </Grid>
        </div> 
        </Box>   
    )
}

export default LoginForm