import { t, publicProcedure } from "./helpers/createRouter";
import { ReviewAggregateSchema } from "../schemas/aggregateReview.schema";
import { ReviewCreateManySchema } from "../schemas/createManyReview.schema";
import { ReviewCreateOneSchema } from "../schemas/createOneReview.schema";
import { ReviewDeleteManySchema } from "../schemas/deleteManyReview.schema";
import { ReviewDeleteOneSchema } from "../schemas/deleteOneReview.schema";
import { ReviewFindFirstSchema } from "../schemas/findFirstReview.schema";
import { ReviewFindManySchema } from "../schemas/findManyReview.schema";
import { ReviewFindUniqueSchema } from "../schemas/findUniqueReview.schema";
import { ReviewGroupBySchema } from "../schemas/groupByReview.schema";
import { ReviewUpdateManySchema } from "../schemas/updateManyReview.schema";
import { ReviewUpdateOneSchema } from "../schemas/updateOneReview.schema";
import { ReviewUpsertSchema } from "../schemas/upsertOneReview.schema";

export const reviewsRouter = t.router({
  aggregate: publicProcedure
    .input(ReviewAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateReview = await ctx.prisma.review.aggregate(input);
      return aggregateReview;
    }),
  createMany: publicProcedure
    .input(ReviewCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyReview = await ctx.prisma.review.createMany(input);
      return createManyReview;
    }),
  createOne: publicProcedure
    .input(ReviewCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneReview = await ctx.prisma.review.create(input);
      return createOneReview;
    }),
  deleteMany: publicProcedure
    .input(ReviewDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyReview = await ctx.prisma.review.deleteMany(input);
      return deleteManyReview;
    }),
  deleteOne: publicProcedure
    .input(ReviewDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneReview = await ctx.prisma.review.delete(input);
      return deleteOneReview;
    }),
  findFirst: publicProcedure
    .input(ReviewFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstReview = await ctx.prisma.review.findFirst(input);
      return findFirstReview;
    }),
  findFirstOrThrow: publicProcedure
    .input(ReviewFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstReviewOrThrow = await ctx.prisma.review.findFirstOrThrow(input);
      return findFirstReviewOrThrow;
    }),
  findMany: publicProcedure
    .input(ReviewFindManySchema).query(async ({ ctx, input }) => {
      const findManyReview = await ctx.prisma.review.findMany(input);
      return findManyReview;
    }),
  findUnique: publicProcedure
    .input(ReviewFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueReview = await ctx.prisma.review.findUnique(input);
      return findUniqueReview;
    }),
  findUniqueOrThrow: publicProcedure
    .input(ReviewFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueReviewOrThrow = await ctx.prisma.review.findUniqueOrThrow(input);
      return findUniqueReviewOrThrow;
    }),
  groupBy: publicProcedure
    .input(ReviewGroupBySchema).query(async ({ ctx, input }) => {
      const groupByReview = await ctx.prisma.review.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByReview;
    }),
  updateMany: publicProcedure
    .input(ReviewUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyReview = await ctx.prisma.review.updateMany(input);
      return updateManyReview;
    }),
  updateOne: publicProcedure
    .input(ReviewUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneReview = await ctx.prisma.review.update(input);
      return updateOneReview;
    }),
  upsertOne: publicProcedure
    .input(ReviewUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneReview = await ctx.prisma.review.upsert(input);
      return upsertOneReview;
    }),

}) 
