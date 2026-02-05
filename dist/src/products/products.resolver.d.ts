import { ProductsService } from './products.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
export declare class ProductsResolver {
    private productsService;
    constructor(productsService: ProductsService);
    products(): Promise<{
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
    product(id: string): Promise<{
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
    dashboardStats(): Promise<{
        total: number;
        categories: {
            name: string;
            count: number;
        }[];
        totalValue: number;
    }>;
    createProduct(input: CreateProductInput): Promise<{
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
    updateProduct(id: string, input: UpdateProductInput): Promise<{
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
}
