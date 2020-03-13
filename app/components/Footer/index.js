import React from 'react';
import { Link } from 'react-router-dom';
// import Collapsible from 'react-collapsible';
import { CDN_BASE_URL } from '../../api_constants';

// const isAsortCheck = checkForAsortDomain(window.location.hostname);



const FooterContentDsAsort = [
  {
    path: '/',
    content: () => (
      <div className="footer-text">
        <h1 className="foot-heading">
          Creating Fashionable <b>Business Opportunity</b> For Young India
        </h1>
        <p className="foot-content">
          Ds.asort is the first fashion <b>direct selling company</b> in India.
          As DS.ASORT we take pride in encouraging millions of dreams by
          fulfilling their aspiration to be an entrepreneur. We are impacting
          over 7 Lakhs+ lives while fuelling their entrepreneurship spirit. We
          are promoting our Independent Business Owners to enhance their
          business skills. Our team of expert's, deliver best training sessions
          to help and nourish the young talent.
        </p>
        <p className="foot-content">
          Our 7 lifestyle homegrown brands- Ifazone, Mr. Huffman, Earthy Scent,
          Solasta, Kuefit, ABG and Amiiga have their own unique identity,
          offering the best quality lifestyle products. Ds.asort making a
          community of happy customers while providing the best lifestyle
          products for day to day life. We launch fashionable and comfortable
          fashion products every week because we believe that fashion and
          comfort complement each other.
        </p>
        <p className="foot-content">
          Every dream matters and we believe them and also encourage them to be
          your own boss.
        </p>
      </div>
    ),
  },
  {
    path: '/men',
    content: () => (
      <div className="footer-text">
        {/* <p className='foot-heading'>Men&rsquo;s wear</p>
                  <p className='foot-content'><Link to="/"> Asort </Link> brings the best clothing range for <Link to="/men"> men&rsquo;s online shopping </Link>. The fabric and quality of the products are chosen under the best of supervisions. With a wide range of <Link to="/men-topwear"> top wear for men </Link>, <Link to="/men-bottomwear"> bottom wear for men </Link>, <Link to="/men-accessories"> accessories for men </Link>, <Link to="/men-sportswear"> sportswear for men </Link> and <Link to="/men-footwear"> men footwear </Link> collection, our team makes sure to only bring in unbeatable &amp; classic trends. Products that are made proudly in India, makes every single product impossible to miss and prices worth every style.</p>
                  <p className='foot-content'>You can find India&rsquo;s first <Link to="/brands/Linkbg"> street wear </Link> brand alongside the best of <Link to="/brands/ifazone"> basic wear </Link>, <Link to="/men-sportswear"> athletic wear </Link>, <Link to="/mrhuffman-formal-wear"> corporate wear </Link>, as well as proudly handcrafted <Link to="/brands/earthyscent"> Indian wear </Link>. You have the freedom to choose a whole look according to your mood, that includes the best of accessories and shoes to finish your look. A brand is dedicated solely on manufacturing the best trendy shoes that can be made available for your in-vogue shoe rack. Find the best of the trends from our numerous in-house Indian brands and feel the satisfaction of online shopping to the fullest.</p>
                  <p className='foot-heading'>Top Wear</p>
                  <p className='foot-content'>We, at Asort make it a point to deliver you with all the essential categories that a man might need in their day to day life. Our <Link to="/men-topwear"> top wear </Link> includes the best of <Link to="/men-formal-shirts"> Formal Shirts </Link>, <Link to="/men-casual-shirts"> Casual Shirts </Link>, <Link to="/men-tshirts-and-polos"> T-shirts </Link>, <Link to="/men-tshirts-and-polos"> Polos </Link>, <Link to="/men-kurtas"> Kurtas for men </Link>, <Link to="/men-blazers"> Suits and Blazers for men </Link>, <Link to="/men-sweat-shirt"> Sweatshirts for Men </Link> and <Link to="/men-nehru-jackets"> Nehru Jackets for Men </Link>. As per your mood concerns, you can choose t-shirts that are funky and wild from <Link to="/brands/Linkbg"> ABG </Link>, as well as basic and minimal from <Link to="/brands/ifazone"> Ifazone </Link>. Every single <Link to="/brands/mrhuffman"> Mr.Huffman </Link> polo makes sure to bring in the classy look to your style along with <Link to="/men-blazers"> Suits &amp; Blazers </Link> that are sure to make some head turns in your office or your next formal event. A wide range of color, fabric and textile in shirts, that might make you end up filling up your shopping cart, as you wouldn&rsquo;t want to miss on the best ones. Our <Link to="/brands/earthyscent"> Earthy Scent&rsquo;s Indian wear </Link> collection is proudly handcrafted in India and delivered to you with prices worth the product. Browse around the winter sweatshirts that are unbeatably trendy and hip.</p>
                  <p className='foot-content'>A while browsing through the <Link to="/men"> men&rsquo;s top wear </Link> section will definitely make Asort one of your favorite shopping store in no time.</p>
                  <p className='foot-heading'>Bottom Wear</p>
                  <p className='foot-content'>Choosing the right bottom wear might be hard task, but we assure to make it easier for you. With the best bottom wear collection, Asort brings you a wide collection of <Link to="/men-jeans"> Denims for men </Link>, <Link to="/men-trousers"> Trousers for men </Link>, Track pants for men, <Link to="/men-shorts"> Shorts for men </Link> and <Link to="/men-chinos"> Chinos </Link>. ABG fulfils your street wear desires with its jogger&rsquo;s collection where Ifazone keeps you updated with your regular denims. Your next morning office day is made much classier with Mr. Huffman trousers that gives full attention to detailing and comfort fabric. Ifazone and Mr. Huffman&rsquo;s Chinos and Shorts with colors that makes every day of your week trendy, stylish and comfortable. Also, your next day jog is made much more energetic by Kuefit with track pants that will help you run some long miles.</p>
                  <p className='foot-heading'>Active Wear</p>
                  <p className='foot-content'>A promising range of active wear is made available to you by Asort, to motivate you for your everyday work out. You will find <Link to="/men-muscle-tshirts"> Muscle tees </Link> and <Link to="/men-sports-wear-tshirts"> sport tees </Link> to flaunt your hard earned biceps as well as track pants, <Link to="/men-joggers"> joggers </Link> and <Link to="/men-shorts"> shorts </Link> to provide you with the comfort and style for your next work out. <Link to="/brands/kuefit"> Kuefit </Link> offers you with all the varieties you need. Asort doesn&rsquo;t compromise on the quality, on any circumstances. You can click on the &ldquo;add to cart&rdquo; button without having to think twice over it. You will be delivered exactly what you are expecting without a doubt.</p>
                  <p className='foot-heading'>Accessories</p>
                  <p className='foot-content'>We understand that accessories play a very important role while planning out a look. Asort helps you make the right choice while accessorizing your look, as we bring you with best of our collection. You will find <Link to="/men-bags"> bags </Link>, <Link to="/men-wallets"> wallets </Link>, <Link to="/men-belts"> belts </Link>, neckties and <Link to="/men-sunglasses"> sunglasses </Link> that will fit right into your look without any hassles. Our team filters out the best one to put out in front of you. You can shop away without a worry. Ifazone brings to you a wide range of wallets, socks, sunglasses and neckties, to help you complete your basic and minimal persona while Mr. Huffman looks out for your office look the next day or your next event. While ABG gives you an option to add some funky elements to your look with some hip and trendy <Link to="/men-bags"> backpacks </Link>, fanny packs and <Link to="/men-sunglasses"> sunglasses </Link>, Kuefit helps you put together your <Link to="/brands/kuefit"> gym accessories </Link>. Mr. Huffman also offers you with some cool trendy yet classy travel bags that you cannot miss.</p>
                  <p className='foot-heading'>Footwear</p>
                  <p className='foot-content'> Your look can never be complete without a perfect pair of shoes. Asort brings you with a hub of categories to choose from. Be it <Link to="/men-sports-shoes"> sports shoes </Link>, <Link to="/men-casual-shoes"> casual shoes </Link>, <Link to="/men-formal-shoes"> formal shoes </Link>, <Link to="/men-sandals"> floaters and flip-flop </Link>, <Link to="/men-boots"> boots </Link>, or <Link to="/men-running-shoes"> running shoes </Link>, you will definitely get a number of choices to add to your cart. Every single <Link to="/men-footwear"> men footwear </Link> is a designer&rsquo;s choice with materials that oozes the wearer. Fill up your shoe rack with the best of choices from Asort. While <Link to="/brands/solasta-shoes"> Solasta shoes </Link> offers you all the varieties in all the categories, ABG swoops in with its hip street style sneakers. If you are looking for some formal shoes, Mr. Huffman also got your back.</p> */}
      </div>
    ),
  },
  {
    path: '/brands',
    content: () => (
      <div className="footer-text">
        <h1 className="foot-heading">
          Creating Fashionable <b>Business Opportunity</b> For Young India
        </h1>
        <p className="foot-content">
          Ds.asort is the first fashion <b>direct selling company</b> in India.
          As DS.ASORT we take pride in encouraging millions of dreams by
          fulfilling their aspiration to be an entrepreneur. We are impacting
          over 7 Lakhs+ lives while fuelling their entrepreneurship spirit. We
          are promoting our Independent Business Owners to enhance their
          business skills. Our team of expert's, deliver best training sessions
          to help and nourish the young talent.
        </p>
        <p className="foot-content">
          Our 7 lifestyle homegrown brands- Ifazone, Mr. Huffman, Earthy Scent,
          Solasta, Kuefit, ABG and Amiiga have their own unique identity,
          offering the best quality lifestyle products. Ds.asort making a
          community of happy customers while providing the best lifestyle
          products for day to day life. We launch fashionable and comfortable
          fashion products every week because we believe that fashion and
          comfort complement each other.
        </p>
        <p className="foot-content">
          Every dream matters and we believe them and also encourage them to be
          your own boss.
        </p>
      </div>
    ),
  },
  {
    path: '/women',
    content: () => (
      <div className="footer-text">
        {/* <p className='foot-heading'>Online shopping for women at Asort is easier yet incredible!</p>
                  <p className='foot-content'>Shopping is not just an activity but a therapy for women. It is extremely rare to find a woman who is least interested in a shopping regime. A woman&rsquo;s shopping experience at a physical store is no less than a bundle of issues. Long payment queues, crowded shops, struggles for parking spaces and what not! Clearly these troubles are something not enjoyable at all. At <Link to="/"> Asort </Link>, we are on a mission to make your online shopping experience easier, smoother and incredible. Here, you can finish your shopping and make your payment in a jiffy. Only a couple of snaps and a couple of taps on your cell phone, and the next destination of your purchase products is your door!</p>
                  <p className='foot-content'>Here at Asort, we truly and deeply believe that choosing a radical lifestyle depends on your closet. If you would like access to a wide variety of products for women online shopping is the way to go. You must have come across multiple online stores for women shopping, be it western clothing specific or western, party wear or regular wear, <Link to="/women-ethnic-and-fusion-wear"> ethnic wear for women </Link> or <Link to="/women-western-wear"> western wear for women </Link>, lingerie or <Link to="/women-sportswear"> active wear for women </Link>, <Link to="/women-footwear"> footwear for women </Link> or even <Link to="/women-accessories"> accessories for women </Link>, but Asort is a one stop-shop with everything you need to redefine your lifestyle.</p>
                  <p className='foot-content'>The women&rsquo;s shopping range at Asort includes the best price merchandise of top-notch quality along with the premium in house brands. We totally understand that your closet must be a mix of different types of outfits. <Link to="/women-western-wear"> Women&rsquo;s western wear </Link> is one classification with a storm of variations ranging from cool <Link to="/women-tops-and-tshirts"> women tops </Link>, <Link to="/women-tops-and-tshirts"> women shirts </Link>, <Link to="/women-bottoms"> jeans </Link>, <Link to="/women-jackets-and-waistcoats"> jackets for women </Link>, <Link to="/women-bottoms"> women jeggings </Link> and so on to chic looking dresses and skirts. These modern wear can influence a young lady to look totally glitzy and exquisite with an advantage of making them feel extremely comfortable. One can easily go to hang out with friends or a party or even a trek to an exciting place as they are so broad-ranging in style and patterns.</p>
                  <p className='foot-content'><Link to="/women"> Online shopping for women </Link> is not restricted to western wear only. Indian attires like <Link to="/women-sarees"> Women Sarees </Link>, <Link to="/women-kurts-and-kurtas"> Kurtis for women </Link>, <Link to="/men-nehru-jackets"> Nehru jackets </Link>, and leggings comes under Indian ethnic wear which don&rsquo;t only keep you connected with Indian roots but also give your style a modern feel. These Indian staples are no longer limited to festivals, weddings and major occasions, from your day to day life to your weekend brunches, slipping into a stylish Kurti can help you nail any event or gala.</p>
                  <p className='foot-content'><br /><br /></p>
                  <p className='foot-heading'>Women's online shopping: clothes, accessories, footwear, and more</p>
                  <p className='foot-content'><br /><br /></p>
                  <p className='foot-content'>While other <Link to="/women"> online shopping sites for women </Link> might focus on apparel, others on <Link to="/brands/earthyscent"> ethnic wear </Link>, and yet others on footwear and accessories, Asort is an uber store that brings everything for everyone under one rooftop. Here is a rundown of must-haves from the wide variety of awesome fashion products at Asort:</p>
                  <p className='foot-content'> Your <Link to="/"> online shopping clothes </Link>&rsquo; list should include a healthy mix of apparel suitable for casual, formal, active and festive occasions. At one hand where you can shop western wear for an urban chic look by slipping into a super <Link to="/women-tops-and-tshirts"> tee </Link> or <Link to="/women-tops-and-tshirts"> tops </Link> paired with a pair of jeans or just grab any dress to look extremely gorgeous. On another hand, your mundane office meetings can be a bit interesting with a pair of chic formal wear. Climb up the corporate ladder with women formal wear and ooze maximum oomph with our top-of-the-range dresses. Try the ethnic touch with our pretty printed <Link to="/women-kurts-and-kurtas"> Women Kurtas </Link>, <Link to="/women-suits"> Anarkalis </Link>, Nehru jackets and eternal <Link to="/women-sarees"> Sarees </Link>. Stride into a wedding with confidence in a pretty party wear <Link to="/women-kurts-and-kurtas"> Kurti </Link> or an elegant Saree. No other outfit can beat the look of Indian ethnic wear. Your <Link to="/brands/earthyscent"> online ethnic wear </Link> shopping at Asort can give you the wide array of multiple styles and designs with an end goal of making Indian women look great in it as it brings out the best of their features. Feel amazed by the finest collection of Kurtis, Sarees and other Indian staples from the best brands made to flawlessness.</p>
                  <p className='foot-content'>No look is complete without a pair of smart women footwear. Once you are done with your online women shopping, it is time to buy some smart footwear. Be it handmade mojaris and sleepers or single-toe flats from our ethnic segment, or pumps and shoes from our western area, you are certain to be dressed to awe. At Asort, the <Link to="/women-footwear"> online women footwear </Link> are a reflection of your unique style which do wonders for your outfits by transforming them from ordinary to outstanding.</p>
                  <p className='foot-content'>And there are more fabulous products such as sportswear, blazers, and other fashion accessories for women online. The women&rsquo;s online shopping experience at Asort is filled with unlimited choices and great fashion products!</p> */}
      </div>
    ),
  },
];

