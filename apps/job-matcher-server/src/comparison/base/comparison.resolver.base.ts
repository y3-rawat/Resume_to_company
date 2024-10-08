/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Comparison } from "./Comparison";
import { ComparisonCountArgs } from "./ComparisonCountArgs";
import { ComparisonFindManyArgs } from "./ComparisonFindManyArgs";
import { ComparisonFindUniqueArgs } from "./ComparisonFindUniqueArgs";
import { CreateComparisonArgs } from "./CreateComparisonArgs";
import { UpdateComparisonArgs } from "./UpdateComparisonArgs";
import { DeleteComparisonArgs } from "./DeleteComparisonArgs";
import { Candidate } from "../../candidate/base/Candidate";
import { JobProfile } from "../../jobProfile/base/JobProfile";
import { ComparisonInput } from "../ComparisonInput";
import { ComparisonService } from "../comparison.service";
@graphql.Resolver(() => Comparison)
export class ComparisonResolverBase {
  constructor(protected readonly service: ComparisonService) {}

  async _comparisonsMeta(
    @graphql.Args() args: ComparisonCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Comparison])
  async comparisons(
    @graphql.Args() args: ComparisonFindManyArgs
  ): Promise<Comparison[]> {
    return this.service.comparisons(args);
  }

  @graphql.Query(() => Comparison, { nullable: true })
  async comparison(
    @graphql.Args() args: ComparisonFindUniqueArgs
  ): Promise<Comparison | null> {
    const result = await this.service.comparison(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Comparison)
  async createComparison(
    @graphql.Args() args: CreateComparisonArgs
  ): Promise<Comparison> {
    return await this.service.createComparison({
      ...args,
      data: {
        ...args.data,

        candidate: args.data.candidate
          ? {
              connect: args.data.candidate,
            }
          : undefined,

        jobProfile: args.data.jobProfile
          ? {
              connect: args.data.jobProfile,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Comparison)
  async updateComparison(
    @graphql.Args() args: UpdateComparisonArgs
  ): Promise<Comparison | null> {
    try {
      return await this.service.updateComparison({
        ...args,
        data: {
          ...args.data,

          candidate: args.data.candidate
            ? {
                connect: args.data.candidate,
              }
            : undefined,

          jobProfile: args.data.jobProfile
            ? {
                connect: args.data.jobProfile,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Comparison)
  async deleteComparison(
    @graphql.Args() args: DeleteComparisonArgs
  ): Promise<Comparison | null> {
    try {
      return await this.service.deleteComparison(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Candidate, {
    nullable: true,
    name: "candidate",
  })
  async getCandidate(
    @graphql.Parent() parent: Comparison
  ): Promise<Candidate | null> {
    const result = await this.service.getCandidate(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => JobProfile, {
    nullable: true,
    name: "jobProfile",
  })
  async getJobProfile(
    @graphql.Parent() parent: Comparison
  ): Promise<JobProfile | null> {
    const result = await this.service.getJobProfile(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => String)
  async CompareSkills(
    @graphql.Args()
    args: ComparisonInput
  ): Promise<string> {
    return this.service.CompareSkills(args);
  }
}
