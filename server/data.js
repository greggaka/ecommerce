import bcrypt from 'bcryptjs';
const data = {

    users: [
        {
            name: "Gregg",
            email: "gregg@gmail.com",
            password: bcrypt.hashSync('password1'),
            isAdmin: true
        },
        {
            name: "John",
            email: "john@gmail.com",
            password: bcrypt.hashSync('password1'),
            isAdmin: false
        }
    ],

    products: [
        {
            name: "Nike Slim shirt",
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt',
        },
        {
            name: "Adidas Slim shirt",
            slug: 'adidas-slim-shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 250,
            countInStock: 0,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: "Nike Slim Pant",
            slug: 'nike-slim-pant',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 25,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality pants',
        },
        {
            name: "Adidas Fit pant",
            slug: 'adidas-fit-pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },

    ]
} 

export default data;