const FooterStaticLinkDsAsort = [
  {
    categoryTitle: 'MEN:',
    subitems: [
      {
        title: 'TOP WEAR',
        link: '/men-topwear',
      },
      {
        title: 'ETHNIC WEAR',
        link: '/men-ethnic-wear',
      },
      {
        title: 'BOTTOM WEAR',
        link: '/men-bottom-wear',
      },
      {
        title: 'FOOTWEAR',
        link: '/men-footwear',
      },
      {
        title: 'ACCESSORIES',
        link: '/men-accessories',
      },
    ],
  },
  {
    categoryTitle: 'WOMEN:',
    subitems: [
      {
        title: 'Western Wear',
        link: '/women-western-wear',
      },
      {
        title: 'Ethnic & Fusion Wear',
        link: '/women-ethnic-and-fusion-wear',
      },
      {
        title: 'FOOTWEAR',
        link: '/women-footwear',
      },
      {
        title: 'BEAUTY',
        link: '/women-beauty',
      },
      {
        title: 'ACCESSORIES',
        link: '/women-accessories',
      },
    ],
  },
  {
    categoryTitle: 'BRANDS:',
    subitems: [
      {
        title: 'IFAZONE',
        link: '/brands/ifazone',
      },
      {
        title: 'EARTHY SCENT',
        link: '/brands/earthyscent',
      },
      {
        title: 'A.B.G',
        link: '/brands/abg',
      },
      {
        title: 'KUEFIT',
        link: '/brands/kuefit',
      },
      {
        title: 'SOLASTA',
        link: '/brands/solasta-shoes',
      },
      {
        title: 'MR.HUFFMAN',
        link: '/brands/mrhuffman',
      },
      {
        title: 'Amiiga',
        link: '/brands/amiiga',
      },
    ],
  },
];

