const mongoose = require ('mongoose');
const Mngr = require ('./mngr');

mongoose.connect(`mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPWD}@rmmdevliveserver.zjnswc0.mongodb.net/?retryWrites=true&w=majority`);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection successful");
});

const seedMngrs = [
    {
        FID: '1',
        company_name: 'Pear Inc.',
        name: 'Steven Occupations',
        department: 'Executive',
        manager_level: '300',
        product_area: 'Technology'
    },
    {
        FID: '2',
        company_name: 'Tinyplush',
        name: 'Bobby-Bob Roberts',
        department: 'HR',
        manager_level: '4',
        product_area: 'Company Resources'
    },
    {
        FID: '3',
        company_name: 'Nile',
        name: 'Jennifer Jenkins',
        department: 'Marketing',
        manager_level: '170',
        product_area: 'NWS'
    },
    {
        FID: '4',
        company_name: 'Pear Inc.',
        name: 'Tim Timmings',
        department: 'Product Development',
        manager_level: '210',
        product_area: 'BartlettOS'
    },
    {
        FID: '5',
        company_name: 'SYC',
        name: 'Michael Dale',
        department: 'Executive',
        manager_level: '260',
        product_area: 'B2B Sales'
    },
    {
        FID: '6',
        company_name: 'Tinyplush',
        name: 'Mandy Stojakovic',
        department: 'Sales',
        manager_level: '230',
        product_area: 'Consumer Sales'
    },
    {
        FID: '7',
        company_name: 'Nile',
        name: 'Kimberly Bloomingdale',
        department: 'PR',
        manager_level: '90',
        product_area: 'Public Relations'
    },
    {
        FID: '8',
        company_name: 'ASA',
        name: 'Yuri Green',
        department: 'Product Development',
        manager_level: '110',
        product_area: 'Technology'
    },
    {
        FID: '9',
        company_name: 'Pear Inc.',
        name: 'Scara Funjobi',
        department: 'HR',
        manager_level: '150',
        product_area: 'Company Resources'
    },
    {
        FID: '10',
        company_name: 'Tinyplush',
        name: 'Xander Prince',
        department: 'Executive',
        manager_level: '300',
        product_area: 'Cerulean'
    }
]

const seedDB = async () => {
    // await Mngr.deleteMany({});
    await Mngr.insertMany(seedMngrs);
};

seedDB().then(() => {
    mongoose.connection.close();
});