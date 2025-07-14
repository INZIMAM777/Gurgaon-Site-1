import { pgTable, text, integer, serial, timestamp, boolean, decimal } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").unique().notNull(),
  password: text("password").notNull(),
  email: text("email").unique(),
  fullName: text("full_name"),
  phone: text("phone"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  price: text("price").notNull(),
  priceRange: integer("price_range"), // Price in lakhs for filtering
  location: text("location").notNull(),
  city: text("city").notNull(),
  area: text("area"),
  bedrooms: integer("bedrooms"),
  bathrooms: integer("bathrooms"),
  sqft: integer("sqft"),
  propertyType: text("property_type").notNull(),
  status: text("status").notNull(),
  possession: text("possession"),
  isRERA: boolean("is_rera").default(false),
  verified: boolean("verified").default(false),
  imageUrl: text("image_url"),
  features: text("features").array(),
  amenities: text("amenities").array(),
  specialFeatures: text("special_features").array(),
  ownerId: integer("owner_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const propertyViews = pgTable("property_views", {
  id: serial("id").primaryKey(),
  propertyId: integer("property_id").references(() => properties.id),
  userId: integer("user_id").references(() => users.id),
  viewedAt: timestamp("viewed_at").defaultNow(),
});

export const favorites = pgTable("favorites", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  propertyId: integer("property_id").references(() => properties.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  properties: many(properties),
  favorites: many(favorites),
  propertyViews: many(propertyViews),
}));

export const propertiesRelations = relations(properties, ({ one, many }) => ({
  owner: one(users, {
    fields: [properties.ownerId],
    references: [users.id],
  }),
  favorites: many(favorites),
  views: many(propertyViews),
}));

export const favoritesRelations = relations(favorites, ({ one }) => ({
  user: one(users, {
    fields: [favorites.userId],
    references: [users.id],
  }),
  property: one(properties, {
    fields: [favorites.propertyId],
    references: [properties.id],
  }),
}));

export const propertyViewsRelations = relations(propertyViews, ({ one }) => ({
  user: one(users, {
    fields: [propertyViews.userId],
    references: [users.id],
  }),
  property: one(properties, {
    fields: [propertyViews.propertyId],
    references: [properties.id],
  }),
}));

// Schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  fullName: true,
  phone: true,
});

export const insertPropertySchema = createInsertSchema(properties).pick({
  title: true,
  description: true,
  price: true,
  location: true,
  city: true,
  area: true,
  bedrooms: true,
  bathrooms: true,
  sqft: true,
  propertyType: true,
  status: true,
  possession: true,
  isRERA: true,
  verified: true,
  imageUrl: true,
  features: true,
  ownerId: true,
});

export const insertFavoriteSchema = createInsertSchema(favorites).pick({
  userId: true,
  propertyId: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof properties.$inferSelect;
export type InsertFavorite = z.infer<typeof insertFavoriteSchema>;
export type Favorite = typeof favorites.$inferSelect;
