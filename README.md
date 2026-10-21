# Prodigy A Level Psychology

AQA Psychology 7182, updated specification for A Level exams from 2027.
70 original revision lessons cover eight compulsory topics and all nine optional topics.
No school option combination is assumed. Students choose one option
from each of the three groups; until then all options remain visible and Paper 3 is not generated.

The original practice set has Papers 1 and 2 and a Paper 3 assembled from the selected
options: 96 marks, 120 minutes each. Paper 2 research methods contributes 48 marks.
Essays use indicative content and holistic self-marking levels; no automatic essay grading
or official grade boundaries are claimed. Materials are not endorsed by AQA.

Research methods includes a statistics/sign-test workbench, test selection, design planning
and a voluntary neutral-word memory demonstration. These are revision activities, not
clinical assessment or a substitute for supervised research approval.

Edit course.json, paper-bank.json and site-meta.json, then run `node scripts/build.cjs`.
Run `node --test`. A local preview is `python -m http.server 8771`.
Answers, option choices, timers, plans and research data save under course-scoped keys.
The optional Supabase account code/configuration is shared with the existing courses.
The backend must permit the `alevel-psychology` site ID for authenticated progress and
class features. Device-local revision and saving work independently of that backend.
