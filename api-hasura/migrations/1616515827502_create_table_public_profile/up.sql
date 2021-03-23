CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."profile"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "phone_number" text NOT NULL, "birth_place" text NOT NULL, "birth_date" date NOT NULL, "address" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("phone_number"));
