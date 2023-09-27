import {BusinessCategory, BusinessData, BusinessItem, CategoryType} from "../types";

const mainCarouselItems: BusinessItem[] = [
    {
        id: 'MAIN1',
        title: "",
        description: "",
        imageUrl: "https://antonovich-design.com/uploads/page/2017/8/20175rqKQqDNsGFS.jpg"
    },
    {
        id: 'MAIN2',
        title: "",
        description: "",
        imageUrl: "https://www.kajariaceramics.com/test_folder/mobileapp/uploads/blogs/1552651926_WHY-CERAMIC-TILES-ARE-A-GREAT-OPTION-FOR-YOUR-FLOORS-AND-WALLS.JPG"
    },
    {
        id: 'MAIN3',
        title: "",
        description: "",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/56f2595e8a65e2db95a7d983/8b69aa99-7c48-44b4-8b9e-c9442cff0941/_MG_2461%2B+%281%29+%281%29.jpg"
    },
];

const ceramicCategories: BusinessCategory[] = [
    {
        id: CategoryType.CLASSIC,
        title: "קלאסי",
        items: [
            {
                id: 'A1A11',
                imageUrl: "https://www.harveymaria.com/wp-content/uploads/2019/01/red-white-chequerboard-flooring-utility-room.jpg"
            },
            {
                id: 'A1A12',
                imageUrl: "https://www.thespruce.com/thmb/ZBmyjKaFfToZK14jgwVoKJ6ULuY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bathroom-ceramic-tile-vs-vinyl-plank-1822815_hero_0494-f226f2c0d91f42c4b359ac587c0ce9f9-5356cb6e8e2e483da7d99bfd9a491938.jpg"
            },
            {
                id: 'A1A13',
                imageUrl: "https://www.rubi.com/us/blog/wp-content/uploads/2017/05/Types-of-Floor-Tiles-Porcelain-Tiles-1.jpg"
            },
            {
                id: 'A1A14',
                imageUrl: "https://maughons.com/cdn/shop/products/exquisite-design-marble-like-pvc-vinyl-floor-mural-self-adhesive-custom-sizes-available-household-wallpaper-floor-maughons-865343_1024x1024.jpg?v=1619294876"
            },
            {
                id: 'A1A15',
                imageUrl: "https://5.imimg.com/data5/CQ/CJ/MY-53359812/mirror-polish-floor-tiles-500x500.jpg"
            },
            {
                id: 'A1A16',
                imageUrl: "https://media.casa39.com/media/catalog/category/travertino_it.jpg"
            },
        ],
    },
    {
        id: CategoryType.MODERN,
        title: "מודרני",
        items: [
            {
                id: 'A1A21',
                imageUrl: "https://apavisa.com/storage/travertino-salon-moderno-con-ventanales.jpg"
            },
            {
                id: 'A1A22',
                imageUrl: "https://image.made-in-china.com/2f0j00lzjUVyLslJki/Mexican-Saltillo-Mesa-Flooring-Marble-Calgary-Modern-White-Floor-Tile.jpg"
            },
            {
                id: 'A1A23',
                imageUrl: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/b49b36a6-24dc-4aad-8c26-86ec024b77b2-Tile-Mountain_Lounge-Black-Matt-Floor-Tiles.jpg"
            },
            {
                id: 'A1A24',
                imageUrl: "https://hips.hearstapps.com/hmg-prod/images/modern-kitchen-interior-royalty-free-image-1660342638.jpg"
            },
            {
                id: 'A1A25',
                imageUrl: "https://www.contemporist.com/wp-content/uploads/2020/04/unqiue-wood-floor-wide-plank-230420-1100-01.jpg"
            },
            {
                id: 'A1A26',
                imageUrl: "https://s3media.angieslist.com/s3fs-public/living-room-hardwood-floor.jpeg?impolicy=leadImage"
            },
        ]
    },
    {
        id: CategoryType.RURAL,
        title: "כפרי",
        items: [
            {
                id: 'A1A31',
                imageUrl: "https://ruralbuildermagazine.com/wp-content/uploads/2022/11/9U041_07063_ROOM2-scaled.jpg"
            },
            {
                id: 'A1A32',
                imageUrl: "https://i.pinimg.com/736x/b1/ec/79/b1ec792d40db10c581fe91d238ecacb8.jpg"
            },
            {
                id: 'A1A33',
                imageUrl: "https://www.pricecofloors.com/wp-content/uploads/2016/09/Maple-Rich-Brown-1024x774.jpg"
            },
            {
                id: 'A1A34',
                imageUrl: "https://5.imimg.com/data5/QJ/OD/FP/SELLER-32174847/wooden-flooring-500x500.jpg"
            },
            {
                id: 'A1A35',
                imageUrl: "https://5.imimg.com/data5/QT/FL/MY-11896374/wooden-flooring-services-500x500.jpg"
            },
            {
                id: 'A1A36',
                imageUrl: "https://www.carpetone.ca/root/clientImages/C1CAN9999/blog/305A553EE32D4630BD03852EE104535D.png"
            },
        ]
    },
    {
        id: CategoryType.INDUSTRIAL,
        title: "תעשייתי",
        items: [
            {
                id: 'A1A41',
                imageUrl: "https://uploads-ssl.webflow.com/614c81f15dbb8ced5b0b9317/6150bea6e04cd59bf4407c3a_Trialer-Epoxy-Flooring-In-Atlanta.jpeg"
            },
            {
                id: 'A1A42',
                imageUrl: "https://i.ytimg.com/vi/Awbg-6ZLpOw/maxresdefault.jpg"
            },
            {
                id: 'A1A43',
                imageUrl: "https://www.flowcreteasia.com/media/14861/flowcrete-flowcoat-epoxy-floor-coating.jpg"
            },
            {
                id: 'A1A44',
                imageUrl: "https://allthingsflooring.com/wp-content/uploads/2017/03/Foodtech-QLD-Preview-Find-Food-Industry-Flooring-on-Stand-C38.jpg"
            },
            {
                id: 'A1A45',
                imageUrl: "https://allthingsflooring.com/wp-content/uploads/2016/03/Huon-Aquaculture-Expands-on-a-Flowfresh-Floor.jpg"
            },
            {
                id: 'A1A46',
                imageUrl: "https://p1.pxfuel.com/preview/799/756/55/industrial-hall-toore-warehouse-industry.jpg"
            },
        ]
    },
    {
        id: CategoryType.PARQUET,
        title: "פרקט",
        items: [
            {
                id: 'A1A51',
                imageUrl: "https://krono-shop.com/media/image/b9/ca/18/R073_top.jpg"
            },
            {
                id: 'A1A52',
                imageUrl: "https://www.hrjohnsonindia.com/assets/images/blog/walnut-lumber.jpg"
            },
            {
                id: 'A1A53',
                imageUrl: "https://www.bostondesignguide.com/sites/default/files/design-wood-floors.jpg"
            },
            {
                id: 'A1A54',
                imageUrl: "https://i.pinimg.com/1200x/38/0e/c6/380ec66a164c44825f25703c3e99c287.jpg"
            },
            {
                id: 'A1A55',
                imageUrl: "https://www.lavishceramics.com/wp-content/webp-express/webp-images/uploads/2023/05/African-Wood-Brown-preview-1-2500x1500-1-e1684393524891.jpg.webp"
            },
            {
                id: 'A1A56',
                imageUrl: "https://cgmood.com/storage/previews/09-2018/721/721-2.jpeg"
            },
        ]
    },
    {
        id: CategoryType.STONE,
        title: "אבן",
        items: [
            {
                id: 'A1A61',
                imageUrl: "https://cloud.a23d.co/files/2022/09/Old-Square-Stone-Tile-A23D-PBR-Texture-Preview-dmazi.webp"
            },
            {
                id: 'A1A62',
                imageUrl: "https://image.made-in-china.com/202f0j00pTgURtGsjcqP/2018-New-Granite-Flooring-Tile-Design-Outdoor-Decor-Stone-Tile-China-Decking-Floor.jpg"
            },
            {
                id: 'A1A63',
                imageUrl: "https://r2backdrops.com/cdn/shop/products/1982-STONE_FLOOR_-_60x60_Web.jpg"
            },
            {
                id: 'A1A64',
                imageUrl: "https://server.orientbell.com/media/catalog/product/o/d/odm_cobble_stone_ceramic_tiles_floor_395x395mm.jpg"
            },
            {
                id: 'A1A65',
                imageUrl: "https://5.imimg.com/data5/VE/MY/MY-48877/stone-102_12x12-500x500.jpg"
            },
            {
                id: 'A1A66',
                imageUrl: "https://5.imimg.com/data5/YE/CV/GLADMIN-9379211/river-rock-floor-tile.png"
            },
        ]
    },
];

