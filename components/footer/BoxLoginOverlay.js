import React, { useState } from 'react';

export function BoxLoginOverlay(props) {
  const [open, setOpen] = useState(0);

  if ((open == 1)) {
    return (
      <>
        <div className="overlay "></div>
        <div className="kcblockloginbox row">
          <div className="col-5 g-0">
            <div className="kcblockloginboxpurple">
              <div className="kcblockloginboxpurplebottom">
                <div className="kcblockloginboxpurplebottomlabel">
                  Create a new account
                </div>
                <div className="kcblockloginboxpurplebottombutton">
                  <div className="kcblockloginboxpurplebottombuttonlabel">
                    Register
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 g-0">
            <div className="kcblockloginboxright">
              <div className="kcblockloginboxrightlabel">Login</div>
              <div className="kcblockloginboxrightfield">
                <input
                  type="text"
                  name=""
                  className="kcblockloginboxrightfieldbox"
                  placeholder="email"
                />
              </div>
              <div className="kcblockloginboxrightfieldpassword">
                <input
                  type="text"
                  name=""
                  className="kcblockloginboxrightfieldbox"
                  placeholder="password"
                />
              </div>
              <div className="kcblockloginboxrightfieldsubmit">
                <input
                  type="submit"
                  name=""
                  className="kcblockloginboxrightfieldbox kcblockloginboxrightfieldboxsubmit"
                  value="Login"
                />
              </div>
              <div className="kcblockloginboxrightfieldorlogin">
                Or login with:
              </div>
              <div className="kcblockloginboxrightfieldorloginwithsocial">
                <div className="kcblockloginboxrightfieldorloginwithsocialfb">
                  <a>
                    <img src="./css/img/fbp.svg" />
                  </a>
                </div>
                <div className="kcblockloginboxrightfieldorloginwithsocialg">
                  <a>
                    <img src="./css/img/gop.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return '';
  }
}
