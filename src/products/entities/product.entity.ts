import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  category?: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  quantity: number;

  @Field({ nullable: true })
  sku?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
