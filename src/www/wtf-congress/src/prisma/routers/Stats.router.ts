import { t, publicProcedure } from "./helpers/createRouter";
import { StatsAggregateSchema } from "../schemas/aggregateStats.schema";
import { StatsCreateManySchema } from "../schemas/createManyStats.schema";
import { StatsCreateOneSchema } from "../schemas/createOneStats.schema";
import { StatsDeleteManySchema } from "../schemas/deleteManyStats.schema";
import { StatsDeleteOneSchema } from "../schemas/deleteOneStats.schema";
import { StatsFindFirstSchema } from "../schemas/findFirstStats.schema";
import { StatsFindManySchema } from "../schemas/findManyStats.schema";
import { StatsFindUniqueSchema } from "../schemas/findUniqueStats.schema";
import { StatsGroupBySchema } from "../schemas/groupByStats.schema";
import { StatsUpdateManySchema } from "../schemas/updateManyStats.schema";
import { StatsUpdateOneSchema } from "../schemas/updateOneStats.schema";
import { StatsUpsertSchema } from "../schemas/upsertOneStats.schema";

export const statsRouter = t.router({
  aggregate: publicProcedure
    .input(StatsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateStats = await ctx.prisma.stats.aggregate(input);
      return aggregateStats;
    }),
  createMany: publicProcedure
    .input(StatsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyStats = await ctx.prisma.stats.createMany(input);
      return createManyStats;
    }),
  createOne: publicProcedure
    .input(StatsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneStats = await ctx.prisma.stats.create(input);
      return createOneStats;
    }),
  deleteMany: publicProcedure
    .input(StatsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyStats = await ctx.prisma.stats.deleteMany(input);
      return deleteManyStats;
    }),
  deleteOne: publicProcedure
    .input(StatsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneStats = await ctx.prisma.stats.delete(input);
      return deleteOneStats;
    }),
  findFirst: publicProcedure
    .input(StatsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstStats = await ctx.prisma.stats.findFirst(input);
      return findFirstStats;
    }),
  findFirstOrThrow: publicProcedure
    .input(StatsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstStatsOrThrow = await ctx.prisma.stats.findFirstOrThrow(input);
      return findFirstStatsOrThrow;
    }),
  findMany: publicProcedure
    .input(StatsFindManySchema).query(async ({ ctx, input }) => {
      const findManyStats = await ctx.prisma.stats.findMany(input);
      return findManyStats;
    }),
  findUnique: publicProcedure
    .input(StatsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueStats = await ctx.prisma.stats.findUnique(input);
      return findUniqueStats;
    }),
  findUniqueOrThrow: publicProcedure
    .input(StatsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueStatsOrThrow = await ctx.prisma.stats.findUniqueOrThrow(input);
      return findUniqueStatsOrThrow;
    }),
  groupBy: publicProcedure
    .input(StatsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByStats = await ctx.prisma.stats.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByStats;
    }),
  updateMany: publicProcedure
    .input(StatsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyStats = await ctx.prisma.stats.updateMany(input);
      return updateManyStats;
    }),
  updateOne: publicProcedure
    .input(StatsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneStats = await ctx.prisma.stats.update(input);
      return updateOneStats;
    }),
  upsertOne: publicProcedure
    .input(StatsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneStats = await ctx.prisma.stats.upsert(input);
      return upsertOneStats;
    }),

}) 
