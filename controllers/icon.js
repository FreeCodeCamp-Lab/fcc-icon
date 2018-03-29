'use strict';
let tag = '收录！';

let org = 'FCC';

let colorOK = '#97CA00';



const Icon = (req, res) => {
  let name = getName(req);
  console.log(name);
  if (name === '') {
    colorOK = '#97CA00';
    tag = '测试';
  } else {
    if (!global.allow.includes(name)){
      colorOK = '#CD183F';
      tag = '未收录';
    }
  }
  let scgTpl = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="108" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="a"><rect width="108" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#a)"><path fill="#555" d="M0 0h51v20H0z"/><path fill="${colorOK}" d="M51 0h57v20H51z"/><path fill="url(#b)" d="M0 0h108v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><text x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">${tag}</text><text x="265" y="140" transform="scale(.1)" textLength="410">${tag}</text><text x="785" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="470">${org}</text><text x="785" y="140" transform="scale(.1)" textLength="470">${org}</text></g> </svg>`;
  res.set('content-type', 'image/svg+xml');
  res.end(scgTpl);
};

function getName(req) {
  console.log('referer:'+req.headers.referer);
  if (!req.headers.referer) {
    return '';
  }
  let pieces = req.headers.referer.split('/');
  if (pieces[2] !== 'github.com') {
    return '';
  }
  return `${pieces[3]}/${pieces[4]}`;
}

module.exports = {
  Icon,
};