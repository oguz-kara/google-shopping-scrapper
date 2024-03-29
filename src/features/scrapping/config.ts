export const googleConfig = {
  url: 'https://google.com',
  selectors: {
  searchInput: '#APjFqb',
  shopping: 'div.hdtb-mitem:nth-child(2) > a:nth-child(1)',
  shoppingLinkXPathExpression: '//a[contains(text(), "Alışveriş")]',
  noResultsMessageSelectorXPath: '/html/body/div[6]/div/div[4]/div[3]/div/div[3]/div/div/p[1][contains(text(), "aramanız hiçbir alışveriş sonucuyla eşleşmedi.")]',
  relatedProductsLinkXPathExpression: '//a[contains(text(), "mağazanın fiyatlarını karşılaştır")]',
  regularProductName: '.tAxDx',
  regularProductPrice: '.a8Pemb.OFFNJ',
  regularProductCard: '#rso > div > div:nth-child(2) > div > div',
  regularProductProvider: '.aULzUe.IuHnof',
  regularProductLink: '.shntl',
  regularProductShipping: '.vEjMR',
  regularProductsImage: '.LqJxtf .tlSpCe .B3mEmd .VOo31e a  .FM6uVc  .ArOc1c  img',
  adsProductCard: '.KZmu8e',
  adsProductName: '.shntl.sh-np__click-target .sh-np__product-title.translate-content',
  adsProductPrice: 'a.sh-np__click-target .T14wmb .translate-content',
  adsProductProvider: 'a.sh-np__click-target .sh-np__seller-container .E5ocAb',
  adsProductLink: '.shntl.sh-np__click-target',
  adsProductShipping: '.sh-np__click-target .U6puSd',
  adsProductsImage: 'a.sh-np__click-target > .SirUVb.sh-img__image > img',
  relatedProductName: '.BvQan',
  relatedProductPrice: '.sh-osd__offer-row .SH30Lb .g9WBQb.fObmGc',
  relatedProductCard: '.sh-osd__offer-row',
  relatedProductProvider: '.sh-osd__offer-row .b5ycib.shntl',
  relatedProductLink: '.sh-osd__offer-row .UxuaJe.shntl.FkMp',
  relatedProductImage: '.r4m4nf',
  }
};

