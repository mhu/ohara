-- Adminer 4.8.1 PostgreSQL 16.0 (Debian 16.0-1.pgdg120+1) dump

\connect "ohara";

DROP TABLE IF EXISTS "card";
DROP SEQUENCE IF EXISTS card_id_seq;
CREATE SEQUENCE card_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."card" (
    "id" integer DEFAULT nextval('card_id_seq') NOT NULL,
    "cost" integer,
    "power" integer,
    "attribute" text,
    "counter" integer,
    "effect" text,
    "trigger_effect" text,
    "color" text NOT NULL,
    "category" text NOT NULL,
    "name" text NOT NULL,
    "life" integer,
    "number" text NOT NULL,
    "rarity" text NOT NULL,
    "type" text NOT NULL,
    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "card" ("cost", "power", "attribute", "counter", "effect", "trigger_effect", "color", "category", "name", "life", "number", "rarity", "type") VALUES
(NULL,	5000,	'Strike',	NULL,	'[Activate: Main] [Once Per Turn] Give this Leader or 1 of your Characters up to 1 rested DON!! card.',	NULL,	'Red',	'Leader',	'Monkey.D.Luffy',	5,	'ST01-001',	'L',	'Supernovas/Straw Hat Crew'),
(2,	2000,	'Ranged',	1000,	'[DON!! x2] [When Attacking] Your opponent cannot activate a [Blocker] Character that has 5000 or more power during this battle.',	'[Trigger] Play this card.',	'Red',	'Character',	'Usopp',	NULL,	'ST01-002',	'C',	'Straw Hat Crew'),
(1,	3000,	'Strike',	1000,	NULL,	NULL,	'Red',	'Character',	'Karoo',	NULL,	'ST01-003',	'C',	'Animal/Alabasta'),
(2,	4000,	'Strike',	NULL,	'[DON!! x2] This Character gains [Rush]. (This card can attack on the turn in which it is played.)',	NULL,	'Red',	'Character',	'Sanji',	NULL,	'ST01-004',	'C',	'Straw Hat Crew'),
(3,	5000,	'Strike',	NULL,	'[DON!! x1] [When Attacking] Up to 1 of your Leader or Character cards other than this card gains +1000 power during this turn.',	NULL,	'Red',	'Character',	'Jinbe',	NULL,	'ST01-005',	'C',	'Fish-Man/Straw Hat Crew'),
(1,	1000,	'Strike',	NULL,	'[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)',	NULL,	'Red',	'Character',	'Tony Tony.Chopper',	NULL,	'ST01-006',	'C',	'Animal/Straw Hat Crew'),
(1,	1000,	'Special',	1000,	'[Activate: Main] [Once Per Turn] Give up to 1 rested DON!! card to your Leader or 1 of your Characters.',	NULL,	'Red',	'Character',	'Nami',	NULL,	'ST01-007',	'C',	'Straw Hat Crew'),
(3,	5000,	'Wisdom',	1000,	NULL,	NULL,	'Red',	'Character',	'Nico Robin',	NULL,	'ST01-008',	'C',	'Straw Hat Crew'),
(2,	4000,	'Slash',	1000,	NULL,	NULL,	'Red',	'Character',	'Nefeltari Vivi',	NULL,	'ST01-009',	'C',	'Alabasta'),
(4,	6000,	'Strike',	1000,	NULL,	NULL,	'Red',	'Character',	'Franky',	NULL,	'ST01-010',	'C',	'Straw Hat Crew'),
(2,	3000,	'Slash',	2000,	'[On Play] Give up to 2 rested DON!! cards to your Leader or 1 of your Characters.',	NULL,	'Red',	'Character',	'Brook',	NULL,	'ST01-011',	'C',	'Straw Hat Crew'),
(5,	6000,	'Strike',	NULL,	'[Rush] (This card can attack on the turn in which it is played.) [DON!! x2] [When Attacking] Your opponent cannot activate [Blocker] during this battle.',	NULL,	'Red',	'Character',	'Monkey.D.Luffy',	NULL,	'ST01-012',	'SR',	'Supernovas/Straw Hat Crew'),
(3,	5000,	'Slash',	NULL,	'[DON!! x1] This Character gains +1000 power.',	NULL,	'Red',	'Character',	'Roronoa Zoro',	NULL,	'ST01-013',	'SR',	'Supernovas/Straw Hat Crew'),
(1,	NULL,	NULL,	NULL,	'[Counter] Up to 1 of your Leader or Character cards gains +3000 power during this battle.',	'[Trigger] Up to 1 of your Leader or Character cards gains +1000 power during this turn.',	'Red',	'Event',	'Guard Point',	NULL,	'ST01-014',	'C',	'Animal/Straw Hat Crew'),
(4,	NULL,	NULL,	NULL,	'[Main] K.O. up to 1 of your opponent''s Characters with 6000 power or less.',	'[Trigger] Activate this card''s [Main] effect.',	'Red',	'Event',	'Gum-Gum Jet Pistol',	NULL,	'ST01-015',	'C',	'Supernovas/Straw Hat Crew'),
(1,	NULL,	NULL,	NULL,	'[Main] Select up to 1 of your {Straw Hat Crew} type Leader or Character cards. Your opponent cannot activate [Blocker] if that Leader or Character attacks during this turn.',	'[Trigger] K.O. up to 1 of your opponent''s [Blocker] Characters with a cost of 3 or less.',	'Red',	'Event',	'Diable Jambe',	NULL,	'ST01-016',	'C',	'Straw Hat Crew'),
(2,	NULL,	NULL,	NULL,	'[Activate: Main] You may rest this Stage: Up to 1 {Straw Hat Crew} type Leader or Character card on your field gains +1000 power during this turn.',	NULL,	'Red',	'Stage',	'Thousand Sunny',	NULL,	'ST01-017',	'C',	'Straw Hat Crew');

-- 2023-10-16 16:59:53.740309+00
