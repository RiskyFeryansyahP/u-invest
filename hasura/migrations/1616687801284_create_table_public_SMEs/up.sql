CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."SMEs"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "business_field" text NOT NULL, "address" text NOT NULL, "since_year" date NOT NULL, "owner_name" text NOT NULL, "phone_number" text NOT NULL, PRIMARY KEY ("id") ); COMMENT ON TABLE "public"."SMEs" IS E'table for list SME(UMKM)';
