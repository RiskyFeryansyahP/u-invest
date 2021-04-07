CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."news"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" text NOT NULL, "content" text NOT NULL, "image_title" text NOT NULL, "user_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict);
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
CREATE TRIGGER "set_public_news_updated_at"
BEFORE UPDATE ON "public"."news"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_news_updated_at" ON "public"."news" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
