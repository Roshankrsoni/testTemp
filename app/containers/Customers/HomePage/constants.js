/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const GET_HOT_SELLING_PRODUCTS = 'Home/GET_HOT_SELLING';
export const GET_HOT_SELLING_PRODUCTS_SUCCESS = 'Home/GET_HOT_SELLING_SUCCESS';
export const GET_HOT_SELLING_PRODUCTS_ERROR = 'Home/GET_HOT_SELLING_ERROR';

// export const baseUrl = 'https://ds.asort.com/';
export const stores = [
  {
    storeimage: 'assets/home/images/dsAsort/stores/winter-collection-1.0.png',
    redirecturl: '/winter-wear-store',
    position: 2,
    active: true,
    sectionId: 'JXevrCNy5qXiRRNaq',
    _id: '3yry9ek3db3s1a',
    shadow: '0px 8px 40px 0px #1c83b07a',
  },
  {
    storeimage: 'assets/home/images/dsAsort/stores/699-1.0.png',
    redirecturl: '/under-699',
    position: 3,
    active: true,
    sectionId: 'JXevrCNy5qXiRRNaq',
    _id: '3yry9ek3db4ssr',
    shadow: '0px 8px 40px 0px #f75ea67a',
  },
  {
    storeimage: 'assets/home/images/dsAsort/stores/999-1.0.png',
    redirecturl: '/under-999',
    position: 4,
    active: true,
    sectionId: 'JXevrCNy5qXiRRNaq',
    _id: '3yry9ek3db5hu4',
    shadow: '0px 8px 40px 0px #fe963c7a',
  },
  {
    storeimage: 'assets/home/images/dsAsort/stores/1499-1.0.png',
    redirecturl: '/under-1499',
    position: 1,
    active: true,
    sectionId: 'JXevrCNy5qXiRRNaq',
    _id: '3yry9ek3db094e',
    shadow: '0px 8px 40px 0px #856fdb7a',
  },
];

export const trendingwomen = [
  {
    trendingurl:
      'assets/home/images/dsAsort/trending-women/trendingWomens-1.0.jpg',
    redirecturl: '/women-tees-and-tops',
    position: 1,
    active: true,
    sectionId: 'sHxqsPrz7DahNZiRP',
    _id: '3yry9ek3dbbgk6',
  },
  {
    trendingurl:
      'assets/home/images/dsAsort/trending-women/trendingWomens-2.0.jpg',
    redirecturl: '/women-shoes',
    position: 2,
    active: true,
    sectionId: 'sHxqsPrz7DahNZiRP',
    _id: '3yry9ek3dbc6hq',
  },
  {
    trendingurl:
      'assets/home/images/dsAsort/trending-women/trendingWomens-3.0.jpg',
    redirecturl: '/women-accessories',
    position: 3,
    active: true,
    sectionId: 'sHxqsPrz7DahNZiRP',
    _id: '3yry9ek3dbcufx',
  },
  {
    trendingurl:
      'assets/home/images/dsAsort/trending-women/trendingWomens-4.0.jpg',
    redirecturl: '/women-sarees',
    position: 4,
    active: true,
    sectionId: 'sHxqsPrz7DahNZiRP',
    _id: '3yry9ek3dbdqbz',
  },
];

export const newarrival = [
  {
    newarrivalurl:
      'assets/home/images/dsAsort/new-collections/new-collection-1.0.jpg',
    redirecturl: '/earthyscent-peharav-collection',
    position: 1,
    active: true,
    sectionId: 'S9fMcBt7YrEsDRKic',
    _id: '3yry9ek3dbhw2l',
  },
  {
    newarrivalurl:
      'assets/home/images/dsAsort/new-collections/new-collection-2.0.jpg',
    redirecturl: '/kuefit-rise-up-collection',
    position: 2,
    active: true,
    sectionId: 'S9fMcBt7YrEsDRKic',
    _id: '3yry9ek3dbn4v7',
  },
  {
    newarrivalurl:
      'assets/home/images/dsAsort/new-collections/new-collection-3.0.jpg',
    redirecturl: '/abg-lost-locality-collection',
    position: 3,
    active: true,
    sectionId: 'S9fMcBt7YrEsDRKic',
    _id: '3yry9ek3dbo421',
  },
];

export const trendingmen = [
  {
    trendingurl: 'assets/home/images/dsAsort/trending-men/trendingMen-1.0.jpg',
    redirecturl: '/men-tshirts-and-vests',
    position: 1,
    active: true,
    sectionId: 'M5iL8suQtni2Qmeer',
    _id: '3yry9ek3dbr1nb',
  },
  {
    trendingurl: 'assets/home/images/dsAsort/trending-men/trendingMen-2.0.jpg',
    redirecturl: '/men-footwear',
    position: 2,
    active: true,
    sectionId: 'M5iL8suQtni2Qmeer',
    _id: '3yry9ek3dbrpcf',
  },
  {
    trendingurl: 'assets/home/images/dsAsort/trending-men/trendingMen-3.0.jpg',
    redirecturl: '/men-jeans',
    position: 3,
    active: true,
    sectionId: 'M5iL8suQtni2Qmeer',
    _id: '3yry9ek3dbsauf',
  },
  {
    trendingurl: 'assets/home/images/dsAsort/trending-men/trendingMen-4.0.jpg',
    redirecturl: '/men-shirts',
    position: 4,
    active: true,
    sectionId: 'M5iL8suQtni2Qmeer',
    _id: '3yry9ek3dbsx7y',
  },
];

