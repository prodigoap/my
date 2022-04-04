import { BoxLoginOverlay } from '../components/footer/BoxLoginOverlay'
export function Footer(props){


    return <><div className="margintop32 footerpurplesection">
        <div className="kcblock row">
            <div className="col-3">
                <div className="footerpurplesectionlabeloneofthree">Never miss a thing!</div>
            </div>
            <div className="col-6">
                <div className="footerpurplesectionlabeltwoofthree"><input type="text" name="footerpurplesectionsubscribe"
                    placeholder="type your email" /></div>
            </div>
            <div className="col-3">
                <div className="footerpurplesectionlabelthreeofthree row">
                    <div className="col-1"><input type="checkbox" name="" /></div>
                    <div className="col-11">
                        <div className="acceptmailinglist">I accept the <a href="">terms</a> and the <a href="">privacy</a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="footermailinglistinfo">You may unsubscribe at any moment. For that purpose, please
                            find our contact info in the legal notice.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><div className=" margintop32 footergraypaymentsection">
            <div className=" kcblock row">
                <div className="col-8 g-0">
                    <div className="paymentsicon"><img src="./css/img/Group.png" /></div>
                </div>
                <div className="col-4 g-0">
                    <ul className="customercareicon">
                        <li>
                            <div className="customercareiconbyphone"><img src="./css/img/support.svg" /></div>
                            <div className="kcblocksubmenu">
                                <div className="linepurple"></div>
                                <div className="kcblocksubmenutitle">Hi User</div>
                                <div className="kcblocksubmenulink">
                                    <div className="kcblocksubmenulinkicon"><img src="./css/img/account.svg" /></div>
                                    <div className="kcblocksubmenulinklabel">Profile</div>
                                </div>
                                <div className="kcblocksubmenulink">
                                    <div className="kcblocksubmenulinkicon"><img src="./css/img/download.svg" /></div>
                                    <div className="kcblocksubmenulinklabel">Profile</div>
                                </div>
                                <div className="kcblocksubmenulink">
                                    <div className="kcblocksubmenulinkicon"><img src="./css/img/orders.svg" /></div>
                                    <div className="kcblocksubmenulinklabel">Profile</div>
                                </div>
                                <div className="kcblocksubmenulink">
                                    <div className="kcblocksubmenulinkicon"><img src="./css/img/loyalty.svg" /></div>
                                    <div className="kcblocksubmenulinklabel">Profile</div>
                                </div>
                                <div className="kcblocksubmenulink">
                                    <div className="kcblocksubmenulinkicon"><img src="./css/img/logout.svg" /></div>
                                    <div className="kcblocksubmenulinklabel">Profile</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="customercareiconcart"><img src="./css/img/cart.svg" /></div>
                        </li>
                        <li>
                            <div className="customercareiconlanguagecurrency"><img src="./css/img/ita.svg" /><span className="">ITA &euro;</span><img
                                src="img/chevron downgray.svg" /></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div><div className=" margintop32 footerwhitebottomsection">
            <div className=" kcblock row footerborderbottom">
                <div className="col-3 g-0">
                    <div className="footerwhitebottomsectiononeoffourcolumns">
                        <div className="footerwhitebottomsectiontitle">Buy online</div>
                        <div className="footerwhitebottomsectionlink">Softwares</div>
                        <div className="footerwhitebottomsectionlink">PlayStation</div>
                        <div className="footerwhitebottomsectionlink">XBox</div>
                        <div className="footerwhitebottomsectionlink">Nintendo</div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="footerwhitebottomsectiontitle">Help</div>
                    <div className="footerwhitebottomsectionlink">Support Hub</div>
                    <div className="footerwhitebottomsectionlink">Terms & Conditions</div>
                    <div className="footerwhitebottomsectionlink">Privacy & Cookies</div>
                    <div className="footerwhitebottomsectionlink">Returns & Refunds</div>
                </div>
                <div className="col-3">
                    <div className="footerwhitebottomsectiontitle">Company</div>
                    <div className="footerwhitebottomsectionlink">About us</div>
                    <div className="footerwhitebottomsectionlink">Careers</div>
                    <div className="footerwhitebottomsectionlink">Contact Us</div>
                    <div className="footerwhitebottomsectionlink">Affiliate Program</div>
                </div>
                <div className="col-3 footersocialboxgroup">
                    <div className="row">
                        <div className="col-12 g-0 alignright">
                            <div className="kcproductsmore">Sell with us</div>
                        </div>
                        <div className="col-12 g-0 ">
                            <ul className="footersocial">
                                <li>
                                    <div className="footersocialbox"><img src="img/fb.svg" className="footersocialicon" /></div>
                                </li>
                                <li>
                                    <div className="footersocialbox"><img src="img/ig.svg" className="footersocialicon" /></div>
                                </li>
                                <li>
                                    <div className="footersocialbox"><img src="img/tw.svg" className="footersocialicon" /></div>
                                </li>
                                <li>
                                    <div className="footersocialbox"><img src="img/twc.svg" className="footersocialicon" /></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div><div className=" footergraypaymentsection">
            <div className="kcblock row ">
                <div className="col-6 g-0">
                    <div className="footercopyrighttext">Use of this Web site constitutes acceptance of the Terms and Conditions and
                        Privacy policy. All copyrights, trade marks, service marks belong to the corresponding owners.
                    </div>
                </div>
                <div className="col-6 g-0">
                    <div className="footercopyright">© 2022 All rights reserved - Keycense LTD</div>
                </div>
            </div></div>
            <BoxLoginOverlay />
            </>
}