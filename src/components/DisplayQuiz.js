import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ButtonsParent from './parentinput';
import { useNavigate } from 'react-router-dom';

function TitleBar() {
    const [indexNumber, setindexNumber] = useState(0)
    const [showscore, setshowscore] = useState(false)
    const [score, setscore] = useState(0)
    const [quizData, setquizData] = useState({
        QuizName: "React Quiz",
        totalMarks: 6,
        questions: [
            {
                question: "Html Stands For____________________________",
                options: [
                    "Hyper Text Makeup Language",
                    "html",
                    "Case Cading Style Sheet",
                    "Hypertext markup language",
                ],
                correctAns: "Hypertext markup language",
            },
            {
                question: "Css Stands For _______________________",
                options: [
                    "Casecading Style Sheet",
                    "Java",
                    "Ram",
                    "Hypertext markup language",
                ],
                correctAns: "Casecading Style Sheet",
            },
            {
                question: "Js Stands For _______________________",
                options: ["Java Style", "Java Script", "Script", "Script Src"],
                correctAns: "Java Script",
            },
            {
                question: "Dom Stands For _______________________",
                options: ["Document Object Model", "html", "Css", "Java"],
                correctAns: "Document Object Model",
            },
            {
                question: "Ram Stands For _______________________",
                options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
                correctAns: "Random Acccess Memory",
            },
            {
                question: "Rom Stands For _______________________",
                options: [
                    "Hyper Text Markup Language",
                    "html",
                    "HTml",
                    "Read Only Memory",
                ],
                correctAns: "Read Only Memory",
            },
        ],
        perQuestionMark: 10

    })
    const { questions, totalMarks } = quizData
    let currQuest= questions[indexNumber]


    //Ye humain Next page pe route krny k km aega
    const navigation = useNavigate()
    //-----------------------------------------
    
    
    return (
        showscore ? (
            <Box className='main text-center my-5 bg-dark text-light fs-1'>
                <Box>Attemped Question :  You Attemped {indexNumber + 1} out of {indexNumber + 1} </Box>
                <Box>Score: Your Scored {score}  out of {totalMarks} </Box>
            </Box>
        ) : (

            <Box>
                <Box bgcolor={"black"} >
                    <Typography className='mx-2' color={"yellow"} variant='h3'>
                        {quizData.QuizName}
                    </Typography>
                    <Typography className='mx-4' variant='h6' align='right' color={"white"}>
                        Questions: {indexNumber + 1} /{quizData.questions.length}
                    </Typography>

                    <Button className='btns' onClick={() => navigation('/quizscreen') } variant='contained'>Create Quiz</Button>
                    <Button className='btns' onClick={() => navigation('/login') } variant='contained'>Log Out</Button>
                    
                    
                    <Typography className='mx-2' variant='h6' color={"white"}> Total Marks: {quizData.totalMarks} </Typography>
                </Box>

                <Box className="">
                    <Typography className='bg-success text-center fw-bold mt-5 fs-2 text-white' >Question No: {indexNumber + 1}</Typography>
                    <Typography className='fs-1 mt-5 text-center'>{questions[indexNumber].question}</Typography>
                </Box>
                <Box>
                    <ButtonsParent OptionClick={(e) => { 
                        if(currQuest.correctAns == e){
                            setscore(score+1)
                            console.log(score)
                        }
                        const nextquestion = indexNumber + 1
                        if (nextquestion < questions.length) {
                            setindexNumber(nextquestion)
                        } else {
                            setshowscore(true)
                        }

                     }} data={questions[indexNumber].options} />
                </Box>
            </Box>
        )
    );
}
// npm run build 
export default TitleBar;