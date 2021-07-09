const servList = document.querySelector('.services-container');

const data = [{
    id: 0,
    title: 'Makeup',
    information: 'Get ready to party with professional make-up at home services. Bibi Af has experience with editorial, catwalk and celebrities and are available for you to book at home too.',
    img: 'images/makeup.jpg',
  },
  {
    id: 1,
    title: 'Hair',
    information: 'Bibi Af offers hair treatments at home with no fuss. Why go to the hair salon when you can have a professional hairdresser visit you safely at home?',
    img: 'images/hair.jpg',
  },
  {
    id: 2,
    title: 'Massage',
    information: 'Bibi Af is certified to the highest levels in a range of techniques. She delivers spa-quality, full body massages for ultimate relaxation, without you needing to leave the house.',
    img: 'images/massage.jpg',
  },
  {
    id: 3,
    title: 'Nails',
    information: 'No need to go to a nail bar for your perfect manicure & pedicure. Bibi Af carries a wide range of premium polishes to deliver an immaculate manicure & pedicure at home.',
    img: 'images/nails.jpg',
  },
  {
    id: 4,
    title: 'Facial',
    information: 'Indulge in a luxury mobile facial in the comfort of your home. Bibi Af tailors the treatment to your skin type, bringing the necessary equipments.',
    img: 'images/facial.jpg',
  },
  {
    id: 5,
    title: 'Lashes Extension',
    information: 'Mobile lash extensions, tints and eyebrow shaping carried out by expert therapist in the comfort of your own home. You look good. But you can always look better.',
    img: 'images/lashes.jpg',
  },
  ];

  console.log(data);
  for (let i = 0; i < data.length; i++) {
    const serv = document.createElement('li');
    serv.classList.add('serv');
    const servTitle = document.createElement('h3');
    servTitle.classList.add('serv-title');
    const servPara = document.createElement('p');
    servPara.classList.add('serv-info');
    const servImg = document.createElement('img');
    servImg.classList.add('serv-img');

    servTitle.textContent = data[i].title;
    servPara.textContent = data[i].information;
    servImg.src = data[i].img;

    const divImg = document.createElement('div');
    const divText = document.createElement('div');
    divImg.classList.add('serv-img-container');
    divText.classList.add('serv-text');

    divImg.appendChild(servImg);
    divText.appendChild(servTitle);
    divText.appendChild(servPara);

    serv.appendChild(divImg);
    serv.appendChild(divText);

    servList.appendChild(serv);
  }