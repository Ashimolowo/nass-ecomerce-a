const DashBoard = () => {
    return ( 
        <div style={{fontFamily: "Roboto"}}>
            <div className="container flex items-center justify-center mx-auto">
            <ul className="h-7 w-90 flex jusstify-around">
                <li><h1>Quiz</h1></li>
                <li>
                    <span>Leaderboard</span>
                    <span>Profile</span>
                    <span>Settings</span>
                </li>
                <li>
                <span>Leaderboard</span>
                    <span><i class='bx bxs-bell-ring'></i></span>
                    <span>U+2753</span>
                </li>
            </ul>
            </div>
        </div>
     );
}
 
export default DashBoard;
