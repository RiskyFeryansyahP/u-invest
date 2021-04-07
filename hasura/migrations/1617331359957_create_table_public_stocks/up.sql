CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."stocks"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "stock_name" text NOT NULL, "sme_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "deleted_at" timestamptz, PRIMARY KEY ("id") , FOREIGN KEY ("sme_id") REFERENCES "public"."SMEs"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_stocks_updated_at"
BEFORE UPDATE ON "public"."stocks"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_stocks_updated_at" ON "public"."stocks" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
