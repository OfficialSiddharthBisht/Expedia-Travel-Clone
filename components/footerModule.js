/*
To Import This module :-
 import footer from "./components/footerModule.js";
    let x = document.getElementById("idNameOfYourFooter");
    x.innerHTML = footer();
*/

function footer(){
    return `
        <footer class="footer">
        <div class="f-container">
            <div class="f-row">
                <img id = "footer-image" src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="">
                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">List your property</a></li>
                        <li><a href="#">Partnership</a></li>
                    </ul> 
                </div>
                <div class="footer-col">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="#">India travel guide</a></li>
                        <li><a href="#">Hotels in India</a></li>
                        <li><a href="#">Holiday rentals in India</a></li>
                        <li><a href="#">Holiday packages in India</a></li>
                        <li><a href="#">Domestic Flights</a></li>
                        <li><a href="#">Car hire in India</a></li>
                        <li><a href="#">All accommodation types</a></li>
                        <li><a href="#">Travel blog</a></li>
                    </ul> 
                </div>
                <div class="footer-col">
                    <h4>Terms and policies</h4>
                    <ul>
                        <li><a href="#">Privacy Statement</a></li>
                        <li><a href="#">Terms of use</a></li>
                    </ul> 
            </div>
            <div class="footer-col">
                <h4>Help</h4>
                <ul>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Change or cancel your booking</a></li>
                    <li><a href="#">Refund process and timelines</a></li>
                    <li><a href="#">Book a flight using an airline credit</a></li>
                    <li><a href="#">International travel documents</a></li>
                </ul> 
        </div>
        </footer>
        <hr>
        <div class="last">
        <img src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" alt="">
        <p> Ⓒ 2022 Expedia,Inc., and Expedia Group company / Expedia Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved.</p>
        <p>Expedia and the Airplane Logo are trademards or registered trademarks of Expedia Inc.</p>
        </div>`;
}

export default footer;