export const businessData: BusinessData = {
    mainCarouselItems: mainCarouselItems,
    categories: [
        {
            id: CategoryType.CERAMIC,
            title: "קרמיקה",
            subCategories: ceramicCategories,
        },
        {
            id: CategoryType.TOILET,
            title: "אסלות",
            items: [
                {
                    id: 'A21',
                    imageUrl: "https://images.victorianplumbing.co.uk/products/brooklyn-modern-square-toilet/mainimages/brwclrg01.jpg?w=620"
                },
                {
                    id: 'A22',
                    imageUrl: "https://m.media-amazon.com/images/I/71fbUMtggRL._AC_UF894,1000_QL80_.jpg"
                },
                {
                    id: 'A23',
                    imageUrl: "https://images.victorianplumbing.co.uk/products/clasico-close-coupled-toilet-with-soft-close-seat/mainimages/bwcsc_l3.png?w=620"
                },
                {
                    id: 'A24',
                    imageUrl: "https://mobileimages.lowes.com/productimages/f83b9d5e-38e6-4411-9c93-b8fbb485cae2/61057094.jpg"
                },
                {
                    id: 'A25',
                    imageUrl: "https://images.thdstatic.com/productImages/982cb7b2-e67a-4df2-87ae-7d2da33c12c5/svn/white-with-matte-black-button-woodbridge-one-piece-toilets-hb0920mb-64_600.jpg"
                },
                {
                    id: 'A26',
                    imageUrl: "https://i.ebayimg.com/images/g/Xy4AAOSwJEdivGC0/s-l1600.jpg"
                },
            ]
        },
        {
            id: CategoryType.BATH,
            title: "אמבטיות",
            items: [
                {
                    id: 'A31',
                    imageUrl: "https://wpmedia.roomsketcher.com/content/uploads/2022/01/06133413/Modern-Bathroom-freestanding-tub.jpg"
                },
                {
                    id: 'A32',
                    imageUrl: "https://justinplace.com.au/wp-content/uploads/2021/05/Large_Bathroom.jpg"
                },
                {
                    id: 'A33',
                    imageUrl: "https://www.beaumont-tiles.com.au/media/wysiwyg/Modern_Bathroom_Ideas_We_Know_Will_Inspire_You_To_Create_LARGE.jpg"
                },
                {
                    id: 'A34',
                    imageUrl: "https://images.victorianplumbing.co.uk/products/1650-x-750-luxury-modern-double-ended-curved-freestanding-bath/mainimages/veronabath_l.jpg?w=620"
                },
                {
                    id: 'A35',
                    imageUrl: "https://www.modulnova.it/foto/bagni/5ee4800ae9272202006130928100.jpg"
                },
                {
                    id: 'A36',
                    imageUrl: "https://www.lunaspas.com/blog/wp-content/uploads/2021/05/master-bathroom1-adb.jpg"
                },
            ]
        },
        {
            id: CategoryType.TAP,
            title: "כיורים",
            items: [
                {
                    id: 'A41',
                    imageUrl: "https://housing.com/news/wp-content/uploads/2022/12/wash-basin-design-ideas-for-every-home.jpg"
                },
                {
                    id: 'A42',
                    imageUrl: "https://www.aquantindia.com/images/Aquant-Concrete-Basins.jpg"
                },
                {
                    id: 'A43',
                    imageUrl: "https://i.pinimg.com/564x/02/d9/41/02d94127671acb190fb6a45d6a6f5810.jpg"
                },
                {
                    id: 'A44',
                    imageUrl: "https://m.media-amazon.com/images/I/71GNQi6KmKL._AC_UF1000,1000_QL80_.jpg"
                },
                {
                    id: 'A45',
                    imageUrl: "https://www.inart.co.in/cdn/shop/products/DSC_0053_png.jpg?v=1665140414"
                },
                {
                    id: 'A46',
                    imageUrl: "https://image.made-in-china.com/2f0j00yYzbDfFdHGkQ/European-Standard-Wholesale-Modern-Hotel-Design-LED-Bathroom-Mirror-Slate-Top-Ceramic-Wash-Basin-Sink-Floating-Bathroom-Vanity-with-Mirror.jpg"
                },
            ]
        },
        {
            id: CategoryType.WASH,
            title: "ברזים",
            items: [
                {
                    id: 'A51',
                    imageUrl: "https://img.fruugo.com/product/5/02/551188025_max.jpg"
                },
                {
                    id: 'A52',
                    imageUrl: "https://subcategory.aqva.co.uk/2017-1-4--17-22-4-622.jpg"
                },
                {
                    id: 'A53',
                    imageUrl: "https://ae01.alicdn.com/kf/Se0effedb60394872be63880355a31e72V/Luxury-Basin-Faucet-Modern-New-Design-Bathroom-Single-Handle-Creative-Hot-Cold-Water-Sink-Tap-Waterfall.jpg"
                },
                {
                    id: 'A54',
                    imageUrl: "https://m.media-amazon.com/images/I/61-C6LhLlwL.jpg"
                },
                {
                    id: 'A55',
                    imageUrl: "https://m.media-amazon.com/images/I/61HTH5C57lL.jpg"
                },
                {
                    id: 'A56',
                    imageUrl: "https://www.architectandinteriorsindia.com/cloud/2021/11/15/Artize-Tailwater-by-Jaquar-Group-e1523874693295.jpg"
                },
            ]
        },
        {
            id: CategoryType.CABINET,
            title: "ארונות",
            items: [
                {
                    id: 'A61',
                    imageUrl: "https://img.staticmb.com/mbcontent/images/uploads/2021/9/wooden-designs-of-bathroom-cabinet.jpg"
                },
                {
                    id: 'A62',
                    imageUrl: "https://www.jkath.com/wp-content/uploads/2022/02/3b9aef_59d057914eb649ac8555b8b3a17b67f9-mv2.jpg"
                },
                {
                    id: 'A63',
                    imageUrl: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/bathroom-vanity-ideas-section-18.jpg"
                },
                {
                    id: 'A64',
                    imageUrl: "https://stylesatlife.com/wp-content/uploads/2020/03/bathroom-mirror-cabinet.jpg"
                },
                {
                    id: 'A65',
                    imageUrl: "https://homedesignlover.com/wp-content/uploads/2013/09/modern-tall-bath.jpg"
                },
                {
                    id: 'A66',
                    imageUrl: "https://justinplace.com.au/wp-content/uploads/2021/06/custom-made-timber-vanity-cabinet_1.jpg"
                },
            ]
        }
    ]
}