BEGIN;

INSERT INTO "team"
  ("name", "description")
VALUES
  ( 'Ultimate Team', 'La meilleure team du monde'),
  ( 'La Team de l''enfer', 'Le feuuuuu'),
  ( 'Squad fofolle', 'Pour tout gagner')
;
INSERT INTO "team_pokemon"
    ("pokemon_id", "team_id")
VALUES
(3,1),
(6,1),
(9,1),
(12,1),
(15,1),
(34,1),
(6,2),
(38,2),
(59,2),
(126,2),
(136,2),
(146,2),
(151,3),
(150,3),
(149,3),
(146,3),
(145,3),
(144,3);
COMMIT;