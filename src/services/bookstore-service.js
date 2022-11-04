export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Ready to start',
            author: 'Katie',
            price: '$12',
            coverImage: 'has'
        },
        {
            id: 2,
            title: 'Release it !',
            author: 'Naomi',
            price: '$20',
            coverImage: 'NO image'
        }
    ];

    getBooks () {
        return  new Promise((resolve) => {
            setTimeout(()=> {
                resolve(this.data);
            }, 800);
        })
    }
}