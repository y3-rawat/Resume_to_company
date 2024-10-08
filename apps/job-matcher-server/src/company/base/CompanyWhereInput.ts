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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { JobProfileWhereUniqueInput } from "../../jobProfile/base/JobProfileWhereUniqueInput";
import { JobProfileListRelationFilter } from "../../jobProfile/base/JobProfileListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class CompanyWhereInput {
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
    type: () => JobProfileListRelationFilter,
  })
  @ValidateNested()
  @Type(() => JobProfileListRelationFilter)
  @IsOptional()
  @Field(() => JobProfileListRelationFilter, {
    nullable: true,
  })
  jobProfiles?: JobProfileListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  location?: StringNullableFilter;

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
}

export { CompanyWhereInput as CompanyWhereInput };
