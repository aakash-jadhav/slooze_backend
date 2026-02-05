import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { DashboardStats } from './entities/dashboard-stats.entity';

const MANAGER = 'MANAGER' as const;
const STORE_KEEPER = 'STORE_KEEPER' as const;

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(MANAGER, STORE_KEEPER)
  products() {
    return this.productsService.findAll();
  }

  @Query(() => Product, { nullable: true })
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(MANAGER, STORE_KEEPER)
  product(@Args('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Query(() => DashboardStats)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(MANAGER)
  dashboardStats() {
    return this.productsService.getStats();
  }

  @Mutation(() => Product)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(MANAGER, STORE_KEEPER)
  createProduct(@Args('input') input: CreateProductInput) {
    return this.productsService.create(input);
  }

  @Mutation(() => Product)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(MANAGER, STORE_KEEPER)
  updateProduct(@Args('id') id: string, @Args('input') input: UpdateProductInput) {
    return this.productsService.update(id, input);
  }
}
