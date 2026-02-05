import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async create(dto: CreateProductInput) {
    return this.prisma.product.create({ data: dto });
  }

  async update(id: string, dto: UpdateProductInput) {
    return this.prisma.product.update({ where: { id }, data: dto });
  }

  async getStats() {
    const [total, byCategory, totalValue] = await Promise.all([
      this.prisma.product.count(),
      this.prisma.product.groupBy({ by: ['category'], _count: true }),
      this.prisma.product.aggregate({ _sum: { price: true } }),
    ]);
    const categories = byCategory.map((c) => ({ name: c.category || 'Uncategorized', count: c._count }));
    return { total, categories, totalValue: totalValue._sum.price || 0 };
  }
}
