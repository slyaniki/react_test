import React from 'react';

let Footer = () => {
   
 return(

    <footer class="footer"> 
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div class="footer__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15888.640502398659!2d-3.9764681037048266!3d5.392554300000011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfde21c611e00748c!2sRadio%20Cocody%20FM%20(98.5)!5e0!3m2!1sfr!2sci!4v1580141561642!5m2!1sfr!2sci" frameborder="0" style={{border:'0'}} allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div class="footer__content">
                    <div class="footer__content-division">
                        <ul class="footer__content-info-list">
                            <li>
                                Angré, Abidjan
                            </li>
                            <li>+225 07074488</li>
                            <li>+225 79778854</li>
                            <li>cocodyfm@gmail.com</li>
                        </ul>
                        <ul class="mt-4 footer__content-social-list">
                            <li>
                                <a href="#">
                                    <div>
                                        <img src="img/social/facebook-white.svg" alt="social logo" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>
                                        <img src="img/social/twitter-white.svg" alt="social logo" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>
                                        <img src="img/social/instagram-white.svg" alt="social logo" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>


    )
}


export default Footer