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
import { ComparisonCreateNestedManyWithoutCandidatesInput } from "./ComparisonCreateNestedManyWithoutCandidatesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { JobProfileWhereUniqueInput } from "../../jobProfile/base/JobProfileWhereUniqueInput";

@InputType()
class CandidateCreateInput {
  @ApiProperty({
    required: false,
    type: () => ComparisonCreateNestedManyWithoutCandidatesInput,
  })
  @ValidateNested()
  @Type(() => ComparisonCreateNestedManyWithoutCandidatesInput)
  @IsOptional()
  @Field(() => ComparisonCreateNestedManyWithoutCandidatesInput, {
    nullable: true,
  })
  comparisons?: ComparisonCreateNestedManyWithoutCandidatesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

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
  jobProfile?: JobProfileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  resume?: string | null;
}

export { CandidateCreateInput as CandidateCreateInput };
