const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galaryList = document.querySelector('.gallery')

galaryList.style.display = 'flex';
galaryList.style.justifyContent = "space-between";

const imgList = images.map(item => {
  const listItem = document.createElement('li')
  const imgEl = document.createElement('img')
  imgEl.src = item.url;
  imgEl.alt = item.alt;
  // imgEl.width = 320;
  listItem.insertAdjacentHTML('afterbegin', `<img src=${imgEl.src} alt=${imgEl.alt} height=200/>`);
  return listItem;
})
 
galaryList.append(...imgList)

