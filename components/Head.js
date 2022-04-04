export function Head(props){


return <header>
<div className="kcblock kcblockheight">
   <div className="row vertupdownpadding">
      <div className="col-2">
         <a href="./index.php"><img className="kcblock-logo" src="./css/img/logo.svg" /></a>
      </div>
      <div className="col-6 posrel">
         <div className="kcblock-header">
            <img src="./css/img/search.svg" />
            <input type="text" name="searchkey" className="kcblock-header-search" placeholder="What are you looking for?" />
            <div className="RecentlySearch">
               <div className="RecentlySearchbox">
                  <div className="RecentlySearchboxtitle">Recently search</div>
                  <div className="RecentlySearchboxresult">Office 2013 Professional Plus</div>
                  <div className="RecentlySearchboxresult">Office 2013 Professional Plus</div>
                  <div className="RecentlySearchboxresult">Office 2013 Professional Plus</div>
               </div>
               <div className="RecentlySearchsuggestedbox">
                  <div className="RecentlySearchsuggestedboxtitle">Recommended</div>
                  <div className="RecentlySearchsuggestedboxproduct">
                     <div className="RecentlySearchsuggestedboxproductbox">
                        <img src="https://i.redd.it/l1slqdb0gt871.jpg" />
                     </div>
                     <div className="RecentlySearchsuggestedboxproductdescription">
                        <div className="RecentlySearchsuggestedboxproductboxlabel">Microsoft Office 2013
                           Professional Plus 32/64 Bit
                        </div>
                        <div className="RecentlySearchsuggestedboxproductboxprice"><span className="RecentlySearchsuggestedboxproductdescriptionoldprice">€190,99 </span>
                           <span className="RecentlySearchsuggestedboxproductdescriptionprice">Saving €190,99 </span>
                        </div>
                        <div className="RecentlySearchsuggestedboxproductboxpricefinal row margintop16">
                           <div className="RecentlySearchsuggestedboxproductdescriptionfinalprice col-2">
                              €190,99
                           </div>
                           <div className="RecentlySearchsuggestedboxproductdescriptionbox col-10">Buy
                              now
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="col-4">
         <div className="kcblock-header-icons">
            <ul className="kcblock-header-icons-list">
               <li className="posrelative openmegamenu">
                  <img src="./css/img/support.svg" className="marginright4" /><img src="./css/img/chevron down.svg" />
                  <div className="kcblocksubmenu">
                     <div className="linepurple"></div>
                     <div className="kcblocksubmenutitle">Help Center</div>
                     <div className="kcblocksubmenulink">
                        <div className="kcblocksubmenulinkgreenbutton">
                           <div className="kcblocksubmenulinkicon"><img src="./css/img/chatgreen.svg" /></div>
                           <div className="kcblocksubmenulinklabel">Chat with Us</div>
                        </div>
                     </div>
                     <div className="kcblocksubmenubottomrow"></div>
                     <div className="kcblocksubmenulink">
                        <div className="kcblocksubmenulinkicon"><img src="./css/img/faq.svg" /></div>
                        <div className="kcblocksubmenulinklabel">F.A.Q's</div>
                     </div>
                     <div className="kcblocksubmenulink">
                        <div className="kcblocksubmenulinkicon"><img src="./css/img/info.svg" /></div>
                        <div className="kcblocksubmenulinklabel">Profile</div>
                     </div>
                  </div>
               </li>
               <li className="posrelative openmegamenu">
                  <img src="./css/img/favorites.svg" />
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
               <li className="posrelative cartbox">
                  <img src="./css/img/cart.svg" />
                  <div className="carthowmany">3</div>
                  <div className="RecentlySearchsuggestedbox kcblockcartdetails">
                     <div className="linepurple"></div>
                     <div className="RecentlySearchsuggestedboxtitle">Cart (2)</div>
                     <div className="RecentlySearchsuggestedboxproduct kcblockproductcartblock">
                        <div className="RecentlySearchsuggestedboxproductbox">
                           <img src="https://i.redd.it/l1slqdb0gt871.jpg" />
                        </div>
                        <div className="RecentlySearchsuggestedboxproductdescription">
                           <div className="RecentlySearchsuggestedboxproductboxlabel kcblockproductcart">
                              Microsoft Office 2013 Professional Plus 32/64 Bit
                           </div>
                           <div className="RecentlySearchsuggestedboxproductboxprice"><span className="RecentlySearchsuggestedboxproductdescriptionoldprice">€190,99 </span>
                              <span className="RecentlySearchsuggestedboxproductdescriptionprice">Saving €190,99 </span>
                           </div>
                           <div className="RecentlySearchsuggestedboxproductboxpricefinal row ">
                              <div className="RecentlySearchsuggestedboxproductdescriptionfinalprice col-2">
                                 €190,99
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="RecentlySearchsuggestedboxproduct kcblockproductcartblock">
                        <div className="RecentlySearchsuggestedboxproductbox">
                           <img src="https://i.redd.it/l1slqdb0gt871.jpg" />
                        </div>
                        <div className="RecentlySearchsuggestedboxproductdescription">
                           <div className="RecentlySearchsuggestedboxproductboxlabel kcblockproductcart">
                              Microsoft Office 2013 Professional Plus 32/64 Bit
                           </div>
                           <div className="RecentlySearchsuggestedboxproductboxprice"><span className="RecentlySearchsuggestedboxproductdescriptionoldprice">€190,99 </span>
                              <span className="RecentlySearchsuggestedboxproductdescriptionprice">Saving €190,99 </span>
                           </div>
                           <div className="RecentlySearchsuggestedboxproductboxpricefinal row ">
                              <div className="RecentlySearchsuggestedboxproductdescriptionfinalprice col-2">
                                 €190,99
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="kcblockproductcartblocksubtotal">
                        <span className="kcblockproductcartblocksubtotallabel">Subtotal: <span className="kcblockproductcartblocksubtotallabel2">(Taxes Included)</span></span>
                        <span className="kcblockproductcartblocksubtotalprice">€94,97</span>
                     </div>
                     <div className="kcblockproductcartblocksecurecheckout"><a href="./checkout.php"><img className="kcblocksecurecheckouticon" src="" /><span className="kcblocksecurecheckout">Secure Checkout</span></a></div>
                     <div className="kcblockproductcartblockmessagepromo">
                        <div className="kcblockproductcartblockmessagepromolabel">Add €20 to get an extra
                           10% Off your total order
                        </div>
                     </div>
                  </div>
               </li>
                                       <li className="posrelative openmegamenu">
                  <img src="./css/img/account.svg" />
                  <div className="kcblocksubmenu">
                     <div className="linepurple"></div>
                     <div className="kcblocksubmenulink">
                        <a href="./login.php"><div className="kcblocksubmenulinkpurplebutton">Login/Register </div></a>
                     </div>
                     <div className="kcblocksubmenubottomrow"></div>
                     <div className="kcblocksubmenulink">
                        <div className="kcblocksubmenulinkicon"><img src="./css/img/faq.svg" /></div>
                        <div className="kcblocksubmenulinklabel">F.A.Q's</div>
                     </div>
                     <div className="kcblocksubmenulink">
                        <div className="kcblocksubmenulinkicon"><img src="./css/img/info.svg" /></div>
                        <div className="kcblocksubmenulinklabel">Profile</div>
                     </div>
                  </div>
               </li>
                                       <li className="posrelative openmegamenu">
                  <div className="kcblock-header-menu"><img src="./css/img/menu.svg" /></div>
                  <div className="kcblocksubmenu">
                     <div className="linepurple"></div>
                     <div className="kcblocksubmenulink">
                        <div className="kcblocksubmenulinkicon"><img src="./css/img/euro.svg" /></div>
                        <div className="kcblocksubmenulinklabel">EUR</div>
                     </div>
                     <div className="kcblocksubmenulink">
                        <div className="kcblocksubmenulinkicon"><img src="./css/img/eng.svg" /></div>
                        <div className="kcblocksubmenulinklabel">English</div>
                     </div>
                     <div className="kcblocksubmenulink">
                        <div className="kcblocksubmenulinkicon"><img src="./css/img/info.svg" /></div>
                        <div className="kcblocksubmenulinklabel">Terms &amp; Conditions</div>
                     </div>
                     <div className="kcblocksubmenulink">
                        <div className="kcblocksubmenulinkicon"><img src="./css/img/faq.svg" /></div>
                        <div className="kcblocksubmenulinklabel">F.A.Q's</div>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   </div>
</div>
<div className="kcblockblackrow posrelative">
   <div className="kcblock">
      <div className="row">
         <div className="col-6">
            <div className="kcblockblackrow-menu">
               <ul className="kcblockblackrow-menu-ul">
                  <li>
                     <div className="kcblockblackrow-menu-ul-icon"><img src="./css/img/PCw.svg" /></div>
                     <div className="kcblockblackrow-menu-ul-label">PC</div>
                     <div className="kcblockblackrow-menu-ul-arrowl"><img src="./css/img/chevron downw.svg" /></div>
                     <div className="kcblockmegamenu">
                        <div className="kcblock">
                           <div className="kcblockmegamenucolumn"><a href="./listing.php">
                              <div className="kcblockmegamenucolumntitle">Office 2021</div>
                              <div className="kcblockmegamenucolumnprotitle">Office 2021 Professional Plus
                                 - Product Key
                              </div></a>
                           </div>
                           <div className="kcblockmegamenucolumn"></div>
                           <div className="kcblockmegamenucolumn"></div>
                           <div className="kcblockmegamenucolumn"></div>
                           <div className="kcblockmegamenucolumn"></div>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="kcblockblackrow-menu-ul-icon"><img src="./css/img/PSTw.svg" /></div>
                     <div className="kcblockblackrow-menu-ul-label">Playstation</div>
                     <div className="kcblockblackrow-menu-ul-arrowl"><img src="./css/img/chevron downw.svg" /></div>
                  </li>
                  <li>
                     <div className="kcblockblackrow-menu-ul-icon"><img src="./css/img/xboxw.svg" /></div>
                     <div className="kcblockblackrow-menu-ul-label">Xbox</div>
                     <div className="kcblockblackrow-menu-ul-arrowl"><img src="./css/img/chevron downw.svg" /></div>
                  </li>
                  <li>
                     <div className="kcblockblackrow-menu-ul-icon"><img src="./css/img/nintendow.svg" /></div>
                     <div className="kcblockblackrow-menu-ul-label">Nintendo</div>
                     <div className="kcblockblackrow-menu-ul-arrowl"><img src="./css/img/chevron downw.svg" /></div>
                  </li>
               </ul>
            </div>
         </div>
         <div className="col-6">
            <div className="kcblockblackrow-menu-right">
               <div className="kcblockblackrow-menu-top-deals">Top Deals</div>
               <div className="kcblockblackrow-menu-sell-with-us">Sell with us <img src="./css/img/arrow-rightw.svg" className="kcblockblackrow-menu-sell-with-us-arrow" />
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</header>




}