import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  category?: string;

  @Field(() => Float, { defaultValue: 0 })
  @IsNumber()
  @IsOptional()
  price?: number;

  @Field(() => Int, { defaultValue: 0 })
  @IsNumber()
  @IsOptional()
  quantity?: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  sku?: string;
}
