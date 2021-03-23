alter table "public"."users"
           add constraint "users_profile_id_fkey"
           foreign key ("profile_id")
           references "public"."profile"
           ("id") on update restrict on delete cascade;
