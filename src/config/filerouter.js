import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TitleBar from "../components/DisplayQuiz";
import QuizScreen from "../components/quizscreen";
import Login from "../components/login";
import SignUp from "../components/Signup";

function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="DisplayQuiz" element={<TitleBar />} />
                    <Route path="/" element={<SignUp />} />
                    <Route path="quizscreen" element={<QuizScreen />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default AppRouter;