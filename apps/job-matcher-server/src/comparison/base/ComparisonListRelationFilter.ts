/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComparisonWhereInput } from "./ComparisonWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ComparisonListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ComparisonWhereInput,
  })
  @ValidateNested()
  @Type(() => ComparisonWhereInput)
  @IsOptional()
  @Field(() => ComparisonWhereInput, {
    nullable: true,
  })
  every?: ComparisonWhereInput;

  @ApiProperty({
    required: false,
    type: () => ComparisonWhereInput,
  })
  @ValidateNested()
  @Type(() => ComparisonWhereInput)
  @IsOptional()
  @Field(() => ComparisonWhereInput, {
    nullable: true,
  })
  some?: ComparisonWhereInput;

  @ApiProperty({
    required: false,
    type: () => ComparisonWhereInput,
  })
  @ValidateNested()
  @Type(() => ComparisonWhereInput)
  @IsOptional()
  @Field(() => ComparisonWhereInput, {
    nullable: true,
  })
  none?: ComparisonWhereInput;
}
export { ComparisonListRelationFilter as ComparisonListRelationFilter };