/* eslint-disable */
const SocialLinks = () => {
  return (
    <div className="ui icons">
      <a href="https://www.instagram.com/asortworld/" className="ui button " target="_blank">
        <img src={`${CDN_BASE_URL}resources/images/round.png`} alt="" />
      </a>
      <a href="https://twitter.com/AsortWorld" className="ui button " target="_blank">
        <img src={`${CDN_BASE_URL}resources/images/twitt.png`} alt="" />
      </a>
      <a href="https://www.youtube.com/channel/UC_FBgv4zUP3MpiFDtyATqJA" className="ui  button " target="_blank">
        <img src={`${CDN_BASE_URL}resources/images/youtube.png`} alt="" />
      </a>
      <a href="https://www.facebook.com/asortworld/" className="ui  button " target="_blank">
        <img src={`${CDN_BASE_URL}resources/images/facebook.png`} alt="" />
      </a>
    </div>
  )
}
// const CustomLink = ({ state, title }) => (
//   <span onClick={() => Router.go(state)} style={{ cursor: "pointer" }}>
//     {title}
//   </span>
// );
const DsFooter = () => {
  // const user = Accounts.user();
  // const hostName = window.location.hostname;
  // let isAsort = checkForAsortDomain(hostName);

  const FooterText = () => {
    let currentUrl = window.location.pathname;

    const footerContent = FooterContentDsAsort.find((item) => {
      return currentUrl === item.path;
    })
    if (footerContent) {
      return (
        footerContent.content()
      );
    }
    else return null;
  }

  const FooterStaticLinkContainer = () => {
    return (
      <div> {FooterStaticLinkDsAsort.map((item, i) => {
        return (
          <div key={i}><strong>{item.categoryTitle} </strong>
            <span>{item.subitems.map((subitem, index) => {
              if (subitem.link) {
                return (
                  <Link key={index} to={subitem.link}
                    className={`footer-${item.categoryTitle}-${subitem.title}`}
                  >
                    {subitem.title} {index < item.subitems.length - 1 ? '| ' : ''}
                  </Link>
                )
              } else {
                return <span key={index}>{subitem.title} {index < item.subitems.length - 1 ? '| ' : ''}</span>
              }
            })}
            </span>
          </div>
        )
      })}
      </div>
    )
  }

  return (
    <footer>
      <div className="container-fluid">
        <div className="ui  vertical footer">
          <div className="ui center ">
            <div className="ui stackable   grid foot desk-foot">
              <div className="four wide column">
                <h4 className="ui  header">CORPORATE INFO</h4>
                <div className="ui  link list">
                  <Link to="/about-us" className="item">About Us</Link>
                  <Link to="/our-team" className="item">Our Team</Link>
                  <Link to="/brands" className="item">Our Brands</Link>
                  <Link to="/compensation-plan" className="item">Incentive Plan</Link>
                  <a href="/code-ethics.pdf" target="_blank" className="item">Code Of Ethics And Conducts</a>
                  <a href="/RTO_Policy.pdf" target="_blank" className="item">Return To Origin("RTO") Policy</a>
                  <a href="/term.pdf" target="_blank" className="item">DS.Asort Terms And Conditions</a>
                  <a href="/DS.Asort_LicenseTransferPolicy.pdf" target="_blank" className="item">License Transfer Policy</a>
                  <a href="/DirectSellerContract.pdf" target="_blank" className="item">Direct Seller Contract</a>
                  <Link to="/rules-unauthorized" className="item">Unauthorized Distributor & False Information</Link>
                  <a href="/DS.Asort_Return_and_Refund_Policy.pdf" target="_blank" className="item">Return And Refund Policy</a>
                </div>
              </div>
              <div className="two wide column">
                <h4 className="ui  header">HELP</h4>
                <div className="ui  link list">
                  <Link to="/faq" className="item">FAQ</Link>
                  <Link to="/contact-us" className="item">Contact Us</Link>
                  <Link to="/privacy-policy" className="item">Privacy policy & Rules</Link>
                </div>
              </div>
              <div className="three wide column ">
                <h4 className="ui  header">Follow us</h4>
                <SocialLinks />
              </div>
              <div className="five wide column ">
                <div className="address">
                  <p>By entering your email address, you agree to receive DS.Asort offers, promotions, and other commercial messages. You may unsubscribe at any time.</p>
                  <p>Copyright ©️ 2018 Asort. All rights reserved.</p>
                </div>
                <h4 className="footer-copy">&copy; 2018 Asort all copyrights reserved</h4>
              </div>
            </div>
            <div className="follow">
              <a className=" title">
                <h4 className="ui  header">Follow us</h4>
              </a>
              <SocialLinks />
              <h4 className="header footer-copy">&copy; 2018 Asort all copyrights reserved</h4>
            </div>
          </div>
          {/*static footer content*/}
          <div className="footer-static-content">
            <FooterStaticLinkContainer />
          </div>
          {/*static footer content*/}
          {/*footer contact*/}
          <div style={{ padding: '20px 2rem', textAlign: 'center', borderTop: '1px solid #ccc' }}><strong>Registered Office Address : </strong>
              Dynamic Beneficial Accord Marketing Pvt. Ltd. Plot No. 585, Sector-82, JLPL Industrial Area, S.A.S Nagar, Mohali, 160055, India CIN: 'U51909PB2011PTC035491'
            Telephone:  <a href="tel:+0124-4576162">0124-4576162</a> Email: <a href="mailto:care@asort.com">care@asort.com</a>
          </div>
          {/*footer contact */}
          <div id="footer-dynamic-content"><FooterText /></div>
        </div>
      </div>
    </footer>
  );

}
export default DsFooter;
