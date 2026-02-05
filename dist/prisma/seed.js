"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function main() {
    const hashedPassword = await bcrypt.hash('password123', 10);
    await prisma.user.upsert({
        where: { email: 'manager@slooze.xyz' },
        update: {},
        create: {
            email: 'manager@slooze.xyz',
            password: hashedPassword,
            role: 'MANAGER',
            name: 'Alex Manager',
        },
    });
    await prisma.user.upsert({
        where: { email: 'storekeeper@slooze.xyz' },
        update: {},
        create: {
            email: 'storekeeper@slooze.xyz',
            password: hashedPassword,
            role: 'STORE_KEEPER',
            name: 'Sam Store Keeper',
        },
    });
    const products = [
        { name: 'Wheat', description: 'Premium wheat grain', category: 'Grains', price: 245.5, quantity: 1500, sku: 'GRN-WHT-001' },
        { name: 'Corn', description: 'Yellow corn kernels', category: 'Grains', price: 198.0, quantity: 2200, sku: 'GRN-CRN-002' },
        { name: 'Soybeans', description: 'Organic soybeans', category: 'Legumes', price: 412.75, quantity: 800, sku: 'LEG-SOY-001' },
        { name: 'Crude Oil', description: 'Light crude oil barrel', category: 'Energy', price: 72.5, quantity: 500, sku: 'ENG-CRU-001' },
        { name: 'Natural Gas', description: 'Natural gas futures', category: 'Energy', price: 3.25, quantity: 10000, sku: 'ENG-NG-001' },
        { name: 'Gold', description: 'Gold bullion ounce', category: 'Metals', price: 1950.0, quantity: 100, sku: 'MET-GLD-001' },
        { name: 'Silver', description: 'Silver bullion ounce', category: 'Metals', price: 24.5, quantity: 500, sku: 'MET-SLV-001' },
        { name: 'Coffee', description: 'Arabica coffee beans', category: 'Soft Commodities', price: 185.0, quantity: 300, sku: 'SFT-CFF-001' },
    ];
    for (const product of products) {
        await prisma.product.upsert({
            where: { sku: product.sku },
            update: {},
            create: product,
        });
    }
    console.log('Seed completed! Test: manager@slooze.xyz / storekeeper@slooze.xyz (password: password123)');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map