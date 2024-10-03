BEGIN;

INSERT INTO "team"
  ("name", "description")
VALUES
  ( 'Ultimate Team', 'La meilleure team du monde'),
  ( 'La Team de l''enfer', 'Le feuuuuu'),
  ( 'Squad fofolle', 'Pour tout gagner'),
  ('Les Rondoudous en Colère', 'Ils chantent pour endormir... puis attaquent en pleine sieste !'),
  ('Les Ronflex Motivés', 'Quand ils ne dorment pas, ils dévorent leurs adversaires.'),
  ('Les Pikachill', 'Des éclairs relax, mais attention, ça pique quand même !'),
  ('Les Magicarpe Royal', 'Le roi des éclaboussures, un bond légendaire (mais inutile).'),
  ('Les Farfaduvet Furieux', 'Tout doux... jusqu’à ce qu’ils se déchaînent comme une tempête de coton.'),
  ('Les Grolem qui Roulent', 'Ils ne marchent pas, ils roulent vers la victoire (ou la catastrophe).'),
  ('Les Smogo Style', ' Ils ont du swag dans leur gaz toxique !'),
  ('Les Mentali Mystérieux', 'On ne sait jamais ce leurs pensées... et c’est flippant.'),
  ('Les Salamèche Grillés', 'Toujours prêts à allumer le feu, littéralement.'),
  ('Les Noadkoko Coqués', 'Leur stratégie ? Jeter des noix de coco à la figure !')
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