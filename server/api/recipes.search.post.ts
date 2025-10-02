import { PrismaClient } from "~/generated/prisma";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody<{ pantry: string[] }>(event);
  const pantry = (body?.pantry ?? []).map((s) => s.toLowerCase());

  const recipes = await prisma.recipe.findMany({
    include: {
      ingredients: { include: { ingredient: true } },
    },
    take: 60,
  });

  const scored = recipes
    .map((r) => {
      const needed = r.ingredients.map((ri) =>
        ri.ingredient.name.toLowerCase()
      );
      const have = needed.filter((n) => pantry.includes(n));
      const missing = needed.filter((n) => !pantry.includes(n));
      return {
        id: r.id,
        title: r.title,
        imageUrl: r.imageUrl ?? "",
        have: have.length,
        need: needed.length,
        missing,
        timeMin: r.timeMin,
        score: needed.length ? have.length / needed.length : 0,
      };
    })
    .sort((a, b) => b.score - a.score || a.missing.length - b.missing.length);

  return { data: scored };
});
