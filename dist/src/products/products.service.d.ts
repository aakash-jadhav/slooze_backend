import { PrismaService } from '../prisma/prisma.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sku: string | null;
        description: string | null;
        category: string | null;
        price: number;
        quantity: number;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sku: string | null;
        description: string | null;
        category: string | null;
        price: number;
        quantity: number;
    } | null>;
    create(dto: CreateProductInput): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sku: string | null;
        description: string | null;
        category: string | null;
        price: number;
        quantity: number;
    }>;
    update(id: string, dto: UpdateProductInput): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sku: string | null;
        description: string | null;
        category: string | null;
        price: number;
        quantity: number;
    }>;
    getStats(): Promise<{
        total: number;
        categories: {
            name: string;
            count: number;
        }[];
        totalValue: number;
    }>;
}
