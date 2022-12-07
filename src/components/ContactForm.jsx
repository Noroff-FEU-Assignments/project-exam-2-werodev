import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid } from "@mui/material";

const PhoneRegEx = "(0047|\\+47|47)?\\d{8}"
const schema = yup.object().shape({
    name: yup.string().required("Name is required").min(3),
    surname: yup.string().required("Surname is required").min(3),
    email: yup.string().required("Email is required").email("incorrect format"),
    phone: yup.string().required("Phone number is required").matches(PhoneRegEx, 'phone number is not valid'),
    message: yup.string().required("Message is required").min(10),
}

)

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver:yupResolver(schema)
    })

    function onSubmit(data) {
        console.log(data)
    }

    console.log(errors)

    return (
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '50ch' },}}  autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <TextField required id="outlined-required" {...register("name")} helperText={errors.name && <span>{errors.name.message}</span>} label="Fornavn (required)"/>           
            <TextField required id="outlined-required" {...register("email")} helperText={errors.email && <span>{errors.email.message}</span>} label="E-post (required)"/>
            <TextField required id="outlined-required" {...register("surname")} helperText={errors.surname && <span>{errors.surname.message}</span>} label="Etternavn (required)"/>
            <TextField required id="outlined-required" {...register("phone")} helperText={errors.phone && <span>{errors.phone.message}</span>} label="Mobilnummer (required)" />
            <TextField id="outlined-multiline" {...register("message")} helperText={errors.message && <span>{errors.message.message}</span>} label="Hva kan vi hjelpe deg med?" multiline rows={5} />
            <Grid container>
                <Grid item xs={2} md={6} lg={9}></Grid>
                <Grid item xs={10} md={6} lg={3}>
                    <Button variant="contained" type="submit" endIcon sx={{ marginTop:5,}}>send</Button>
                </Grid>
            </Grid>
        </div> 
        </Box>   
    )
}

export default ContactForm