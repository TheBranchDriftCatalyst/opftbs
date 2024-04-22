import { t, publicProcedure } from "./helpers/createRouter";
import { ChapterAggregateSchema } from "../schemas/aggregateChapter.schema";
import { ChapterCreateManySchema } from "../schemas/createManyChapter.schema";
import { ChapterCreateOneSchema } from "../schemas/createOneChapter.schema";
import { ChapterDeleteManySchema } from "../schemas/deleteManyChapter.schema";
import { ChapterDeleteOneSchema } from "../schemas/deleteOneChapter.schema";
import { ChapterFindFirstSchema } from "../schemas/findFirstChapter.schema";
import { ChapterFindManySchema } from "../schemas/findManyChapter.schema";
import { ChapterFindUniqueSchema } from "../schemas/findUniqueChapter.schema";
import { ChapterGroupBySchema } from "../schemas/groupByChapter.schema";
import { ChapterUpdateManySchema } from "../schemas/updateManyChapter.schema";
import { ChapterUpdateOneSchema } from "../schemas/updateOneChapter.schema";
import { ChapterUpsertSchema } from "../schemas/upsertOneChapter.schema";

export const chaptersRouter = t.router({
  aggregate: publicProcedure
    .input(ChapterAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateChapter = await ctx.prisma.chapter.aggregate(input);
      return aggregateChapter;
    }),
  createMany: publicProcedure
    .input(ChapterCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyChapter = await ctx.prisma.chapter.createMany(input);
      return createManyChapter;
    }),
  createOne: publicProcedure
    .input(ChapterCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneChapter = await ctx.prisma.chapter.create(input);
      return createOneChapter;
    }),
  deleteMany: publicProcedure
    .input(ChapterDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyChapter = await ctx.prisma.chapter.deleteMany(input);
      return deleteManyChapter;
    }),
  deleteOne: publicProcedure
    .input(ChapterDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneChapter = await ctx.prisma.chapter.delete(input);
      return deleteOneChapter;
    }),
  findFirst: publicProcedure
    .input(ChapterFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstChapter = await ctx.prisma.chapter.findFirst(input);
      return findFirstChapter;
    }),
  findFirstOrThrow: publicProcedure
    .input(ChapterFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstChapterOrThrow = await ctx.prisma.chapter.findFirstOrThrow(input);
      return findFirstChapterOrThrow;
    }),
  findMany: publicProcedure
    .input(ChapterFindManySchema).query(async ({ ctx, input }) => {
      const findManyChapter = await ctx.prisma.chapter.findMany(input);
      return findManyChapter;
    }),
  findUnique: publicProcedure
    .input(ChapterFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueChapter = await ctx.prisma.chapter.findUnique(input);
      return findUniqueChapter;
    }),
  findUniqueOrThrow: publicProcedure
    .input(ChapterFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueChapterOrThrow = await ctx.prisma.chapter.findUniqueOrThrow(input);
      return findUniqueChapterOrThrow;
    }),
  groupBy: publicProcedure
    .input(ChapterGroupBySchema).query(async ({ ctx, input }) => {
      const groupByChapter = await ctx.prisma.chapter.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByChapter;
    }),
  updateMany: publicProcedure
    .input(ChapterUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyChapter = await ctx.prisma.chapter.updateMany(input);
      return updateManyChapter;
    }),
  updateOne: publicProcedure
    .input(ChapterUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneChapter = await ctx.prisma.chapter.update(input);
      return updateOneChapter;
    }),
  upsertOne: publicProcedure
    .input(ChapterUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneChapter = await ctx.prisma.chapter.upsert(input);
      return upsertOneChapter;
    }),

}) 
