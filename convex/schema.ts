import {
	defineSchema,
	defineTable,
} from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	tshirts: defineTable({
		name: v.string(),
		description: v.string(),
		image: v.string(),
		price: v.number(),
		inStock: v.boolean(),
		slug: v.string(),
	}),
});
