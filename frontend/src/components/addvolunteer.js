import React from 'react';

import './addvolunteerstyles.css';

export default function Addvolunteer() {
   return (
      <>
      <div className='container'>
      <header data-thq="thq-navbar" className='navbar'>
        <span className='logo'>DonateThem</span>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className='desktop-menu'

        >

          <nav

            data-thq="thq-navbar-nav-links"

            data-role="Nav"

            className='nav'

          >

            <button className='button' >About </button>

            <button className='button'> Features </button>

            <button className='button'> Team</button>

            <button className='button'>Blog</button>

          </nav>

        </div>

        <div data-thq="thq-navbar-btn-group" className='btn-group'>

          <div className='socials'>

            <button
              className='button'
            >
              <img
                alt="imageofweb"
                src="/playground_assets/twitter.svg"
                className='image'
              />
            </button>
            <button
              className='button'
            >
              <img

                alt="imageofweb"

                src="/playground_assets/discord.svg"

                className='image01'

              />

            </button>

          </div>

          <button className='button'>LOGIN </button>

          <button className='button'>Register</button>

        </div>

        <div data-thq="thq-burger-menu" className='burger-menu'>

          <button

            className={` $'button' $'button4' `}

          >

            <svg viewBox="0 0 1024 1024" className='icon'>

              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>

            </svg>

          </button>

       </div>

        <div data-thq="thq-mobile-menu" className='mobile-menu'>

          <div

            data-thq="thq-mobile-menu-nav"

            data-role="Nav"

            className='nav1'

          >

            <div className='container1'>

              <span className='logo1'>Character</span>

              <div data-thq="thq-close-menu" className='menu-close'>

                <svg viewBox="0 0 1024 1024" className='icon02'>

                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>

                </svg>

              </div>

            </div>

            <nav

              data-thq="thq-mobile-menu-nav-links"

              data-role="Nav"

              className='nav2'

            >
              <span className='text'>About</span>

              <span className='text01'>Features</span>

              <span className='text02'>Pricing</span>

              <span className='text03'>Team</span>

              <span className='text04'>Blog</span>

            </nav>

            <div className='container2'>

              <button

                className={` $'login' $'button' `}

              >

                Login

              </button>

              <button className='button'>Register</button>

            </div>

          </div>

          <div className='icon-group'>

            <svg

              viewBox="0 0 950.8571428571428 1024"

              className='icon04'

            >

              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>

            </svg>

            <svg

              viewBox="0 0 877.7142857142857 1024"

              className='icon06'

            >

              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>

            </svg>

            <svg

              viewBox="0 0 602.2582857142856 1024"

              className='icon08'

            >

              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>

            </svg>

          </div>

        </div>

      </header>

      <section className='hero'>

        <div className='heading'>

          <h1 className='header'>Register as a VOLUNNTEER</h1>

          <p className='caption'>

            A character custom collection is joining the NFT space on Opensea.

          </p>

        </div>

        <div className='buttons'>

          <button className='button'>LOGIN</button>

          <button

            className={` $'learn' $'button-clean' $'button' `}

          >

            Create an account

          </button>

        </div>

      </section>

      <section className='description'>

        <img

          alt="imageofweb"

          src="/playground_assets/hero-divider-1500w.png"

          className='divider-image'

        />

        <div className='container3'>

          <div className='description1'>

            <div className='content'>

              <p className='paragraph'>

                Volunteering can be a fulfilling and meaningful experience for a

                number of reasons. Many people choose to volunteer because they

                want to make a positive impact in the world and help those in

                need. By volunteering, you can contribute to your community and

                make a difference in the lives of others. In addition,

                volunteering can help you develop new skills, meet new people,

                and build valuable experience that can be beneficial for your

                career. It can also give you a sense of purpose and connection

                to your community. Overall, volunteering is a great way to give

                back, grow as a person, and make a difference in the world.

              </p>

            </div>

            <div className='links'></div>

          </div>

        </div>

      </section>

      <section className='cards'>

        <div className='row'>

          <div className='card'>

            <div className='avatar'>

              <img

                alt="imageofweb"

                src="/playground_assets/avatar.svg"

                className='avatar1'

              />

            </div>

            <div className='main'>

              <div className='content01'>

                <h2 className='header1'>10,000+ unique Projects</h2>

                <p className='description2'>

                  Our volunteer project aims to clean up and beautify a local

                  park in our community. We will be removing litter, planting

                  flowers and trees, and creating new seating areas. This

                  project is designed to create a more welcoming and enjoyable

                  space for residents to enjoy outdoor activities and events.

                </p>

              </div>

              <button

                className={` $'learn1' $'button' `}

              >

                <span className='text05'>Learn more</span>

                <img

                  alt="imageofweb"

                  src="/playground_assets/arrow.svg"

                  className='image02'

                />

              </button>

            </div>

          </div>

          <div className='card01'>

            <div className='avatar2'>

              <img

                alt="imageofweb"

                src="/playground_assets/default-avatar.svg"

                className='avatar3'

              />

            </div>

            <div className='main1'>

              <div className='content02'>

                <h2 className='header2'>Volunteer testimonies</h2>

                <p className='description3'>

                  &quot;Volunteering has been a life-changing experience.

                  It&apos;s allowed me to give back to my community, meet new

                  people, and develop new skills. I feel a sense of fulfillment

                  and purpose from knowing that I&apos;m making a positive

                  impact in the world.&quot;

                </p>

              </div>

              <button

                className={` $'learn2' $'button' `}

              >

                <span className='text06'>Learn more</span>

                <img

                 alt="imageofweb"

                  src="/playground_assets/arrow-2.svg"

                  className='image03'

                />

              </button>

            </div>

          </div>

        </div>

        <div className='card02'>

          <div className='avatar4'>

            <img

              alt="imageofweb"

              src="/playground_assets/light-avatar.svg"

              className='avatar5'

            />

          </div>

          <div className='row1'>

            <div className='main2'>

              <div className='content03'>

                <h2 className='header3'>

                  Create yourself for the metaverse

                </h2>

                <p className='description4'>

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed

                  do eiusmod tempor incididunt ut labore et dolore magna aliquat

                  enim ad minim veniam, quis nostrud exercitation ullamco

                  laboris nisi

                </p>

              </div>

              <button

                className={` $'learn3' $'button' `}

              >

                <span className='text07'>Learn more</span>

                <img

                  alt="imageofweb"

                  src="/playground_assets/arrow-2.svg"

                  className='image04'

                />

              </button>

            </div>

            <img

              alt="imageofweb"

              src="/playground_assets/group%202262.svg"

              className='image05'

            />

          </div>

        </div>

      </section>

      <section className='collection'>

        <div className='content04'>

          <span className='caption01'>collection</span>

          <div className='heading1'>

            <h2 className='header4'>

              Our High Preforming Volunteers

            </h2>

            <p className='header5'>

              Our high-performing volunteers are individuals who consistently

              demonstrate exceptional dedication, commitment, and enthusiasm

              towards their volunteer work. They are reliable, responsible, and

              always willing to go the extra mile to ensure the success of a

              project. These volunteers are passionate about the cause they are

              serving, and they are motivated to make a positive impact on their

              community. They bring valuable skills, expertise, and creativity

              to their volunteer work and serve as role models for others. Our

              high-performing volunteers are an essential part of our

              organization, and we are grateful for their unwavering support and

              contributions.

            </p>

          </div>

        </div>

        <div className='main3'>

          <div className='card03'>

            <div className='image06'>

              <img

                alt="imageofweb"

                src="/playground_assets/character-1.svg"

                className='image07'

              />

            </div>

            <div className='content05'>

              <span className='caption02'>Character #1</span>

              <h3 className='title'>0.05 ETH</h3>

            </div>

          </div>

          <div className='card04'>

            <div className='image08'>

              <img

                alt="imageofweb"

                src="/playground_assets/character-2.svg"

                className='image09'

              />

            </div>

            <div className='content06'>

              <span className='caption03'>Character #2</span>

              <h3 className='title1'>0.05 ETH</h3>

            </div>

          </div>

          <div className='card05'>

            <div className='image10'>

              <img

                alt="imageofweb"

                src="/playground_assets/character-3.svg"

                className='image11'

              />

            </div>

            <div className='content07'>

              <span className='caption04'>Character #3</span>

              <h3 className='title2'>0.05 ETH</h3>

            </div>

          </div>

          <div className='card06'>

            <div className='image12'>

              <img

                alt="imageofweb"

                src="/playground_assets/character-4.svg"

                className='image13'

              />

            </div>

            <div className='content08'>

              <span className='caption05'>

                <span>Character #4</span>

                <br></br>

              </span>

              <h3 className='title3'>0.05 ETH</h3>

            </div>

          </div>

          <div className='card07'>

            <div className='image14'>

              <img

                alt="imageofweb"

                src="/playground_assets/character-5.svg"

                className='image15'

              />

            </div>

            <div className='content09'>

              <span className='caption06'>Character #5</span>

              <h3 className='title4'>0.05 ETH</h3>

            </div>

          </div>

          <div className='card08'>

            <div className='image16'>

              <img

                alt="imageofweb"

                src="/playground_assets/character-6.svg"

                className='image17'

              />

            </div>

            <div className='content10'>

              <span className='caption07'>Character #6</span>

              <h3 className='title5'>0.05 ETH</h3>

            </div>

          </div>

          <div className='card09'>

            <div className='image18'>

              <img

                alt="imageofweb"

                src="/playground_assets/character-7.svg"

                className='image19'

              />

            </div>

            <div className='content11'>

              <span className='caption08'>Character #7</span>

              <h3 className='title6'>0.05 ETH</h3>

            </div>

          </div>

          <div className='card10'>

            <div className='image20'>

              <img

                alt="imageofweb"

                src="/playground_assets/character-8.svg"

                className='image21'

              />

            </div>

            <div className='content12'>

              <span className='caption09'>Character #8</span>

              <h3 className='title7'>0.05 ETH</h3>

            </div>

          </div>

        </div>

        <button

          className={` $'view3' $'button-link' $'button' `}

        >

          View all

        </button>

      </section>

      <section className='get-yours'>

        <div className='row2'>

          <div className='column'>

            <div className='card11'>

              <img

                alt="imageofweb"

                src="/playground_assets/character-9.svg"

                className='image22'

              />

            </div>

          </div>

          <div className='column1'>

            <div className='card12'>

              <img

                alt="imageofweb"

                src="/playground_assets/character-10.svg"

                className='image23'

              />

            </div>

          </div>

        </div>

        <div className='column2'>

          <div className='card13'>

            <div className='content13'>

              <h2 className='header6'>Join Us Today!</h2>

              <p className='description5'>

                Join us today and become a part of our community of volunteers

                who are dedicated to making a positive impact in the world. By

                volunteering with us, you will have the opportunity to give back

                to your community, develop new skills, and meet new people. Join

                us today and make a difference in the world!

              </p>

            </div>

            <button

              className={` $'button5' $'button' `}

            >

              Register

            </button>

          </div>

        </div>

      </section>

      <footer className='footer'>
         <div className='main4'>

<div className='branding'>

  <div className='heading2'>

    <h2 className='logo2'>Character</h2>

    <p className='caption10'>

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

      eiusmod tempor incididunt ut labore et dolore.

    </p>

  </div>

  <div className='socials1'>

    <a

      href="https://twitter.com"

      target="_blank"

      rel="noreferrer noopener"

      className='button'

    >

      <img

        alt="imageofweb"

        src="/playground_assets/twitter.svg"

        className='image24'

      />

    </a>

    <a

      href="https://discord.com"

      target="_blank"

      rel="noreferrer noopener"

      className={` $'discord1' $'social' $'button' `}

    >

      <img

        alt="imageofweb"

        src="/playground_assets/discord.svg"

        className='image25'

      />

    </a>

  </div>

</div>

<div className='links1'>

  <div className='list'>

    <h3 className='heading3'>Site</h3>

    <div className='items'>

      <button

        className={` $'link' $'button-clean' $'button' `}

      >

        About

      </button>

      <button

        className={` $'link1' $'button-clean' $'button' `}

      >

        Collection

      </button>

      <button

        className={` $'link2' $'button-clean' $'button' `}

      >

        Roadmap

      </button>

      <button

        className={` $'link3' $'button-clean' $'button' `}

      >

        Features

      </button>

    </div>

  </div>

  <div className='list1'>

    <h3 className='heading4'>Company</h3>

    <div className='items1'>

      <button

        className={` $'link4' $'button-clean' $'button' `}

      >

        Team

      </button>

      <button

        className={` $'link5' $'button-clean' $'button' `}

      >

        Press

      </button>

      <button

        className={` $'link6' $'button-clean' $'button' `}

      >

        Terms

      </button>

      <button

        className={` $'link7' $'button-clean' $'button' `}

      >

        Limitations

      </button>

      <button

        className={` $'link8' $'button-clean' $'button' `}

      >

        Licenses

      </button>

    </div>

  </div>

</div>

<div className='socials2'>

  <a

    href="https://twitter.com"

    target="_blank"

    rel="noreferrer noopener"className={` $'twitter2' $'social' $'button' `}>

    <img

      alt="imageofweb"

      src="/playground_assets/twitter.svg"

      className='image26'

    />

  </a>

  <a href="https://discord.com" target="_blank" rel="noreferrer noopener" className={` $'discord2' $'social' $'button' `}>

    <img

      alt="imageofweb"

      src="/playground_assets/discord.svg"

      className='image27'

    />
  </a>
</div >
</div></footer>

        


      <div>
            </div>
     </div></>);
};
