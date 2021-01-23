export default function template1up(products, showTags, showBrand) {
  return `<!-- grid gen -->
  <table width="700" border="0" cellspacing="0" cellpadding="0" align="center">
    <tr>
      <td style="padding-top: 50px;">
        <table width="500" border="0" cellspacing="0" cellpadding="0" align="center">
  ${products.map((p) => {
    const tags = p.tags.join('&nbsp;· ');
    return `
          <!-- next pick -->
          <tr>
            <td align="center">
              ${p.imageLink}
                <img alt="${p.productName}" border="0" height="450" src="https://www.sephora.com/productimages/sku/s${p.skuId}-main-hero.jpg?${p.badge.value}imwidth=450" style="display:block; margin: 10px 0;" width="450">
              </a>
            </td>
          </tr>
          <tr>
            <td align="center" style="line-height:25px;padding-bottom:10px;padding-top:10px;font-family:Helvetica, Arial, sans-serif; font-size:16px;">
            ${p.textLink}
                ${(showTags && p.tags) ? `
                <span style="color:#C0143C;letter-spacing:0.1em;line-height:25px;"><b>${tags}</b></span>
                ` : ''}
              </a>
            </td>
          </tr>
          <tr>
            <td align="center" style="line-height:25px;padding-bottom:25px;font-family:Helvetica, Arial, sans-serif; font-size:20px;">
            ${p.textLink}
                <span style="letter-spacing:0.01em; color:#000000;">
                ${showBrand ? `<b>${p.brandName}</b><br/>` : ''}${p.productName}, ${(p.salePrice) ? `<s>${p.price}</s> <span style="color:red">${p.salePrice}</span>` : p.price} ${p.valuePrice || ''}
                </span>
              </a>
            </td>
          </tr>`;
  }).join('')}
        </table>
      </td>
    </tr>
  </table>
  `;
}
