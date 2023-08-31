import facebook from './Imagens/facebook_icon.png'
import instagram from './Imagens/instagram_icon.png'
import twitch from './Imagens/twitch_icon.png'
import linkedin from './Imagens/linkedin_icon.png'
import twitter from './Imagens/twitter_icon.png'
import youtube from './Imagens/youtube_icon.png'

const Footer = () => {

    return ( 
        <div className="footer">
            <div className="social-media">
                <h3>Acompanhe-nos</h3>
                <a href="https://www.facebook.com/greenteamhc/">
                    <img class="foot-icons" src={facebook} alt="facebook icon"/>
                </a>
                <a href="https://www.instagram.com/greenteamhc/">
                    <img class="foot-icons" src={instagram} alt="instagram icon"/>
                </a>
                <a href="https://www.twitch.tv/greenteamhackerclub">
                    <img class="foot-icons" src={twitch} alt="twitch icon"/>
                </a>
                <a href="https://www.linkedin.com/company/green-team-hacker-club">
                    <img class="foot-icons" src={linkedin} alt="linkedin icon"/>
                </a>
                <a href="https://twitter.com/greenteamhc">
                    <img class="foot-icons" src={twitter} alt="twitter icon"/>
                </a>
                <a href="https://www.youtube.com/@greenteamhc">
                    <img class="foot-icons" src={youtube} alt="yotube icon"/>
                </a>
            </div>
            <div className="gthc-address">
                <h3>Endereço</h3>
                <p>
                    Avenida dos Estados, 5001 <br />
                    Bangú, Santo André - SP <br/>
                    Bloco L, Sala 403 <br/>
                    CEP: 09210-580 <br/>
                </p>
            </div>
            <div className="contact">
                <h3>Entre em contato</h3>
                <p>
                    greenteamufabc@gmail.com
                </p>
            </div>
        </div>
     );
}
 
export default Footer;