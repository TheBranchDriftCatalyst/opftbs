import { t, publicProcedure } from "./helpers/createRouter";
import { StoryAggregateSchema } from "../schemas/aggregateStory.schema";
import { StoryCreateManySchema } from "../schemas/createManyStory.schema";
import { StoryCreateOneSchema } from "../schemas/createOneStory.schema";
import { StoryDeleteManySchema } from "../schemas/deleteManyStory.schema";
import { StoryDeleteOneSchema } from "../schemas/deleteOneStory.schema";
import { StoryFindFirstSchema } from "../schemas/findFirstStory.schema";
import { StoryFindManySchema } from "../schemas/findManyStory.schema";
import { StoryFindUniqueSchema } from "../schemas/findUniqueStory.schema";
import { StoryGroupBySchema } from "../schemas/groupByStory.schema";
import { StoryUpdateManySchema } from "../schemas/updateManyStory.schema";
import { StoryUpdateOneSchema } from "../schemas/updateOneStory.schema";
import { StoryUpsertSchema } from "../schemas/upsertOneStory.schema";

export const storiesRouter = t.router({
  aggregate: publicProcedure
    .input(StoryAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateStory = await ctx.prisma.story.aggregate(input);
      return aggregateStory;
    }),
  createMany: publicProcedure
    .input(StoryCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyStory = await ctx.prisma.story.createMany(input);
      return createManyStory;
    }),
  createOne: publicProcedure
    .input(StoryCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneStory = await ctx.prisma.story.create(input);
      return createOneStory;
    }),
  deleteMany: publicProcedure
    .input(StoryDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyStory = await ctx.prisma.story.deleteMany(input);
      return deleteManyStory;
    }),
  deleteOne: publicProcedure
    .input(StoryDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneStory = await ctx.prisma.story.delete(input);
      return deleteOneStory;
    }),
  findFirst: publicProcedure
    .input(StoryFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstStory = await ctx.prisma.story.findFirst(input);
      return findFirstStory;
    }),
  findFirstOrThrow: publicProcedure
    .input(StoryFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstStoryOrThrow = await ctx.prisma.story.findFirstOrThrow(input);
      return findFirstStoryOrThrow;
    }),
  findMany: publicProcedure
    .input(StoryFindManySchema).query(async ({ ctx, input }) => {
      const findManyStory = await ctx.prisma.story.findMany(input);
      return findManyStory;
    }),
  findUnique: publicProcedure
    .input(StoryFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueStory = await ctx.prisma.story.findUnique(input);
      return findUniqueStory;
    }),
  findUniqueOrThrow: publicProcedure
    .input(StoryFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueStoryOrThrow = await ctx.prisma.story.findUniqueOrThrow(input);
      return findUniqueStoryOrThrow;
    }),
  groupBy: publicProcedure
    .input(StoryGroupBySchema).query(async ({ ctx, input }) => {
      const groupByStory = await ctx.prisma.story.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByStory;
    }),
  updateMany: publicProcedure
    .input(StoryUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyStory = await ctx.prisma.story.updateMany(input);
      return updateManyStory;
    }),
  updateOne: publicProcedure
    .input(StoryUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneStory = await ctx.prisma.story.update(input);
      return updateOneStory;
    }),
  upsertOne: publicProcedure
    .input(StoryUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneStory = await ctx.prisma.story.upsert(input);
      return upsertOneStory;
    }),

}) 
