import ball from '../../assets/ball.jpg'
import team from '../../assets/team_celebrating.jpg'

function Section_2(){
    return(
<div className='section_2'>
        <div className='section_2_Header_div' >
            <p className='section_2_Header'>Experience Football Like Never Before </p>  
            <p className='section_2_text'> Join us for a month-long festival of football, showcasing the epic talents from around the world </p>
        </div>
        <div className='sec'>
            <div className='section_2_ball_img'>
                <img src={ball}></img>
            </div>
            <div className='section_2_ball'>
                <p className='section_2_ball_text_1'>Experience Sporting Excellence </p>
                <p className='section_2_ball_text_2'>Witness Intense Competition </p>
                <p className='section_2_ball_text_3'>32 teams, 1 championship, experience intensity at its finest as nations compete for glory. </p>
                <ul>
                    <li className='section_2_ball_text_4'>World Class Players</li>
                    <li className='section_2_ball_text_4'>Exciting Matches</li>
                    <li className='section_2_ball_text_4'>Amazing Stadiums</li>
                </ul>
            </div>
        </div>
        
        
        
        <div className='sec'>
            <div className='section_2_ball'>
                <p className='section_2_ball_text_1'>Connect With Global Fans  </p>
                <p className='section_2_ball_text_2'>Celebrate The Beautiful Game  </p>
                <p className='section_2_ball_text_3'>Become part of an international community, united by the love of football.  </p>
                <ul>
                    <li className='section_2_ball_text_4'>Fan Festivals</li>
                    <li className='section_2_ball_text_4'>Community Events </li>
                    <li className='section_2_ball_text_4'>Public Viewings </li>
                </ul>
            </div>
            <div className='section_2_ball_img'>
                <img src={team}></img>
            </div>
        </div>  
    </div>
    );
}

export default Section_2