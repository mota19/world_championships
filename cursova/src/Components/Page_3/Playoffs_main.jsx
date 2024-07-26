import France from "../../country/France.png"
import Poland from "../../country/Poland.png"
import Argentina from "../../country/Argentina.png"
import Australia from "../../country/Australia.png"
import Brazil from "../../country/Brazil.png"
import Crotia from "../../country/Croatia.png"
import England from "../../country/England.png"
import Japan from "../../country/Japan.png"
import Marocco from "../../country/Marocco.png"
import Netherland from "../../country/Netherland.png"
import Portugal from "../../country/Portugal.png"
import Senegal from "../../country/Senegal.png"
import SouthKorea from "../../country/SouthKorea.png"
import Spain from "../../country/Spain.png"
import Switherland from "../../country/Switherland.png"
import USA from "../../country/USA.png"

function Playoffs_main(){
    return(
        <div className="main_div_playoff">

            <div className="Div_playoff">

                <ul className="play">                    
                    <li><img src={England} className="Image_playoff"></img>3-0<img src={Senegal} className="Image_playoff"></img></li>
                    <li><img src={France} className="Image_playoff"></img>3-1<img src={Poland} className="Image_playoff"></img></li>
                    <li className="penalty"><img src={Marocco} className="Image_playoff"></img>(3)0-0(0)<img src={Spain} className="Image_playoff"></img></li>
                    <li><img src={Portugal} className="Image_playoff"></img>6-1<img src={Switherland} className="Image_playoff"></img></li>
                </ul>
                <ul className="quater_final">
                    <li><img src={England} className="Image_playoff"></img>1-2<img src={France} className="Image_playoff"></img></li>
                    <li><img src={Marocco} className="Image_playoff"></img>1-0<img src={Portugal} className="Image_playoff"></img></li>
                </ul>

                    <ul className="semi_final">                       
                        <li ><img src={France} className="Image_playoff"></img>2-0<img src={Marocco} className="Image_playoff"></img></li>
                    </ul>
                    <ul className="Finall">
                        <li className="Final"><img src={Argentina} className="Image_playoff"></img>(4)3-3(2)<img src={France} className="Image_playoff"></img></li>
                        <li className="third_place"><img src={Crotia} className="Image_playoff"></img>2-1<img src={Marocco} className="Image_playoff"></img></li>
                    </ul>
                    <ul className="semi_final">
                        <li><img src={Argentina} className="Image_playoff"></img>3-0<img src={Crotia} className="Image_playoff"></img></li>    
                    </ul>
                <ul className="quater_final" >
               
                    <li><img src={Netherland} className="Image_playoff"></img>(4)2-2(3)<img src={Argentina} className="Image_playoff"></img></li>
                    <li><img src={Crotia} className="Image_playoff"></img>1-1<img src={Brazil} className="Image_playoff"></img></li>
                </ul>
                <ul className="play" >
                    
                    <li><img src={Netherland} className="Image_playoff"></img>3-1<img src={USA} className="Image_playoff"></img></li>
                    <li><img src={Argentina} className="Image_playoff"></img>2-1<img src={Australia} className="Image_playoff"></img></li>
                    <li><img src={Japan} className="Image_playoff"></img>1-1<img src={Crotia} className="Image_playoff"></img></li>
                    <li><img src={Brazil} className="Image_playoff"></img>4-1<img src={SouthKorea} className="Image_playoff"></img></li>
                </ul>
            </div>
        </div>
    );
}

export default Playoffs_main