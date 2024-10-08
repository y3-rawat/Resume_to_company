/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { JobProfileService } from "../jobProfile.service";
import { JobProfileCreateInput } from "./JobProfileCreateInput";
import { JobProfile } from "./JobProfile";
import { JobProfileFindManyArgs } from "./JobProfileFindManyArgs";
import { JobProfileWhereUniqueInput } from "./JobProfileWhereUniqueInput";
import { JobProfileUpdateInput } from "./JobProfileUpdateInput";
import { CandidateFindManyArgs } from "../../candidate/base/CandidateFindManyArgs";
import { Candidate } from "../../candidate/base/Candidate";
import { CandidateWhereUniqueInput } from "../../candidate/base/CandidateWhereUniqueInput";
import { CompanyFindManyArgs } from "../../company/base/CompanyFindManyArgs";
import { Company } from "../../company/base/Company";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { ComparisonFindManyArgs } from "../../comparison/base/ComparisonFindManyArgs";
import { Comparison } from "../../comparison/base/Comparison";
import { ComparisonWhereUniqueInput } from "../../comparison/base/ComparisonWhereUniqueInput";

export class JobProfileControllerBase {
  constructor(protected readonly service: JobProfileService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JobProfile })
  async createJobProfile(
    @common.Body() data: JobProfileCreateInput
  ): Promise<JobProfile> {
    return await this.service.createJobProfile({
      data: {
        ...data,

        company: data.company
          ? {
              connect: data.company,
            }
          : undefined,
      },
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        requirements: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [JobProfile] })
  @ApiNestedQuery(JobProfileFindManyArgs)
  async jobProfiles(@common.Req() request: Request): Promise<JobProfile[]> {
    const args = plainToClass(JobProfileFindManyArgs, request.query);
    return this.service.jobProfiles({
      ...args,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        requirements: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: JobProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async jobProfile(
    @common.Param() params: JobProfileWhereUniqueInput
  ): Promise<JobProfile | null> {
    const result = await this.service.jobProfile({
      where: params,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        requirements: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: JobProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateJobProfile(
    @common.Param() params: JobProfileWhereUniqueInput,
    @common.Body() data: JobProfileUpdateInput
  ): Promise<JobProfile | null> {
    try {
      return await this.service.updateJobProfile({
        where: params,
        data: {
          ...data,

          company: data.company
            ? {
                connect: data.company,
              }
            : undefined,
        },
        select: {
          company: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          requirements: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: JobProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteJobProfile(
    @common.Param() params: JobProfileWhereUniqueInput
  ): Promise<JobProfile | null> {
    try {
      return await this.service.deleteJobProfile({
        where: params,
        select: {
          company: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          requirements: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/candidates")
  @ApiNestedQuery(CandidateFindManyArgs)
  async findCandidates(
    @common.Req() request: Request,
    @common.Param() params: JobProfileWhereUniqueInput
  ): Promise<Candidate[]> {
    const query = plainToClass(CandidateFindManyArgs, request.query);
    const results = await this.service.findCandidates(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        id: true,

        jobProfile: {
          select: {
            id: true,
          },
        },

        name: true,
        resume: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/candidates")
  async connectCandidates(
    @common.Param() params: JobProfileWhereUniqueInput,
    @common.Body() body: CandidateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      candidates: {
        connect: body,
      },
    };
    await this.service.updateJobProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/candidates")
  async updateCandidates(
    @common.Param() params: JobProfileWhereUniqueInput,
    @common.Body() body: CandidateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      candidates: {
        set: body,
      },
    };
    await this.service.updateJobProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/candidates")
  async disconnectCandidates(
    @common.Param() params: JobProfileWhereUniqueInput,
    @common.Body() body: CandidateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      candidates: {
        disconnect: body,
      },
    };
    await this.service.updateJobProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/companies")
  @ApiNestedQuery(CompanyFindManyArgs)
  async findCompanies(
    @common.Req() request: Request,
    @common.Param() params: JobProfileWhereUniqueInput
  ): Promise<Company[]> {
    const query = plainToClass(CompanyFindManyArgs, request.query);
    const results = await this.service.findCompanies(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        jobProfile: {
          select: {
            id: true,
          },
        },

        location: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/companies")
  async connectCompanies(
    @common.Param() params: JobProfileWhereUniqueInput,
    @common.Body() body: CompanyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      companies: {
        connect: body,
      },
    };
    await this.service.updateJobProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/companies")
  async updateCompanies(
    @common.Param() params: JobProfileWhereUniqueInput,
    @common.Body() body: CompanyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      companies: {
        set: body,
      },
    };
    await this.service.updateJobProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/companies")
  async disconnectCompanies(
    @common.Param() params: JobProfileWhereUniqueInput,
    @common.Body() body: CompanyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      companies: {
        disconnect: body,
      },
    };
    await this.service.updateJobProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/comparisons")
  @ApiNestedQuery(ComparisonFindManyArgs)
  async findComparisons(
    @common.Req() request: Request,
    @common.Param() params: JobProfileWhereUniqueInput
  ): Promise<Comparison[]> {
    const query = plainToClass(ComparisonFindManyArgs, request.query);
    const results = await this.service.findComparisons(params.id, {
      ...query,
      select: {
        candidate: {
          select: {
            id: true,
          },
        },

        comparisonResult: true,
        createdAt: true,
        id: true,

        jobProfile: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/comparisons")
  async connectComparisons(
    @common.Param() params: JobProfileWhereUniqueInput,
    @common.Body() body: ComparisonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comparisons: {
        connect: body,
      },
    };
    await this.service.updateJobProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comparisons")
  async updateComparisons(
    @common.Param() params: JobProfileWhereUniqueInput,
    @common.Body() body: ComparisonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comparisons: {
        set: body,
      },
    };
    await this.service.updateJobProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comparisons")
  async disconnectComparisons(
    @common.Param() params: JobProfileWhereUniqueInput,
    @common.Body() body: ComparisonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comparisons: {
        disconnect: body,
      },
    };
    await this.service.updateJobProfile({
      where: params,
      data,
      select: { id: true },
    });
  }
}
