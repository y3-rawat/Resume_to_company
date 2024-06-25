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
import { ComparisonListRelationFilter } from "../../comparison/base/ComparisonListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobProfileWhereUniqueInput } from "../../jobProfile/base/JobProfileWhereUniqueInput";

@InputType()
class CandidateWhereInput {
  @ApiProperty({
    required: false,
    type: () => ComparisonListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ComparisonListRelationFilter)
  @IsOptional()
  @Field(() => ComparisonListRelationFilter, {
    nullable: true,
  })
  comparisons?: ComparisonListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => JobProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => JobProfileWhereUniqueInput, {
    nullable: true,
  })
  jobProfile?: JobProfileWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  resume?: StringNullableFilter;
}

export { CandidateWhereInput as CandidateWhereInput };