export const trendingaccessories = [
  {
    trendingaccessoriesurl:
      'assets/home/images/dsAsort/accessories/accessories-1.1.0.jpg',
    redirecturl: '/women-bags',
    position: 1,
    active: true,
    sectionId: '8x7LMjESgEMsGvDS7',
    _id: '3yry9ek3dc7c3z',
  },
  {
    trendingaccessoriesurl:
      'assets/home/images/dsAsort/accessories/accessories-2.1.0.jpg',
    redirecturl: '/men-sunglasses',
    position: 2,
    active: true,
    sectionId: '8x7LMjESgEMsGvDS7',
    _id: '3yry9ek3dc7y00',
  },
  {
    trendingaccessoriesurl:
      'assets/home/images/dsAsort/accessories/accessories-3.1.0.jpg',
    redirecturl: '/women-jewellery',
    position: 3,
    active: true,
    sectionId: '8x7LMjESgEMsGvDS7',
    _id: '3yry9ek3dc8kru',
  },
  {
    trendingaccessoriesurl:
      'assets/home/images/dsAsort/accessories/accessories-4.1.0.jpg',
    redirecturl: '/men-neckties',
    position: 4,
    active: true,
    sectionId: '8x7LMjESgEMsGvDS7',
    _id: '3yry9ek3dc9nfx',
  },
];

export const shopbycategory = [
  {
    shopbycategoryurl:
      'assets/home/images/dsAsort/categories/categorie-1.0.jpg',
    text: 'Women Bottom Wear',
    redirecturl: '/women-bottomwear',
    position: 1,
    active: true,
    sectionId: 'CdGdxZeF2fohmDGRf',
    _id: '3yry9ek3dchuv5',
  },
  {
    shopbycategoryurl:
      'assets/home/images/dsAsort/categories/categorie-2.0.jpg',
    text: "Men's Topwear",
    redirecturl: '/men-topwear',
    position: 2,
    active: true,
    sectionId: 'CdGdxZeF2fohmDGRf',
    _id: '3yry9ek3dcihzi',
  },
  {
    shopbycategoryurl:
      'assets/home/images/dsAsort/categories/categorie-3.0.jpg',
    text: 'Women Top',
    redirecturl: '/women-tees-and-tops',
    position: 3,
    active: true,
    sectionId: 'CdGdxZeF2fohmDGRf',
    _id: '3yry9ek3dcj4e4',
  },
  {
    shopbycategoryurl:
      'assets/home/images/dsAsort/categories/categorie-4.0.jpg',
    text: 'Women Accessories',
    redirecturl: '/women-accessories',
    position: 2,
    active: true,
    sectionId: 'CdGdxZeF2fohmDGRf',
    _id: '3yry9ek3dcihzi',
  },
  {
    shopbycategoryurl:
      'assets/home/images/dsAsort/categories/categorie-5.0.jpg',
    text: "Men's Footwear",
    redirecturl: '/men-footwear',
    position: 2,
    active: true,
    sectionId: 'CdGdxZeF2fohmDGRf',
    _id: '3yry9ek3dcihzi',
  },
  {
    shopbycategoryurl:
      'assets/home/images/dsAsort/categories/categorie-6.0.jpg',
    text: "Men's Accessories",
    redirecturl: '/men-accessories',
    position: 2,
    active: true,
    sectionId: 'CdGdxZeF2fohmDGRf',
    _id: '3yry9ek3dcihzi',
  },
  {
    shopbycategoryurl:
      'assets/home/images/dsAsort/categories/categorie-7.0.jpg',
    text: 'Women Footwear',
    redirecturl: '/women-footwear',
    position: 2,
    active: true,
    sectionId: 'CdGdxZeF2fohmDGRf',
    _id: '3yry9ek3dcihzi',
  },
  {
    shopbycategoryurl:
      'assets/home/images/dsAsort/categories/categorie-8.0.jpg',
    text: "Men's Bottom Wear",
    redirecturl: '/men-bottomwear',
    position: 2,
    active: true,
    sectionId: 'CdGdxZeF2fohmDGRf',
    _id: '3yry9ek3dcihzi',
  },
];

export const asortstyle = [
  {
    asortstyleurl: 'assets/home/images/dsAsort/asort-style/style-2.0.jpg',
    position: 2,
    active: true,
    sectionId: 'egWSToD3Q3ayzBuBm',
    _id: '3yry9ek3dcnphw',
  },
  {
    asortstyleurl: 'assets/home/images/dsAsort/asort-style/style-3.0.jpg',
    position: 2,
    active: true,
    sectionId: 'egWSToD3Q3ayzBuBm',
    _id: '3yry9ek3dcnphw',
  },
  {
    asortstyleurl: 'assets/home/images/dsAsort/asort-style/style-4.0.jpg',
    position: 2,
    active: true,
    sectionId: 'egWSToD3Q3ayzBuBm',
    _id: '3yry9ek3dcnphw',
  },
  {
    asortstyleurl: 'assets/home/images/dsAsort/asort-style/style-5.0.jpg',
    position: 2,
    active: true,
    sectionId: 'egWSToD3Q3ayzBuBm',
    _id: '3yry9ek3dcnphw',
  },
  {
    asortstyleurl: 'assets/home/images/dsAsort/asort-style/style-6.0.jpg',
    position: 2,
    active: true,
    sectionId: 'egWSToD3Q3ayzBuBm',
    _id: '3yry9ek3dcnphw',
  },
];
