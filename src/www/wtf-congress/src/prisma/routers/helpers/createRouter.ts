import * as trpc from "@trpc/server";

import type { Context } from '../../../server/context';

export const t = trpc.initTRPC.context<Context>().create();

export const publicProcedure = t.procedure;


