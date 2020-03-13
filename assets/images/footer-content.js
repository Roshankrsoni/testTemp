import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import React from 'react';

const hostnames = Meteor.settings.public.ASORT_HOST_NAMES;

const FooterContentAsort = [
  {
    path: '/',
    content: () => (
      <div className="footer-text">
        <h1 className='foot-heading'>Online Shopping made easy with Asort</h1><p className='foot-content'>Gone are the days when you needed to roam around in the crowded streets of local market for hours in order to get that one perfect outfit. Thanks to the technology, <b>online shopping</b> has taken over the entire market faster than one could even realized. Now the whole world is on fingertips and everything is available online, it’s pretty simple to shop from the comfort of your home while enjoying benefits of <b><Link to="/">online shopping in India</Link>.</b> Be it the exclusive offers, great deals, big discounts or most trendy fashion products, Asort is here to make your online shopping experience incredible and hassle free. <br /><br />
          <br />
          Online shopping in India is a new buzz, but sometimes{' '}
          <b>shopping online</b> can be really tedious and troublesome, but at
          Asort with a vast variety of attractive designs and amazing cuts along
          with the reasonable prices, you will never get bored. Our one stop
          fashion destination is easy to navigate your experience delightful.
          You can browse through the most stylish and trendiest collection and
          grab the best deals available for you. Asort offers you the finest and
          high quality fashion products designed by own private label brands.
          With the help of <b>Asort online shopping</b>, you can get anything
          anytime anywhere with utmost ease. Go ahead and shop till you drop on
          India's most jazzy and unique online fashion store.
          <br />
        </p><h2 className='foot-heading'>Latest Trends under One-roof</h2><p className='foot-content'>Are you still befuddled about the <b>best online shopping sites?</b> Let’s just put an end to your dilemma. Get up to speed with us to find the trendiest and awe-striking range of fashion essentials and make the best of your online shopping without getting into any hassle. Let’s see what we have got to offer you–<br /><br />
          <br />
          Reinventing your style was never easier! <Link to="/">Asort</Link> is
          a one stop destination for all your fashion needs. We give you the
          opportunity to give your wardrobe a makeover with the latest
          collections from our <Link to="/brands">top brands</Link>. Asort aims
          at ensuring nothing but the best and trendiest for your closet. Find
          everything in one place,{' '}
          <b>
            <Link to="/brands/earthyscent">shop online ethnic wear</Link>
          </b>{' '}
          or <Link to="/mrhuffman">formal wear</Link>, the most desired dresses
          or the latest trends are no more a challenge to find. Choose from an
          enviable collection of men and <Link to="/women">women</Link> fashion
          clothes to make a style impact. To enhance your style further, you can
          choose from our massive collection of fashion{' '}
          <Link to="/men">accessories</Link> and footwear that can directly make
          way through your go-to collection for all occasions.
          <br />
          <br />
          While women enjoy retail therapy, the <Link to="/men">men</Link> can
          have their share of hassle-free shopping experience. The search does
          not end at <Link to="/abg-tshirts">quirky tees</Link>,{' '}
          <Link to="/men-formal-shirts">formal</Link> or{' '}
          <Link to="/men-casual-shirts">casual shirts</Link>. From the boardroom
          to the beach, from <Link to="/mrhuffman-partywear">party</Link> to{' '}
          <b>
            <Link to="/brands/abg">shop online street wear</Link>
          </b>
          , find everything that your heart desires from the best of brands. Add
          a dash of style to your outfit with a choice of swaggy shoes and
          flaunt your fashion sense in cool pair of{' '}
          <Link to="/men-sunglasses">sunglasses</Link>, Asort provides a wide
          array of trendiest fashion products. Looking like your favorite
          celebrity or fashion icons is easy with Asort.
          <br />
          <br />
        </p>
        <h2 className="foot-heading">Online Shopping for Men</h2>
        <p className="foot-content">
          Men’s fashion wear has evolved over the years. The fashion for men has
          grown into a full-blown market with stylish attires and{' '}
          <Link to="/men-accessories">accessories</Link>. With this growth, the
          opportunities of{' '}
          <b>
            <Link to="/men">online shopping for men</Link>
          </b>{' '}
          have also cropped up. At Asort, you will find an unbeatable collection
          of trendy and fashionable <Link to="/men">menswear</Link>.<br />
          <br />
          For swaggy college guys, check out the wide range of{' '}
          <Link to="/abg-graphic-tees">printed tees</Link>, stylish{' '}
          <Link to="/men-footwear">shoes</Link> and baggy{' '}
          <Link to="/men-trousers">trousers</Link>. Make a statement in with
          impeccably smart clothes and{' '}
          <Link to="/men-accessories">accessories</Link>. If you are office
          going lad, you will find the best of{' '}
          <Link to="/men-casual-shirts">casual shirts</Link> and{' '}
          <Link to="/men-formal-shirts">formal shirts for men</Link>,{' '}
          <Link to="/men-trousers">trousers</Link>,{' '}
          <Link to="/men-formal-shoes">formal shoes</Link> as well as{' '}
          <Link to="/men-wallets">wallets</Link> and{' '}
          <Link to="/mrhuffman-accessories">ties</Link>. When it comes to{' '}
          <Link to="/men-accessories">men’s accessories</Link> we know the
          choice is limited. We however, get the best in{' '}
          <Link to="/men-accessories">accessories</Link>.{' '}
          <b>
            <Link to="/men">Shop online for men</Link>
          </b>{' '}
          from a wide variety of <Link to="/men-footwear">men’s shoes</Link> and{' '}
          <Link to="/men-wallets">men’s wallets</Link> that match the youthful
          energy of the young.
          <br />
          <br />
          Don’t wait for deals and offers, with our{' '}
          <b>online collection for men</b> you can now stock up on your
          favorites for less. Look out for exclusive offers for Men and stay
          tuned for more upcoming collection!
          <br />
          <br />
        </p>
        <h3 className="foot-heading">Online Shopping for Women</h3>
        <p className="foot-content">
          Knowing about the ever-increasing demand of Indian fashion across all
          over the world, be it enchanting{' '}
          <b>
            <Link to="/earthyscent-women">ethnic wear for women</Link>
          </b>{' '}
          or stylish <Link to="/women-tops-and-tshirts">tees</Link> and{' '}
          <Link to="/women-trousers">trousers</Link>, we have come up with the
          magnificent collection of trendy styles which are simply the best
          staples of the season.
          <br />
          <br />
          At Asort, you will find the sassiest league of fashion experts giving
          you not only fashion advices but with the latest and trendiest
          collection of women staples and{' '}
          <Link to="/women-accessories">accessories</Link>. Get ready to switch
          to{' '}
          <b>
            <Link to="/women">online shopping for women</Link>
          </b>{' '}
          to come across the handiest access to wide range and unimaginably
          delightful experience.
          <br />
          <br />
          Whether you are an avid <Link to="/earthyscent-women">
            ethnic
          </Link>{' '}
          lover or a sassy woman with an immense love for{' '}
          <Link to="/abg-women">street wear</Link>, make Asort your foremost and
          ultimate shopping addiction to relish the forever endearing charm and
          allure of women fashion. Get <b>online trendy clothes</b> at
          affordable prices and oomph up your style quotient wherever you go!{' '}
          <br />
          <br />
        </p>
        <h3 className="foot-heading">Brands that Matter</h3>
        <p className="foot-content">
          At one hand, you can{' '}
          <b>
            <Link to="/brands/abg">shop online street wear</Link>
          </b>{' '}
          from <Link to="/brands/abg">ABG</Link> and bring out the best in you.
          The brand is specifically for the youth of India who have immense love
          for <Link to="/brands/abg">street wear</Link> in their hearts. The
          brand provides super loose{' '}
          <Link to="/abg-graphic-tees">graphic tees</Link>, baggy{' '}
          <Link to="/abg-chinos">chinos</Link> and super stylish{' '}
          <Link to="/abg-shoes">dunk shoes</Link> that can literally add glamour
          in your look. <br />
          <br />
          For the ones who want to stay connected to the nature,{' '}
          <Link to="/brands/earthyscent">Earthyscent</Link> offers the{' '}
          <Link to="/brands/earthyscent">best ethnic clothes</Link> for both men
          and women. Be it regular{' '}
          <Link to="/earthyscent-kurtis-and-tunics">Kurtis</Link> or{' '}
          <Link to="/earthyscent-nehru-jackets">Nehru jackets</Link>,{' '}
          <Link to="/earthyscent-footwear">Indian footwear</Link> or heritage
          styled <Link to="/earthyscent-jewellery">jewellery</Link>,{' '}
          <b>
            <Link to="/brands/earthyscent">shop online ethnic wear</Link>
          </b>{' '}
          and give an Indie feel to your modern style. <br />
          <br />
          Looking stylish even on your regular days is what each human want in
          today’s world. Keeping this need in mind,{' '}
          <Link to="/brands/ifazone">Ifazone</Link> by Asort provides the basic
          yet stylish collection to both men & women.
          <br />
          <br />
          For classy men who understand class,{' '}
          <Link to="/brands/mrhuffman">Mr. Huffman</Link> caters the best{' '}
          <Link to="/brands/mrhuffman">formal wear</Link> collection which will
          help you look no less than a gentleman. From finest fabric textures to
          amazing cuts, seal any deal wearing Mr. Huffman. You can even{' '}
          <b>
            <Link to="/brands/mrhuffman">shop online resort wear</Link>
          </b>{' '}
          and look extremely hot even at your vacations.
          <br />
          <br />
          Give a ooze to you feel by shopping{' '}
          <Link to="/men-footwear">footwear</Link> online by{' '}
          <Link to="/solasta-shoes">Solatsa shoes</Link>! The brand doesn’t only
          provide you the latest collection of footwear but also keeps your feet
          at ease.
          <br />
          <br />
          As our country is growing, people do understand the different between{' '}
          <Link to="/brands/kuefit">sport-wear</Link> and performance wear.
          There is a lot to consider when it comes to{' '}
          <Link to="/brands/kuefit">sportswear</Link> and Asort provides the
          incredibly breathable, stretchy and long-lasting sport collection.{' '}
          <b>
            <Link to="/brands/kuefit">Shop online sportswear</Link>
          </b>{' '}
          and make every mile counts. <br />
          <br />
          Visit Asort for a hassle free online shopping experience and look
          glamorous every time you step out of your home!
          <br />
          <br /> </p>
      </div>
      )
  },
  {
    path: '/men',
    content: () => (
      <div className="footer-text">
        <p className='foot-heading'>Men&rsquo;s wear</p>
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
        <p className='foot-content'> Your look can never be complete without a perfect pair of shoes. Asort brings you with a hub of categories to choose from. Be it <Link to="/men-sports-shoes"> sports shoes </Link>, <Link to="/men-casual-shoes"> casual shoes </Link>, <Link to="/men-formal-shoes"> formal shoes </Link>, <Link to="/men-sandals"> floaters and flip-flop </Link>, <Link to="/men-boots"> boots </Link>, or <Link to="/men-running-shoes"> running shoes </Link>, you will definitely get a number of choices to add to your cart. Every single <Link to="/men-footwear"> men footwear </Link> is a designer&rsquo;s choice with materials that oozes the wearer. Fill up your shoe rack with the best of choices from Asort. While <Link to="/brands/solasta-shoes"> Solasta shoes </Link> offers you all the varieties in all the categories, ABG swoops in with its hip street style sneakers. If you are looking for some formal shoes, Mr. Huffman also got your back.</p>
      </div>
    )
  },
  {
    path: '/brands',
    content: () => (
      <div className="footer-text">
        <p className='foot-heading'>Shop Online from the Brands Made Proudly in India</p>
        <p className='foot-content'>In the world where everyone is running after the brands that are solely made in big countries, Asort thought of empowering our country by catering their fashion needs with Indian brands. Asort is on a mission to change the way people <Link to="/">shop online in India</Link> by not just providing them the latest and trendy fashion &amp; lifestyle products but by offering them reward for each purchase as well.</p>
        <p className='foot-heading'>Earn Money while Shop with Asort</p>
        <p className='foot-content'>There are a number of online shopping stores which delivers multiple fashion clothes and <Link to="/men-accessories">accessories for men</Link>. But Asort is a unique business model with a mission of making India the next fashion destination and the people more stylish and trendiest; Asort has brought six private brands that cover all your fashion needs. Asort aims to cater all fashion requirements by providing each and every kind of fashion product to both men and women. Be it <Link to="/brands/earthyscent">Indian ethnic wear for women</Link> or classy <Link to="/men-blazers">blazers for men</Link>, Asort satisfies all your fashion needs at one store. From <Link to="/men-joggers">baggy joggers</Link> &amp; <Link to="/abg-tshirts">printed tees</Link> to trendy selection of footwear, Asort&rsquo;s all brand caters to different audience. The <Link to="/men">online trendy clothes for men</Link> and fashion accessories &amp; <Link to="/women-jewellery">jewellery for women</Link> are available at Asort in a variety of designs. These <Link to="/women-accessories">accessories for women</Link> are made of the finest quality, sourced directly from the brands.</p>
        <p className='foot-heading'>Get Trendy Clothes &amp; Best Offers</p>
        <p className='foot-content'>All these brands are fun, interesting and inspired form the global trends. All six brands- ABG, Ifazone, Mr Huffman, Earthyscent, Kuefit and Solasta cover all your fashion needs by offering fashion products of different categories. Each brand is different from another and caters your <Link to="/brands/abg">street wear</Link>, regular wear, <Link to="/mrhuffman-formal-wear">formal wear</Link> and resort wear, <Link to="/brands/earthyscent">ethnic wear</Link>, <Link to="/brands/kuefit">sportswear</Link> and footwear; that too if latest designs and trendiest styles at reasonable prices. You have one more reason to shop online at Asort which is a no to leather reason. In the process of crafting these fashion products, we majorly take care of not using any animal skin not even for a trim. All these brands provide no-leather products in order to keep our environment clean &amp; safe!</p>
        <p className='foot-heading'>Online Shopping with Asort is Incredible Yet Easy</p>
        <p className='foot-content'>We all have got habitual of great deals and big discounts. <Link to="/">Online shopping</Link> has become a popular practice and thus a lot of new online stores keep hitting the market every now and them. But Asort is different because of its unique model. With the help of <Link to="/">Asort online shopping</Link>, you can reinvent your wardrobe and give your style a new allure. Buy the trendiest of designs and refreshing styles, to spruce up your wardrobe and deck up like the star you are!</p>
        <p className='foot-heading'>Great Discounts, Big Deals &amp; Much More</p>
        <p className='foot-content'>All these private labels of Asort are different and unique from each other. At ABG, you can have the <Link to="/brands/abg">latest street wear for men</Link> &amp; women, and at Earthscent you can have the <Link to="/brands/earthyscent">modern ethnic attire</Link>. Kuefit will provide you the comfort of stylish <Link to="/brands/kuefit">active wear</Link>, and Mr Huffman will bring some extra class in your wardrobe with classy <Link to="/mrhuffman-formal-wear">formal wear for men</Link>. Solasta will take care of your feet and take you to places with <Link to="/men-casual-shoes">casual shoes for men</Link>, <Link to="/men-formal-shoes">formal shoes for men</Link>, <Link to="/women-flats">sandals for women</Link> and much more. Shop online at Asort and you can get much more than big discounts &amp; great deals. Asort aims to change the way e-commerce is being run in India.</p>
      </div>
    )
  },
  {
    path: '/women',
    content: () => (
      <div className="footer-text">
        <p className='foot-heading'>Online shopping for women at Asort is easier yet incredible!</p>
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
        <p className='foot-content'>And there are more fabulous products such as sportswear, blazers, and other fashion accessories for women online. The women&rsquo;s online shopping experience at Asort is filled with unlimited choices and great fashion products!</p>
      </div>
    )
  },
];
const FooterContentDsAsort = [
  {
    path: '/',
    content: () => (
      <div className="footer-text">
        <h1 className='foot-heading'>Creating Fashionable <b>Business Opportunity</b> For Young India</h1>
        <p className='foot-content'>
          Ds.asort is the first fashion <b>direct selling company</b> in India.
          As DS.ASORT we take pride in encouraging millions of dreams by
          fulfilling their aspiration to be an entrepreneur. We are impacting
          over 7 Lakhs+ lives while fuelling their entrepreneurship spirit. We
          are promoting our Independent Business Owners to enhance their
          business skills. Our team of expert's, deliver best training sessions
          to help and nourish the young talent.
        </p>
        <p className='foot-content'>
          Our 7 lifestyle homegrown brands- Ifazone, Mr. Huffman, Earthy Scent,
          Solasta, Kuefit, ABG and Amiiga have their own unique identity,
          offering the best quality lifestyle products. Ds.asort making a
          community of happy customers while providing the best lifestyle
          products for day to day life. We launch fashionable and comfortable
          fashion products every week because we believe that fashion and
          comfort complement each other.
        </p>
        <p className='foot-content'>
          Every dream matters and we believe them and also encourage them to be
          your own boss.
        </p>
      </div>
    )
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
    )
  },
  {
    path: '/brands',
    content: () => (
      <div className="footer-text">
        <h1 className='foot-heading'>Creating Fashionable <b>Business Opportunity</b> For Young India</h1>
        <p className='foot-content'>
          Ds.asort is the first fashion <b>direct selling company</b> in India.
          As DS.ASORT we take pride in encouraging millions of dreams by
          fulfilling their aspiration to be an entrepreneur. We are impacting
          over 7 Lakhs+ lives while fuelling their entrepreneurship spirit. We
          are promoting our Independent Business Owners to enhance their
          business skills. Our team of expert's, deliver best training sessions
          to help and nourish the young talent.
        </p>
        <p className='foot-content'>
          Our 7 lifestyle homegrown brands- Ifazone, Mr. Huffman, Earthy Scent,
          Solasta, Kuefit, ABG and Amiiga have their own unique identity,
          offering the best quality lifestyle products. Ds.asort making a
          community of happy customers while providing the best lifestyle
          products for day to day life. We launch fashionable and comfortable
          fashion products every week because we believe that fashion and
          comfort complement each other.
        </p>
        <p className='foot-content'>
          Every dream matters and we believe them and also encourage them to be
          your own boss.
        </p>
      </div>
    )
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
    )
  },
];
const FooterContent = hostnames.indexOf(window.location.hostname) > -1;
FooterContentAsort :
FooterContentDsAsort;
module.exports = FooterContent;
