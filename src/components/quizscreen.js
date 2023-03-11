import { TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
function QuizScreen(){
        const navigation = useNavigate()
    return(
            <><Typography className="fs-1 mt-4 fw-bold text-center"> Quiz Data</Typography>
            <TextField className="rounded P-2 shadow question"
                rows={9} placeholder="Write a Question" multiline />
                <TextField className="opt rounded mt-5 mx-5  fw-bold fs-5 my-2" placeholder="OptionA" />
                <TextField className="opt rounded mt-5 mx-5  fw-bold fs-5 my-2" placeholder="OptionB" />
                <TextField className="opt rounded mt-5 mx-5  fw-bold fs-5 my-2" placeholder="OptionC" />
                <TextField className="opt rounded mt-5 mx-5  fw-bold fs-5 my-2" placeholder="OptionD" />
                <br />
                <Button onClick={() => navigation('/Signup') } className="rounded shadow mx-5 my-2 fs-4" variant="contained">Submit</Button>
                </>
        )

}
export default QuizScreen;