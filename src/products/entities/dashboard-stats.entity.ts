import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class CategoryCount {
  @Field()
  name: string;

  @Field(() => Int)
  count: number;
}

@ObjectType()
export class DashboardStats {
  @Field(() => Int)
  total: number;

  @Field(() => [CategoryCount])
  categories: { name: string; count: number }[];

  @Field(() => Float)
  totalValue: number;
}
