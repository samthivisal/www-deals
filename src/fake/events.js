import { randomDate } from '../utils/common';

export const events = [
  {
    id: '1',
    name: 'Event 1',
    description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker',
    postedUser: 'Mashtomb',
    postedDate: randomDate(new Date(2019, 10, 1), new Date()),
    isModerated: true,
    startedDate: randomDate(new Date(2019, 10, 1), new Date()),
    endedDate: randomDate(new Date(2019, 12, 1), new Date())
  },{
    id: '2',
    name: 'Event 2',
    description: 'I\'m event 2\'s description',
    postedUser: 'Iascha',
    postedDate: randomDate(new Date(2019, 10, 1), new Date()),
    isModerated: false,
    startedDate: randomDate(new Date(2019, 10, 1), new Date()),
    endedDate: randomDate(new Date(2019, 12, 1), new Date())
  },{
    id: '3',
    name: 'Event 3',
    description: 'I\'m event 3\'s description',
    postedUser: 'YellowBanana',
    postedDate: randomDate(new Date(2019, 10, 1), new Date()),
    isModerated: true,
    startedDate: randomDate(new Date(2019, 10, 1), new Date()),
    endedDate: randomDate(new Date(2019, 12, 1), new Date())
  },
];