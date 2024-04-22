import { t, publicProcedure } from "./helpers/createRouter";
import { TagsOnStoriesAggregateSchema } from "../schemas/aggregateTagsOnStories.schema";
import { TagsOnStoriesCreateManySchema } from "../schemas/createManyTagsOnStories.schema";
import { TagsOnStoriesCreateOneSchema } from "../schemas/createOneTagsOnStories.schema";
import { TagsOnStoriesDeleteManySchema } from "../schemas/deleteManyTagsOnStories.schema";
import { TagsOnStoriesDeleteOneSchema } from "../schemas/deleteOneTagsOnStories.schema";
import { TagsOnStoriesFindFirstSchema } from "../schemas/findFirstTagsOnStories.schema";
import { TagsOnStoriesFindManySchema } from "../schemas/findManyTagsOnStories.schema";
import { TagsOnStoriesFindUniqueSchema } from "../schemas/findUniqueTagsOnStories.schema";
import { TagsOnStoriesGroupBySchema } from "../schemas/groupByTagsOnStories.schema";
import { TagsOnStoriesUpdateManySchema } from "../schemas/updateManyTagsOnStories.schema";
import { TagsOnStoriesUpdateOneSchema } from "../schemas/updateOneTagsOnStories.schema";
import { TagsOnStoriesUpsertSchema } from "../schemas/upsertOneTagsOnStories.schema";

export const tagsonstoriesRouter = t.router({
  aggregate: publicProcedure
    .input(TagsOnStoriesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTagsOnStories = await ctx.prisma.tagsOnStories.aggregate(input);
      return aggregateTagsOnStories;
    }),
  createMany: publicProcedure
    .input(TagsOnStoriesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTagsOnStories = await ctx.prisma.tagsOnStories.createMany(input);
      return createManyTagsOnStories;
    }),
  createOne: publicProcedure
    .input(TagsOnStoriesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTagsOnStories = await ctx.prisma.tagsOnStories.create(input);
      return createOneTagsOnStories;
    }),
  deleteMany: publicProcedure
    .input(TagsOnStoriesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTagsOnStories = await ctx.prisma.tagsOnStories.deleteMany(input);
      return deleteManyTagsOnStories;
    }),
  deleteOne: publicProcedure
    .input(TagsOnStoriesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTagsOnStories = await ctx.prisma.tagsOnStories.delete(input);
      return deleteOneTagsOnStories;
    }),
  findFirst: publicProcedure
    .input(TagsOnStoriesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTagsOnStories = await ctx.prisma.tagsOnStories.findFirst(input);
      return findFirstTagsOnStories;
    }),
  findFirstOrThrow: publicProcedure
    .input(TagsOnStoriesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTagsOnStoriesOrThrow = await ctx.prisma.tagsOnStories.findFirstOrThrow(input);
      return findFirstTagsOnStoriesOrThrow;
    }),
  findMany: publicProcedure
    .input(TagsOnStoriesFindManySchema).query(async ({ ctx, input }) => {
      const findManyTagsOnStories = await ctx.prisma.tagsOnStories.findMany(input);
      return findManyTagsOnStories;
    }),
  findUnique: publicProcedure
    .input(TagsOnStoriesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTagsOnStories = await ctx.prisma.tagsOnStories.findUnique(input);
      return findUniqueTagsOnStories;
    }),
  findUniqueOrThrow: publicProcedure
    .input(TagsOnStoriesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTagsOnStoriesOrThrow = await ctx.prisma.tagsOnStories.findUniqueOrThrow(input);
      return findUniqueTagsOnStoriesOrThrow;
    }),
  groupBy: publicProcedure
    .input(TagsOnStoriesGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTagsOnStories = await ctx.prisma.tagsOnStories.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTagsOnStories;
    }),
  updateMany: publicProcedure
    .input(TagsOnStoriesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTagsOnStories = await ctx.prisma.tagsOnStories.updateMany(input);
      return updateManyTagsOnStories;
    }),
  updateOne: publicProcedure
    .input(TagsOnStoriesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTagsOnStories = await ctx.prisma.tagsOnStories.update(input);
      return updateOneTagsOnStories;
    }),
  upsertOne: publicProcedure
    .input(TagsOnStoriesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTagsOnStories = await ctx.prisma.tagsOnStories.upsert(input);
      return upsertOneTagsOnStories;
    }),

}) 
